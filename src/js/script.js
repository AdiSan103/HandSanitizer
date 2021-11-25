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

// foreach loops Add
function foreachLoopRemove(queryClassAll, classRemove, time) {
  // variabel
  let i = 0;
  let j = document.querySelectorAll(queryClassAll);
  // action
  for(let k = 0; k < j.length; k++){
      setTimeout(() => {
          j[k].classList.remove(classRemove);
      }, time * i);
      i++;
  }
}


//------------------- hamburger-menu ---------------------
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


// ---------------animate-------------------
// 1.banner
setTimeout(() => {
  removeClass('.banner h1', 'toUp');
  setTimeout(() => {
    removeClass('.banner h6', 'toUp');
    removeClass('.banner a', 'toUp');
  },200);
  setTimeout(() => {
    removeClass('.banner img', 'toLeft');
  }, 300);
}, 200);

window.addEventListener('scroll', () => {
  let thisScroll = this.scrollY;

  // content1
  if(thisScroll > queryClass('.content1').offsetTop - 200) {
    removeClass('.content1 .left li','toRight');
    removeClass('.content1 img', 'fade1');
    removeClass('.content1 .right li','toLeft');
  }

  // content2
  if(thisScroll > queryClass('.content2').offsetTop - 200) {
    removeClass('.content2 h2','toUp');
    removeClass('.content2 p', 'toUp');
    removeClass('.content2 .border1','toRight');
  }

  // content2-part-1 
  if(thisScroll > queryClass('.content2-part-1').offsetTop - 400) {
    removeClass('.content2-part-1','toUp');
  }
  // content2-part-2
  if(thisScroll > queryClass('.content2-part-2').offsetTop - 400) {
    removeClass('.content2-part-2','toUp');
  }
  
  // content2-part-3 
  if(thisScroll > queryClass('.content2-part-3').offsetTop - 400) {
    removeClass('.content2-part-3','toUp');
  }

  // content3
  if(thisScroll > queryClass('.content3').offsetTop - 200) {
    removeClass('.content3 h2','toUp');
    removeClass('.content3 p', 'toUp');
    removeClass('.content3 .border1','toRight');
    foreachLoopRemove('.content3 .card', 'toUp', 200);
  }

  // buy
  if(thisScroll > queryClass('.buy').offsetTop - 200) {
    removeClass('.buy h2','toUp');
    removeClass('.buy p', 'toUp');
    foreachLoopRemove('.buy .card', 'toUp', 200);
  }

})