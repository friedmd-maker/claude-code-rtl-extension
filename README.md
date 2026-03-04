# Claude Code RTL Support

> **Adds Right-to-Left (RTL) text support for Hebrew, Arabic & Persian to the Claude Code for VS Code extension.**

---

## 🌐 Languages | שפות | اللغات | زبان‌ها

| | Language | Jump to |
|---|---|---|
| 🇮🇱 | עברית | [קפוץ ↓](#hebrew) |
| 🇸🇦 | عربية | [انتقل ↓](#arabic) |
| 🇮🇷 | فارسی | [برو ↓](#persian) |

---

## 🇺🇸 English

A VS Code extension that adds Right-to-Left (RTL) text direction support to the **Claude Code for VS Code** chat interface. Designed for Hebrew, Arabic, and Persian speakers who want natural text alignment when chatting with Claude — without affecting code blocks or UI elements.

### 🤔 Why is this needed?

The original Claude Code for VS Code extension lacks native RTL support. This often results in:

- ❌ Hebrew, Arabic, and Persian text appearing misaligned
- ❌ Difficulty reading mixed-language conversations (code + RTL text)
- ❌ Inconsistent UI behavior in the chat panel

**Claude Code RTL Support** fixes these issues by intelligently injecting CSS to handle text direction — while strictly preserving LTR for code blocks and terminal outputs.

### ✨ Features

| Feature | Description |
|---|---|
| ▶️ Activate RTL | Injects CSS and a toggle button into the Claude Code chat |
| 🔧 Fix BiDi | Activates RTL and fixes reversed text (e.g. "םולש" → "שלום") |
| ⏹️ Deactivate RTL | Restores original files from backup |
| 🔍 Check Status | Shows which installations have RTL enabled |
| 📊 Status Bar | Shows current RTL state at a glance — click to manage |

---

### 🆕 What's New (v0.2.0)

- **Fix BiDi command** — Solves the reversed text issue where Hebrew/Arabic/Persian words appear mirrored (e.g. "םולש" instead of "שלום"). This happens because Claude Code injects a `*{direction:ltr;unicode-bidi:bidi-override}` rule that forces all text to LTR. The new **Fix BiDi** command activates RTL and removes this problematic rule automatically.

---

### 📋 Requirements

- [**Claude Code for VS Code**](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) (`anthropic.claude-code`) — installed automatically as a dependency

---

### 💻 Supported Platforms

| 🛠️ IDEs |
|---|
| VS Code |
| Cursor |

---

### 🚀 How to Use

#### 📊 Option 1: Status Bar

After installation, a status bar item appears at the bottom of VS Code:

| Status | Meaning |
|---|---|
| `RTL: Active` ✅ | RTL is injected and ready |
| `RTL: Inactive` ⭕ | RTL is not installed |
| `RTL: N/A` ❌ | Claude Code for VS Code extension not found |

**Click the status bar item** to open a menu with Activate / Deactivate / Status options.

#### 🎯 Option 2: Command Palette

Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) and search for:

| Command | Action |
|---|---|
| `Claude RTL: Activate RTL` | ▶️ Enable RTL support |
| `Claude RTL: Fix BiDi` | 🔧 Activate RTL + fix bidirectional text issues |
| `Claude RTL: Deactivate RTL` | ⏹️ Disable RTL and restore original files |
| `Claude RTL: Check Status` | 🔍 View installation status |

> 🔄 **The window reloads automatically** after Activate / Deactivate to apply changes.

#### 💬 Using RTL in Chat

After activating RTL and reloading:

1. Open the Claude Code chat panel
2. Click the **⇄** button in the chat header
3. The interface switches to RTL — text aligns to the right
4. Click again to return to LTR

> 💡 **Note:** If Claude Code updates and RTL stops working, just run **Claude RTL: Activate RTL** again.

> 💡 **Tip:** Not every conversation needs RTL — you can toggle it per chat session.
> Use ⇄ only in conversations where you write in Hebrew, Arabic, or Persian.
> English-only chats can stay in LTR as usual.

---

### ↔️ What Changes in RTL Mode?

| ✅ Becomes RTL | 🔒 Stays LTR |
|---|---|
| User messages | Code blocks |
| Claude's text responses | Tool calls and results |
| Lists and paragraphs | Thinking blocks |
| Question/answer blocks | Slash commands |
| | Buttons and UI elements |

---

### 🔧 Troubleshooting

<details>
<summary><strong>❓ Extension doesn't find Claude Code for VS Code</strong></summary>

- Make sure the "Claude Code for VS Code" extension is installed
- Check status with the `Claude RTL: Check Status` command

</details>

<details>
<summary><strong>❓ Changes not visible after activating</strong></summary>

- Reload the window: `Ctrl+Shift+P` → `Developer: Reload Window`
- Or close and reopen VS Code / Cursor completely

</details>

<details>
<summary><strong>❓ RTL stopped working after a Claude Code update</strong></summary>

- When "Claude Code for VS Code" updates, it replaces its files and RTL support is removed
- Run **Claude RTL: Activate RTL** again to restore it

</details>

<details>
<summary><strong>❓ Hebrew/Arabic text appears reversed (e.g. "םולש" instead of "שלום")</strong></summary>

- This is caused by a `bidi-override` CSS rule in Claude Code that forces LTR direction on all text
- Use **Claude RTL: Fix BiDi** instead of **Activate RTL** to fix this
- Note: Running **Activate RTL** again will bring back the issue — use **Fix BiDi** each time

</details>

<details>
<summary><strong>❓ Permission Denied error</strong></summary>

- **Windows:** Try running VS Code as Administrator
- **macOS / Linux:** Check file permissions on the extensions directory

</details>

---

### 📄 License

MIT — see [LICENSE](LICENSE) for details.

[🔝 Back to top](#claude-code-rtl-support)

---

<a id="hebrew"></a>

<details>
<summary><strong>🇮🇱 עברית</strong></summary>

<div dir="rtl" lang="he">

## 🇮🇱 עברית

תוסף ל-VS Code שמוסיף תמיכת כיווניות מימין לשמאל (RTL) לממשק הצ'אט של **Claude Code for VS Code**. מיועד לדוברי עברית, ערבית ופרסית שרוצים יישור טקסט טבעי בשיחה עם Claude — מבלי לפגוע בבלוקי קוד או ברכיבי הממשק.

### 🤔 למה זה נחוץ?

תוסף Claude Code for VS Code המקורי חסר תמיכת RTL מובנית. הדבר גורם לעיתים קרובות ל:

- ❌ טקסט עברי, ערבי ופרסי שמוצג בצורה לא מיושרת
- ❌ קושי בקריאת שיחות בשפות מעורבות (קוד + טקסט RTL)
- ❌ התנהגות ממשק לא עקבית בפאנל הצ'אט

**Claude Code RTL Support** פותר בעיות אלה על ידי הזרקה חכמה של CSS לטיפול בכיווניות הטקסט — תוך שמירה קפדנית על LTR עבור בלוקי קוד ופלטי טרמינל.

### ✨ תכונות

| תכונה | תיאור |
|---|---|
| ▶️ הפעלת RTL | מזריק עיצוב CSS וכפתור מתג לממשק הצ'אט |
| 🔧 תיקון BiDi | מפעיל RTL ומתקן טקסט הפוך (למשל "םולש" → "שלום") |
| ⏹️ כיבוי RTL | משחזר קבצים מקוריים מגיבוי |
| 🗄️ שמירת גיבויים | יוצר עותקי גיבוי של הקבצים המקוריים לפני כל שינוי |
| ↩️ אפשרות הסרה | שחזור המצב המקורי בקלות בכל עת |
| 🔍 בדיקת סטטוס | מציג אילו התקנות פועלות עם RTL |
| 📊 שורת מצב | מציג את המצב הנוכחי בתחתית המסך — לחץ לניהול |

---

### 🆕 מה חדש (v0.2.0)

- **פקודת Fix BiDi** — פותרת את בעיית הטקסט ההפוך שבה מילים בעברית/ערבית/פרסית מופיעות מראה (למשל "םולש" במקום "שלום"). זה קורה כי Claude Code מזריק כלל CSS בעייתי `*{direction:ltr;unicode-bidi:bidi-override}` שכופה כיוון LTR על כל הטקסט. הפקודה החדשה **Fix BiDi** מפעילה RTL ומסירה את הכלל הבעייתי אוטומטית.

---

### 📋 דרישות

- [**Claude Code for VS Code**](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) — מותקן אוטומטית כתלות

---

### 💻 פלטפורמות נתמכות

| 🛠️ סביבות פיתוח |
|---|
| VS Code |
| Cursor |

---

### 🚀 איך להשתמש

#### 📊 אפשרות 1: שורת המצב

לאחר ההתקנה, מופיע פריט בשורת המצב בתחתית המסך:

| סטטוס | משמעות |
|---|---|
| `RTL: Active` ✅ | RTL מופעל ומוכן |
| `RTL: Inactive` ⭕ | RTL לא מותקן |
| `RTL: N/A` ❌ | התוסף לא נמצא |

**לחץ על פריט שורת המצב** כדי לפתוח תפריט עם אפשרויות הפעלה / כיבוי / סטטוס.

#### 🎯 אפשרות 2: לוח פקודות

לחץ `Ctrl+Shift+P` (מק: `Cmd+Shift+P`) וחפש:

| פקודה | פעולה |
|---|---|
| `Claude RTL: Activate RTL` | ▶️ הפעלת תמיכת RTL |
| `Claude RTL: Fix BiDi` | 🔧 הפעלת RTL + תיקון בעיות טקסט דו-כיווני |
| `Claude RTL: Deactivate RTL` | ⏹️ כיבוי ושחזור קבצים מקוריים |
| `Claude RTL: Check Status` | 🔍 הצגת מצב ההתקנה |

> 🔄 **החלון נטען מחדש אוטומטית** לאחר הפעלה / כיבוי כדי להחיל שינויים.

#### 💬 שימוש בצ'אט

לאחר הפעלה וטעינה מחדש:

1. פתח את פאנל הצ'אט
2. לחץ על הכפתור **⇄** בראש הצ'אט
3. הממשק יעבור לכיווניות מימין לשמאל — טקסט יישר לימין
4. לחץ שוב כדי לחזור לכיווניות רגילה

> 💡 **שים לב:** אם Claude Code התעדכן ו-RTL הפסיק לעבוד, פשוט הפעל שוב את **Claude RTL: Activate RTL**.

> 💡 **טיפ:** לא כל שיחה צריכה RTL — ניתן להחליט לכל שיחה בנפרד.
> לחץ ⇄ רק בשיחות שבהן אתה כותב בעברית, ערבית או פרסית.
> שיחות באנגלית בלבד ימשיכו בכיווניות רגילה.

---

### ↔️ מה משתנה במצב RTL?

| ✅ הופך לכיווניות מימין לשמאל | 🔒 נשאר בכיווניות רגילה |
|---|---|
| הודעות המשתמש | בלוקי קוד |
| תשובות טקסט של Claude | כלים ותוצאותיהם |
| רשימות ופסקאות | בלוק חשיבה |
| שאלות ותשובות בממשק | פקודות |
| | כפתורים וממשק |

---

### 🔧 פתרון בעיות

<details>
<summary><strong>❓ התוסף לא מוצא את Claude Code for VS Code</strong></summary>

- וודא שהתוסף "Claude Code for VS Code" מותקן
- בדוק סטטוס עם הפקודה `Claude RTL: Check Status`

</details>

<details>
<summary><strong>❓ השינויים לא נראים לאחר ההפעלה</strong></summary>

- טען חלון מחדש: `Ctrl+Shift+P` ← `Developer: Reload Window`
- או סגור ופתח מחדש את VS Code / Cursor

</details>

<details>
<summary><strong>❓ ה-RTL הפסיק לעבוד לאחר עדכון Claude Code</strong></summary>

- כשהתוסף "Claude Code for VS Code" מתעדכן, הוא מחליף את קבציו ותמיכת ה-RTL נמחקת
- הפעל שוב את הפקודה **Claude RTL: Activate RTL** כדי לשחזר אותה

</details>

<details>
<summary><strong>❓ טקסט עברי/ערבי מופיע הפוך (למשל "םולש" במקום "שלום")</strong></summary>

- זה נגרם על ידי כלל `bidi-override` ב-CSS של Claude Code שכופה כיוון LTR על כל הטקסט
- השתמש ב-**Claude RTL: Fix BiDi** במקום **Activate RTL** כדי לתקן את זה
- שים לב: הפעלת **Activate RTL** שוב תחזיר את הבעיה — השתמש ב-**Fix BiDi** בכל פעם

</details>

<details>
<summary><strong>❓ שגיאת הרשאות</strong></summary>

- **Windows:** נסה להריץ את VS Code כמנהל מערכת
- **macOS / Linux:** בדוק הרשאות קבצים בתיקיית ההרחבות

</details>

---

### 📄 רישיון

MIT — ראה קובץ [LICENSE](LICENSE) לפרטים.

</div>

[🔝 חזרה לראש](#claude-code-rtl-support)

</details>

---

<a id="arabic"></a>

<details>
<summary><strong>🇸🇦 عربية</strong></summary>

<div dir="rtl" lang="ar">

## 🇸🇦 عربية

إضافة لـ VS Code تضيف دعم اتجاه النص من اليمين إلى اليسار (RTL) لواجهة المحادثة في **Claude Code for VS Code**. مصممة لمتحدثي العربية والعبرية والفارسية الذين يريدون محاذاة طبيعية للنص عند التحدث مع Claude — دون التأثير على كتل الكود أو عناصر الواجهة.

### 🤔 لماذا هذا مطلوب؟

إضافة Claude Code for VS Code الأصلية تفتقر إلى دعم RTL المدمج. وهذا كثيرًا ما يؤدي إلى:

- ❌ ظهور النصوص العربية والعبرية والفارسية بمحاذاة غير صحيحة
- ❌ صعوبة قراءة المحادثات متعددة اللغات (كود + نص RTL)
- ❌ سلوك غير متسق لواجهة المستخدم في لوحة المحادثة

**Claude Code RTL Support** تحل هذه المشكلات عن طريق حقن CSS بذكاء للتعامل مع اتجاه النص — مع الحفاظ الصارم على LTR لكتل الكود ومخرجات الطرفية.

### ✨ الميزات

| الميزة | الوصف |
|---|---|
| ▶️ تفعيل RTL | تحقن تنسيقات CSS وزر تبديل في واجهة المحادثة |
| 🔧 إصلاح BiDi | تفعيل RTL وإصلاح النص المعكوس (مثل "ملاس" → "سلام") |
| ⏹️ إيقاف RTL | تستعيد الملفات الأصلية من النسخ الاحتياطية |
| 🗄️ حفظ النسخ الاحتياطية | تنشئ نسخًا احتياطية من الملفات الأصلية قبل أي تعديل |
| ↩️ إمكانية الإزالة | خيار لاستعادة الحالة الأصلية بسهولة في أي وقت |
| 🔍 فحص الحالة | يعرض التثبيتات التي تعمل بـ RTL |
| 📊 شريط الحالة | يعرض الحالة الحالية في أسفل الشاشة — انقر للإدارة |

---

### 🆕 ما الجديد (v0.2.0)

- **أمر Fix BiDi** — يحل مشكلة النص المعكوس حيث تظهر الكلمات العربية/العبرية/الفارسية بشكل معكوس (مثل "ملاس" بدلاً من "سلام"). يحدث هذا لأن Claude Code يحقن قاعدة CSS `*{direction:ltr;unicode-bidi:bidi-override}` التي تجبر كل النص على LTR. الأمر الجديد **Fix BiDi** يفعّل RTL ويزيل هذه القاعدة تلقائيًا.

---

### 📋 المتطلبات

- [**Claude Code for VS Code**](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) — يتم تثبيتها تلقائيًا كتبعية

---

### 💻 المنصات المدعومة

| 🛠️ بيئات التطوير |
|---|
| VS Code |
| Cursor |

---

### 🚀 طريقة الاستخدام

#### 📊 الخيار 1: شريط الحالة

بعد التثبيت، يظهر عنصر في شريط الحالة في أسفل المحرر:

| الحالة | المعنى |
|---|---|
| `RTL: Active` ✅ | RTL مفعّل وجاهز |
| `RTL: Inactive` ⭕ | RTL غير مثبت |
| `RTL: N/A` ❌ | الإضافة غير موجودة |

**انقر على عنصر شريط الحالة** لفتح قائمة بخيارات التفعيل / الإيقاف / الحالة.

#### 🎯 الخيار 2: لوحة الأوامر

اضغط `Ctrl+Shift+P` (ماك: `Cmd+Shift+P`) وابحث عن:

| الأمر | الإجراء |
|---|---|
| `Claude RTL: Activate RTL` | ▶️ تفعيل دعم RTL |
| `Claude RTL: Fix BiDi` | 🔧 تفعيل RTL + إصلاح مشاكل النص ثنائي الاتجاه |
| `Claude RTL: Deactivate RTL` | ⏹️ إيقاف الدعم واستعادة الملفات الأصلية |
| `Claude RTL: Check Status` | 🔍 عرض حالة التثبيت |

> 🔄 **يتم إعادة تحميل النافذة تلقائيًا** بعد التفعيل / الإيقاف لتطبيق التغييرات.

#### 💬 الاستخدام في المحادثة

بعد التفعيل وإعادة التحميل:

1. افتح لوحة المحادثة
2. اضغط على الزر **⇄** في أعلى المحادثة
3. ستتحول الواجهة إلى اتجاه من اليمين إلى اليسار — سيتم محاذاة النص إلى اليمين
4. اضغط على الزر مرة أخرى للعودة إلى الاتجاه العادي

> 💡 **ملاحظة:** إذا تحدّث Claude Code وتوقف RTL عن العمل، فقط شغّل **Claude RTL: Activate RTL** مرة أخرى.

> 💡 **نصيحة:** ليست كل المحادثات تحتاج RTL — يمكنك تفعيله لكل محادثة على حدة.
> استخدم ⇄ فقط في المحادثات التي تكتب فيها بالعربية أو العبرية أو الفارسية.
> المحادثات الإنجليزية فقط تبقى في الاتجاه العادي.

---

### ↔️ ماذا يتغير في وضع RTL؟

| ✅ يتحول إلى RTL | 🔒 يبقى LTR |
|---|---|
| رسائل المستخدم | كتل الكود |
| ردود نص Claude | الأدوات ونتائجها |
| القوائم والفقرات | كتلة التفكير |
| الأسئلة والأجوبة في الواجهة | الأوامر |
| | الأزرار والواجهة |

---

### 🔧 حل المشاكل

<details>
<summary><strong>❓ الإضافة لا تجد Claude Code for VS Code</strong></summary>

- تأكد من تثبيت إضافة "Claude Code for VS Code"
- تحقق من الحالة باستخدام الأمر `Claude RTL: Check Status`

</details>

<details>
<summary><strong>❓ التغييرات لا تظهر بعد التفعيل</strong></summary>

- أعد تحميل النافذة: `Ctrl+Shift+P` ← `Developer: Reload Window`
- أو أغلق VS Code / Cursor وأعد فتحه

</details>

<details>
<summary><strong>❓ توقف RTL عن العمل بعد تحديث Claude Code</strong></summary>

- عند تحديث إضافة "Claude Code for VS Code"، يتم استبدال ملفاتها وتُحذف تهيئة RTL
- شغّل الأمر **Claude RTL: Activate RTL** مرة أخرى لاستعادتها

</details>

<details>
<summary><strong>❓ النص العربي/العبري يظهر معكوسًا (مثل "ملاس" بدلاً من "سلام")</strong></summary>

- هذا بسبب قاعدة `bidi-override` في CSS الخاص بـ Claude Code التي تجبر اتجاه LTR على كل النص
- استخدم **Claude RTL: Fix BiDi** بدلاً من **Activate RTL** لإصلاح هذا
- ملاحظة: تشغيل **Activate RTL** مرة أخرى سيعيد المشكلة — استخدم **Fix BiDi** في كل مرة

</details>

<details>
<summary><strong>❓ خطأ في الصلاحيات</strong></summary>

- **Windows:** جرّب تشغيل VS Code كمسؤول
- **macOS / Linux:** تحقق من صلاحيات الملفات في مجلد الإضافات

</details>

---

### 📄 الترخيص

MIT — انظر ملف [LICENSE](LICENSE) للتفاصيل.

</div>

[🔝 Back to top](#claude-code-rtl-support)

</details>

---

<a id="persian"></a>

<details>
<summary><strong>🇮🇷 فارسی</strong></summary>

<div dir="rtl" lang="fa">

## 🇮🇷 فارسی

یک افزونه VS Code که پشتیبانی از جهت متن راست به چپ (RTL) را به رابط چت **Claude Code for VS Code** اضافه می‌کند. طراحی شده برای فارسی‌زبانان، عبری‌زبانان و عربی‌زبانانی که می‌خواهند تراز متن طبیعی هنگام چت با Claude داشته باشند — بدون تأثیر بر بلوک‌های کد یا عناصر رابط کاربری.

### 🤔 چرا این مورد نیاز است؟

افزونه اصلی Claude Code for VS Code فاقد پشتیبانی بومی RTL است. این اغلب منجر به موارد زیر می‌شود:

- ❌ نمایش نامرتب متن فارسی، عربی و عبری
- ❌ دشواری در خواندن مکالمات چندزبانه (کد + متن RTL)
- ❌ رفتار ناسازگار رابط کاربری در پنل چت

**Claude Code RTL Support** این مشکلات را با تزریق هوشمند CSS برای مدیریت جهت متن حل می‌کند — در حالی که LTR را برای بلوک‌های کد و خروجی‌های ترمینال کاملاً حفظ می‌کند.

### ✨ ویژگی‌ها

| ویژگی | توضیح |
|---|---|
| ▶️ فعال‌سازی RTL | CSS و یک دکمه تغییر را به رابط چت تزریق می‌کند |
| 🔧 رفع BiDi | فعال‌سازی RTL و رفع متن معکوس (مثلاً "ملاس" → "سلام") |
| ⏹️ غیرفعال‌سازی RTL | فایل‌های اصلی را از نسخه پشتیبان بازیابی می‌کند |
| 🗄️ ذخیره نسخه پشتیبان | قبل از هر تغییر، نسخه پشتیبان از فایل‌های اصلی ایجاد می‌کند |
| ↩️ امکان حذف | بازیابی آسان وضعیت اصلی در هر زمان |
| 🔍 بررسی وضعیت | نشان می‌دهد کدام نصب‌ها RTL فعال دارند |
| 📊 نوار وضعیت | وضعیت فعلی RTL را نمایش می‌دهد — برای مدیریت کلیک کنید |

---

### 🆕 تازه‌ها (v0.2.0)

- **دستور Fix BiDi** — مشکل متن معکوس را حل می‌کند که در آن کلمات فارسی/عربی/عبری به صورت آینه‌ای نمایش داده می‌شوند (مثلاً "ملاس" به جای "سلام"). این اتفاق می‌افتد زیرا Claude Code یک قاعده CSS `*{direction:ltr;unicode-bidi:bidi-override}` تزریق می‌کند که همه متن‌ها را به LTR مجبور می‌کند. دستور جدید **Fix BiDi** پشتیبانی RTL را فعال کرده و این قاعده مشکل‌ساز را به‌صورت خودکار حذف می‌کند.

---

### 📋 نیازمندی‌ها

- [**Claude Code for VS Code**](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) — به‌صورت خودکار به عنوان وابستگی نصب می‌شود

---

### 💻 پلتفرم‌های پشتیبانی‌شده

| 🛠️ محیط‌های توسعه |
|---|
| VS Code |
| Cursor |

---

### 🚀 نحوه استفاده

#### 📊 گزینه ۱: نوار وضعیت

پس از نصب، یک آیتم در نوار وضعیت پایین VS Code نمایش داده می‌شود:

| وضعیت | معنی |
|---|---|
| `RTL: Active` ✅ | RTL فعال و آماده است |
| `RTL: Inactive` ⭕ | RTL نصب نشده است |
| `RTL: N/A` ❌ | افزونه پیدا نشد |

**روی آیتم نوار وضعیت کلیک کنید** تا منویی با گزینه‌های فعال‌سازی / غیرفعال‌سازی / وضعیت باز شود.

#### 🎯 گزینه ۲: پالت فرمان

`Ctrl+Shift+P` (مک: `Cmd+Shift+P`) را فشار دهید و جستجو کنید:

| فرمان | عملکرد |
|---|---|
| `Claude RTL: Activate RTL` | ▶️ فعال‌سازی پشتیبانی RTL |
| `Claude RTL: Fix BiDi` | 🔧 فعال‌سازی RTL + رفع مشکلات متن دوجهته |
| `Claude RTL: Deactivate RTL` | ⏹️ غیرفعال‌سازی و بازیابی فایل‌های اصلی |
| `Claude RTL: Check Status` | 🔍 نمایش وضعیت نصب |

> 🔄 **پنجره به‌طور خودکار مجدداً بارگذاری می‌شود** پس از فعال‌سازی / غیرفعال‌سازی.

#### 💬 استفاده در چت

پس از فعال‌سازی و بارگذاری مجدد:

1. پانل چت را باز کنید
2. روی دکمه **⇄** در هدر چت کلیک کنید
3. رابط به RTL تغییر می‌کند — متن به سمت راست تراز می‌شود
4. برای بازگشت به LTR دوباره کلیک کنید

> 💡 **نکته:** اگر Claude Code به‌روزرسانی شد و RTL کار نکرد، کافیست **Claude RTL: Activate RTL** را دوباره اجرا کنید.

> 💡 **نکته:** همه مکالمات نیاز به RTL ندارند — می‌توانید آن را برای هر مکالمه جداگانه فعال کنید.
> از ⇄ فقط در مکالماتی استفاده کنید که به فارسی، عربی یا عبری می‌نویسید.
> مکالمات انگلیسی می‌توانند به حالت معمول LTR باقی بمانند.

---

### ↔️ چه چیزی در حالت RTL تغییر می‌کند؟

| ✅ تبدیل به RTL | 🔒 باقی می‌ماند LTR |
|---|---|
| پیام‌های کاربر | بلوک‌های کد |
| پاسخ‌های متنی Claude | فراخوانی‌های ابزار و نتایج |
| لیست‌ها و پاراگراف‌ها | بلوک‌های تفکر |
| بلوک‌های سوال/جواب | دستورات Slash |
| | دکمه‌ها و عناصر رابط کاربری |

---

### 🔧 عیب‌یابی

<details>
<summary><strong>❓ افزونه Claude Code for VS Code را پیدا نمی‌کند</strong></summary>

- مطمئن شوید که افزونه "Claude Code for VS Code" نصب شده است
- وضعیت را با دستور `Claude RTL: Check Status` بررسی کنید

</details>

<details>
<summary><strong>❓ تغییرات پس از فعال‌سازی نمایان نیستند</strong></summary>

- پنجره را مجدداً بارگذاری کنید: `Ctrl+Shift+P` ← `Developer: Reload Window`
- یا VS Code / Cursor را ببندید و دوباره باز کنید

</details>

<details>
<summary><strong>❓ RTL پس از به‌روزرسانی Claude Code کار نمی‌کند</strong></summary>

- هنگامی که افزونه "Claude Code for VS Code" به‌روزرسانی می‌شود، فایل‌هایش جایگزین شده و پشتیبانی RTL حذف می‌شود
- دوباره دستور **Claude RTL: Activate RTL** را اجرا کنید تا بازیابی شود

</details>

<details>
<summary><strong>❓ متن فارسی/عربی به صورت معکوس نمایش داده می‌شود</strong></summary>

- این به دلیل قاعده `bidi-override` در CSS مربوط به Claude Code است که جهت LTR را بر همه متن‌ها اعمال می‌کند
- به جای **Activate RTL** از **Claude RTL: Fix BiDi** استفاده کنید
- توجه: اجرای مجدد **Activate RTL** مشکل را بازمی‌گرداند — هر بار از **Fix BiDi** استفاده کنید

</details>

<details>
<summary><strong>❓ خطای مجوز</strong></summary>

- **Windows:** VS Code را به عنوان Administrator اجرا کنید
- **macOS / Linux:** مجوزهای فایل در پوشه افزونه‌ها را بررسی کنید

</details>

---

### 📄 مجوز

MIT — برای جزئیات فایل [LICENSE](LICENSE) را ببینید.

</div>

[🔝 Back to top](#claude-code-rtl-support)

</details>