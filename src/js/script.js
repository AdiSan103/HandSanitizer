// query class
function queryClass(theSelector) {
    return document.querySelector(theSelector);
}

// add class
function addClass(theSelector, theClass) {
    return queryClass(theSelector).classList.add(theClass);
}

// remove class
function removeClass(theSelector, theClass) {
    return queryClass(theSelector).classList.remove(theClass);
}

// hamburger-menu
queryClass('.hamburger-menu1').addEventListener('click', function() {
    if(window.innerWidth < 992) {
        //cek class d-none
        if( queryClass('.nav').classList.contains('-translate-x-full') == true ) {
            removeClass('.nav','-translate-x-full')
        }  else {
            addClass('.nav','-translate-x-full')
        }
    }
})

queryClass('.hamburger-menu2').addEventListener('click', function() {
    if(window.innerWidth < 992) {
        //cek class d-none
        if( queryClass('.nav').classList.contains('-translate-x-full') == true ) {
            removeClass('.nav','-translate-x-full')
        }  else {
            addClass('.nav','-translate-x-full')
        }
    }
})