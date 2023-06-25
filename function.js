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

// below are detail paragraphs from contact section
let p_address = document.getElementById("address-p");
let p_mail = document.getElementById("mail-p");
let p_call = document.getElementById("call-p");

// This section contains the portfolio navigation to select a given type of project
// on click of a list control filter all hard coded project by class list vanilla or wordpress or design

let portfolio_wrapper = document.getElementById("portfolio-wrapper");

let portfolio_wrapper_vanilla = portfolio_wrapper.getElementsByClassName("vanilla");
let portfolio_wrapper_wordpress = portfolio_wrapper.getElementsByClassName("wordpress");
// let portfolio_wrapper_design = portfolio_wrapper.getElementsByClassName("design");

// individual list nav

let allProject = document.getElementById("p1");
let vanilla = document.getElementById("p2");
let wordpress = document.getElementById("p3");
// let design = document.getElementById("p4");


// function to switch mode from light to dark mode
function changeMode(){
        if(btn_darkMode.style.backgroundImage == 'url("img/wb_sunny_icon.png")'){
            btn_darkMode.style.backgroundImage = 'url("img/nightlight_icon.png")';
            bodyTag.style.backgroundColor = 'white';
            bodyTag.style.color = 'black';
            btn_home_about.style.color = 'black';

            // portfolio nav list
            allProject.style.color = "black";
            vanilla.style.color = "black";
            wordpress.style.color = "black";
            // design.style.color = "black";

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
            p_address.style.color = "rgba(68, 68, 68, 0.820)";
            p_mail.style.color = "rgba(68, 68, 68, 0.820)";
            p_call.style.color = "rgba(68, 68, 68, 0.820)";
        }else{
            btn_darkMode.style.backgroundImage = 'url("img/wb_sunny_icon.png")';
            bodyTag.style.backgroundColor = 'black';
            bodyTag.style.color = 'white';
            btn_home_about.style.color = 'white';

            // portfolio nav list
            allProject.style.color = "white";
            vanilla.style.color = "white";
            wordpress.style.color = "white";
            // design.style.color = "white";
          

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
            // 
            p_address.style.color = "rgba(255, 255, 255, 0.712)";
            p_mail.style.color = "rgba(255, 255, 255, 0.712)";
            p_call.style.color = "rgba(255, 255, 255, 0.712)";
        }
        // console.log('working');
}

changeMode();
btn_darkMode.addEventListener("click", changeMode);

// Below includes all veriable for buttons and their child span tag from the desktop home section

let btn_home =document.getElementById("btn-home");
let span_btn_home =document.getElementById("desk-btn-home");
let btn_about =document.getElementById("btn-about");
let span_btn_about =document.getElementById("desk-btn-about");
let btn_portfolio =document.getElementById("btn-portfolio");
let span_btn_portfolio =document.getElementById("desk-btn-portfolio");
let btn_contact =document.getElementById("btn-contact");
let span_btn_contact =document.getElementById("desk-btn-contact");

// this button is linked to "MORE ABOUT ME" button from the home page section
let more_btn_about =document.getElementById("btn-home-about");
// Below includes all veriable for buttons from the mobile home section

