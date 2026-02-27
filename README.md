# Claude Code RTL Support

**Adds RTL (Right-to-Left) text support for Hebrew and Arabic to the "Claude Code for VS Code" extension in VS Code and Cursor.**

---

## Features

- **Activate RTL** - Injects CSS and a toggle button into Claude Code for VS Code's chat interface
- **Deactivate RTL** - Restores original files from backup
- **Check Status** - Shows which Claude Code for VS Code installations have RTL enabled
- **Status Bar** - Shows current RTL state at a glance, click to manage

## How to Use

### Option 1: Status Bar

After installation, a status bar item appears at the bottom:

| Status | Meaning |
|---|---|
| `RTL: Active` | RTL is injected and ready |
| `RTL: Inactive` | RTL is not installed |
| `RTL: N/A` | Claude Code for VS Code extension not found |

**Click the status bar item** to open a menu with Activate / Deactivate / Status options.

### Option 2: Command Palette

Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) and search for:

- **Claude RTL: Activate RTL** - Enable RTL support
- **Claude RTL: Deactivate RTL** - Disable RTL support and restore original files
- **Claude RTL: Check Status** - View installation status

### After Activate/Deactivate

The window reloads automatically to apply changes.

### Using RTL in Claude Code for VS Code Chat

After activating RTL and reloading:

1. Open the Claude Code for VS Code chat panel
2. Click the **⇄** button in the chat header
3. The interface switches to RTL - text aligns to the right
4. Click again to return to LTR

## What Changes in RTL Mode?

### Becomes RTL:
- User messages
- Claude's text responses
- Lists and paragraphs
- Question/answer blocks

### Stays LTR:
- Code blocks
- Tool calls and results
- Thinking blocks
- Slash commands
- Buttons and UI elements

## Requirements

- [**Claude Code for VS Code**](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) (`anthropic.claude-code`) - installed automatically as a dependency

## Supported Platforms

- Windows
- macOS
- Linux
- WSL (Windows Subsystem for Linux)
- Cursor IDE

## Troubleshooting

### Extension doesn't find Claude Code for VS Code
- Make sure the "Claude Code for VS Code" extension is installed
- Check status with the `Claude RTL: Check Status` command

### Changes not visible after adding
- Reload the window: `Ctrl+Shift+P` > `Developer: Reload Window`
- Or close and reopen VS Code / Cursor completely

### Permission Denied
- On Windows: try running VS Code as Administrator
- On macOS/Linux: check file permissions on the extensions directory

## License

MIT - see [LICENSE](LICENSE) for details.

---

<div dir="rtl" lang="he">

## עברית

### תיאור

תוסף שמוסיף תמיכת כיווניות טקסט מימין לשמאל לתוסף<br>
**"Claude Code for VS Code"**<br>
מאפשר עבודה נוחה עם שפות עברית וערבית בצ'אט.

### מה התוסף עושה?

1. **מזריק עיצוב** - מוסיף כללי עיצוב שהופכים את הטקסט לכיווניות מימין לשמאל
2. **מוסיף כפתור מתג** - יוצר כפתור **⇄** בממשק להפעלה וכיבוי של מצב כיווניות
3. **שומר גיבויים** - יוצר עותקי גיבוי של הקבצים המקוריים לפני כל שינוי
4. **מאפשר הסרה** - אפשרות לשחזר את המצב המקורי בקלות
5. **שורת מצב** - מציג את המצב הנוכחי בתחתית המסך

### סביבות פיתוח

- VS Code
- Cursor

### דרישות

התוסף<br>
[Claude Code for VS Code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)<br>
חייב להיות מותקן. הוא מותקן אוטומטית כתלות.

### שימוש

#### אפשרות 1: שורת המצב

לאחר ההתקנה, מופיע פריט בשורת המצב בתחתית:

| סטטוס | משמעות |
|---|---|
| `RTL: Active` | מופעל ומוכן |
| `RTL: Inactive` | לא מותקן |
| `RTL: N/A` | התוסף לא נמצא |

**לחץ על פריט שורת המצב** כדי לפתוח תפריט עם אפשרויות הפעלה / כיבוי / סטטוס.

#### אפשרות 2: לוח פקודות

