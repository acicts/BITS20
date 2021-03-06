function alertmeeting() {
    alert('The meeting link will be released on 29th of June at 00.00am in the morning!');
}

function alertmeetinginfo() {
    alert('More info on the meeting will be released on 26th of June [Friday]!');
}

noContext = document.getElementById('noContextMenu');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }

    if (currentTheme === 'light') {
        toggleSwitch.checked = false;

    }
}

var dark = "Enable Dark mode"
var light = "Disable dark mode"


function textChangeDark() {
    document.getElementById("dark-light").innerHTML = dark
}

function textChangeLight() {
    document.getElementById("dark-light").innerHTML = light
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        textChangeDark();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        textChangeLight();
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);