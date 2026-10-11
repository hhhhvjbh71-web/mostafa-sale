/**
 * ============================================================================
 * متجر ملاك (MALAK STORE) - المنطق البرمجي الكامل باللغة العربية
 * جافاسكريبت أصلي (Vanilla JavaScript - بدون مكاتب أو أطر خارجية)
 * ============================================================================
 */

// ============================================================================
// 1. كتالوج وبيانات أجهزة اللابتوب الاحترافية
// ============================================================================
const LAPTOP_PRODUCTS = [
  {
    id: "macbook-pro-16",
    name: "آبل ماك بوك برو 16\" (Apple MacBook Pro 16 M3 Max)",
    brand: "Apple",
    category: "creator",
    price: 3199,
    originalPrice: 3499,
    image: "macbook-pro-16.svg",
    rating: 4.9,
    reviews: 142,
    badge: "الأكثر طلباً",
    badgeType: "badge-hot",
    specs: {
      cpu: "معالج Apple M3 Max خارق (16 نواة للمُعالج، 40 نواة رسومية)",
      ram: "36 جيجابايت ذاكرة موحدة فائقة السرعة Unified Memory",
      storage: "1 تيرابايت SSD فائق السرعة فئة NVMe",
      gpu: "محرك عصبي ومعالج رسومات Apple Metal بـ 40 نواة",
      display: "16.2 بوصة Liquid Retina XDR بدقة (3456x2234) وتردد 120Hz ProMotion بسطوع 1600 شمعة",
      battery: "بطارية 100 واط/ساعة تدوم حتى 22 ساعة استخدام متواصل",
      weight: "2.16 كجم - ألومنيوم أسود فضائي Space Black",
      os: "نظام macOS Sequoia الأصلي",
      ports: "3 منافذ Thunderbolt 4 / USB4، منفذ HDMI 2.1، قارئ SDXC، شاحن MagSafe 3",
      warranty: "ضمان رسمي معتمد سنتين من آبل ومتجر ملاك"
    },
    description: "وحش الإبداع والتصميم الهندسي ومونتاج الفيديو بدقة 8K وتطوير نماذج الذكاء الاصطناعي مع أطول عمر بطارية في فئته عالمياً."
  },
  {
    id: "dell-xps-16",
    name: "ديل إكس بي إس 16 (Dell XPS 16 9640 - 4K OLED)",
    brand: "Dell",
    category: "ultrabook",
    price: 2699,
    originalPrice: 2999,
    image: "dell-xps-16.svg",
    rating: 4.8,
    reviews: 98,
    badge: "عرض خاص",
    badgeType: "badge-deal",
    specs: {
      cpu: "معالج Intel Core Ultra 9 185H (16 نواة، 22 خيط، سرعة تصل لـ 5.1 جيجاهرتز)",
      ram: "32 جيجابايت LPDDR5x بسرعة 7467 ميجاهرتز",
      storage: "1 تيرابايت PCIe Gen4 M.2 SSD",
      gpu: "بطاقة NVIDIA GeForce RTX 4070 بسعة 8 جيجابايت GDDR6",
      display: "16.3 بوصة 4K+ (3840x2400) OLED تعمل باللمس وتغطية 100% DCI-P3 بتردد 90Hz",
      battery: "99.5 واط/ساعة مع دعم الشحن السريع ExpressCharge",
      weight: "2.13 كجم - ألومنيوم بلاتينيوم مصقول وزجاج Gorilla Glass 3",
      os: "ويندوز 11 برو الأصلي (Windows 11 Pro)",
      ports: "3 منافذ Thunderbolt 4 تدعم الشاشة والشحن السريع، وقارئ كروت microSD",
      warranty: "ضمان ديل برو سبورت لمدة سنتين مع صيانة في الموقع"
    },
    description: "تصميم أيقوني فخم يجمع بين الأناقة المطلقة وقوة المعالجة مع لوحة لمس زجاجية غير مرئية وشاشة 4K OLED مبهرة للألوان."
  },
  {
    id: "asus-rog-strix-18",
    name: "آسوس روج ستريكس سكار 18 (ASUS ROG Strix SCAR 18)",
    brand: "ASUS",
    category: "gaming",
    price: 3899,
    originalPrice: 4299,
    image: "asus-rog-strix-18.svg",
    rating: 5.0,
    reviews: 215,
    badge: "وحش الألعاب",
    badgeType: "badge-hot",
    specs: {
      cpu: "معالج Intel Core i9-14900HX (24 نواة، 32 خيط معالجة، حتى 5.8 جيجاهرتز)",
      ram: "64 جيجابايت DDR5 5600MHz ثنائي القناة Dual-Channel",
      storage: "2 تيرابايت PCIe 4.0 NVMe SSD بنظام RAID 0 الخارق",
      gpu: "بطاقة NVIDIA GeForce RTX 4090 بسعة 16 جيجابايت GDDR6 بقوة 175W كاملة",
      display: "18 بوصة ROG Nebula HDR Mini-LED بدقة (2560x1600) وتردد 240Hz وزمن استجابة 3ms",
      battery: "بطارية 90 واط/ساعة مع شاحن بقوة 330 واط",
      weight: "3.10 كجم - نظام تبريد بالمعادن السائلة Conductonaut Extreme",
      os: "ويندوز 11 هوم (Windows 11 Home)",
      ports: "منفذ Thunderbolt 4، منفذ USB-C 3.2 Gen 2، منفذان USB-A، HDMI 2.1، شبكة 2.5G LAN",
      warranty: "ضمان آسوس روج الدولي الشامل لمدة عامين"
    },
    description: "أقوى لابتوب ألعاب في العالم بلا منازع. مصمم لتشغيل أثقل الألعاب على أعلى دقة 4K وUltra Settings بأعلى معدل إطارات ممكن."
  },
  {
    id: "lenovo-legion-pro-7i",
    name: "لينوفو ليجن برو 7i الجيل التاسع (Lenovo Legion Pro 7i Gen 9)",
    brand: "Lenovo",
    category: "gaming",
    price: 2499,
    originalPrice: 2799,
    image: "lenovo-legion-pro-7i.svg",
    rating: 4.8,
    reviews: 112,
    badge: "الأكثر مبيعاً",
    badgeType: "badge-deal",
    specs: {
      cpu: "معالج Intel Core i9-14900HX (24 نواة، تردد حتى 5.8 جيجاهرتز)",
      ram: "32 جيجابايت DDR5 بسرعة 5600 ميجاهرتز",
      storage: "1 تيرابايت PCIe Gen4 SSD فائق السرعة",
      gpu: "بطاقة NVIDIA GeForce RTX 4080 بسعة 12 جيجابايت GDDR6 (قوة 175W TGP)",
      display: "16 بوصة WQXGA (2560x1600) IPS بتردد 240Hz وسطوع 500 شمعة",
      battery: "بطارية 99.9 واط/ساعة مع ميزة الشحن فائق السرعة Super Rapid Charge",
      weight: "2.6 كجم - هيكل متين من سبائك الألمنيوم والمغنيسيوم",
      os: "ويندوز 11 برو (Windows 11 Pro)",
      ports: "منفذ Thunderbolt 4، منفذ USB-C، 4 منافذ USB-A، منفذ HDMI 2.1، منفذ شبكة",
      warranty: "ضمان لينوفو ليجن ألتيميت سابورت لمدة عامين"
    },
    description: "مدعوم بشريحة الذكاء الاصطناعي Lenovo LA-2Q AI لضبط معدل الإطارات آلياً وتبريد غرفة البخار ColdFront 5.0 الهادئ والفعال."
  },
  {
    id: "hp-spectre-x360",
    name: "إتش بي سبيكتر 16 المتحول (HP Spectre x360 16 2-in-1 OLED)",
    brand: "HP",
    category: "ultrabook",
    price: 1899,
    originalPrice: 2199,
    image: "hp-spectre-x360.svg",
    rating: 4.7,
    reviews: 84,
    badge: "2 في 1 لمس",
    badgeType: "badge-new",
    specs: {
      cpu: "معالج Intel Core Ultra 7 155H مع وحدة معالجة الذكاء الاصطناعي NPU Boost",
      ram: "32 جيجابايت LPDDR5x بسرعة 6400 ميجاهرتز",
      storage: "1 تيرابايت PCIe Gen4 NVMe TLC M.2 SSD",
      gpu: "معالج رسوميات Intel Arc Graphics المدمج المدعوم بالذكاء الاصطناعي",
      display: "16 بوصة 2.8K (2880x1800) OLED تدعم اللمس بتردد متغير 120Hz وقلم رقمي",
      battery: "83 واط/ساعة تدوم لأكثر من 15.5 ساعة عمل متواصلة",
      weight: "1.95 كجم - مفصلة دوران 360 درجة",
      os: "ويندوز 11 هوم (Windows 11 Home)",
      ports: "منفذان Thunderbolt 4، منفذ USB-A، منفذ HDMI 2.1، مدخل صوتي",
      warranty: "ضمان إتش بي بريمير كير المعتمد سنتين"
    },
    description: "لابتوب فخم ومرن يدور 360 درجة ليتحول لجهاز لوحي مع قلم ذكي مرفق، ممتاز للرسم الرقمي، كتابة الملاحظات، والعروض التنفيذية."
  },
  {
    id: "razer-blade-16",
    name: "ريزر بليد 16 الفائق (Razer Blade 16 Dual Mini-LED)",
    brand: "Razer",
    category: "gaming",
    price: 3599,
    originalPrice: 3899,
    image: "razer-blade-16.svg",
    rating: 4.9,
    reviews: 95,
    badge: "أداء نخبوي",
    badgeType: "badge-hot",
    specs: {
      cpu: "معالج Intel Core i9-14900HX (24 نواة، حتى 5.8 جيجاهرتز)",
      ram: "32 جيجابايت DDR5 5600MHz (قابلة للترقية حتى 96 جيجابايت)",
      storage: "1 تيرابايت PCIe Gen4 NVMe SSD (يحتوي منفذ M.2 إضافي شاغر)",
      gpu: "بطاقة NVIDIA GeForce RTX 4080 بسعة 12 جيجابايت GDDR6 (قوة 175W)",
      display: "16 بوصة Dual-Mode Mini-LED (تتحول بضغطة زر بين 4K 120Hz أو FHD+ 240Hz)",
      battery: "95.2 واط/ساعة مع شاحن GaN متطور بقوة 330 واط",
      weight: "2.45 كجم - ألومنيوم نقي مصقول بالليزر CNC",
      os: "ويندوز 11 هوم (Windows 11 Home)",
      ports: "Thunderbolt 4، 3 منافذ USB 3.2 Gen 2، قارئ كروت SD فائق السرعة، HDMI 2.1",
      warranty: "ضمان ريزر الرسمي المباشر لمدة سنتين"
    },
    description: "أول شاشة في العالم بتقنية الوضع المزدوج (Dual-Mode) تتيح التبديل الفوري بين دقة 4K الفائقة لصناع المحتوى أو 240Hz لمحترفي ألعاب التصويب."
  },
  {
    id: "apple-macbook-air-15",
    name: "آبل ماك بوك إير 15\" بشريحة M3 (Apple MacBook Air 15 M3)",
    brand: "Apple",
    category: "ultrabook",
    price: 1499,
    originalPrice: 1699,
    image: "apple-macbook-air-15.svg",
    rating: 4.9,
    reviews: 230,
    badge: "خفيف ونحيف",
    badgeType: "badge-deal",
    specs: {
      cpu: "شريحة Apple M3 (8 أنوية معالجة، 10 أنوية رسومات)",
      ram: "16 جيجابايت ذاكرة موحدة فائقة السرعة",
      storage: "512 جيجابايت SSD عالي السرعة",
      gpu: "10 أنوية رسومية مع تسريع تتبع الأشعة بالعتاد Hardware Ray Tracing",
      display: "15.3 بوصة Liquid Retina بدقة (2880x1864) وسطوع 500 شمعة وتقنية True Tone",
      battery: "66.5 واط/ساعة، بطارية تدوم حتى 18 ساعة عمل كاملة",
      weight: "1.51 كجم فقط - سمك فائق النحافة 11.5 ملم فقط وبدون مراوح صوتية",
      os: "نظام macOS Sequoia الأصلي",
      ports: "منفذان Thunderbolt / USB4، منفذ شحن MagSafe 3، مدخل سماعة 3.5 ملم",
      warranty: "ضمان رسمي معتمد سنتين من آبل"
    },
    description: "أنحف لابتوب مقاس 15 بوصة في العالم مع تصميم صامت تماماً بدون أي مراوح تبريد وبطارية تدوم طوال اليوم الدراسي أو العملي بدون شاحن."
  },
  {
    id: "msi-stealth-16",
    name: "إم إس آي ستيلث 16 للذكاء الاصطناعي (MSI Stealth 16 AI Studio)",
    brand: "MSI",
    category: "creator",
    price: 2599,
    originalPrice: 2899,
    image: "msi-stealth-16.svg",
    rating: 4.7,
    reviews: 67,
    badge: "ذكاء اصطناعي",
    badgeType: "badge-new",
    specs: {
      cpu: "معالج Intel Core Ultra 9 185H (16 نواة مع محرك الذكاء الاصطناعي Intel AI Boost)",
      ram: "32 جيجابايت DDR5 5600MHz",
      storage: "1 تيرابايت PCIe Gen4 NVMe SSD",
      gpu: "بطاقة NVIDIA GeForce RTX 4070 بسعة 8 جيجابايت مع شهادة NVIDIA Studio المعتمدة",
      display: "16 بوصة UHD+ بدقة (3840x2400) بتردد 120Hz Mini-LED وتغطية 100% DCI-P3",
      battery: "99.9 واط/ساعة (الحد الأقصى المسموح به دولياً على الطائرات)",
      weight: "1.99 كجم - سبيكة المغنيسيوم والألمنيوم النادرة بلون Star Blue",
      os: "ويندوز 11 برو (Windows 11 Pro)",
      ports: "Thunderbolt 4، USB-C يدعم PD، منافذ USB-A، HDMI 2.1، قارئ كروت",
      warranty: "ضمان إم إس آي الدولي الشامل لمدة عامين"
    },
    description: "مخصص للمصممين والمهندسين الذين يحتاجون قوة حوسبة رسومية جبارة في هيكل وزنه أقل من 2 كجم وبطارية تدوم لساعات طويلة أثناء السفر."
  },
  {
    id: "asus-zenbook-duo",
    name: "آسوس زن بوك دو بشاشتين (ASUS Zenbook Duo 2024 Dual 3K OLED)",
    brand: "ASUS",
    category: "business",
    price: 1999,
    originalPrice: 2299,
    image: "asus-zenbook-duo.svg",
    rating: 4.8,
    reviews: 58,
    badge: "ابتكار ثوري",
    badgeType: "badge-hot",
    specs: {
      cpu: "معالج Intel Core Ultra 9 185H فائق السرعة",
      ram: "32 جيجابايت LPDDR5x بسرعة 7467 ميجاهرتز",
      storage: "2 تيرابايت PCIe 4.0 NVMe M.2 SSD",
      gpu: "معالج رسوميات Intel Arc Graphics المدمج",
      display: "شاشتان كاملتان مقاس 14 بوصة بدقة 3K (2880x1800) OLED بتردد 120Hz لمس",
      battery: "75 واط/ساعة تدوم حتى 13.5 ساعة",
      weight: "1.65 كجم - مع لوحة مفاتيح بلوتوث مغناطيسية قابلة للفصل",
      os: "ويندوز 11 برو (Windows 11 Pro)",
      ports: "منفذان Thunderbolt 4، منفذ USB 3.2 Gen 1، منفذ HDMI 2.1، مدخل صوت",
      warranty: "ضمان آسوس الدولي المعتمد لمدة عامين"
    },
    description: "شاشتان كاملتان بدقة 3K OLED مدمجتان في لابتوب واحد مع لوحة مفاتيح لاسلكية منفصلة تمنحك ما يقارب 20 بوصة من مساحة العمل والإنتاجية."
  },
  {
    id: "lenovo-thinkpad-x1",
    name: "لينوفو ثينك باد إكس 1 كاربون (Lenovo ThinkPad X1 Carbon Gen 12)",
    brand: "Lenovo",
    category: "business",
    price: 2199,
    originalPrice: 2499,
    image: "lenovo-thinkpad-x1.svg",
    rating: 4.9,
    reviews: 130,
    badge: "رجال الأعمال",
    badgeType: "badge-deal",
    specs: {
      cpu: "معالج Intel Core Ultra 7 165U مع تقنية vPro المؤسسية لأمان الشبكات",
      ram: "32 جيجابايت LPDDR5x 6400MHz",
      storage: "1 تيرابايت PCIe Gen4 عالية الأداء والموثوقية",
      gpu: "معالج رسومات Intel Graphics مع حماية مدمجة",
      display: "14 بوصة 2.8K (2880x1800) OLED مضادة للتوهج بتردد 120Hz وسطوع 400 شمعة",
      battery: "57 واط/ساعة مع شحن سريع 80% في 60 دقيقة فقط",
      weight: "1.09 كجم فقط - ألياف الكربون الفضائية فائقة الخفة والمتانة العسكرية",
      os: "ويندوز 11 برو 64 بت (Windows 11 Pro)",
      ports: "منفذان Thunderbolt 4، منفذان USB-A، منفذ HDMI 2.1، قارئ بصمة",
      warranty: "ضمان لينوفو بريمير المعتمد سنتين"
    },
    description: "المعيار الذهبي للابتوبات الشركات والمحترفين والمبرمجين. خفة مذهلة 1 كجم مع أعلى معايير الحماية العسكرية وأفضل لوحة مفاتيح في العالم."
  },
  {
    id: "alienware-m16-r2",
    name: "إلين وير إم 16 آر 2 (Alienware m16 R2 Gaming)",
    brand: "Alienware",
    category: "gaming",
    price: 2299,
    originalPrice: 2599,
    image: "alienware-m16-r2.svg",
    rating: 4.7,
    reviews: 79,
    badge: "وضع التخفي",
    badgeType: "badge-new",
    specs: {
      cpu: "معالج Intel Core Ultra 7 155H (16 نواة، 22 خيط معالجة)",
      ram: "32 جيجابايت DDR5 5600MHz ثنائي القناة",
      storage: "1 تيرابايت PCIe M.2 NVMe SSD",
      gpu: "بطاقة NVIDIA GeForce RTX 4070 بسعة 8 جيجابايت (بقوة 140W Max TGP)",
      display: "16 بوصة QHD+ بدقة (2560x1600) بتردد 240Hz وزمن 3ms مع تقنية G-SYNC",
      battery: "90 واط/ساعة ليثيوم أيون مع ExpressCharge",
      weight: "2.61 كجم - لون قمر الظلام الميتالك Dark Metallic Moon",
      os: "ويندوز 11 هوم (Windows 11 Home)",
      ports: "Thunderbolt 4، منفذان USB 3.2 Gen 1، منفذ HDMI 2.1، منفذ شبكة RJ-45",
      warranty: "ضمان إلين وير بريميوم سبورت سنتين"
    },
    description: "تصميم تبريد Cryo-Tech متطور مع زر التخفي الفوري (Stealth Mode) الذي يحول صوت الجهاز للهدوء التام ويطفئ إضاءة RGB لاستخدامه في العمل أو الجامعة."
  },
  {
    id: "acer-predator-helios-16",
    name: "إيسر بريداتور هيليوس 16 (Acer Predator Helios 16 Neo)",
    brand: "Acer",
    category: "gaming",
    price: 1799,
    originalPrice: 2099,
    image: "acer-predator-helios-16.svg",
    rating: 4.6,
    reviews: 92,
    badge: "قيمة ممتازة",
    badgeType: "badge-deal",
    specs: {
      cpu: "معالج Intel Core i9-14900HX (24 نواة، حتى 5.8 جيجاهرتز)",
      ram: "32 جيجابايت DDR5 بسرعة 5600 ميجاهرتز",
      storage: "1 تيرابايت PCIe NVMe SSD",
      gpu: "بطاقة NVIDIA GeForce RTX 4070 بسعة 8 جيجابايت GDDR6",
      display: "16 بوصة WQXGA بدقة (2560x1600) وتردد 240Hz IPS وسطوع 500 شمعة",
      battery: "90 واط/ساعة مع محول طاقة أصلي بقوة 330 واط",
      weight: "2.60 كجم - مراوح AeroBlade 3D المعدنية والجيل الخامس",
      os: "ويندوز 11 هوم (Windows 11 Home)",
      ports: "منفذان Thunderbolt 4، 3 منافذ USB 3.2 Gen 2، HDMI 2.1، قارئ كروت",
      warranty: "ضمان إيسر بريداتور كير سنتين"
    },
    description: "معدل إطارات ألعاب فائق وسعر منافس جداً، مزود بتقنية تبريد بالمعادن السائلة وإضاءة نيون خلفية قابلة للتخصيص."
  }
];

