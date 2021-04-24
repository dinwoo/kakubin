(function ($) {
  function setAnimate() {
    TweenMax.set("section.introduce h1", {
      opacity: 0,
      y: 50,
    });

    TweenMax.set(
      "section.introduce .part:nth-of-type(1) .info,section.introduce .part:nth-of-type(2) .pic,section.introduce .part:nth-of-type(3) .info,section.introduce .part:nth-of-type(4) .pic,section.introduce .part:nth-of-type(5) .info",
      {
        opacity: 0,
        x: 100,
      }
    );

    TweenMax.set(
      "section.introduce .part:nth-of-type(1) .pic,section.introduce .part:nth-of-type(2) .info,section.introduce .part:nth-of-type(3) .pic,section.introduce .part:nth-of-type(4) .info,section.introduce .part:nth-of-type(5) .pic",
      {
        opacity: 0,
        x: -100,
      }
    );

    TweenMax.set("section.certification h1", {
      opacity: 0,
      y: 50,
    });

    TweenMax.set("section.certification .box .pic", {
      opacity: 0,
      y: 50,
    });
  }
  function doAnimate() {
    var controller = new ScrollMagic.Controller();
    // ------------------------------------------------------------------------------------------------------

    var itemTween1 = new TimelineMax().add(
      TweenMax.to("section.introduce h1", 1, {
        opacity: 1,
        x: 0,
        y: 0,
        ease: Power1.easeOut,
      })
    );

    var itemScene1 = new ScrollMagic.Scene({
      triggerElement: "section.introduce h1",
      offset: -100, //指標位移
      triggerHook: 0.5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween1)
      // .addIndicators({ name: "item01" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween2 = new TimelineMax()
      .add(
        TweenMax.to("section.introduce .part:nth-of-type(1) .info", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          ease: Power1.easeOut,
        })
      )
      .add(
        TweenMax.to("section.introduce .part:nth-of-type(1) .pic", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          delay: -0.5,
          ease: Power1.easeOut,
        })
      );

    var itemScene2 = new ScrollMagic.Scene({
      triggerElement: "section.introduce .part:nth-of-type(1)",
      offset: 0, //指標位移
      triggerHook: 0.6,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween2)
      // .addIndicators({ name: "item02" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween3 = new TimelineMax()
      .add(
        TweenMax.to("section.introduce .part:nth-of-type(2) .info", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          ease: Power1.easeOut,
        })
      )
      .add(
        TweenMax.to("section.introduce .part:nth-of-type(2) .pic", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          delay: -0.5,
          ease: Power1.easeOut,
        })
      );

    var itemScene3 = new ScrollMagic.Scene({
      triggerElement: "section.introduce .part:nth-of-type(2)",
      offset: 0, //指標位移
      triggerHook: 0.6,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween3)
      // .addIndicators({ name: "item03" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween4 = new TimelineMax()
      .add(
        TweenMax.to("section.introduce .part:nth-of-type(3) .info", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          ease: Power1.easeOut,
        })
      )
      .add(
        TweenMax.to("section.introduce .part:nth-of-type(3) .pic", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          delay: -0.5,
          ease: Power1.easeOut,
        })
      );

    var itemScene4 = new ScrollMagic.Scene({
      triggerElement: "section.introduce .part:nth-of-type(3)",
      offset: 0, //指標位移
      triggerHook: 0.6,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween4)
      // .addIndicators({ name: "item04" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween5 = new TimelineMax()
      .add(
        TweenMax.to("section.introduce .part:nth-of-type(4) .info", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          ease: Power1.easeOut,
        })
      )
      .add(
        TweenMax.to("section.introduce .part:nth-of-type(4) .pic", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          delay: -0.5,
          ease: Power1.easeOut,
        })
      );

    var itemScene5 = new ScrollMagic.Scene({
      triggerElement: "section.introduce .part:nth-of-type(4)",
      offset: 0, //指標位移
      triggerHook: 0.6,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween5)
      // .addIndicators({ name: "item05" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween6 = new TimelineMax()
      .add(
        TweenMax.to("section.introduce .part:nth-of-type(5) .info", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          ease: Power1.easeOut,
        })
      )
      .add(
        TweenMax.to("section.introduce .part:nth-of-type(5) .pic", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          delay: -0.5,
          ease: Power1.easeOut,
        })
      );

    var itemScene6 = new ScrollMagic.Scene({
      triggerElement: "section.introduce .part:nth-of-type(5)",
      offset: 0, //指標位移
      triggerHook: 0.6,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween6)
      // .addIndicators({ name: "item06" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween7 = new TimelineMax().add(
      TweenMax.to("section.certification h1", 1, {
        opacity: 1,
        x: 0,
        y: 0,
        ease: Power1.easeOut,
      })
    );

    var itemScene7 = new ScrollMagic.Scene({
      triggerElement: "section.certification h1",
      offset: -100, //指標位移
      triggerHook: 0.5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween7)
      // .addIndicators({ name: "item07" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween8 = new TimelineMax().add(
      TweenMax.staggerTo(
        "section.certification .box .pic",
        0.5,
        { opacity: 1, y: 0, ease: Power1.easeOut },
        0.2
      )
    );

    var itemScene8 = new ScrollMagic.Scene({
      triggerElement: "section.certification .box",
      offset: 0, //指標位移
      triggerHook: 0.5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween8)
      // .addIndicators({ name: "item08" }) // 指標顯示
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

    $(".yes").on("click", function () {
      $("section.leading-page").hide();
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

    // setAnimate();
    // doAnimate();
  });
})($);
