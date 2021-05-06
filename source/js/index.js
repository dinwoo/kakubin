(function ($) {
  let isStartASMR = false;
  let isStartMenu = false;
  let ASMRIndex = 1;
  let menuIndex = 1;
  function setAnimate() {
    TweenMax.set("section.banner .cow", {
      opacity: 0,
      x: 50,
      y: 20,
    });

    TweenMax.set("section.banner figure.pic-1,section.banner figure.pic-2", {
      opacity: 0,
      x: 80,
      y: -15,
    });

    TweenMax.set("section.banner figure.pic-3", {
      opacity: 0,
      x: -50,
    });

    TweenMax.set("section.banner figure.pic-4", {
      opacity: 0,
      x: 50,
    });

    TweenMax.set(
      "section.banner .slogan-txt,section.banner .title-box,section.video,section.setmeal,section.teaching,section.cooperation",
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

    var headerScene = new ScrollMagic.Scene({
      triggerElement: "section.banner",
      offset: 100, //指標位移
      triggerHook: 0,
      reverse: true, //動畫重複 default:true
    })
      .setClassToggle("header", "active")
      // .addIndicators({ name: "header" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween1 = new TimelineMax()
      .add(
        TweenMax.to("section.banner .cow", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          ease: Power1.easeOut,
        })
      )
      .add(
        TweenMax.to("section.banner figure.pic-1", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          ease: Power1.easeOut,
        })
      )
      .add(
        TweenMax.to("section.banner figure.pic-2", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          delay: -0.2,
          ease: Power1.easeOut,
        })
      )
      .add(
        TweenMax.to(
          "section.banner figure.pic-3,section.banner figure.pic-4",
          0.5,
          { opacity: 1, x: 0, y: 0, ease: Power1.easeOut }
        )
      )
      .add(
        TweenMax.to("section.banner .slogan-txt", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          delay: -0.5,
          ease: Power1.easeOut,
        })
      )
      .add(
        TweenMax.to("section.banner .title-box", 0.5, {
          opacity: 1,
          x: 0,
          y: 0,
          delay: -0.5,
          ease: Power1.easeOut,
        })
      );

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

    var itemTween2 = new TimelineMax().add(
      TweenMax.to("section.video", 0.5, {
        opacity: 1,
        x: 0,
        y: 0,
        ease: Power1.easeOut,
      })
    );

    var itemScene2 = new ScrollMagic.Scene({
      triggerElement: "section.video",
      offset: -100, //指標位移
      triggerHook: 0.5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween2)
      .on("enter leave", function (e) {
        // console.log(e)
        if (e.type == "enter") {
          isStartASMR = true;
        }
      })
      // .addIndicators({ name: "item02" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween3 = new TimelineMax().add(
      TweenMax.to("section.setmeal", 0.5, {
        opacity: 1,
        x: 0,
        y: 0,
        ease: Power1.easeOut,
      })
    );

    var itemScene3 = new ScrollMagic.Scene({
      triggerElement: "section.setmeal",
      offset: -100, //指標位移
      triggerHook: 0.5,
      reverse: false, //動畫重複 default:true
    })
      .setTween(itemTween3)
      .on("enter leave", function (e) {
        // console.log(e)
        if (e.type == "enter") {
          isStartMenu = true;
        }
      })
      // .addIndicators({ name: "item03" }) // 指標顯示
      .addTo(controller);
    // ------------------------------------------------------------------------------------------------------

    var itemTween4 = new TimelineMax().add(
      TweenMax.to("section.teaching", 0.5, {
        opacity: 1,
        x: 0,
        y: 0,
        ease: Power1.easeOut,
      })
    );

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

    var itemTween5 = new TimelineMax().add(
      TweenMax.to("section.cooperation", 0.5, {
        opacity: 1,
        x: 0,
        y: 0,
        ease: Power1.easeOut,
      })
    );

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

  function setGa() {
    var gaController = new ScrollMagic.Controller();
    // ------------------------------------------------------------------------------------------------------

    // var ga1 = new ScrollMagic.Scene({
    //   triggerElement: ".leading-page",
    //   offset: 0, //指標位移
    //   triggerHook: 0,
    //   reverse: false, //動畫重複 default:true
    // })
    //   .on("enter leave", function (e) {
    //     gtag('send', 'pageview', '18yearsold');
    //   })
    //   .addIndicators({ name: "ga-leading" }) // 指標顯示
    //   .addTo(gaController);

    var gaBanner = new ScrollMagic.Scene({
      triggerElement: ".banner",
      offset: 0, //指標位移
      duration: $(".banner").height(),
      triggerHook: 0,
      reverse: true, //動畫重複 default:true
    })
      .on("enter leave", function (e) {
        // console.log(e)
        if (e.type == "enter") {
          console.log("Index ga");
          // gtag('send', 'pageview', 'Index');
          gtag("event", "page_view", {
            page_title: "Index",
          });
        }
      })
      // .addIndicators({ name: "ga-banner" }) // 指標顯示
      .addTo(gaController);

    var gaVideo = new ScrollMagic.Scene({
      triggerElement: ".video",
      offset: 0, //指標位移
      duration: $(".video").height() / 4,
      triggerHook: 0.5,
      reverse: true, //動畫重複 default:true
    })
      .on("enter leave", function (e) {
        // console.log(e)
        if (e.type == "enter") {
          // console.log("video ga")
          // gtag('send', 'pageview', 'ASMR'+ASMRIndex);
          gtag("event", "page_view", {
            page_title: "ASMR" + ASMRIndex,
          });
          console.log("ASMR" + ASMRIndex);
        }
      })
      // .addIndicators({ name: "ga-video" }) // 指標顯示
      .addTo(gaController);

    var gaSetmeal = new ScrollMagic.Scene({
      triggerElement: ".setmeal",
      offset: 0, //指標位移
      duration: $(".setmeal").height() / 5,
      triggerHook: 0.5,
      reverse: true, //動畫重複 default:true
    })
      .on("enter leave", function (e) {
        // console.log(e)
        if (e.type == "enter") {
          // console.log("setmeal ga")
          // gtag('send', 'pageview', 'Menu'+menuIndex);
          gtag("event", "page_view", {
            page_title: "Menu" + menuIndex,
          });
          console.log("Menu" + menuIndex);
        }
      })
      // .addIndicators({ name: "ga-video" }) // 指標顯示
      .addTo(gaController);

    var gaTeaching = new ScrollMagic.Scene({
      triggerElement: ".teaching",
      offset: 0, //指標位移
      duration: $(".teaching").height(),
      triggerHook: 0.5,
      reverse: true, //動畫重複 default:true
    })
      .on("enter leave", function (e) {
        // console.log(e)
        if (e.type == "enter") {
          console.log("video ga");
          // gtag('send', 'pageview', 'Video');
          gtag("event", "page_view", {
            page_title: "Video",
          });
        }
      })
      // .addIndicators({ name: "ga-teaching" }) // 指標顯示
      .addTo(gaController);

    var gaCooperation = new ScrollMagic.Scene({
      triggerElement: ".cooperation",
      offset: 0, //指標位移
      duration: $(".cooperation").height(),
      triggerHook: 0.5,
      reverse: true, //動畫重複 default:true
    })
      .on("enter leave", function (e) {
        // console.log(e)
        if (e.type == "enter") {
          console.log("Kanpai ga");
          // gtag('send', 'pageview', 'Kanpai');
          gtag("event", "page_view", {
            page_title: "Kanpai",
          });
        }
      })
      // .addIndicators({ name: "ga-cooperation" }) // 指標顯示
      .addTo(gaController);
  }

  $(document).ready(function () {
    let isOpen = false;
    setAnimate();
    var gaController = new ScrollMagic.Controller();
    // ------------------------------------------------------------------------------------------------------

    var ga1 = new ScrollMagic.Scene({
      triggerElement: ".leading-page",
      offset: 0, //指標位移
      triggerHook: 0,
      reverse: false, //動畫重複 default:true
    })
      .on("enter leave", function (e) {
        console.log("18yearsold");
        // gtag('send', 'pageview', '18yearsold');
        gtag("event", "page_view", {
          page_title: "18yearsold",
        });
      })
      // .addIndicators({ name: "ga-leading" }) // 指標顯示
      .addTo(gaController);

    // doAnimate();

    $(".yes").on("click", function () {
      $(".leading-page").fadeOut();
      $("article").show();
      setGa();
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
      loop: false,
      margin: 10,
      responsiveClass: true,
      items: 1,
      nav: false,
      center: true,
      dots: true,
      onChanged: function (e) {
        if (!isStartASMR) return false;
        ASMRIndex = e.item.index + 1;
        // gtag('send', 'pageview', 'ASMR'+(e.item.index+1));
        gtag("event", "page_view", {
          page_title: "ASMR" + (e.item.index + 1),
        });
        console.log("ASMR" + (e.item.index + 1));
      },
    });

    let setmealOwl = $("#setmeal-carousel").owlCarousel({
      loop: false,
      margin: 10,
      responsiveClass: true,
      items: 1,
      nav: false,
      center: true,
      dots: true,
      onChanged: function (e) {
        if (!isStartMenu) return false;
        menuIndex = e.item.index + 1;
        // gtag('send', 'pageview', 'Menu'+(e.item.index+1));
        gtag("event", "page_view", {
          page_title: "Menu" + (e.item.index + 1),
        });
        console.log("Menu" + (e.item.index + 1));
      },
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
