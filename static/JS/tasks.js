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
var light = "Disble dark mode"


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
    }
    else { document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          textChangeLight();
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);







