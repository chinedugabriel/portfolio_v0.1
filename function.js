// switch for dark mode veriable 
let btn_darkMode = document.getElementById("mode-switch");

// switch for body veriable 
let bodyTag = document.getElementById("main-body");

// button for downloading cv from the about section
let btn_home_about = document.getElementById("btn-home-about");

// banner for about section
let banner1 = document.getElementById("about-banner-span");

// banner for about section
let banner2 = document.getElementById("portfolio-banner-span");

// banner for contact section
let banner3 = document.getElementById("contact-banner-span");

// let list_info = document.getElementById("list-info");

let ul_list1 = document.getElementById("list1");
// the child list items (li) from ul#list1
let il_list_Li = ul_list1.querySelectorAll("li");
let ul_list2 = document.getElementById("list2");
// the child list items (li) from ul#list2
let il_list_Li2 = ul_list2.querySelectorAll("li");

// btn from list_info to download CV
let btn_downloadCV = document.getElementById("btn-download-cv");
// btn from list_info to download CV
let btn_sendMessage = document.getElementById("btn-sendMessage");

// job title from home section veriable
let job_title = document.getElementById("job-title");

// function to switch mode from light to dark mode
function changeMode(){
        if(btn_darkMode.style.backgroundImage == 'url("img/wb_sunny_icon.png")'){
            btn_darkMode.style.backgroundImage = 'url("img/nightlight_icon.png")';
            bodyTag.style.backgroundColor = 'white';
            bodyTag.style.color = 'black';
            btn_home_about.style.color = 'black';

                //  this loops through all the li in the ul#list1 & ul#list2 and changes there text color to black
            for(i = 0; i < il_list_Li.length; i++){
                il_list_Li[i].style.color = "black";
                il_list_Li2[i].style.color = "black";
                
            }
            btn_downloadCV.style.color = "black";
            job_title.style.color = "black";
            btn_sendMessage.style.color = "black";
            banner1.style.color = "rgba(68, 68, 68, 0.110)";
            banner2.style.color = "rgba(68, 68, 68, 0.110)";
            banner3.style.color = "rgba(68, 68, 68, 0.110)";
        }else{
            btn_darkMode.style.backgroundImage = 'url("img/wb_sunny_icon.png")';
            bodyTag.style.backgroundColor = 'black';
            bodyTag.style.color = 'white';
            btn_home_about.style.color = 'white';
          

            //  this loops through all the li in the ul#list1 & ul#list2 and changes there text color to white
            for(i = 0; i < il_list_Li.length; i++){
                il_list_Li[i].style.color = "white";
                il_list_Li2[i].style.color = "white";
            }

            btn_downloadCV.style.color = "white";
            job_title.style.color = "white";
            btn_sendMessage.style.color = "white";
            banner1.style.color = "rgba(255, 255, 255, 0.185)";
            banner2.style.color = "rgba(255, 255, 255, 0.185)";
            banner3.style.color = "rgba(255, 255, 255, 0.185)";
            
        }
        // console.log('working');
}

changeMode();
btn_darkMode.addEventListener("click", changeMode);

// Below includes all veriable for buttons from the desktop home section

let btn_home =document.getElementById("btn-home");
let btn_about =document.getElementById("btn-about");
let btn_portfolio =document.getElementById("btn-portfolio");
let btn_contact =document.getElementById("btn-contact");

// Below includes all section that would be hidden or shown 
// home section
let row_home = document.getElementById("row-home");
// about section
let row_about = document.getElementById("row-about");
// portfolio section
let row_portfolio = document.getElementById("row-portfolio");
// contact section
let row_contact = document.getElementById("row-contact");

// Below are the events listers for desktop to toggle the section onclick of any button

btn_home.addEventListener("click",()=>{
    row_home.style.display = "flex";
    row_about.style.display = "none";
    row_portfolio.style.display = "none";
    row_contact.style.display = "none";

})
btn_about.addEventListener("click",()=>{
    row_home.style.display = "none";
    row_about.style.display = "block";
    row_portfolio.style.display = "none";
    row_contact.style.display = "none";

})
btn_portfolio.addEventListener("click",()=>{
    row_home.style.display = "none";
    row_about.style.display = "none";
    row_portfolio.style.display = "block";
    row_contact.style.display = "none";

})
btn_contact.addEventListener("click",()=>{
    row_home.style.display = "none";
    row_about.style.display = "none";
    row_portfolio.style.display = "none";
    row_contact.style.display = "block";

})