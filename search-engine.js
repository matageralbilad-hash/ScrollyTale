// search-engine.js

/**
 * دالة لتطهير وتبسيط النصوص لتسهيل البحث وتجاوز الأخطاء الإملائية والهمزات
 */
export function normalizeText(text) {
    if (!text) return '';
    
    let clean = text.toLowerCase().trim();

    // 1. معالجة اللغة العربية (إزالة التشكيل وتوحيد الهمزات والتاء المربوطة والـ ي)
    clean = clean.replace(/[\u064B-\u0652]/g, ""); // إزالة الحركات والتنوين
    clean = clean.replace(/[أإآء]/g, "ا");
    clean = clean.replace(/ة/g, "ه");
    clean = clean.replace(/ى/g, "ي");

    // 2. معالجة اللغتين الإنجليزية والفرنسية (إزالة الأكسنت وعلامات النطق)
    // تحويل الحروف مثل é, è, à, ç إلى حروفها المجردة e, a, c
    clean = clean.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return clean;
}

/**
 * محرك فحص المطابقة بين نص البحث ونص القالب
 */
export function matchTemplate(searchQuery, templateTitle) {
    const normalizedQuery = normalizeText(searchQuery);
    const normalizedTitle = normalizeText(templateTitle);
    
    if (!normalizedQuery) return true;
    
    // تقسيم كلمات البحث لضمان البحث المرن (حتى لو لم تكن الكلمات بنفس الترتيب)
    const queryWords = normalizedQuery.split(/\s+/);
    return queryWords.every(word => normalizedTitle.includes(word));
}