// ============================================================================
// 2. إدارة الحالة والتخزين المحلي (LocalStorage)
// ============================================================================
class StateManager {
  static getCart() {
    try {
      const stored = localStorage.getItem("malak_cart");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("خطأ في قراءة السلة من التخزين المحلي", e);
      return [];
    }
  }

  static saveCart(cart) {
    try {
      localStorage.setItem("malak_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("خطأ في حفظ السلة في التخزين المحلي", e);
    }
  }

  static getWishlist() {
    try {
      const stored = localStorage.getItem("malak_wishlist");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  static saveWishlist(list) {
    try {
      localStorage.setItem("malak_wishlist", JSON.stringify(list));
    } catch (e) {}
  }

  static getCoupon() {
    try {
      return localStorage.getItem("malak_coupon") || null;
    } catch (e) {
      return null;
    }
  }

  static saveCoupon(code) {
    if (code) {
      localStorage.setItem("malak_coupon", code);
    } else {
      localStorage.removeItem("malak_coupon");
    }
  }
}

// ============================================================================
// 3. محرك إشعارات التنبيه السريعة (Toast Engine)
// ============================================================================
function showToast(message, type = "info", icon = "fa-circle-info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  if (type === "success") icon = "fa-circle-check";
  if (type === "danger") icon = "fa-circle-exclamation";
  if (type === "warning") icon = "fa-triangle-exclamation";

  toast.innerHTML = `
    <i class="fa-solid ${icon} toast-icon"></i>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  // إخفاء وحذف التنبيه بعد 3.2 ثانية
  setTimeout(() => {
    toast.classList.add("toast-exit");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3200);
}

// ============================================================================
// 4. نظام الفلترة والبحث المباشر
// ============================================================================
class FilterController {
  constructor() {
    this.currentCategory = "all";
    this.currentBrand = "all";
    this.maxPrice = 4500;
    this.sortOption = "featured";
    this.searchQuery = "";
    this.viewMode = "grid";

    this.initListeners();
    this.render();
  }

  initListeners() {
    // تبويبات الفئات
    const categoryPills = document.querySelectorAll(".cat-pill");
    categoryPills.forEach(pill => {
      pill.addEventListener("click", () => {
        categoryPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.currentCategory = pill.dataset.category;
        this.render();
      });
    });

    // أزرار الماركات
    const brandButtons = document.querySelectorAll(".brand-btn");
    brandButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        brandButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentBrand = btn.dataset.brand;
        this.render();
      });
    });

    // شريط نطاق السعر
    const priceSlider = document.getElementById("priceRangeInput");
    const priceDisplay = document.getElementById("priceDisplay");
    if (priceSlider && priceDisplay) {
      priceSlider.addEventListener("input", (e) => {
        this.maxPrice = Number(e.target.value);
        priceDisplay.textContent = `${this.maxPrice.toLocaleString()}$`;
        this.render();
      });
    }

    // القائمة المنسدلة للترتيب
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.sortOption = e.target.value;
        this.render();
      });
    }

    // زر إعادة تعيين الفلاتر
    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => this.resetFilters());
    }

    // البحث المباشر في الهيدر
    const globalSearch = document.getElementById("globalSearchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    const autoBox = document.getElementById("searchAutocompleteBox");

    if (globalSearch) {
      globalSearch.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        if (clearSearchBtn) {
          clearSearchBtn.style.display = this.searchQuery.length > 0 ? "block" : "none";
        }
        this.handleAutocomplete(this.searchQuery, autoBox);
        this.render();
      });

      document.addEventListener("click", (e) => {
        if (!globalSearch.contains(e.target) && autoBox && !autoBox.contains(e.target)) {
          autoBox.classList.remove("active");
        }
      });
    }

    if (clearSearchBtn && globalSearch) {
      clearSearchBtn.addEventListener("click", () => {
        globalSearch.value = "";
        this.searchQuery = "";
        clearSearchBtn.style.display = "none";
        if (autoBox) autoBox.classList.remove("active");
        this.render();
      });
    }

    // زر تبديل العرض (شبكي / قائمة)
    const gridBtn = document.getElementById("gridViewBtn");
    const listBtn = document.getElementById("listViewBtn");
    const gridContainer = document.getElementById("productsGrid");

    if (gridBtn && listBtn && gridContainer) {
      gridBtn.addEventListener("click", () => {
        this.viewMode = "grid";
        gridBtn.classList.add("active");
        listBtn.classList.remove("active");
        gridContainer.classList.remove("list-view");
      });
      listBtn.addEventListener("click", () => {
        this.viewMode = "list";
        listBtn.classList.add("active");
        gridBtn.classList.remove("active");
        gridContainer.classList.add("list-view");
      });
    }
  }

  handleAutocomplete(query, box) {
    if (!box) return;
    if (!query || query.length < 2) {
      box.classList.remove("active");
      box.innerHTML = "";
      return;
    }

    const matches = LAPTOP_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.specs.cpu.toLowerCase().includes(query) ||
      p.specs.gpu.toLowerCase().includes(query)
    ).slice(0, 5);

    if (matches.length === 0) {
      box.classList.remove("active");
      return;
    }

    box.innerHTML = matches.map(m => `
      <div class="search-suggest-item" onclick="filterManager.selectProductFromSearch('${m.id}')">
        <img src="${m.image}" alt="${m.name}" class="search-suggest-img">
        <div>
          <div class="search-suggest-title">${m.name}</div>
          <span style="font-size:0.78rem; color:#94a3b8;">${m.specs.cpu.substring(0, 35)}...</span>
        </div>
        <div class="search-suggest-price">${m.price.toLocaleString()}$</div>
      </div>
    `).join("");

    box.classList.add("active");
  }

  selectProductFromSearch(id) {
    const box = document.getElementById("searchAutocompleteBox");
    if (box) box.classList.remove("active");
    modalManager.openQuickView(id);
  }

  selectCategory(category) {
    this.currentCategory = category;
    const pills = document.querySelectorAll(".cat-pill");
    pills.forEach(p => {
      p.classList.toggle("active", p.dataset.category === category);
    });
    this.render();
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  }

  selectBrand(brand) {
    this.currentBrand = brand;
    const btns = document.querySelectorAll(".brand-btn");
    btns.forEach(b => {
      b.classList.toggle("active", b.dataset.brand === brand);
    });
    this.render();
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  }

  resetFilters() {
    this.currentCategory = "all";
    this.currentBrand = "all";
    this.maxPrice = 4500;
    this.sortOption = "featured";
    this.searchQuery = "";

    document.querySelectorAll(".cat-pill").forEach(p => p.classList.toggle("active", p.dataset.category === "all"));
    document.querySelectorAll(".brand-btn").forEach(b => b.classList.toggle("active", b.dataset.brand === "all"));
    
    const slider = document.getElementById("priceRangeInput");
    const display = document.getElementById("priceDisplay");
    if (slider) slider.value = 4500;
    if (display) display.textContent = "4,500$";

    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) sortSelect.value = "featured";

    const searchInput = document.getElementById("globalSearchInput");
    if (searchInput) searchInput.value = "";
    const clearBtn = document.getElementById("clearSearchBtn");
    if (clearBtn) clearBtn.style.display = "none";

    this.render();
    showToast("تمت إعادة ضبط جميع الفلاتر بنجاح", "info");
  }

  getFilteredProducts() {
    let list = [...LAPTOP_PRODUCTS];

    if (this.currentCategory !== "all") {
      list = list.filter(item => item.category === this.currentCategory);
    }

    if (this.currentBrand !== "all") {
      list = list.filter(item => item.brand.toLowerCase() === this.currentBrand.toLowerCase());
    }

    list = list.filter(item => item.price <= this.maxPrice);

    if (this.searchQuery) {
      list = list.filter(item => 
        item.name.toLowerCase().includes(this.searchQuery) ||
        item.brand.toLowerCase().includes(this.searchQuery) ||
        item.specs.cpu.toLowerCase().includes(this.searchQuery) ||
        item.specs.gpu.toLowerCase().includes(this.searchQuery) ||
        item.specs.ram.toLowerCase().includes(this.searchQuery) ||
        item.specs.display.toLowerCase().includes(this.searchQuery)
      );
    }

    switch (this.sortOption) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name, "ar"));
        break;
      case "featured":
      default:
        break;
    }

    return list;
  }

  render() {
    const productsGrid = document.getElementById("productsGrid");
    const resultCountEl = document.getElementById("catalogResultCount");
    const emptyState = document.getElementById("emptyState");

    if (!productsGrid) return;

    const filtered = this.getFilteredProducts();

    if (resultCountEl) {
      resultCountEl.textContent = `يتم عرض ${filtered.length} جهاز لابتوب`;
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    const wishlist = StateManager.getWishlist();

    productsGrid.innerHTML = filtered.map(item => {
      const isWishlisted = wishlist.includes(item.id);
      const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);

      return `
        <article class="product-card" data-id="${item.id}">
          <!-- الشارات -->
          <div class="product-badges">
            <span class="card-badge ${item.badgeType}">${item.badge}</span>
            <span class="card-badge" style="background: rgba(0, 210, 255, 0.15); color: #00d2ff; border: 1px solid rgba(0, 210, 255, 0.4);">خصم ${discount}%</span>
          </div>

          <!-- زر المفضلة -->
          <button 
            type="button" 
            class="card-wishlist-btn ${isWishlisted ? "active" : ""}" 
            onclick="wishlistManager.toggle('${item.id}')" 
            title="${isWishlisted ? "إزالة من المفضلة" : "حفظ في المفضلة"}"
            aria-label="المفضلة"
          >
            <i class="fa-${isWishlisted ? "solid" : "regular"} fa-heart"></i>
          </button>

          <!-- صورة اللابتوب -->
          <div class="card-img-wrap" onclick="modalManager.openQuickView('${item.id}')">
            <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy">
          </div>

          <!-- تفاصيل البطاقة -->
          <div class="card-body">
            <span class="card-brand">${item.brand}</span>
            <h3 class="card-title" onclick="modalManager.openQuickView('${item.id}')" title="${item.name}">
              ${item.name}
            </h3>

            <!-- النجوم والتقييم -->
            <div class="card-rating">
              <span class="stars">
                ${this.renderStars(item.rating)}
              </span>
              <span class="rating-num">${item.rating}</span>
              <span class="reviews-cnt">(${item.reviews} تقييم)</span>
            </div>

            <!-- شرائح المواصفات السريعة -->
            <div class="card-specs-list">
              <span class="spec-chip"><i class="fa-solid fa-microchip"></i> ${this.truncateSpec(item.specs.cpu, 26)}</span>
              <span class="spec-chip"><i class="fa-solid fa-memory"></i> ${this.truncateSpec(item.specs.ram, 20)}</span>
              <span class="spec-chip"><i class="fa-solid fa-hard-drive"></i> ${this.truncateSpec(item.specs.storage, 18)}</span>
            </div>
          </div>

          <!-- الأسعار والإجراءات -->
          <div class="card-pricing-and-actions">
            <div class="card-pricing">
              <span class="card-price-now">${item.price.toLocaleString()}$</span>
              <span class="card-price-was">${item.originalPrice.toLocaleString()}$</span>
            </div>

            <div class="card-actions-row">
              <button 
                type="button" 
                class="btn-add-cart" 
                onclick="cartManager.quickAddToCart('${item.id}')"
              >
                <i class="fa-solid fa-cart-shopping"></i> إضافة للسلة
              </button>
              <button 
                type="button" 
                class="btn-card-quick" 
                onclick="modalManager.openQuickView('${item.id}')" 
                title="عرض كامل المواصفات"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let starsHtml = "";
    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    }
    if (hasHalf) {
      starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    return starsHtml;
  }

  truncateSpec(text, max) {
    if (!text) return "";
    return text.length > max ? text.substring(0, max) + "..." : text;
  }
}

// ============================================================================
// 5. محرك سلة المشتريات والكوبونات
// ============================================================================
class CartEngine {
  constructor() {
    this.cart = StateManager.getCart();
    this.couponCode = StateManager.getCoupon();
    this.validCoupons = {
      "MALAK10": { discountPercent: 0.10, label: "خصم 10%" },
      "WELCOME50": { flatDiscount: 50, label: "خصم 50$" },
      "TECH2026": { discountPercent: 0.15, label: "خصم 15%" }
    };

    this.initListeners();
    this.updateUI();
  }

  initListeners() {
    const cartTrigger = document.getElementById("cartTriggerBtn");
    const cartDrawer = document.getElementById("cartDrawer");
    const closeCartBtn = document.getElementById("closeCartBtn");
    const cartOverlay = document.getElementById("cartOverlay");

    if (cartTrigger && cartDrawer) {
      cartTrigger.addEventListener("click", () => {
        cartDrawer.classList.add("active");
        cartDrawer.setAttribute("aria-hidden", "false");
      });
    }

    if (closeCartBtn && cartDrawer) {
      closeCartBtn.addEventListener("click", () => {
        cartDrawer.classList.remove("active");
        cartDrawer.setAttribute("aria-hidden", "true");
      });
    }

    if (cartOverlay && cartDrawer) {
      cartOverlay.addEventListener("click", () => {
        cartDrawer.classList.remove("active");
        cartDrawer.setAttribute("aria-hidden", "true");
      });
    }

    const applyCouponBtn = document.getElementById("applyCouponBtn");
    const couponInput = document.getElementById("couponInput");
    if (applyCouponBtn && couponInput) {
      applyCouponBtn.addEventListener("click", () => {
        const val = couponInput.value.trim().toUpperCase();
        if (!val) {
          showToast("يرجى إدخال كود الخصم أولاً", "warning");
          return;
        }
        this.applyCoupon(val);
      });
    }

    const removeCouponBtn = document.getElementById("removeCouponBtn");
    if (removeCouponBtn) {
      removeCouponBtn.addEventListener("click", () => {
        this.removeCoupon();
      });
    }

    const clearCartBtn = document.getElementById("clearCartBtn");
    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", () => {
        if (this.cart.length === 0) return;
        if (confirm("هل أنت متأكد من رغبتك في تفريغ سلة المشتريات بالكامل؟")) {
          this.clear();
        }
      });
    }

