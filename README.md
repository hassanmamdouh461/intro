# 🎨 Intro Animation — Page Transition Scribble

مستودع انترو الموقع المستخرج من **[truus-clone](https://github.com/M-Jawad338211/truus-clone)** والمشار إليه في منشور تيليجرام [animmaster_studio/371](https://t.me/animmaster_studio/371).

يعمل هذا التأثير كـ **Fullscreen Intro Loader & Page Transition** فائق السلاسة بتصميم حائز على جوائز Awwwards، ويعتمد على **GSAP** لتحريك مسار **SVG Scribble** عملاق يرسم نفسه ليغطي كامل الشاشة بألوان عشوائية مبهجة، ويعرض الشعار في المنتصف بحركة اهتزازية مرحة (`wiggle`) ثم ينسحب ليكشف عن محتوى الموقع.

---

## 🚀 التشغيل السريع (Quick Start)

### 1. تشغيل نسخة Next.js:
```bash
# تثبيت الحزم
npm install

# تشغيل خادم التطوير
npm run dev
```
افتح المتصفح على [http://localhost:3000](http://localhost:3000) لتجربة صفحة التحكم التفاعلية.

### 2. تجربة فورية بدون تثبيت (Zero-Install HTML):
يمكنك فتح ملف `standalone-demo.html` مباشرة بالنقر المزدوج عليه في أي متصفح لرؤية التأثير فوراً بدون الحاجة إلى Node.js!

---

## 📁 هيكلية المستودع (Project Structure)

```text
intro/
├── app/
│   ├── globals.css              # المتغيرات اللونية وتنسيقات الـ Scribble
│   ├── layout.jsx               # تخطيط الصفحة الرئيسي
│   └── page.jsx                 # صفحة العرض ولوحة التحكم التفاعلية
├── components/
│   ├── TransitionScribble.jsx   # المكون الأساسي للأنيميشن (GSAP + SVG)
│   └── IntroLogo.jsx            # شعار المنتصف مع دعم النصوص والشعارات المخصصة
├── lib/
│   └── intro-config.js          # إعدادات الألوان، السرعة، والتحريك
├── public/
│   ├── assets/                  # الأيقونات والشعارات
│   └── fonts/                   # خطوط الويب المستخدمة
├── standalone-demo.html         # نسخة Vanilla HTML + GSAP تعمل مباشرة
├── package.json
└── README.md
```

---

## 🧩 كيفية نقل الانترو إلى موقعك الخاص (How to Integrate)

### في مشاريع Next.js أو React:
1. انسخ ملف `components/TransitionScribble.jsx` وملف `components/IntroLogo.jsx` إلى مشروعك.
2. تأكد من تثبيت مكتبة GSAP:
   ```bash
   npm install gsap
   ```
3. أضف تنسيق الـ CSS في ملف التنسيقات العام (`globals.css`):
   ```css
   .transition-scribble {
       position: fixed;
       top: -50vh;
       left: -50vw;
       width: 200vw;
       height: 200vh;
       z-index: 9999;
       pointer-events: none;
   }
   body.is-transitioning {
       pointer-events: none !important;
   }
   ```
4. استدعِ المكون في صفحتك الرئيسية:
   ```jsx
   import TransitionScribble from '@/components/TransitionScribble';

   export default function HomePage() {
     return (
       <>
         <TransitionScribble autoPlay={true} />
         
         <main>
           {/* محتوى موقعك */}
         </main>
       </>
     );
   }
   ```

---

## ⚙️ الخصائص القابلة للتخصيص (Props & Customization)

| الخاصية (Prop) | النوع | الافتراضي | الشرح |
|---|---|---|---|
| `autoPlay` | `boolean` | `true` | تشغيل الانترو تلقائياً عند تحميل الصفحة |
| `logoText` | `string` | `undefined` | نص مخصص يظهر في المنتصف بدلاً من شعار Truus |
| `logoComponent` | `ReactNode` | `undefined` | مكون مخصص أو SVG خاص بك يوضع في المنتصف |
| `config.durationIn` | `number` | `2.0` | مدة رسم الخربشة وتغطية الشاشة (بالثواني) |
| `config.durationOut` | `number` | `2.5` | مدة انسحاب الخربشة وكشف الموقع (بالثواني) |
| `config.wiggleIntensity` | `number` | `6` | شدة زاوية اهتزاز الشعار بالدرجات |
| `config.startCovered` | `boolean` | `true` | يبدأ الانترو والشاشة مغطّاة بالكامل + اللوجو ظاهر (بدون مرحلة الـ draw-in) |
| `config.startCoveredHold` | `number` | `0.9` | ثواني الوقوف عند القمة قبل بدء الانسحاب — لا تأثير إلا مع `startCovered: true` |
| `onComplete` | `(color) => void` | `undefined` | دالة رد نداء تُستدعى عند انتهاء الانترو |

---

## 🎮 إعادة التشغيل برمجياً (Trigger Programmatically)

يمكنك تشغيل الانترو في أي وقت عبر زر مخصص إما بواسطة `ref` أو بإرسال حدث `replay-intro`:
```javascript
// عبر إرسال حدث عام
window.dispatchEvent(new CustomEvent('replay-intro'));

// أو مع تحديد لون معين
window.dispatchEvent(new CustomEvent('replay-intro', { detail: { color: '#f5693c' } }));
```

---

## 📜 الترخيص والمصدر

- **المصدر الأصلي**: [Truus.co Clone by M-Jawad338211](https://github.com/M-Jawad338211/truus-clone)
- **قناة التلغرام**: [@animmaster_studio](https://t.me/animmaster_studio)
