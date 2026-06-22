// templates-logic.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { categories, templatesData } from "./templates-data.js";
import { matchTemplate } from "./search-engine.js";

// تهيئة الفايربيز
const firebaseConfig = {
    apiKey: "AIzaSyAlIHbsLSdF7I3QU0tkChUyviTWc13ctec",
    authDomain: "scrollytale.firebaseapp.com",
    projectId: "scrollytale",
    storageBucket: "scrollytale.firebasestorage.app",
    messagingSenderId: "294561535270",
    appId: "1:294561535270:web:e051f9a58b881bbc341de7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// قراءة اللغة الحالية من الرابط
const urlParams = new URLSearchParams(window.location.search);
const currentLang = urlParams.get('lang') || 'ar';
let userPlan = 'free';
let currentMonthUsage = 0;
let currentUserId = null;

const i18n = {
    ar: { placeholder: "ابحث عن قوالب باللغات العربية، الإنجليزية والفرنسية...", lock: "🔒 مقفل بالباقة", limitTitle: "تنبيه استهلاك الباقة", limitDesc: "لقد وصلت للحد الأقصى المتاح لباقتك هذا الشهر، يرجى الترقية لفتح القوالب غير المحدودة." },
    en: { placeholder: "Search templates in Arabic, English, French...", lock: "🔒 Locked", limitTitle: "Plan Limit Reached", limitDesc: "You have reached your free limits for this month. Upgrade to access unlimited templates." }
};

// ضبط واجهة الاتجاه واللغة
document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
document.getElementById('search-input').placeholder = i18n[currentLang].placeholder;

// مراقبة حالة حساب المستخدم وجلب باقته واستهلاكه من الـ Firestore
onAuthStateChanged(auth, async (user) => {
    if (user) {
        currentUserId = user.uid;
        const storageKey = `scrolly_plan_${user.uid}`;
        let savedData = JSON.parse(localStorage.getItem(storageKey));
        userPlan = savedData ? savedData.planName : 'free';

        // حساب الاستهلاك الفعلي للشهر الحالي من Firestore
        const currentMonthId = new Date().toISOString().substring(0, 7); // مثال: "2026-06"
        const usageDocRef = doc(db, "users", user.uid, "usage", currentMonthId);
        const usageSnap = await getDoc(usageDocRef);

        if (usageSnap.exists()) {
            currentMonthUsage = usageSnap.data().count || 0;
        } else {
            // تهيئة العداد إذا كان شهر جديد
            await setDoc(usageDocRef, { count: 0 });
            currentMonthUsage = 0;
        }
    } else {
        userPlan = 'free';
        currentMonthUsage = 0;
    }
    renderInterface();
});

// دالة بناء الواجهة وتصفيتها بناءً على مدخلات البحث والتمرير لأسفل
function renderInterface(searchQuery = '') {
    const container = document.getElementById('sections-container');
    container.innerHTML = '';

    Object.keys(categories).forEach(catKey => {
        const cat = categories[catKey];
        
        // تصفية قوالب هذا القسم بناء على محرك البحث
        const filteredTemplates = templatesData.filter(tmpl => 
            tmpl.category === catKey && 
            (matchTemplate(searchQuery, tmpl.title.ar) || 
             matchTemplate(searchQuery, tmpl.title.en) || 
             matchTemplate(searchQuery, tmpl.title.fr))
        );

        // إذا كان هناك نتائج في هذا القسم نقوم ببنائه
        if (filteredTemplates.length > 0) {
            const sectionHTML = `
                <section class="category-section">
                    <div class="category-banner">
                        <img src="${cat.image}" alt="${cat.title[currentLang]}">
                        <h2>${cat.title[currentLang]}</h2>
                    </div>
                    <div class="templates-grid" id="grid-${catKey}"></div>
                </section>
            `;
            container.insertAdjacentHTML('beforeend', sectionHTML);
            const grid = document.getElementById(`grid-${catKey}`);

            filteredTemplates.forEach((tmpl, index) => {
                let isLocked = false;
                
                // ميكانيزم قفل الوصول حسب الباقات والحدود البرمجية المستهلكة
                if (userPlan === 'free' && currentMonthUsage >= 2) isLocked = true;
                if (userPlan === 'starter' && index >= 5) isLocked = true; // باقة 7$ تفتح أول 5 قوالب فقط

                const cardHTML = `
                    <div class="template-card" data-id="${tmpl.id}" data-locked="${isLocked}">
                        <div class="template-thumb">
                            ${isLocked ? `<div class="lock-badge">${i18n[currentLang].lock}</div>` : ''}
                            <img src="${tmpl.img}" alt="${tmpl.title[currentLang]}">
                        </div>
                        <div class="template-info">
                            <div class="template-title">${tmpl.title[currentLang] || tmpl.title['en']}</div>
                        </div>
                    </div>
                `;
                grid.insertAdjacentHTML('beforeend', cardHTML);
            });
        }
    });

    // ربط مستمعات الضغط على الكروت للتوجيه أو الترقية
    document.querySelectorAll('.template-card').forEach(card => {
        card.addEventListener('click', async (e) => {
            const isLocked = card.getAttribute('data-locked') === 'true';
            const templateId = card.getAttribute('data-id');

            if (isLocked) {
                // إظهار مودال الترقية فوراً عند محاولة تعدي الصلاحية
                document.getElementById('modal-title').innerText = i18n[currentLang].limitTitle;
                document.getElementById('modal-desc').innerText = i18n[currentLang].limitDesc;
                const modal = document.getElementById('upgrade-modal');
                modal.style.visibility = 'visible';
                modal.style.opacity = '1';
            } else {
                // إذا كان مسموحاً وضمن الباقة الحرة أو المدفوعة، يتم تسجيل الاستهلاك وتوجيهه للمحرر
                if (currentUserId && (userPlan === 'free' || userPlan === 'starter')) {
                    const currentMonthId = new Date().toISOString().substring(0, 7);
                    const usageDocRef = doc(db, "users", currentUserId, "usage", currentMonthId);
                    await updateDoc(usageDocRef, { count: increment(1) });
                }
                window.location.href = `editor.html?template=${templateId}&lang=${currentLang}`;
            }
        });
    });
}

// مراقبة مدخلات البحث لفرز وتحديث الواجهة مباشرة ولحظياً
document.getElementById('search-input').addEventListener('input', (e) => {
    renderInterface(e.target.value);
});

// إغلاق المودال عند الضغط في أي مكان خارجي
document.getElementById('upgrade-modal').addEventListener('click', (e) => {
    if(e.target === document.getElementById('upgrade-modal')) {
        document.getElementById('upgrade-modal').style.visibility = 'hidden';
        document.getElementById('upgrade-modal').style.opacity = '0';
    }
});