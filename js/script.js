// кнопка страницу наверх 

jQuery(document).ready(function() {
var btn = $('#buttontothetop');  
$(window).scroll(function() {     
  if ($(window).scrollTop() > 100) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '100');
  });
});

// мобильное меню - показать

$(function() {
$('#menu-mobile__header_btn').on('click', function() {
  
  $('#menu-mobile__open_body').toggleClass('show');
})
});


// мобильное меню - спрятать
$(function() {
$('#menu-mobile__open_btn-close').on('click', function() {
  
  $('#menu-mobile__open_body').removeClass('show');
})
});

// servises popup 
//college open close
$(function() {
$('#btn-unit-college').on('click', function() {
  $('#popup-college').toggleClass('show');
 
})
});
$(function() {
$('.servises-popup__btn-close').on('click', function() {
  $('#popup-college').removeClass('show');
  
})
});
//university open close
$(function() {
$('#btn-unit-university').on('click', function() {
  $('#popup-university').toggleClass('show');
})
});
$(function() {
$('.servises-popup__btn-close').on('click', function() {
  
  $('#popup-university').removeClass('show');
})
});
  //translate open close
  $(function() {
    $('#btn-unit-translate').on('click', function() {
      $('#popup-translate').toggleClass('show');
    })
  });
  $(function() {
    $('.servises-popup__btn-close').on('click', function() {

      $('#popup-translate').removeClass('show');
    })
  });
  

// пакети кнопка вища освіта
$(function() {
  $('#tariffs__btn-vysh-osvita').on('click', function() {
    $('#page-ser-osvita').css('display', 'none');
    $('#page-vysh-osvita').css('display', 'flex');
    $('#page-movni-kursy').css('display', 'none');
  })
});
// пакети кнопка середня освіта
$(function() {
  $('#tariffs__btn-ser-osvita').on('click', function() {
    $('#page-ser-osvita').css('display', 'flex');
    $('#page-vysh-osvita').css('display', 'none');
    $('#page-movni-kursy').css('display', 'none');
  })
});

// пакети кнопка мовні курси
$(function() {
  $('#tariffs__btn-movni-kursy').on('click', function() {
    $('#page-ser-osvita').css('display', 'none');
    $('#page-vysh-osvita').css('display', 'none');
    $('#page-movni-kursy').css('display', 'flex');
  })
});

