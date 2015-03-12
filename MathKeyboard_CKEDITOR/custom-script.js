(function () {
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
            InsertText($(this).data("eq"));
            console.log(GetContents());
            $('#MathOutput').html(GetContents());
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        });

        table.append(btn);
    }
    table.append("</tr>");

    $(table).hide();
    
}());