let mobile_btn_home =document.getElementById("mobile-btn-home");
let mobile_btn_about =document.getElementById("mobile-btn-about");
let mobile_btn_portfolio =document.getElementById("mobile-btn-portfolio");
let mobile_btn_contact =document.getElementById("mobile-btn-contact");

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
    // this function calls the home section on the page
    row_home.style.display = "flex";
    row_about.style.display = "none";
    row_portfolio.style.display = "none";
    row_contact.style.display = "none";

    // this section is used to increase the width, add padding and display the span tag that holds the text for the home_btn
    
    btn_home.style.backgroundColor = "#ffb400";
    btn_home.getElementsByTagName("div")[0].style.backgroundColor ="#ffb400";
    btn_home.style.width = "125px";
    btn_home.style.paddingLeft = "20px";
    span_btn_home.style.display = "block";

    // muted #4b4b4b50
    btn_about.style.backgroundColor = "#4b4b4b50";
    btn_about.getElementsByTagName("div")[0].style.backgroundColor = "#4b4b4b50";

    btn_about.style.width = "auto";
    btn_about.style.paddingLeft = "0px";
    span_btn_about.style.display = "none";

    // muted
    btn_portfolio.style.backgroundColor = "#4b4b4b50";
    btn_portfolio.getElementsByTagName("div")[0].style.backgroundColor = "#4b4b4b50";

    btn_portfolio.style.width = "auto";
    btn_portfolio.style.paddingLeft = "0px";
    span_btn_portfolio.style.display = "none";

    // muted
    btn_contact.style.backgroundColor = "#4b4b4b50";
    btn_contact.getElementsByTagName("div")[0].style.backgroundColor = "#4b4b4b50";

    btn_contact.style.width = "auto";
    btn_contact.style.paddingLeft = "0px";
    span_btn_contact.style.display = "none";
});
btn_about.addEventListener("click",()=>{
    // this function calls the about section on the page
    row_home.style.display = "none";
    row_about.style.display = "block";
    row_portfolio.style.display = "none";
    row_contact.style.display = "none";
    btn_home.style.width = "40px";

    // muted
    btn_home.style.backgroundColor = "#4b4b4b50";
    btn_home.getElementsByTagName("div")[0].style.backgroundColor = "#4b4b4b50";

    btn_home.style.width = "auto";
    btn_home.style.paddingLeft = "0px";
    span_btn_home.style.display = "none";

    // this section is used to increase the width, add padding and display the span tag that holds the text for the about_btn
    btn_about.style.backgroundColor = "#ffb400";
    btn_about.getElementsByTagName("div")[0].style.backgroundColor = "#ffb400";
    btn_about.getElementsByTagName("div")[0].style.backgroundColor = "transparent";
    btn_about.style.width = "125px";
    btn_about.style.paddingLeft = "20px";
    span_btn_about.style.display = "block";

    // muted
    btn_portfolio.style.backgroundColor = "#4b4b4b50";
    btn_portfolio.getElementsByTagName("div")[0].style.backgroundColor ="#4b4b4b50";

    btn_portfolio.style.width = "auto";
    btn_portfolio.style.paddingLeft = "0px";
    span_btn_portfolio.style.display = "none";

    // muted
    btn_contact.style.backgroundColor = "#4b4b4b50";
    btn_contact.getElementsByTagName("div")[0].style.backgroundColor = "#4b4b4b50";

    btn_contact.style.width = "auto";
    btn_contact.style.paddingLeft = "0px";
    span_btn_contact.style.display = "none";

});
more_btn_about.addEventListener("click",()=>{
    // this function calls the about section on the page
    row_home.style.display = "none";
    row_about.style.display = "block";
    row_portfolio.style.display = "none";
    row_contact.style.display = "none";
    btn_home.style.width = "40px";

    // muted
    btn_home.style.backgroundColor = "#4b4b4b50";
    btn_home.getElementsByTagName("div")[0].style.backgroundColor = "#4b4b4b50";

    btn_home.style.width = "auto";
    btn_home.style.paddingLeft = "0px";
    span_btn_home.style.display = "none";

    // this section is used to increase the width, add padding and display the span tag that holds the text for the about_btn
    btn_about.style.backgroundColor = "#ffb400";
    btn_about.getElementsByTagName("div")[0].style.backgroundColor = "#ffb400";

    btn_about.style.width = "125px";
    btn_about.style.paddingLeft = "20px";
    span_btn_about.style.display = "block";

    // muted
    btn_portfolio.style.backgroundColor = "#4b4b4b50";
    btn_portfolio.getElementsByTagName("div")[0].style.backgroundColor = "#4b4b4b50";

    btn_portfolio.style.width = "auto";
    btn_portfolio.style.paddingLeft = "0px";
    span_btn_portfolio.style.display = "none";

    // muted
    btn_contact.style.backgroundColor = "#4b4b4b50";
    btn_contact.getElementsByTagName("div")[0].style.backgroundColor = "#4b4b4b50";

    btn_contact.style.width = "auto";
    btn_contact.style.paddingLeft = "0px";
    span_btn_contact.style.display = "none";

});
btn_portfolio.addEventListener("click",()=>{
    // this function calls the portfolio section on the page
    row_home.style.display = "none";
    row_about.style.display = "none";
    row_portfolio.style.display = "block";
    row_contact.style.display = "none";

    // muted
    btn_home.style.backgroundColor = "#4b4b4b50";
    btn_home.getElementsByTagName("div")[0].style.backgroundColor = "#4b4b4b50";
    btn_home.style.width = "auto";
    btn_home.style.paddingLeft = "0px";
    span_btn_home.style.display = "none";

    // muted
    btn_about.style.backgroundColor = "#4b4b4b50";
    btn_about.getElementsByTagName("div")[0].style.backgroundColor = "#4b4b4b50";
    btn_about.style.width = "auto";
    btn_about.style.paddingLeft = "0px";
    span_btn_about.style.display = "none";
    
    // this section is used to increase the width, add padding and display the span tag that holds the text for the portfolio_btn
    btn_portfolio.style.backgroundColor = "#ffb400";
    btn_portfolio.getElementsByTagName("div")[0].style.backgroundColor = "#ffb400";

    btn_portfolio.style.width = "125px";
    btn_portfolio.style.paddingLeft = "20px";
    span_btn_portfolio.style.display = "block";

    // muted
    btn_contact.style.backgroundColor = "#4b4b4b50";
    btn_contact.getElementsByTagName("div")[0].style.backgroundColor =  "#4b4b4b50";

    btn_contact.style.width = "auto";
    btn_contact.style.paddingLeft = "0px";
    span_btn_contact.style.display = "none";

});
btn_contact.addEventListener("click",()=>{
    // this function calls the contact section on the page
    row_home.style.display = "none";
    row_about.style.display = "none";
    row_portfolio.style.display = "none";
    row_contact.style.display = "block";

    // muted
    btn_home.style.backgroundColor = "#4b4b4b50";
    btn_home.getElementsByTagName("div")[0].style.backgroundColor =  "#4b4b4b50";
    btn_home.style.width = "auto";
    btn_home.style.paddingLeft = "0px";
    span_btn_home.style.display = "none";

    // muted
    btn_about.style.backgroundColor = "#4b4b4b50";
    btn_about.getElementsByTagName("div")[0].style.backgroundColor =  "#4b4b4b50";
    btn_about.style.width = "auto";
    btn_about.style.paddingLeft = "0px";
    span_btn_about.style.display = "none";
    
    // muted
    btn_portfolio.style.backgroundColor = "#4b4b4b50";
    btn_portfolio.getElementsByTagName("div")[0].style.backgroundColor =  "#4b4b4b50";
    btn_portfolio.style.width = "auto";
    btn_portfolio.style.paddingLeft = "0px";
    span_btn_portfolio.style.display = "none";

    // this section is used to increase the width, add padding and display the span tag that holds the text for the contact_btn
    btn_contact.style.backgroundColor = "#ffb400";
    btn_contact.getElementsByTagName("div")[0].style.backgroundColor = "#ffb400";
    btn_contact.style.width = "125px";
    btn_contact.style.paddingLeft = "20px";
    span_btn_contact.style.display = "block";
});



