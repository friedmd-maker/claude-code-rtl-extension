/** Marker at the beginning of injected CSS block */
export const RTL_START_MARKER =
    '/* RTL Text Support for Claude Code VS Code / Cursor Extension - Added by script */';

/** Marker at the end of injected CSS block */
export const RTL_END_MARKER =
    '/* End RTL Text Support for Claude Code VS Code / Cursor Extension */';

/** Marker at the beginning of injected JS block */
export const JS_START_MARKER = '/* RTL Toggle Button - Added by script */';

/** Marker at the end of injected JS block */
export const JS_END_MARKER = '/* End RTL Toggle Button */';

/** Marker to identify RTL mode inside injected CSS */
export const RTL_MODE_ACTIVE_MARKER = '/* RTL-MODE: active */';
export const RTL_MODE_ALWAYS_MARKER = '/* RTL-MODE: always */';

/** RTL CSS rules to inject — identical to Python RTL_CSS_RULES */
export const RTL_CSS_RULES = `
/* RTL Text Support for Claude Code VS Code / Cursor Extension - Added by script */
/* RTL-MODE: active */

/* ==========================================
   Toggle button - always visible
   ========================================== */

#yby-rtl-btn {
    font-size: 14px;
    font-weight: bold;
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: transparent;
    color: var(--vscode-foreground);
    opacity: 0.5;
    transition: opacity 0.2s, background 0.2s;
    flex-shrink: 0;
}

#yby-rtl-btn:hover {
    opacity: 1;
}

#yby-rtl-btn.yby-active {
    opacity: 1;
    background: var(--vscode-button-background, rgba(128, 128, 128, 0.3));
}

/* ==========================================
   RTL - Hebrew/Arabic content (active when .YBYrtl is on #root)
   ========================================== */

/* Messages container + user messages */
.YBYrtl [class*="messagesContainer_"] {
    direction: rtl;
}

.YBYrtl [class*="userMessage_"],
.YBYrtl [class*="userMessageContainer_"] {
    direction: rtl;
    unicode-bidi: plaintext;
    text-align: right !important;
    align-items: flex-end !important;
    margin-left: auto !important;
    margin-right: 0 !important;
}

.YBYrtl [class*="content_"][class*="xGDvVg"],
.YBYrtl [class*="content_"] > span {
    unicode-bidi: plaintext;
}

/* Claude's markdown responses (excluding thinking block) */
.YBYrtl [class*="root_"]:not([class*="thinkingContent_"] [class*="root_"]) {
    direction: rtl;
    unicode-bidi: plaintext;
}

.YBYrtl [class*="root_"]:not([class*="thinkingContent_"] [class*="root_"]) > :is(p, ul, ol, h1, h2, h3, h4, blockquote),
.YBYrtl [class*="root_"]:not([class*="thinkingContent_"] [class*="root_"]) > :is(ul, ol) li {
    text-align: right;
}

.YBYrtl [class*="root_"]:not([class*="thinkingContent_"] [class*="root_"]) a {
    unicode-bidi: plaintext;
}

/* Question/answer blocks */
.YBYrtl [class*="questionBlock_"],
.YBYrtl [class*="questionHeader_"],
.YBYrtl [class*="answerText_"],
.YBYrtl [class*="optionText_"],
.YBYrtl [class*="optionContent_"] {
    direction: rtl;
    unicode-bidi: plaintext;
}

/* ==========================================
   LTR overrides - Code, Tools, UI
   ========================================== */

.YBYrtl [class*="slashCommandMessage_"],
.YBYrtl [class*="slashCommandResultMessage_"],
.YBYrtl [class*="header_"][class*="aqhumA"],
.YBYrtl [class*="sessionsButtonText_"],
.YBYrtl [class*="dotSuccess_"],
.YBYrtl [class*="dotFailure_"],
.YBYrtl [class*="dotProgress_"],
.YBYrtl [class*="dotWarning_"],
.YBYrtl [class*="progressContent_"],
.YBYrtl [class*="inputContainer_"][class*="cKsPxg"],
.YBYrtl [class*="messageInput_"],
.YBYrtl [class*="inputWrapper_"],
.YBYrtl [class*="iconButton_"],
.YBYrtl [class*="copyButton_"],
.YBYrtl [class*="actionButton_"],
.YBYrtl [class*="selectionAttachment_"],
.YBYrtl [class*="attachmentInfo_"],
.YBYrtl [class*="attachmentText_"],
.YBYrtl [class*="permissionRequest"],
.YBYrtl [class*="errorMessage_"],
.YBYrtl [class*="secondaryLine_"],
.YBYrtl [class*="todoListContainer_"],
.YBYrtl [class*="todoList_"],
.YBYrtl [class*="todoItem_"],
.YBYrtl [class*="auth_"],
.YBYrtl [class*="authUrl"] {
    direction: ltr !important;
}

/* Code blocks - LTR + alignment */
.YBYrtl pre,
.YBYrtl code,
.YBYrtl [class*="codeBlockWrapper_"] {
    direction: ltr !important;
    unicode-bidi: isolate !important;
    text-align: left !important;
}

/* Tool containers - LTR + alignment */
.YBYrtl [class*="toolUse_"],
.YBYrtl [class*="toolSummary_"],
.YBYrtl [class*="toolBody_"],
.YBYrtl [class*="toolBodyGrid_"],
.YBYrtl [class*="toolBodyRow_"],
.YBYrtl [class*="toolBodyRowContent_"],
.YBYrtl [class*="toolBodyRowLabel_"],
.YBYrtl [class*="toolResult_"],
.YBYrtl [class*="toolNameText_"],
.YBYrtl [class*="toolReference_"] {
    direction: ltr !important;
    unicode-bidi: isolate !important;
    text-align: left !important;
}

/* Thinking block - LTR + alignment */
.YBYrtl [class*="thinking_"],
.YBYrtl [class*="thinkingContent_"],
.YBYrtl [class*="thinkingContainer_"],
.YBYrtl [class*="thinkingHeader_"],
.YBYrtl [class*="spinnerRow_"],
.YBYrtl [class*="timelineMessage_"]:has([class*="thinking_"]) {
    direction: ltr !important;
    unicode-bidi: isolate !important;
    text-align: left !important;
}

.YBYrtl [class*="thinkingContent_"] [class*="root_"] :is(ul, ol, li) {
    direction: ltr !important;
    text-align: left !important;
}

/* End RTL Text Support for Claude Code VS Code / Cursor Extension */
`;

