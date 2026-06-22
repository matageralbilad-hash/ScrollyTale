// templates-data.js

export const categories = {
    landing_pages: { id: "landing_pages", image: "hop.jpg", title: { ar: "صفحات الهبوط", en: "Landing Pages", fr: "Pages d'atterrissage" } },
    stories: { id: "stories", image: "hap.jpg", title: { ar: "إنشاء قصص", en: "Story Creation", fr: "Création d'histoires" } },
    animation: { id: "animation", image: "hup.jpg", title: { ar: "إنشاء أنيميشن / أنمي", en: "Animation & Anime", fr: "Animation & Anime" } },
    motion_designs: { id: "motion_designs", image: "hip.jpg", title: { ar: "تصاميم احترافية متحركة", en: "Motion Designs", fr: "Desins Animés Professionnels" } }
};

// مصفوفة القوالب (سيتم عرض 40 لصفحات الهبوط كمثال كامل، والبقية مهيكلة لتصل إلى 200)
export const templatesData = [
    // --- أولاً: قسم صفحات الهبوط (40 قالب كاملة) ---
    { id: "lp_1", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp1.jpg", title: { ar: "صفحة هبوط لشركة برمجيات", en: "Software Company Landing Page", fr: "Page d'accueil pour entreprise de logiciels" } },
    { id: "lp_2", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp2.jpg", title: { ar: "صفحة هبوط لتطبيق جوال", en: "Mobile App Landing Page", fr: "Page d'accueil pour application mobile" } },
    { id: "lp_3", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp3.jpg", title: { ar: "صفحة هبوط لمتجر إلكتروني", en: "E-commerce Store Landing Page", fr: "Page d'accueil pour boutique en ligne" } },
    { id: "lp_4", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp4.jpg", title: { ar: "صفحة هبوط لمطعم", en: "Restaurant Landing Page", fr: "Page d'accueil pour restaurant" } },
    { id: "lp_5", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp5.jpg", title: { ar: "صفحة هبوط لمقهى", en: "Cafe Landing Page", fr: "Page d'accueil pour café" } },
    { id: "lp_6", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp6.jpg", title: { ar: "صفحة هبوط لشركة عقارات", en: "Real Estate Landing Page", fr: "Page d'accueil pour immobilier" } },
    { id: "lp_7", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp7.jpg", title: { ar: "صفحة هبوط لعيادة طبية", en: "Medical Clinic Landing Page", fr: "Page d'accueil pour clinique médicale" } },
    { id: "lp_8", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp8.jpg", title: { ar: "صفحة هبوط لطبيب أسنان", en: "Dental Clinic Landing Page", fr: "Page d'accueil pour dentiste" } },
    { id: "lp_9", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp9.jpg", title: { ar: "صفحة هبوط لصالة رياضية", en: "Gym & Fitness Landing Page", fr: "Page d'accueil pour salle de sport" } },
    { id: "lp_10", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp10.jpg", title: { ar: "صفحة هبوط لمركز تعليمي", en: "Educational Center Landing Page", fr: "Page d'accueil pour centre éducatif" } },
    { id: "lp_11", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp11.jpg", title: { ar: "صفحة هبوط لدورة تدريبية", en: "Training Course Landing Page", fr: "Page d'accueil pour cours de formation" } },
    { id: "lp_12", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp12.jpg", title: { ar: "صفحة هبوط لمدرب شخصي", en: "Personal Trainer Landing Page", fr: "Page d'accueil pour entraîneur personnel" } },
    { id: "lp_13", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp13.jpg", title: { ar: "صفحة هبوط لمصمم جرافيك", en: "Graphic Designer Landing Page", fr: "Page d'accueil pour graphiste" } },
    { id: "lp_14", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp14.jpg", title: { ar: "صفحة هبوط لمطور مواقع", en: "Web Developer Landing Page", fr: "Page d'accueil pour développeur web" } },
    { id: "lp_15", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp15.jpg", title: { ar: "صفحة هبوط لمصور فوتوغرافي", en: "Photographer Landing Page", fr: "Page d'accueil pour photographe" } },
    { id: "lp_16", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp16.jpg", title: { ar: "صفحة هبوط لوكالة تسويق رقمي", en: "Digital Marketing Agency Landing Page", fr: "Page d'accueil pour agence marketing" } },
    { id: "lp_17", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp17.jpg", title: { ar: "صفحة هبوط لخدمة تنظيف المنازل", en: "Home Cleaning Service Landing Page", fr: "Page d'accueil pour nettoyage" } },
    { id: "lp_18", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp18.jpg", title: { ar: "صفحة هبوط لخدمة التوصيل", en: "Delivery Service Landing Page", fr: "Page d'accueil pour service de livraison" } },
    { id: "lp_19", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp19.jpg", title: { ar: "صفحة هبوط لشركة نقل وشحن", en: "Shipping & Logistics Landing Page", fr: "Page d'accueil pour transport" } },
    { id: "lp_20", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp20.jpg", title: { ar: "صفحة هبوط لفندق", en: "Hotel Landing Page", fr: "Page d'accueil pour hôtel" } },
    { id: "lp_21", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp21.jpg", title: { ar: "صفحة هبوط لشقة فندقية", en: "Hotel Apartment Landing Page", fr: "Page d'accueil pour appartement" } },
    { id: "lp_22", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp22.jpg", title: { ar: "صفحة هبوط لوكالة سفر وسياحة", en: "Travel Agency Landing Page", fr: "Page d'accueil pour agence de voyage" } },
    { id: "lp_23", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp23.jpg", title: { ar: "صفحة هبوط لفعالية أو مؤتمر", en: "Event or Conference Landing Page", fr: "Page d'accueil pour événement" } },
    { id: "lp_24", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp24.jpg", title: { ar: "صفحة هبوط لحفل زفاف", en: "Wedding Landing Page", fr: "Page d'accueil pour mariage" } },
    { id: "lp_25", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp25.jpg", title: { ar: "صفحة هبوط لجمع التبرعات", en: "Fundraising Landing Page", fr: "Page d'accueil pour collecte de fonds" } },
    { id: "lp_26", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp26.jpg", title: { ar: "صفحة هبوط لمنظمة غير ربحية", en: "Nonprofit Organization Landing Page", fr: "Page d'accueil pour ONG" } },
    { id: "lp_27", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp27.jpg", title: { ar: "صفحة هبوط لمنتج رقمي", en: "Digital Product Landing Page", fr: "Page d'accueil pour produit numérique" } },
    { id: "lp_28", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp28.jpg", title: { ar: "صفحة هبوط لكتاب إلكتروني", en: "Ebook Landing Page", fr: "Page d'accueil pour Ebook" } },
    { id: "lp_29", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp29.jpg", title: { ar: "صفحة هبوط لاشتراك بريدي", en: "Newsletter Subscription Landing Page", fr: "Page d'accueil pour newsletter" } },
    { id: "lp_30", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp30.jpg", title: { ar: "صفحة هبوط لإطلاق منتج جديد", en: "Product Launch Landing Page", fr: "Page d'accueil pour lancement" } },
    { id: "lp_31", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp31.jpg", title: { ar: "صفحة هبوط لخدمة استضافة مواقع", en: "Web Hosting Landing Page", fr: "Page d'accueil pour hébergement" } },
    { id: "lp_32", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp32.jpg", title: { ar: "صفحة هبوط لشركة أمن وحماية", en: "Security Company Landing Page", fr: "Page d'accueil pour sécurité" } },
    { id: "lp_33", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp33.jpg", title: { ar: "صفحة هبوط لخدمة صيانة المنازل", en: "Home Maintenance Landing Page", fr: "Page d'accueil pour maintenance" } },
    { id: "lp_34", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp34.jpg", title: { ar: "صفحة هبوط لمغسلة سيارات", en: "Car Wash Landing Page", fr: "Page d'accueil pour lavage auto" } },
    { id: "lp_35", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp35.jpg", title: { ar: "صفحة هبوط لشركة تأمين", en: "Insurance Company Landing Page", fr: "Page d'accueil pour assurance" } },
    { id: "lp_36", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp36.jpg", title: { ar: "صفحة هبوط لمحامي أو مكتب محاماة", en: "Lawyer Landing Page", fr: "Page d'accueil pour avocat" } },
    { id: "lp_37", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp37.jpg", title: { ar: "صفحة هبوط لمكتب محاسبة", en: "Accounting Office Landing Page", fr: "Page d'accueil pour comptabilité" } },
    { id: "lp_38", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp38.jpg", title: { ar: "صفحة هبوط لخدمة الذكاء الاصطناعي", en: "AI Service Landing Page", fr: "Page d'accueil pour service IA" } },
    { id: "lp_39", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp39.jpg", title: { ar: "صفحة هبوط لمنصة SaaS", en: "SaaS Platform Landing Page", fr: "Page d'accueil pour plateforme SaaS" } },
    { id: "lp_40", category: "landing_pages", img: "https://ik.imagekit.io/your_id/lp40.jpg", title: { ar: "صفحة هبوط لطلب عرض سعر", en: "Request a Quote Landing Page", fr: "Page d'accueil pour devis" } },

    // --- ثانياً: قسم إنشاء القصص (30 قالب) ---
    { id: "st_1", category: "stories", img: "https://ik.imagekit.io/your_id/st1.jpg", title: { ar: "قصة رعب سينمائية", en: "Cinematic Horror Story", fr: "Histoire d'horreur" } },
    // يمكنك تكرار الكائنات هنا حتى تصل لـ 30 قالب بنفس البنية...

    // --- ثالثاً: قسم الأنيميشن (50 قالب) ---
    { id: "an_1", category: "animation", img: "https://ik.imagekit.io/your_id/an1.jpg", title: { ar: "تحريك شخصية أنمي ياباني", en: "Anime Character Motion", fr: "Animation de personnage Anime" } },
    // يمكنك تكرار الكائنات هنا حتى تصل لـ 50 قالب بنفس البنية...

    // --- رابعاً: قسم التصاميم المتحركة (70 قالب) ---
    { id: "md_1", category: "motion_designs", img: "https://ik.imagekit.io/your_id/md1.jpg", title: { ar: "شعار نيون متحرك احترافي", en: "Professional Neon Animated Logo", fr: "Logo Animé Néon" } },
    // يمكنك تكرار الكائنات هنا حتى تصل لـ 70 قالب بنفس البنية...
];