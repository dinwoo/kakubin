(function ($) {
  function setAnimate() {
    TweenMax.set("section.banner .cow", {
      opacity: 0,
      x: 50,
      y: 20,
    });

    TweenMax.set(
      "section.banner figure.pic-1,section.banner figure.pic-2",
      {
        opacity: 0,
        x: 80,
        y: -15
      }
    );

    TweenMax.set(
      "section.banner figure.pic-3",
      {
        opacity: 0,
        x: -50,
      }
    );

    TweenMax.set(
      "section.banner figure.pic-4",
      {
        opacity: 0,
        x: 50,
      }
    );

    TweenMax.set(
      "section.banner .slogan-txt,section.video,section.setmeal,section.teaching,section.cooperation",
      {
        opacity: 0,
        y: 50,
      }
    );

    // TweenMax.set("section.certification h1", {
    //   opacity: 0,
    //   y: 50,
    // });

    // TweenMax.set("section.certification .box .pic", {
    //   opacity: 0,
    //   y: 50,
    // });
  }
  function doAnimate() {
    var controller = new ScrollMagic.Controller();
    // ------------------------------------------------------------------------------------------------------

    var itemTween1 = new TimelineMax()
      .add(TweenMax.to('section.banner .cow', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))
      .add(TweenMax.to('section.banner figure.pic-1', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))
      .add(TweenMax.to('section.banner figure.pic-2', 0.5, { opacity: 1, x: 0, y: 0,delay: -.2, ease: Power1.easeOut }))
      .add(TweenMax.to('section.banner figure.pic-3,section.banner figure.pic-4', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))
      .add(TweenMax.to('section.banner .slogan-txt', 0.5, { opacity: 1, x: 0, y: 0,delay: -.5, ease: Power1.easeOut }))

    var itemScene1 = new ScrollMagic.Scene({
      triggerElement: "section.banner",
      offset: -100, //指標位移
      triggerHook: 0.5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween1)
      // .addIndicators({ name: "item01" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween2 = new TimelineMax()
      .add(TweenMax.to('section.video', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))

    var itemScene2 = new ScrollMagic.Scene({
      triggerElement: "section.video",
      offset: -100, //指標位移
      triggerHook: 0.5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween2)
      // .addIndicators({ name: "item02" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween3 = new TimelineMax()
      .add(TweenMax.to('section.setmeal', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))

    var itemScene3 = new ScrollMagic.Scene({
      triggerElement: "section.setmeal",
      offset: -100, //指標位移
      triggerHook: 0.5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween3)
      // .addIndicators({ name: "item03" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween4 = new TimelineMax()
      .add(TweenMax.to('section.teaching', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))

    var itemScene4 = new ScrollMagic.Scene({
      triggerElement: "section.teaching",
      offset: -100, //指標位移
      triggerHook: 0.5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween4)
      // .addIndicators({ name: "item04" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween5 = new TimelineMax()
      .add(TweenMax.to('section.cooperation', 0.5, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }))

    var itemScene5 = new ScrollMagic.Scene({
      triggerElement: "section.cooperation",
      offset: -100, //指標位移
      triggerHook: 0.5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween5)
      // .addIndicators({ name: "item05" }) // 指標顯示
      .addTo(controller);
  }

  function closeMenu() {
    $(".menu").removeClass("active");
    $(".ham").removeClass("rotate");
    setTimeout(() => {
      $(".ham").removeClass("active");
    }, 200);
  }

  $(document).ready(function () {
    let isOpen = false;
    setAnimate();
    // doAnimate();

    $(".yes").on("click", function () {
      $("section.leading-page").hide();
      doAnimate();
    });
    $(".no").on("click", function () {
      window.history.go(-1);
    });

    $(".ham").on("click", function () {
      isOpen = !isOpen;
      if (isOpen) {
        $(".menu").addClass("active");
        $(this).addClass("active");
        setTimeout(() => {
          $(this).addClass("rotate");
        }, 200);
      } else {
        closeMenu();
      }
    });

    let videoOwl = $("#video-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1,
      nav: false,
      center: true,
      dots: true,
    });

    let setmealOwl = $("#setmeal-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1,
      nav: false,
      center: true,
      dots: true,
    });

    $(".menu-item:nth-child(1)").on("click", function () {
      closeMenu();
      $("html,body").animate(
        { scrollTop: $("section.banner").offset().top },
        500
      );
    });
    $(".menu-item:nth-child(2)").on("click", function () {
      closeMenu();
      $("html,body").animate(
        { scrollTop: $("section.video").offset().top },
        500
      );
    });
    $(".menu-item:nth-child(3)").on("click", function () {
      closeMenu();
      $("html,body").animate(
        { scrollTop: $("section.setmeal").offset().top },
        500
      );
    });
    $(".menu-item:nth-child(4)").on("click", function () {
      closeMenu();
      $("html,body").animate(
        { scrollTop: $("section.teaching").offset().top },
        500
      );
    });
    $(".menu-item:nth-child(5)").on("click", function () {
      closeMenu();
      $("html,body").animate(
        { scrollTop: $("section.cooperation").offset().top },
        500
      );
    });

  });
})($);