    const proceedCheckoutBtn = document.getElementById("proceedCheckoutBtn");
    if (proceedCheckoutBtn) {
      proceedCheckoutBtn.addEventListener("click", () => {
        if (this.cart.length === 0) {
          showToast("سلة المشتريات فارغة حالياً!", "warning");
          return;
        }
        cartDrawer.classList.remove("active");
        modalManager.openCheckout();
      });
    }
  }

  quickAddToCart(productId, quantity = 1) {
    const product = LAPTOP_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = this.cart.findIndex(i => i.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        specsSummary: `${product.specs.cpu.split("(")[0]} • ${product.specs.ram.substring(0, 15)}`,
        quantity: quantity
      });
    }

    StateManager.saveCart(this.cart);
    this.updateUI();

    showToast(`تمت إضافة <strong>${product.name}</strong> إلى السلة بنجاح!`, "success");

    const badge = document.getElementById("cartBadge");
    if (badge) {
      badge.style.transform = "scale(1.4)";
      setTimeout(() => badge.style.transform = "scale(1)", 200);
    }
  }

  updateQuantity(productId, newQty) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;

    if (newQty <= 0) {
      this.removeItem(productId);
    } else {
      item.quantity = newQty;
      StateManager.saveCart(this.cart);
      this.updateUI();
    }
  }

  removeItem(productId) {
    const item = this.cart.find(i => i.id === productId);
    this.cart = this.cart.filter(i => i.id !== productId);
    StateManager.saveCart(this.cart);
    this.updateUI();

    if (item) {
      showToast(`تم حذف <strong>${item.name}</strong> من سلة المشتريات`, "info");
    }
  }

  clear() {
    this.cart = [];
    StateManager.saveCart(this.cart);
    this.updateUI();
    showToast("تم تفريغ سلة المشتريات", "info");
  }

  applyCoupon(code) {
    if (this.validCoupons[code]) {
      this.couponCode = code;
      StateManager.saveCoupon(code);
      this.updateUI();
      showToast(`تم تطبيق كود الخصم <strong>${code}</strong> بنجاح!`, "success");
    } else {
      showToast(`كود الخصم غير صحيح. جرّب الكود: <strong>MALAK10</strong>`, "danger");
    }
  }

  removeCoupon() {
    this.couponCode = null;
    StateManager.saveCoupon(null);
    this.updateUI();
    showToast("تمت إزالة كود الخصم", "info");
  }

  calculateTotals(customShipping = null) {
    const subtotal = this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    let discount = 0;

    if (this.couponCode && this.validCoupons[this.couponCode]) {
      const coupon = this.validCoupons[this.couponCode];
      if (coupon.discountPercent) {
        discount = subtotal * coupon.discountPercent;
      } else if (coupon.flatDiscount) {
        discount = Math.min(subtotal, coupon.flatDiscount);
      }
    }

    let shipping = 0;
    if (customShipping !== null) {
      shipping = customShipping;
    } else {
      shipping = (subtotal >= 1000 || subtotal === 0) ? 0 : 20.00;
    }

    const discountedSubtotal = Math.max(0, subtotal - discount);
    const tax = discountedSubtotal * 0.05;
    const grandTotal = discountedSubtotal + shipping + tax;

    return {
      subtotal,
      discount,
      shipping,
      tax,
      grandTotal,
      itemCount: this.cart.reduce((acc, item) => acc + item.quantity, 0)
    };
  }

  updateUI() {
    const totals = this.calculateTotals();

    const cartBadge = document.getElementById("cartBadge");
    const headerCartTotal = document.getElementById("headerCartTotal");
    const drawerCounter = document.getElementById("cartDrawerCount");

    if (cartBadge) cartBadge.textContent = totals.itemCount;
    if (headerCartTotal) headerCartTotal.textContent = `${Math.round(totals.grandTotal).toLocaleString()}$`;
    if (drawerCounter) drawerCounter.textContent = `${totals.itemCount} عناصر`;

    const shippingProgressText = document.getElementById("shippingProgressText");
    const shippingProgressBar = document.getElementById("shippingProgressBar");
    if (shippingProgressText && shippingProgressBar) {
      if (totals.subtotal >= 1000) {
        shippingProgressText.innerHTML = `🎉 مبروك! لقد حصلت على <strong>شحن مجاني سريع</strong>!`;
        shippingProgressBar.style.width = "100%";
      } else if (totals.subtotal === 0) {
        shippingProgressText.innerHTML = `أضف منتجات بقيمة <strong>1,000$</strong> لفتح <strong>الشحن المجاني</strong>!`;
        shippingProgressBar.style.width = "0%";
      } else {
        const remaining = 1000 - totals.subtotal;
        const percent = Math.min(100, (totals.subtotal / 1000) * 100);
        shippingProgressText.innerHTML = `أضف <strong>${remaining.toLocaleString()}$</strong> إضافية لفتح <strong>الشحن المجاني السريع</strong>!`;
        shippingProgressBar.style.width = `${percent}%`;
      }
    }

    const listContainer = document.getElementById("cartItemsList");
    const cartFooter = document.getElementById("cartFooter");

    if (listContainer) {
      if (this.cart.length === 0) {
        listContainer.innerHTML = `
          <div class="cart-empty-view">
            <i class="fa-solid fa-cart-shopping cart-empty-icon"></i>
            <h4>سلة المشتريات فارغة حالياً</h4>
            <p>تصفح أحدث وأقوى أجهزة اللابتوب المتوفرة في المتجر واختر ما يناسبك.</p>
            <button type="button" class="btn btn-primary" onclick="document.getElementById('cartDrawer').classList.remove('active'); document.getElementById('catalog').scrollIntoView({behavior:'smooth'});">
              <i class="fa-solid fa-bag-shopping"></i> تصفح الأجهزة الآن
            </button>
          </div>
        `;
        if (cartFooter) cartFooter.style.display = "none";
        return;
      } else {
        if (cartFooter) cartFooter.style.display = "block";
      }

      listContainer.innerHTML = this.cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-spec">${item.specsSummary}</div>
            <div class="cart-item-price">${item.price.toLocaleString()}$</div>
          </div>
          <div class="qty-controller">
            <button type="button" class="qty-btn" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity - 1})" title="تقليل">−</button>
            <span class="qty-number">${item.quantity}</span>
            <button type="button" class="qty-btn" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity + 1})" title="زيادة">+</button>
          </div>
          <button type="button" class="cart-item-remove" onclick="cartManager.removeItem('${item.id}')" title="إزالة من السلة">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `).join("");
    }

    const couponAppliedTag = document.getElementById("couponAppliedTag");
    const couponPercentDisplay = document.getElementById("couponPercentDisplay");
    const couponInput = document.getElementById("couponInput");

    if (couponAppliedTag && couponPercentDisplay) {
      if (this.couponCode && this.validCoupons[this.couponCode]) {
        couponAppliedTag.style.display = "flex";
        couponPercentDisplay.textContent = this.validCoupons[this.couponCode].label;
        if (couponInput) couponInput.value = this.couponCode;
      } else {
        couponAppliedTag.style.display = "none";
        if (couponInput) couponInput.value = "";
      }
    }

    const subtotalEl = document.getElementById("cartSubtotal");
    const discountRow = document.getElementById("cartDiscountRow");
    const discountEl = document.getElementById("cartDiscount");
    const shippingEl = document.getElementById("cartShipping");
    const taxEl = document.getElementById("cartTax");
    const grandTotalEl = document.getElementById("cartGrandTotal");

    if (subtotalEl) subtotalEl.textContent = `${totals.subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}$`;
    
    if (discountRow && discountEl) {
      if (totals.discount > 0) {
        discountRow.style.display = "flex";
        discountEl.textContent = `-${totals.discount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}$`;
      } else {
        discountRow.style.display = "none";
      }
    }

    if (shippingEl) {
      shippingEl.textContent = totals.shipping === 0 ? "مجاناً" : `${totals.shipping.toFixed(2)}$`;
    }
    if (taxEl) taxEl.textContent = `${totals.tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}$`;
    if (grandTotalEl) grandTotalEl.textContent = `${totals.grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}$`;
  }
}

// ============================================================================
// 6. إدارة قائمة الرغبات والمفضلة
// ============================================================================
class WishlistManager {
  constructor() {
    this.list = StateManager.getWishlist();
    this.initListeners();
    this.updateBadges();
  }

  initListeners() {
    const trigger = document.getElementById("wishlistTriggerBtn");
    const modal = document.getElementById("wishlistModal");
    const closeBtn = document.getElementById("closeWishlistBtn");
    const overlay = document.getElementById("wishlistOverlay");

    if (trigger && modal) {
      trigger.addEventListener("click", () => {
        this.renderModal();
        modal.classList.add("active");
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    }

    if (overlay && modal) {
      overlay.addEventListener("click", () => modal.classList.remove("active"));
    }
  }

  toggle(productId) {
    const product = LAPTOP_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const idx = this.list.indexOf(productId);
    if (idx > -1) {
      this.list.splice(idx, 1);
      showToast(`تمت إزالة <strong>${product.name}</strong> من المفضلة`, "info");
    } else {
      this.list.push(productId);
      showToast(`تم حفظ <strong>${product.name}</strong> في قائمة المفضلة!`, "success", "fa-heart");
    }

    StateManager.saveWishlist(this.list);
    this.updateBadges();
    filterManager.render();
    this.renderModal();
  }

  updateBadges() {
    const badge = document.getElementById("wishlistBadge");
    const counter = document.getElementById("wishlistModalCounter");
    if (badge) badge.textContent = this.list.length;
    if (counter) counter.textContent = `${this.list.length} أجهزة`;
  }

  renderModal() {
    const container = document.getElementById("wishlistItemsContainer");
    if (!container) return;

    if (this.list.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: #94a3b8;">
          <i class="fa-regular fa-heart" style="font-size: 3rem; margin-bottom: 12px; color: #64748b;"></i>
          <h4>قائمة المفضلة فارغة حالياً</h4>
          <p>انقر على أيقونة القلب في أي بطاقة لابتوب لحفظ الجهاز ومقارنته لاحقاً!</p>
        </div>
      `;
      return;
    }

    const items = LAPTOP_PRODUCTS.filter(p => this.list.includes(p.id));

    container.innerHTML = items.map(item => `
      <div class="wishlist-item-card">
        <img src="${item.image}" alt="${item.name}">
        <div style="flex:1;">
          <h4 style="font-size:0.95rem; margin-bottom:4px;">${item.name}</h4>
          <span style="font-size:1.1rem; font-weight:900; color:#00d2ff;">${item.price.toLocaleString()}$</span>
        </div>
        <div style="display:flex; gap:8px;">
          <button type="button" class="btn btn-primary btn-sm" onclick="cartManager.quickAddToCart('${item.id}'); wishlistManager.toggle('${item.id}');">
            <i class="fa-solid fa-cart-plus"></i> نقل للسلة
          </button>
          <button type="button" class="btn btn-ghost btn-sm" onclick="wishlistManager.toggle('${item.id}')" title="حذف">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `).join("");
  }
}