לחץ<br>
`Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)<br>
וחפש:

- `Claude RTL: Activate RTL` - הפעלת תמיכה
- `Claude RTL: Deactivate RTL` - כיבוי תמיכה ושחזור קבצים מקוריים
- `Claude RTL: Check Status` - הצגת מצב ההתקנה

### לאחר הפעלה או כיבוי

החלון נטען מחדש אוטומטית כדי להחיל שינויים.

### שימוש בצ'אט

לאחר הפעלה וטעינה מחדש:

1. פתח את פאנל הצ'אט
2. לחץ על הכפתור **⇄** בראש הצ'אט
3. הממשק יעבור לכיווניות מימין לשמאל - טקסט יישר לימין
4. לחץ שוב על הכפתור כדי לחזור לכיווניות רגילה

### מה משתנה?

**הופך לכיווניות מימין לשמאל:**
- הודעות המשתמש
- תשובות טקסט רגיל
- רשימות ופסקאות
- שאלות ותשובות בממשק

**נשאר בכיווניות רגילה:**
- בלוקי קוד
- כלים ותוצאותיהם
- בלוק חשיבה
- פקודות
- כפתורים וממשק

### פתרון בעיות

**התוסף לא מוצא את התוסף:**
- וודא שהתוסף מותקן
- בדוק סטטוס עם הפקודה<br>
`Claude RTL: Check Status`

**השינויים לא נראים:**
- טען חלון מחדש:<br>
`Ctrl+Shift+P` > `Developer: Reload Window`
- או סגור ופתח מחדש

**שגיאת הרשאות:**
- בווינדוס: נסה להריץ כמנהל
- במק או לינוקס: בדוק הרשאות קבצים בתיקיית ההרחבות

### רישיון

ראה קובץ<br>
[LICENSE](LICENSE)<br>
לפרטים.

</div>

---

<div dir="rtl" lang="ar">

## عربية

### الوصف

إضافة تضيف دعم اتجاه النص من اليمين إلى اليسار لإضافة<br>
**"Claude Code for VS Code"**<br>
مما يتيح العمل بسهولة مع اللغات العربية والعبرية في المحادثة.<br>
تعمل في<br>
VS Code<br>
و<br>
Cursor.

### ماذا تفعل الإضافة؟

1. **تحقن تنسيقات** - تضيف قواعد تصميم تحول النص إلى اتجاه من اليمين إلى اليسار
2. **تضيف زر تبديل** - تنشئ زرًا **⇄** في الواجهة لتفعيل وإيقاف وضع الاتجاه
3. **تحفظ نسخًا احتياطية** - تنشئ نسخًا احتياطية من الملفات الأصلية قبل أي تعديل
4. **تسمح بالإزالة** - خيار لاستعادة الحالة الأصلية بسهولة
5. **شريط الحالة** - يعرض الحالة الحالية في أسفل الشاشة

### المتطلبات

الإضافة<br>
[Claude Code for VS Code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)<br>
يجب أن تكون مثبتة. يتم تثبيتها تلقائيًا كتبعية.

### الاستخدام

#### الخيار 1: شريط الحالة

بعد التثبيت، يظهر عنصر في شريط الحالة في الأسفل:

| الحالة | المعنى |
|---|---|
| `RTL: Active` | مفعّل وجاهز |
| `RTL: Inactive` | غير مثبت |
| `RTL: N/A` | الإضافة غير موجودة |

**انقر على عنصر شريط الحالة** لفتح قائمة مع خيارات التفعيل / الإيقاف / الحالة.

#### الخيار 2: لوحة الأوامر

اضغط<br>
`Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)<br>
وابحث عن:

- `Claude RTL: Activate RTL`<br>
تفعيل الدعم
- `Claude RTL: Deactivate RTL`<br>
إيقاف الدعم واستعادة الملفات الأصلية
- `Claude RTL: Check Status`<br>
عرض حالة التثبيت

### بعد التفعيل أو الإيقاف

يتم إعادة تحميل النافذة تلقائيًا لتطبيق التغييرات.

### الاستخدام في المحادثة

بعد التفعيل وإعادة التحميل:

1. افتح لوحة المحادثة
2. اضغط على الزر **⇄** في أعلى المحادثة
3. ستتحول الواجهة إلى اتجاه من اليمين إلى اليسار - سيتم محاذاة النص إلى اليمين
4. اضغط على الزر مرة أخرى للعودة إلى الاتجاه العادي

### ماذا يتغير؟

**يتحول إلى اتجاه من اليمين إلى اليسار:**
- رسائل المستخدم
- إجابات نص عادي
- القوائم والفقرات
- الأسئلة والأجوبة في الواجهة

**يبقى في الاتجاه العادي:**
- كتل الكود
- الأدوات ونتائجها
- كتلة التفكير
- الأوامر
- الأزرار والواجهة

### حل المشاكل

**الإضافة لا تجد الإضافة الأخرى:**
- تأكد من تثبيت الإضافة
- تحقق من الحالة بأمر<br>
`Claude RTL: Check Status`

**التغييرات لا تظهر:**
- أعد تحميل النافذة:<br>
`Ctrl+Shift+P` > `Developer: Reload Window`
- أو أغلق وأعد الفتح

**خطأ في الصلاحيات:**
- في ويندوز: جرب التشغيل كمسؤول
- في ماك أو لينكس: تحقق من صلاحيات الملفات في مجلد الإضافات

### الترخيص

انظر ملف<br>
[LICENSE](LICENSE)<br>
للتفاصيل.

</div>