/** RTL JS toggle button code — identical to Python RTL_JS_CODE */
export const RTL_JS_CODE = `
/* RTL Toggle Button - Added by script */
(function() {
    var BTN_ID = 'yby-rtl-btn';
    var ROOT_CLASS = 'YBYrtl';

    function tryInsertButton() {
        if (document.getElementById(BTN_ID)) return;
        var header = document.querySelector('[class*="header_"]');
        if (!header) return;

        var btn = document.createElement('button');
        btn.id = BTN_ID;
        btn.textContent = '\\u21C4';
        btn.title = 'Toggle RTL mode';

        btn.addEventListener('click', function() {
            var root = document.getElementById('root');
            if (!root) return;
            var isActive = root.classList.toggle(ROOT_CLASS);
            btn.classList.toggle('yby-active', isActive);
        });

        header.appendChild(btn);
    }

    // Wait for React to render the header
    var observer = new MutationObserver(function() {
        tryInsertButton();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    if (document.readyState !== 'loading') {
        tryInsertButton();
    } else {
        document.addEventListener('DOMContentLoaded', tryInsertButton);
    }
})();
/* End RTL Toggle Button */
`;

/**
 * Generate CSS rules for "Always" mode — no `.YBYrtl` class dependency, no button styles.
 */
export function generateAlwaysCssRules(): string {
    let css = RTL_CSS_RULES;

    // Replace mode marker
    css = css.replace(RTL_MODE_ACTIVE_MARKER, RTL_MODE_ALWAYS_MARKER);

    // Remove button styling section
    css = css.replace(
        /\/\* =+\s*\n\s*Toggle button - always visible\s*\n\s*=+ \*\/[\s\S]*?#yby-rtl-btn\.yby-active\s*\{[^}]*\}/,
        '',
    );

    // Remove `.YBYrtl ` prefix from all selectors
    css = css.replace(/\.YBYrtl\s+/g, '');

    return css;
}
