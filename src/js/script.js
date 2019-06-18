//=======User js=============
$(document).ready(function() {
  $('.header_top_lang_item').click(function () {
    // console.log( "clicked!" );
    $('.header_top_lang_item').removeClass('active');
    $(this).addClass('active');
  });
  /*================== TOP MENU =====================*/
  $('.header_top').mousemove(function (e) {
    $('.header_bottom_main-menu_item').removeClass('active');
  });

  $('.header_middle').mousemove(function (e) {
    $('.header_bottom_main-menu_item').removeClass('active');
  });

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };

  }

  var elMainMenu = document.querySelector('.header_bottom');

  function collapseMainMenu(e) {
    // console.log(`collapseMainMenu: ${e.pageY - getCoords(elMainMenu).top}`);
    if ((e.pageY - getCoords(elMainMenu).top) > 600) {
      $('.header_bottom_main-menu_item').removeClass('active');
    }
  }

  document.addEventListener("mousemove", collapseMainMenu);


  $('.header_bottom_main-menu_item').hover(function(e) {

        if($(this).hasClass('lvl-2')) {
          // console.log('lvl-2 removed!');
          $('.header_bottom_main-menu_item[data-menu-lvl-2="true"]').removeClass('active');
          $(this).attr('data-menu-lvl-2', false);
        } else if ($(this).hasClass('lvl-3')) {
          // console.log('lvl-3 removed!');
          $('.header_bottom_main-menu_item[data-menu-lvl-3="true"]').removeClass('active');
          $(this).attr('data-menu-lvl-3', false);
        } else {
          // console.log('lvl-1 removed!');
          $('.header_bottom_main-menu_item[data-menu-lvl-1="true"]').removeClass('active');
          $(this).attr('data-menu-lvl-1', false);
        }


        $(this).addClass('active');

        if(!$(this).hasClass('lvl-2') || !$(this).hasClass('lvl-3')) {
          $(this).attr('data-menu-lvl-1', true);
        } else if($(this).hasClass('lvl-2')) {
          $(this).attr('data-menu-lvl-2', true);
        } else {
          $(this).attr('data-menu-lvl-3', true);
        }

      }, function(e){
        // $(this).removeClass('active');
      }
  );

  // $('.header_bottom_main-menu_item').mouseenter(function (e) {
  //       $(this).addClass('active')
  //     }
  // );
  // $('.header_bottom_main-menu_item').mouseleave(function (e) {
  //       $(this).removeClass('active')
  //     }
  // );


  $('.btn-reset').click(function () {
    $('.sidemenu2 ').removeClass('slidein')
  });

  //Slider
  $('.big-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false
    // centerMode: true,
    // variableWidth: true
  });
  $('.slider-apply').slick({
    infinite: false,
    dots: true,
    // variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.photo-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1
  });
  //Goods-icons
  $('.main_goods_item_img-icon').mouseenter(function (event) {
    $('.main_goods_item_img-icon').removeClass('active');
    $(this).addClass('active')
  });
  $('.main_goods_item_img-icon').mouseleave(function (event) {
    $('.main_goods_item_img-icon').removeClass('active');
  });

  /*================== SideBar =====================*/
  $(".left-saidbar_list_item").on("click", function() {
    $(this).toggleClass('click');
  });

  // $('.left-saidbar_list_item').hover(function(e) {
  //     $(this).addClass('active');
  //   }, function(e){
  //     $(this).removeClass('active');
  //   }
  // );
  /*================== Menu open =====================*/
  $(".sidemenu-btn").on("click", function() {
    $(".wrapper").toggleClass("stop");
    $(".sidemenu").toggleClass("slidein");
    return false;
  });
  $(".close-menu").on("click", function() {
    $(".wrapper").removeClass("stop");
    $(".sidemenu").removeClass("slidein");
    return false;
  });
  $(".close_subs").on("click", function() {
    $(".alert.alert-success").addClass("nodisplay");
    return false;
  });

  $(".sidemenu-btn2").on("click", function() {
    $(".wrapper").toggleClass("stop");
    $(".sidemenu2").toggleClass("slidein");
    return false;
  });
  $(".close-menu2").on("click", function() {
    $(".wrapper").removeClass("stop");
    $(".sidemenu2").removeClass("slidein");
    return false;
  });
  $(".close_subs").on("click", function() {
    $(".alert.alert-success").addClass("nodisplay");
    return false;
  });
  $(".sidemenu2.slidein > ul > li").on("click", function() {
    $('.sidemenu2.slidein > ul > li').removeClass("active");
    $(this).addClass("active");
    return false;
  });

  /*================== Menu Dropdown =====================*/
  $(".sidemenu ul ul,.widget_nav_menu ul ul").parent().addClass("menu-item-has-children");
  $(".sidemenu ul li.menu-item-has-children > a").on("click", function() {
    $(this).parent().toggleClass("active").siblings().removeClass("active");
    $(this).next("ul").slideToggle();
    $(this).parent().siblings().find("ul").slideUp();
    return false;
  });

  $(".sidemenu2 ul ul,.widget_nav_menu ul ul").parent().addClass("menu-item-has-children");
  $(".sidemenu2 ul li.menu-item-has-children > a").on("click", function() {
    $(this).parent().toggleClass("active").siblings().removeClass("active");
    $(this).next("ul").slideToggle();
    $(this).parent().siblings().find("ul").slideUp();
    return false;
  });

  $(document).ready(function() {
    $('.main_basket_item_counter_minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.main_basket_item_counter_plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });

  //Datepicker
  if ($('input').is('#datepicker-from') || $('input').is('#datepicker-before')) {

    $('#datepicker-from').datepicker({
      uiLibrary: 'bootstrap4'
    });
    $('#datepicker-before').datepicker({
      uiLibrary: 'bootstrap4'
    });
  }

  // Select2
  if ($('select').is('.custom-select')) {
    $('.custom-select').select2({
      placeholder: "Введите название заболевания",
      allowClear : true,
      dropdownParent: $('#products-select')
    });
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200){
      $('.mini-header').addClass("fixed-top");
      $('.mini-header').addClass("d-flex");
    }
    if ($(this).scrollTop() < 200) {
      $('.mini-header').removeClass("fixed-top");
      $('.mini-header').removeClass("d-flex");
    }
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    // prevArrow: true,
    // nextArrow: true
  });
  $('.card-base-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1
  });


});

