---
author: codellyson
pubDatetime: 2024-01-08
modDatetime: 2024-01-08T04:23:24.661Z
title: How to fix cursor auto move to the end of the editor in Tiptap react
slug: how-to-fix-tiptap-cursor-jump
featured: true
draft: false
tags:
  - react
  - tiptap
  - tips-and-tricks
  - fix
description:
   How to fix cursor auto move to the end of the editor in Tiptap react
---

## How to fix cursor auto move to the end of the editor in Tiptap react

### Problem

When you type in the editor, the cursor will auto move to the end of the editor.

### Solution 1

Thanks to this [issue]('https://github.com/ueberdosis/tiptap/issues/2940#issuecomment-1752701372').
We can use `isEmpty` to check if the editor is empty or not. If the editor is empty, we can use `setContent` to update the content of the editor.
`setContent` is used to update the content of the editor on component mount, if we continue to use it after component mount, the cursor will auto move to the end of the editor. So we need to check if the editor is empty or not before using it.

```tsx
  useEffect(() => {
    if (content && editor) {
       if(editor.isEmpty) {
         editor.commands.setContent(content);
       }
    }
  }, [content, editor]);
```

### Solution 2

Thanks to this [issue]('https://github.com/ueberdosis/tiptap/issues/2940#issuecomment-1720058369').
We can save the cursor position before updating the content and restore it after updating the content.

```tsx  
 useEffect(() => {
    if (content && editor) {
      // Save cursor position
      const { from, to } = editor.state.selection;

      // Update content
      editor.commands.setContent(content);

      // Restore cursor position
      const newFrom = Math.min(from, editor.state.doc.content.size);
      const newTo = Math.min(to, editor.state.doc.content.size);
      const textSelection = new TextSelection(
        editor.state.doc.resolve(newFrom),
        editor.state.doc.resolve(newTo)
      );
      editor.view.dispatch(editor.state.tr.setSelection(textSelection));
    }
  }, [content, editor]);
```
