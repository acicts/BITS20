function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var titles = [];
var titleInput = document.getElementById("autoresizing");
var messageBox = document.getElementById("display");
function Allow()
{
if (!user.autoresizing.value.match(/[a-zA-Z]$/) && user.autoresizing.value !="")
{
user.title.value="";
alert("Please Enter only alphabets");
}
window.location.reload()
}
function insert () {
titles.push(titleInput.value);
clearAndShow();
}
function clearAndShow ()
{
titleInput.value = "";
messageBox.innerHTML = "";
messageBox.innerHTML += " " + titles.join("<br/> ") + "<br/>";
}

$('textarea').autoResize();