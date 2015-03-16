(function () {
    // === IMPORTANT NOTICE ===
    // ========================
    // in the html head section
    // there is a call to the MathJax.Hub.Config
    // function with inlineMath as follows:
    // inlineMath: [ ["$","$"], ['`', '`'] , [' ', ' ']]
    // the third array of delimiters ARE NOT WHITESPACES
    // they are the character that is produced with ALT 0160
    // Hold down ALT then type 0160 (Alt+0160) on the number keypad 
    // at the right side of your keyboard.
    // this symbol => (Alt+0160) is invisible and we need it
    // in order to solve the problem with nesting mathematical
    // expressions. 
    // If we use ['`', '`'], ['$', '$'] or any other delimiters
    // to tell mathjax where is the math, there will be a problem 
    // with nesting the expression via the button clicks because
    // it will produce something like `\sqrt{`\frac{a}{a}`}`
    // and that will display the inner delimiters

    var keyboardButtons = [
        "\\frac{a}{b}",
        "\\sqrt{a}",
        "\\sqrt[b]{a}",
        "\\sqrt{\\frac{a}{b}}",
        "a^{bb}",
        "a_{bb}",
        "\\alpha",
       "\\beta",
        "\\gamma",
        "\\pi",
        "\\infty"
    ];

    // creates a table which holds the buttons
    // the buttons' value is the according math symbol
    // on button click the TeX command is inserted
    // at the current cursor position in the text editor

    var table = $("#math-table");

    table.append("<tr>");
    for (var i = 0; i < keyboardButtons.length; i++) {

        // we need '`' signs aroung the value 
        // in order for the equation to render properly
        // by mathjax
        //var val = " " + keyboardButtons[i] + " ";
        var val = "`" + keyboardButtons[i] + "`";
        // creating the button
        var btn = $("<td><button>" + val + "</button></td>");

        // attaching the value to the button in
        // order to get it later
        $(btn).data("eq", val);

        // button click inserts button's value
        // at the current cursor position in the editor
        // and updates the preview div's html
        // calling MathJax.Hub.Queue to make MathJax process the page again
        // in order to render the new mathematics
        // and see the end result
        $(btn).on('click', function () {
            tinymce.activeEditor.execCommand('mceInsertContent', false, $(this).data("eq"));
            tinymce.fire('onkeyup');
            $('#MathOutput').html(tinymce.activeEditor.getContent());
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        });

        table.append(btn);
    }
    table.append("</tr>");

    
}());