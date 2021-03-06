(function() { 
  let header = document.querySelector(".wrapper-header");
  let isScrolling;
  let section = document.querySelectorAll('section');
  let sections = {};
  let sectionItem = 0;
  let home = document.querySelector(".home");

  window.addEventListener('scroll', function ( event ) {
    window.clearTimeout( isScrolling );

    isScrolling = setTimeout(function() {
      header.classList.add('fade-in');
    }, 50);

    if(isScrolling) {
      header.classList.remove('fade-in')
    }
  }, false);

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    for (sectionItem in sections) {
      if ((sections[sectionItem]) - 100 <= scrollPosition) {
        if (sectionItem === 'home') {
          header.classList.add('hidden')
        }
        else {
          header.classList.remove('hidden')
        }
      }
    }
  };

  var menuItem = document.querySelectorAll('.menu-item');
  var menuList = document.querySelector('.menu-list');
  var menuLang = document.querySelector('.menu-lang');
  var socialIcon = document.querySelector('.header-social');
  var cases2 = document.querySelector('.box2');
  // var casespan = document.querySelector('.cases-show')
  var modal = document.querySelector('.modal');  // Get the modal
  var modalCont = document.querySelector('.modal-content');
  var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
  
  document.getElementById("menu-icon-mobile").addEventListener("click", myFunction);
  document.getElementById("menu-item").addEventListener("click", myFunction2);
  document.getElementById("menu-item2").addEventListener("click", myFunction2);
  document.getElementById("menu-item3").addEventListener("click", myFunction2);
  document.getElementById("menu-item4").addEventListener("click", myFunction2);
  // document.getElementById("menu-item5").addEventListener("click", myFunction2);
  // document.getElementById("menu-item6").addEventListener("click", myFunction2);
  // document.getElementById("menu-item7").addEventListener("click", myFunction2);
  document.getElementById("case1").addEventListener("click", case1);
  document.getElementById("case2").addEventListener("click", case2);
  document.getElementById("case3").addEventListener("click", case3);
  document.getElementById("case4").addEventListener("click", case4);
  document.getElementById("case5").addEventListener("click", case5);
  document.getElementById("case6").addEventListener("click", case6);
 
  function myFunction() {
    menuList.classList.toggle('--drop-menu')
    menuLang.classList.toggle('--drop-lang')
    socialIcon.classList.toggle('--drop-social')
    menuItem.forEach((element) => {
      element.classList.add('--drop-item')
    });
  }

  function myFunction2() {
    menuList.classList.remove('--drop-menu')
    menuLang.classList.remove('--drop-lang')
    socialIcon.classList.toggle('--drop-social')
  };

  function case1() { 
    modal.classList.toggle('modal-show')
    modal.classList.add('modal-case1')
    modalCont.style.display="block"
  };

  function case2() { 
    modal.classList.toggle('modal-show')
    modal.classList.add('modal-case2')
    modalCont.style.display="block"
  };

  function case3() { 
    modal.classList.toggle('modal-show')
    modal.classList.add('modal-case3')
    modalCont.style.display="block"
  };

  function case4() { 
    modal.classList.toggle('modal-show')
    modal.classList.add('modal-case4')
    modalCont.style.display="block"
  };

  function case5() { 
    modal.classList.toggle('modal-show')
    modal.classList.add('modal-case5')
    modalCont.style.display="block"
  };

  function case6() { 
    modal.classList.toggle('modal-show')
    modal.classList.add('modal-case6')
    modalCont.style.display="block"
  };

  span.onclick = function() {
      modal.classList.remove('modal-show')
      modalCont.style.display="none"
      modal.classList.remove('modal-case1')
      modal.classList.remove('modal-case2')
      modal.classList.remove('modal-case3')
      modal.classList.remove('modal-case4')
      modal.classList.remove('modal-case5')
      modal.classList.remove('modal-case6')
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.classList.remove('modal-show');
          modalCont.style.display="none"
          modal.classList.remove('modal-case1')
          modal.classList.remove('modal-case2')
          modal.classList.remove('modal-case3')
          modal.classList.remove('modal-case4')
          modal.classList.remove('modal-case5')
          modal.classList.remove('modal-case6')
      }
  };

  window.addEventListener('scroll', function(){
    let section1, section2, section3, section4, animate;
    let section1Ofset, section2Ofset, section3Ofset, section4Ofset;
    
    section1 = document.getElementById('article-box1');
    
    section2 = document.getElementById('article-box2');
    
    section3 = document.getElementById('article-box3');
    
    section4 = document.getElementById('article-box4');

    section1Offset = (section1.parentNode.parentNode.parentNode.offsetTop + section1.offsetTop);
    section2Offset = (section2.parentNode.parentNode.parentNode.offsetTop + section2.offsetTop);
    section3Offset = (section3.parentNode.parentNode.parentNode.offsetTop + section3.offsetTop);
    section4Offset = (section4.parentNode.parentNode.parentNode.offsetTop + section4.offsetTop);

    
    if ((window.scrollY + 100) < section1Offset) {
      animate = document.querySelector('.article-box-animate');
      if (animate) {
        animate.classList.remove('article-box-animate');
      }
    }
        
    if ((window.scrollY + 100) >= section1Offset
       && (window.scrollY + 100) <= section2Offset) {
      animate = document.querySelector('.article-box-animate');
      if (animate) {
        animate.classList.remove('article-box-animate');
      }
      section1.querySelector('.article-box-span div').classList.add('article-box-animate');
    }
    
    if ((window.scrollY + 100) >= section2Offset
       && (window.scrollY + 100) <= section3Offset) {
      animate = document.querySelector('.article-box-animate');
      if (animate) {
        animate.classList.remove('article-box-animate');
      }
      section2.querySelector('.article-box-span div').classList.add('article-box-animate');
    }
    
    if ((window.scrollY + 100) >= section3Offset
       && (window.scrollY + 100) <= section4Offset) {
      animate = document.querySelector('.article-box-animate');
      if (animate) {
        animate.classList.remove('article-box-animate');
      }
      section3.querySelector('.article-box-span div').classList.add('article-box-animate');
    }
    
    if ((window.scrollY + 100) >= section4Offset) {
      animate = document.querySelector('.article-box-animate');
      if (animate) {
        animate.classList.remove('article-box-animate');
      }
      section4.querySelector('.article-box-span div').classList.add('article-box-animate');
    }
  });



function animeScroll() {
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

  animeScroll();

  window.addEventListener('scroll', function() {
    animeScroll();
  }) 

})();