// ============================================================================
// 7. إدارة النوافذ المنبثقة (المعاينة السريعة والشراء)
// ============================================================================
class ModalManager {
  constructor() {
    this.initQuickView();
    this.initCheckout();
  }

  initQuickView() {
    const modal = document.getElementById("quickViewModal");
    const closeBtn = document.getElementById("closeQuickViewBtn");
    const overlay = document.getElementById("quickViewOverlay");

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    }
    if (overlay && modal) {
      overlay.addEventListener("click", () => modal.classList.remove("active"));
    }
  }

  openQuickView(productId) {
    const item = LAPTOP_PRODUCTS.find(p => p.id === productId);
    const modal = document.getElementById("quickViewModal");
    const content = document.getElementById("quickViewContent");
    if (!item || !modal || !content) return;

    content.innerHTML = `
      <div class="qv-grid">
        <div class="qv-img-box">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="qv-details">
          <span class="qv-brand">${item.brand.toUpperCase()} • أصلي ومغلف 100%</span>
          <h2 class="qv-title">${item.name}</h2>
          
          <div class="qv-pricing">
            <span class="qv-price-cur">${item.price.toLocaleString()}$</span>
            <span class="qv-price-was">${item.originalPrice.toLocaleString()}$</span>
            <span class="card-discount-tag" style="font-size:0.85rem;">وفر ${(item.originalPrice - item.price).toLocaleString()}$</span>
          </div>

          <p style="font-size:0.92rem; color:#94a3b8; line-height:1.7;">${item.description}</p>

          <table class="qv-table">
            <tbody>
              <tr><td>المعالج الرئيسي:</td><td>${item.specs.cpu}</td></tr>
              <tr><td>بطاقة الرسوميات (GPU):</td><td>${item.specs.gpu}</td></tr>
              <tr><td>الذاكرة العشوائية (RAM):</td><td>${item.specs.ram}</td></tr>
              <tr><td>سعة التخزين (SSD):</td><td>${item.specs.storage}</td></tr>
              <tr><td>الشاشة ودقة الألوان:</td><td>${item.specs.display}</td></tr>
              <tr><td>البطارية والشاحن:</td><td>${item.specs.battery}</td></tr>
              <tr><td>الوزن والهيكل:</td><td>${item.specs.weight}</td></tr>
              <tr><td>نظام التشغيل:</td><td>${item.specs.os}</td></tr>
              <tr><td>المنافذ والتوصيل:</td><td>${item.specs.ports}</td></tr>
              <tr><td>الضمان المعتمد:</td><td><i class="fa-solid fa-shield-check text-success"></i> ${item.specs.warranty}</td></tr>
            </tbody>
          </table>

          <div class="qv-actions">
            <button type="button" class="btn btn-primary btn-block btn-lg" onclick="cartManager.quickAddToCart('${item.id}'); document.getElementById('quickViewModal').classList.remove('active');">
              <i class="fa-solid fa-cart-shopping"></i> إضافة لسلة المشتريات الآن
            </button>
            <button type="button" class="btn btn-outline" onclick="wishlistManager.toggle('${item.id}')" title="حفظ في المفضلة">
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");
  }

  initCheckout() {
    const modal = document.getElementById("checkoutModal");
    const closeBtn = document.getElementById("closeCheckoutBtn");
    const overlay = document.getElementById("checkoutOverlay");

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    }
    if (overlay && modal) {
      overlay.addEventListener("click", () => modal.classList.remove("active"));
    }

    const payTabs = document.querySelectorAll(".payment-tab");
    const cardBox = document.getElementById("cardDetailsBox");
    payTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        payTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const radio = tab.querySelector("input");
        if (radio) radio.checked = true;

        if (cardBox) {
          cardBox.style.display = tab.dataset.pay === "card" ? "block" : "none";
        }
      });
    });
  }

  openCheckout() {
    const modal = document.getElementById("checkoutModal");
    if (!modal) return;

    checkoutManager.renderReviewSummary();
    modal.classList.add("active");
  }

  closeOrderSuccess() {
    const modal = document.getElementById("orderSuccessModal");
    if (modal) modal.classList.remove("active");
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  }
}

// ============================================================================
// 8. معالجة الدفع وتوليد الفاتورة الرقمية
// ============================================================================
class CheckoutManager {
  constructor() {
    this.shippingExtra = 0;
  }

  updateShippingOption(fee) {
    this.shippingExtra = fee;
    this.renderReviewSummary();
  }

  renderReviewSummary() {
    const itemsPreview = document.getElementById("checkoutItemsPreview");
    const subtotalEl = document.getElementById("checkoutSubtotal");
    const discountRow = document.getElementById("checkoutDiscountRow");
    const discountEl = document.getElementById("checkoutDiscount");
    const shippingEl = document.getElementById("checkoutShipping");
    const taxEl = document.getElementById("checkoutTax");
    const grandTotalEl = document.getElementById("checkoutGrandTotal");

    if (!itemsPreview) return;

    const totals = cartManager.calculateTotals(this.shippingExtra);

    itemsPreview.innerHTML = cartManager.cart.map(i => `
      <div class="c-item-row">
        <span class="c-item-name">${i.quantity}x ${i.name}</span>
        <span class="c-item-price">${(i.price * i.quantity).toLocaleString()}$</span>
      </div>
    `).join("");

    if (subtotalEl) subtotalEl.textContent = `${totals.subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}$`;
    
    if (discountRow && discountEl) {
      if (totals.discount > 0) {
        discountRow.style.display = "flex";
        discountEl.textContent = `-${totals.discount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}$`;
      } else {
        discountRow.style.display = "none";
      }
    }

    if (shippingEl) {
      shippingEl.textContent = totals.shipping === 0 ? "مجاناً" : `${totals.shipping.toFixed(2)}$`;
    }
    if (taxEl) taxEl.textContent = `${totals.tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}$`;
    if (grandTotalEl) grandTotalEl.textContent = `${totals.grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}$`;
  }

  handlePlaceOrder() {
    const submitBtn = document.getElementById("placeOrderSubmitBtn");
    const nameInput = document.getElementById("orderName");
    const emailInput = document.getElementById("orderEmail");
    const addressInput = document.getElementById("orderAddress");
    const cityInput = document.getElementById("orderCity");

    if (!nameInput.value || !emailInput.value || !addressInput.value || !cityInput.value) {
      showToast("يرجى ملء جميع الحقول المطلوبة للشحن", "warning");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> جاري تأكيد الدفع المشفر وإصدار الفاتورة...`;
    }

    setTimeout(() => {
      const orderId = "MLK-" + Math.floor(100000 + Math.random() * 900000);
      const totals = cartManager.calculateTotals(this.shippingExtra);
      const customerName = nameInput.value;
      const fullAddress = `${addressInput.value}، ${cityInput.value}`;
      const orderedItems = [...cartManager.cart];

      document.getElementById("checkoutModal").classList.remove("active");

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-shield-check"></i> تأكيد الطلب والدفع الآن`;
      }

      const receiptId = document.getElementById("receiptOrderId");
      const receiptDate = document.getElementById("receiptDate");
      const receiptCustomer = document.getElementById("receiptCustomerName");
      const receiptAddress = document.getElementById("receiptShippingAddress");
      const receiptTotal = document.getElementById("receiptTotalAmount");
      const receiptItems = document.getElementById("receiptItemsList");

      if (receiptId) receiptId.textContent = `#${orderId}`;
      if (receiptDate) receiptDate.textContent = new Date().toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" });
      if (receiptCustomer) receiptCustomer.textContent = customerName;
      if (receiptAddress) receiptAddress.textContent = fullAddress;
      if (receiptTotal) receiptTotal.textContent = `${totals.grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}$`;

      if (receiptItems) {
        receiptItems.innerHTML = orderedItems.map(item => `
          <div style="display:flex; justify-content:space-between; font-size:0.9rem; color:#cbd5e1;">
            <span>${item.quantity}x ${item.name}</span>
            <strong>${(item.price * item.quantity).toLocaleString()}$</strong>
          </div>
        `).join("");
      }

      cartManager.clear();

      const successModal = document.getElementById("orderSuccessModal");
      if (successModal) successModal.classList.add("active");

      showToast(`تم تأكيد الطلب <strong>#${orderId}</strong> بنجاح! تم إرسال الفاتورة لـ ${emailInput.value}`, "success", "fa-circle-check");
    }, 1200);
  }
}

