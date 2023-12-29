const dreaming_more = document.getElementById("dreaming_more")
function dreaming_more_func(){
    document.getElementById('dream_more_text').style.display = 'block'
    document.getElementById('dream_less_text').style.display = 'none'
};
dreaming_more.addEventListener("click", dreaming_more_func);

const dreaming_less = document.getElementById("dreaming_less")
function dreaming_less_func(){
    document.getElementById('dream_more_text').style.display = 'none'
    document.getElementById('dream_less_text').style.display = 'block'
};
dreaming_less.addEventListener("click", dreaming_less_func);



const asian_more = document.getElementById("asian_more")
function asian_more_func(){
    document.getElementById('asian_more_text').style.display = 'block'
    document.getElementById('asian_less_text').style.display = 'none'
};
asian_more.addEventListener("click", asian_more_func);

const asian_less = document.getElementById("asian_less")
function asian_less_func(){
    document.getElementById('asian_more_text').style.display = 'none'
    document.getElementById('asian_less_text').style.display = 'block'
};
asian_less.addEventListener("click", asian_less_func);