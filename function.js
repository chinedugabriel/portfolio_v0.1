// switch for dark mode veriable 
let btn_darkMode = document.getElementById("mode-switch");
// switch for body veriable 
let bodyTag = document.getElementById("main-body");
let btn_home_about = document.getElementById("btn-home-about");
// btn_darkMode.style.backgroundImage == 'url("img/wb_sunny_icon.png")';
// function to switch mode from light to dark mode
function changeMode(){
        if(btn_darkMode.style.backgroundImage == 'url("img/wb_sunny_icon.png")'){
            btn_darkMode.style.backgroundImage = 'url("img/nightlight_icon.png")';
            bodyTag.style.backgroundColor = 'white';
            bodyTag.style.color = 'black';
            btn_home_about.style.color = 'black';
        }else{
            btn_darkMode.style.backgroundImage = 'url("img/wb_sunny_icon.png")';
            bodyTag.style.backgroundColor = 'black';
            bodyTag.style.color = 'white';
            btn_home_about.style.color = 'white';
            
        }
        // console.log('working');
}

changeMode();
btn_darkMode.addEventListener("click", changeMode)