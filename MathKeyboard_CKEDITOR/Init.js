CKEDITOR.config.width = 500;

function InsertText(text) {
    // Get the editor instance that we want to interact with.
    var editor = CKEDITOR.instances.MathInput;
    // Check the active editing mode.
    if (editor.mode == 'wysiwyg') {
        editor.insertText(text);
    }
    else
        alert('You must be in WYSIWYG mode!');
}

function GetContents() {
    var editor = CKEDITOR.instances.MathInput;
    return editor.getData();
}

function onFocus() {
    $('#math-table').show();
}

function onBlur() {
    $('#math-table').hide();
}