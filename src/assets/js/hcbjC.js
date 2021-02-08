function update() {
    try {
        var idoc = document.getElementById('iframe').contentWindow.document;
        idoc.open();
        idoc.write(editor.getValue());
        idoc.close();
    }
    catch (e) {
        return
    }
}

function setupEditor() {
    try {
        window.editor = ace.edit("editor");
        editor.setTheme("ace/theme/cobalt");
        editor.getSession().setMode("ace/mode/html");
        editor.setValue(`<!DOCTYPE html>
    <html>
    <head>
    </head>
    
    <body>
    </body>
    
    </html>`, 1); //1 = moves cursor to end

        editor.getSession().on('change', function () {
            update();
        });

        editor.focus();


        editor.setOptions({
            fontSize: "16pt",
            showLineNumbers: false,
            showGutter: false,
            vScrollBarAlwaysVisible: true,
            enableBasicAutocompletion: false, enableLiveAutocompletion: false
        });

        editor.setShowPrintMargin(false);
        editor.setBehavioursEnabled(false);
    }
    catch (e) {
        // Code jumps here when `alert()` fails.
        // `e` stores information about the error
        // If you don't want to put everything in the try/catch,
        // you can stop the function from continuing execution with
        return;
    }

}

setupEditor();
update();