// Below are the events listers for mobile to toggle the section onclick of any button

mobile_btn_home.addEventListener("click",()=>{
    mobile_btn_home.style.backgroundColor="#ffb400";
    mobile_btn_about.style.backgroundColor="rgba(187, 187, 187, 0.3)";
    mobile_btn_portfolio.style.backgroundColor="rgba(187, 187, 187, 0.3)";
    mobile_btn_contact.style.backgroundColor="rgba(187, 187, 187, 0.3)";
    // 
    row_home.style.display = "flex";
    row_about.style.display = "none";
    row_portfolio.style.display = "none";
    row_contact.style.display = "none";

});
mobile_btn_about.addEventListener("click",()=>{
    mobile_btn_home.style.backgroundColor="rgba(187, 187, 187, 0.3)";
    mobile_btn_about.style.backgroundColor="#ffb400";
    mobile_btn_portfolio.style.backgroundColor="rgba(187, 187, 187, 0.3)";
    mobile_btn_contact.style.backgroundColor="rgba(187, 187, 187, 0.3)";
    // 
    row_home.style.display = "none";
    row_about.style.display = "block";
    row_portfolio.style.display = "none";
    row_contact.style.display = "none";

});
mobile_btn_portfolio.addEventListener("click",()=>{
    // rgba(187, 187, 187, 0.3)
    mobile_btn_home.style.backgroundColor="rgba(187, 187, 187, 0.3)";
    mobile_btn_about.style.backgroundColor="rgba(187, 187, 187, 0.3)";
    mobile_btn_portfolio.style.backgroundColor="#ffb400";

    mobile_btn_contact.style.backgroundColor="rgba(187, 187, 187, 0.3)";
    // 
    row_home.style.display = "none";
    row_about.style.display = "none";
    row_portfolio.style.display = "block";
    row_contact.style.display = "none";

});
mobile_btn_contact.addEventListener("click",()=>{
    mobile_btn_home.style.backgroundColor="rgba(187, 187, 187, 0.3)";
    mobile_btn_about.style.backgroundColor="rgba(187, 187, 187, 0.3)";
    mobile_btn_portfolio.style.backgroundColor="rgba(187, 187, 187, 0.3)";

    mobile_btn_contact.style.backgroundColor="#ffb400";
    // 
    row_home.style.display = "none";
    row_about.style.display = "none";
    row_portfolio.style.display = "none";
    row_contact.style.display = "block";

});



