const containers = document.getElementsByClassName('gridContainer')
const home = document.getElementById("home")
const nav = document.getElementById("nav")
const title = document.getElementById("title")
const iframe = document.getElementById('contentFrame')
var menu = document.getElementsByClassName('nav_item')

const home_btn = document.getElementById("home");
function home_page(){
    containers[0].style.gridTemplateColumns = "50% auto";
    home.style.fontSize = "76px"
    iframe.src="pages/blank.html"
    for( var b=0; b<menu.length; b++ )
    {
        menu[b].style.border=null;
    }
};
home_btn.addEventListener("click", home_page);

const about_btn = document.getElementById("about");
function about_page(){
    containers[0].style.gridTemplateColumns = "20% auto";
    home.style.fontSize = "50px"
    iframe.src="pages/about.html"
    for( var b=0; b<menu.length; b++ )
    {
        menu[b].style.border=null;
    }
    about_btn.style.border= "3px solid #ff0000"
};
about_btn.addEventListener("click", about_page);

const va_btn = document.getElementById("va");
function va_page(){
    containers[0].style.gridTemplateColumns = "20% auto";
    home.style.fontSize = "50px"
    iframe.src="pages/va.html"
    for( var b=0; b<menu.length; b++ )
    {
        menu[b].style.border=null;
    }
    va_btn.style.border= "3px solid #ff0000"
};
va_btn.addEventListener("click", va_page);

const doc_btn = document.getElementById("doc");
function doc_page(){
    containers[0].style.gridTemplateColumns = "20% auto";
    home.style.fontSize = "50px"

    iframe.src="pages/doc.html"
    for( var b=0; b<menu.length; b++ )
    {
        menu[b].style.border=null;
    }
    doc_btn.style.border= "3px solid #ff0000"
};
doc_btn.addEventListener("click", doc_page);

const narr_btn = document.getElementById("narr");
function narr_page(){
    containers[0].style.gridTemplateColumns = "20% auto";
    home.style.fontSize = "50px"
    iframe.src="pages/narr.html"
    for( var b=0; b<menu.length; b++ )
    {
        menu[b].style.border=null;
    }
    narr_btn.style.border= "3px solid #ff0000"
};
narr_btn.addEventListener("click", narr_page);

const cont_btn = document.getElementById("cont");
function cont_page(){
    containers[0].style.gridTemplateColumns = "20% auto";
    home.style.fontSize = "50px"
    iframe.src="pages/contact.html"
    for( var b=0; b<menu.length; b++ )
    {
        menu[b].style.border=null;
    }
    cont_btn.style.border= "3px solid #ff0000"
};
cont_btn.addEventListener("click", cont_page);

const cred_btn = document.getElementById("cred");
function cred_page(){
    containers[0].style.gridTemplateColumns = "50% auto";
    home.style.fontSize = "50px"
    iframe.src="pages/cred.html"
    for( var b=0; b<menu.length; b++ )
    {
        menu[b].style.border=null;
    }
    cred_btn.style.border= "2px solid #ff0000"
};
cred_btn.addEventListener("click", cred_page);
