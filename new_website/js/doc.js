const srei_more = document.getElementById("srei_more")
function srei_more_func(){
    document.getElementById('srei_less_thumbnail').style.display = 'none'
    document.getElementById('srei_less_text').style.display = 'none'
    document.getElementById('srei_more_text').style.display = 'block'
    
};
srei_more.addEventListener("click", srei_more_func);

const srei_less = document.getElementById("srei_less")
function srei_less_func(){
    document.getElementById('srei_more_text').style.display = 'none'
    document.getElementById('srei_less_text').style.display = 'block'
    document.getElementById('srei_less_thumbnail').style.display = 'inline'
    
};
srei_less.addEventListener("click", srei_less_func);