allProject.addEventListener("click",()=>{
    // portfolio_wrapper_vanilla[a].style.display = "flex";
    // alert("it works");

    // allProject.style.color = "#ffb400";
    // vanilla.style.color = "white";
    // wordpress.style.color = "white";
    // design.style.color = "white";

    if(btn_darkMode.style.backgroundImage == 'url("img/wb_sunny_icon.png")'){

        // this checks if the page is on light mode or dark mode 
        // portfolio nav list
        allProject.style.color = "#ffb400";
        vanilla.style.color = "white";
        wordpress.style.color = "white";
        // design.style.color = "white";

    }else{
        // portfolio nav list
        allProject.style.color = "#ffb400";
        vanilla.style.color = "black";
        wordpress.style.color = "black";
        // design.style.color = "black";

    }

    // this loops through all the project that has the class vanilla and gives all vanilla class display flex
    for(a = 0; a < portfolio_wrapper_vanilla.length; a++){
        portfolio_wrapper_vanilla[a].style.display = "flex";
        
    }
    // this loops through all the project that has the class wordpress and gives all wordpress class display flex
    for(v = 0; v < portfolio_wrapper_wordpress.length; v++){
        portfolio_wrapper_wordpress[v].style.display = "flex";
        
    }
    // this loops through all the project that has the class design and gives all design class display flex

    // for(d = 0; d < portfolio_wrapper_design.length; d++){
    //     portfolio_wrapper_design[d].style.display = "flex";
        
    // }
});

vanilla.addEventListener("click",()=>{

    // allProject.style.color = "white";
    // vanilla.style.color = "#ffb400";
    // wordpress.style.color = "white";
    // design.style.color = "white";

    if(btn_darkMode.style.backgroundImage == 'url("img/wb_sunny_icon.png")'){

        // this checks if the page is on light mode or dark mode 
        // portfolio nav list
        allProject.style.color = "white";
        vanilla.style.color = "#ffb400";
        wordpress.style.color = "white";
        // design.style.color = "white";

    }else{
        
        // portfolio nav list
        allProject.style.color = "black";
        vanilla.style.color = "#ffb400";
        wordpress.style.color = "black";
        // design.style.color = "black";
    }

    // this loops through all the project that has the class vanilla and gives all vanilla class display flex
    for(a = 0; a < portfolio_wrapper_vanilla.length; a++){
        portfolio_wrapper_vanilla[a].style.display = "flex";
        
    }
        // this loops through all the project that has the class wordpress and gives all wordpress class display none
    for(v = 0; v < portfolio_wrapper_wordpress.length; v++){
        portfolio_wrapper_wordpress[v].style.display = "none";
        
    }

    // this loops through all the project that has the class design and gives all design class display none
    // for(d = 0; d < portfolio_wrapper_design.length; d++){
    //     portfolio_wrapper_design[d].style.display = "none";
        
    // }
});

