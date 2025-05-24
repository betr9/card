// قواعد البطاقات المحدثة
const cardRules = {
    // البطاقات الرقمية
    "2": {
        title: "الإثنان (2)",
        description: "تقدم خطوتين للأمام"
    },
    "3": {
        title: "الثلاثة (3)",
        description: "تقدم ثلاث خطوات للأمام"
    },
    "4": {
        title: "الأربعة (4)",
        description: "تراجع أربع خطوات للخلف"
    },
    "5": {
        title: "الخمسة (5)",
        description: "تمشي نفسك 5 خطوات.<br>أو تمشي أي لاعب آخر 5 خطوات (حسب اختيارك)."
    },
    "6": {
        title: "الستة (6)",
        description: "تقدم ست خطوات للأمام"
    },
    "7": {
        title: "السبعة (7)",
        description: "تقسيم سبع خطوات بين قطعتين (مثل 3 و 4)"
    },
    "8": {
        title: "الثمانية (8)",
        description: "تقدم ثماني خطوات للأمام"
    },
    "9": {
        title: "التسعة (9)",
        description: "تقدم تسع خطوات للأمام"
    },
    "5": {
        title: "الخمسة (5)",
        description: "تمشي نفسك 5 خطوات.<br>أو تمشي أي لاعب آخر 5 خطوات (حسب اختيارك)."
    },
    "10": {
        title: "العشرة (10)",
        description: "تمشي 10 خطوات.<br>أو تجعل الشخص اللي على يمينك يحرق ورقة عشوائية من يده."
    },
    
    // البطاقات الخاصة
    "K": {
        title: "الشايب (K)",
        description: "يخرج حجر من البيت (القاعدة).<br>أو يمشي 13 خطوة.<br>ويأكل أي حجر في طريقه."
    },
    "J_red": {
        title: "الولد الأحمر (J ♥️♦️)",
        description: "يبدّل الأماكن مع أي حجر آخر في اللعبة، بما في ذلك حجر الخصم."
    },
    "J_black": {
        title: "الولد الأسود (J ♠️♣️)",
        description: "يتحرك 11 خطوة."
    },
    "Q_red": {
        title: "البنت الحمراء (Q ♥️♦️)",
        description: "تختار ورقة من الشخص اللي على يمينك وتحرقها (تُلغى من اللعب)."
    },
    "Q_black": {
        title: "البنت السوداء (Q ♠️♣️)",
        description: "تمشي 11 خطوة."
    },
    
    // باقي البطاقات الرقمية (يمكن إضافتها بنفس الطريقة)
    
    // ... إلخ لباقي البطاقات
};

// عرض وظيفة البطاقة
function showCardFunction(cardKey) {
    const cardInfoElement = document.getElementById('card-info');
    
    if (cardRules[cardKey]) {
        const card = cardRules[cardKey];
        cardInfoElement.innerHTML = `
            <div class="card-details">
                <h2>${card.title}</h2>
                <p class="card-description">${card.description}</p>
            </div>
        `;
    } else {
        cardInfoElement.innerHTML = '<p class="error">بطاقة غير معروفة</p>';
    }

    
    // إضافة تأثير مرئي
    cardInfoElement.style.animation = "none";
    setTimeout(() => {
        cardInfoElement.style.animation = "fadeIn 0.5s";
    }, 10);
}