// ============================================================================
// 9. مؤقت العد التنازلي لعرض اليوم
// ============================================================================
function initFlashDealCountdown() {
  const hoursEl = document.getElementById("countHours");
  const minEl = document.getElementById("countMinutes");
  const secEl = document.getElementById("countSeconds");

  if (!hoursEl || !minEl || !secEl) return;

  let remainingSeconds = (14 * 3600) + (42 * 60) + 19;

  setInterval(() => {
    if (remainingSeconds <= 0) {
      remainingSeconds = 24 * 3600;
    } else {
      remainingSeconds--;
    }

    const h = Math.floor(remainingSeconds / 3600);
    const m = Math.floor((remainingSeconds % 3600) / 60);
    const s = remainingSeconds % 60;

    hoursEl.textContent = String(h).padStart(2, "0");
    minEl.textContent = String(m).padStart(2, "0");
    secEl.textContent = String(s).padStart(2, "0");
  }, 1000);
}

// ============================================================================
// 10. الأسئلة الشائعة (Accordion FAQ)
// ============================================================================
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const header = item.querySelector(".faq-header");
    if (header) {
      header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        items.forEach(i => i.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
}

// ============================================================================
// 11. تفاعلات القائمة والهيدر
// ============================================================================
function initNavigation() {
  const header = document.getElementById("mainHeader");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      if (navMenu) navMenu.classList.remove("active");
    });
  });
}

