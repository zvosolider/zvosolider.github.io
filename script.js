document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById("output");
    const commandInput = document.getElementById("commandInput");

    function printOutput(outputText) {
        output.innerHTML += "<div>" + outputText + "</div>";
        output.scrollTop = output.scrollHeight;
    }

    function processCommand(command) {
        switch(command) {
            case "help":
                printOutput("<b>uname -a</b>  > shows information");
                printOutput("<b>neofetch</b> > shows more information");
                printOutput("<b>clear</b> ᅠ ᅠ ᅠ > clears screen");
                printOutput("<b>ls</b> ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ > shows files in directory")
                printOutput("<b>cat</b> ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ> shows file content")
                break;

            case "uname -a":
                let currentDate = new Date();
                printOutput("Linux arch 6.8.9-arch1-1 #1 SMP PREEMPT_DYNAMIC Tue, 11 Sep 2001 08:46:24 -5000 x86_64 GNU/Linux<br><br>");
                break;

            case "neofetch":
                printOutput("<br>───▐▀▄──────▄▀▌───▄▄▄▄▄▄▄ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ <b>guest@lolz</b><br>───▌▒▒▀▄▄▄▄▀▒▒▐▄▀▀▒██▒██▒▀▀▄ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ------------<br>──▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ<b>OS:</b> Arch Linux x86_64<br>──▌▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ<b>Kernel:</b> 6.8.9-arch1-1<br>▀█▒▒█▌▒▒█▒▒▐█▒▒▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌  ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ<b>Shell:</b> zsh 5.9<br>▀▌▒▒▒▒▒▀▒▀▒▒▒▒▒▀▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐ ▄▄ ᅠ ᅠ ᅠ  <b>WM:</b> bspwm<br>▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄█▒█ ᅠ ᅠ ᅠ  <b>Terminal:</b> kitty<br>▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀  ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ ᅠ <b>Memory:</b> 7813MiB<br>──▐▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▌ <br>────▀▄▄▀▀▀▀▄▄▀▀▀▀▀▀▄▄▀▀▀▀▀▀▄▄▀ <br><br>");
                break;

            case "clear":
                output.innerHTML = "";
                break;

            case "cat about_me.txt":
                printOutput("dumb programmer from <b>russia</b>");
                printOutput("main languages: <b>ru, en</b>");
                printOutput("programming languages: <b>python, c#</b> (and more)")
                printOutput("<b>arch linux user btw</b><br><br>");
                printOutput("<b>contacts:</b>");
                printOutput('<b>telegram: </b><a href="https://t.me/pablusha">@pablusha</a>');
                printOutput("<b>discord: </b>pablusha");
                printOutput('<b>github: </b><a href="https://github.com/pablushaa">pablushaa</a>')
                break;

            case "ls":
                printOutput("<b>about_me.txt</b>");
                break;

            default:
                printOutput('Unknown command "' + command + '"')
        }
    }

    commandInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const command = commandInput.value.trim();
            if (command !== "") {
                printOutput("<div>> " + command + "</div>");
                processCommand(command);
                commandInput.value = "";
            }
        }
    });

    printOutput("<div>welcome to arch linux! uwu</div>");
    printOutput("<div>enter <b>'help'</b> to see list of commands</div><br>");
});