wordpress.addEventListener("click",()=>{

    // allProject.style.color = "white";
    // vanilla.style.color = "white";
    // wordpress.style.color = "#ffb400";
    // design.style.color = "white";

    if(btn_darkMode.style.backgroundImage == 'url("img/wb_sunny_icon.png")'){

        // this checks if the page is on light mode or dark mode 
        // portfolio nav list
        allProject.style.color = "white";
        vanilla.style.color = "white";
        wordpress.style.color = "#ffb400";
        // design.style.color = "white";
        
    }else{
        
        // portfolio nav list
        allProject.style.color = "black";
        vanilla.style.color = "black";
        wordpress.style.color = "#ffb400";
        // design.style.color = "black";
    }

    // this loops through all the project that has the class vanilla and gives all vanilla class display none
    for(a = 0; a < portfolio_wrapper_vanilla.length; a++){
        portfolio_wrapper_vanilla[a].style.display = "none";
        
    }

    // this loops through all the project that has the class wordpress and gives all wordpress class display flex
    for(v = 0; v < portfolio_wrapper_wordpress.length; v++){
        portfolio_wrapper_wordpress[v].style.display = "flex";
        
    }

    // this loops through all the project that has the class design and gives all design class display none

    // for(d = 0; d < portfolio_wrapper_design.length; d++){
    //     portfolio_wrapper_design[d].style.display = "none";
        
    // }
});

// uncomment here when you have added some design projects

// design.addEventListener("click",()=>{

//     allProject.style.color = "white";
//     vanilla.style.color = "white";
//     wordpress.style.color = "white";
//     design.style.color = "#ffb400";


// if(btn_darkMode.style.backgroundImage == 'url("img/wb_sunny_icon.png")'){

    // this checks if the page is on light mode or dark mode 
    // portfolio nav list
    // allProject.style.color = "white";
    // vanilla.style.color = "white";
    // wordpress.style.color = "white";
    // design.style.color = "#ffb400";

    // }else{
        // portfolio nav list
        // allProject.style.color = "black";
        // vanilla.style.color = "black";
        // wordpress.style.color = "black";
        // design.style.color = "#ffb400";
        
// }

//     for(a = 0; a < portfolio_wrapper_vanilla.length; a++){
//         portfolio_wrapper_vanilla[a].style.display = "none";
//         // il_list_Li2[i].style.color = "black";
        
//     }
//     for(v = 0; v < portfolio_wrapper_wordpress.length; v++){
//         portfolio_wrapper_wordpress[v].style.display = "none";
//         // il_list_Li2[i].style.color = "black";
        
//     }
//     for(d = 0; d < portfolio_wrapper_design.length; d++){
//         portfolio_wrapper_design[d].style.display = "flex";
//         // il_list_Li2[i].style.color = "black";
//         if( portfolio_wrapper_design.length == 0){
//             alert("Empty!");
//         }
        
//     }
// });


// This section holds the mouse effect
let cursor = document.querySelector(".cursor");

bodyTag.addEventListener("mouseover", ()=>{
    // this event displays the mouse and makes the div.cursor to follow the cursor pointer
    cursor.setAttribute("style", "display: 'block;'");
    document.addEventListener("mousemove", e =>{
        cursor.setAttribute("style", "top: "+(e.pageY - 11)+"px; left: "+(e.pageX - 11)+"px;")
    
    })
})

bodyTag.addEventListener("mouseout", ()=>{
    cursor.setAttribute("style", "display: 'none;'")

})


// this feature hides and shows the navigation when the user scrolls up the navigation becomes visible.

// this covers the complete navigation for mobile

// let mobileNav = document.getElementById("mobileNav");

// let prevScrollpos = window.pageYOffset;

// window.addEventListener("scroll" ,()=> {
// let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     mobileNav.style.bottom = "0";
//   } else {
//     mobileNav.style.bottom = "-400px";
//   }
//   prevScrollpos = currentScrollPos;
// });