// ============================================================================
// 12. نماذج التواصل والنشرة البريدية
// ============================================================================
function handleContactSubmit() {
  const name = document.getElementById("contactName").value;
  const form = document.getElementById("contactForm");
  showToast(`شكراً لك يا <strong>${name}</strong>! تم استلام رسالتك وسيتم التواصل معك خلال دقائق.`, "success");
  if (form) form.reset();
}

function handleNewsletterSubmit() {
  const email = document.getElementById("newsletterEmail").value;
  showToast(`أهلاً بك في نادي ملاك VIP! تم إرسال كود الخصم الحصري إلى <strong>${email}</strong>`, "success");
  document.getElementById("newsletterEmail").value = "";
}

// ============================================================================
// 13. تهيئة وتشغيل التطبيق عند تحميل الصفحة
// ============================================================================
let filterManager;
let cartManager;
let wishlistManager;
let modalManager;
let checkoutManager;

document.addEventListener("DOMContentLoaded", () => {
  filterManager = new FilterController();
  cartManager = new CartEngine();
  wishlistManager = new WishlistManager();
  modalManager = new ModalManager();
  checkoutManager = new CheckoutManager();

  initFlashDealCountdown();
  initFaqAccordion();
  initNavigation();

  console.log("🚀 تم تشغيل متجر ملاك بنجاح باللغة العربية!");
});
