var Terminal;

const GreetingMessage = " \/$$      \/$$ \/$$$$$$$$ \/$$$$$$$  \/$$$$$$$   \/$$$$$$ \r\n| $$  \/$ | $$| $$_____\/| $$__  $$| $$__  $$ \/$$__  $$\r\n| $$ \/$$$| $$| $$      | $$  \\ $$| $$  \\ $$| $$  \\__\/\r\n| $$\/$$ $$ $$| $$$$$   | $$$$$$$ | $$$$$$$\/|  $$$$$$ \r\n| $$$$_  $$$$| $$__\/   | $$__  $$| $$____\/  \\____  $$\r\n| $$$\/ \\  $$$| $$      | $$  \\ $$| $$       \/$$  \\ $$\r\n| $$\/   \\  $$| $$$$$$$$| $$$$$$$\/| $$      |  $$$$$$\/\r\n|__\/     \\__\/|________\/|_______\/ |__\/       \\______\/ \r\n[[;red;]WEBPS] - Current Version: 1.0.0\r\nDo you need help with commands? just write \"help\" in the Command Input!\r\n";

const Text = `
[[;red;]output@WEBPS] ───► List of all Commands for WEBPS

jailbreak <fw_version> <method>   Jailbreak's your console based on which version you have
listfirmwares                     Fetches a list of Firmwares in the Database
getfirmware <fw_version>          Download's a Firmware Version on to your current PC, Example
discord                           Redirects to the main discord invite for this utility
credits                           Shows the credits for WEBPS (Includes Libraries & Sources)
`;

const Credits = `
[[;red;]output@WEBPS] ───► Lithium Development, Repo Owners of WEBPS
Discord Invite: https://www.discord.com/invite/mkxT3czQCZ
GitHub URL: https://www.github.com/

Lead Developer: yxild
Developer: Soulzay
Tester: ???
`;

$(function() {
    Terminal = $('#terminal').terminal({
        help: function() {
            Terminal.echo(Text);
        },
        discord: function() {
            Terminal.echo("[[;red;]output@WEBPS] ───► Redirecting to discord server...");
            window.location.assign('http://www.discord.com/invite/mkxT3czQCZ')
        },
        credits: function() {
            Terminal.echo(Credits);
        }
    }, {
        greetings: GreetingMessage,
        prompt: "┌─ [[;red;]guest@WEBPS] ──[~]\n└───► ",
        clear: true,
        wrap: true,
    });
});