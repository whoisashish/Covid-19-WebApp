/*for header hiding*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-256px";
  }
  prevScrollpos = currentScrollPos;
}
function myFunction1() {
  var x = document.getElementById("demo")
  x.innerHTML = Math.floor((Math.random() * 60) + 1);
  document.getElementById("tobe10").style.display = "none";
  document.getElementById("disp").style.display = "block";
  document.getElementById("disp1").style.display = "block";
  document.getElementById("fin").style.display = "none";
  document.getElementById("card-holder").style.display = "none";
  document.getElementById("res").style.display = "block";
  document.getElementById("restart").style.display = "block";
}
function check1() {
  document.getElementById("tobe").style.display = "none";
  document.getElementById("tobe1").style.display = "block";
}
function check2() {
  document.getElementById("tobe1").style.display = "none";
  document.getElementById("tobe2").style.display = "block";
}
function check3() {
  document.getElementById("tobe2").style.display = "none";
  document.getElementById("tobe3").style.display = "block";
}
function check4() {
  document.getElementById("tobe3").style.display = "none";
  document.getElementById("tobe4").style.display = "block";
}
function check5() {
  document.getElementById("tobe4").style.display = "none";
  document.getElementById("tobe5").style.display = "block";
}
function check6() {
  document.getElementById("tobe5").style.display = "none";
  document.getElementById("tobe6").style.display = "block";
}
function check7() {
  document.getElementById("tobe6").style.display = "none";
  document.getElementById("tobe7").style.display = "block";
}
function check8() {
  document.getElementById("tobe7").style.display = "none";
  document.getElementById("tobe8").style.display = "block";
}
function check9() {
  document.getElementById("tobe8").style.display = "none";
  document.getElementById("tobe9").style.display = "block";
}
function check10() {
  document.getElementById("tobe9").style.display = "none";
  document.getElementById("tobe10").style.display = "block";
}


  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-43322397-2');

  let anchorlinks = document.querySelectorAll('a[href^="#"]')

  for (let item of anchorlinks) { // relitere
    item.addEventListener('click', (e) => {
      let hashval = item.getAttribute('href')
      let target = document.querySelector(hashval)
      target.scrollIntoView({
        behavior: 'smooth'
      })
      history.pushState(null, null, hashval)
      e.preventDefault()
    })
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
      $('.scrolltop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").click(function() {
      $("html,body").animate({
        scrollTop: $(".all").offset().top
      }, "1000");
      return false
    })
  })

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-256px";
    }
    prevScrollpos = currentScrollPos;
  }
