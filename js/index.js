"use strict";!function(e){function n(){e(".menu").removeClass("active"),e(".ham").removeClass("rotate"),setTimeout(function(){e(".ham").removeClass("active")},200)}e(document).ready(function(){var t=!1;e(".yes").on("click",function(){e("section.leading-page").hide()}),e(".no").on("click",function(){window.history.go(-1)}),e(".ham").on("click",function(){var o=this;(t=!t)?(e(".menu").addClass("active"),e(this).addClass("active"),setTimeout(function(){e(o).addClass("rotate")},200)):n()});e("#video-carousel").owlCarousel({loop:!0,margin:10,responsiveClass:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,items:1,nav:!1,center:!0,dots:!0});e(".menu-item:nth-child(1)").on("click",function(){n(),e("html,body").animate({scrollTop:e("section.banner").offset().top},500)}),e(".menu-item:nth-child(2)").on("click",function(){n(),e("html,body").animate({scrollTop:e("section.video").offset().top},500)}),e(".menu-item:nth-child(3)").on("click",function(){n(),e("html,body").animate({scrollTop:e("section.setmeal").offset().top},500)}),e(".menu-item:nth-child(4)").on("click",function(){n(),e("html,body").animate({scrollTop:e("section.teaching").offset().top},500)}),e(".menu-item:nth-child(5)").on("click",function(){n(),e("html,body").animate({scrollTop:e("section.cooperation").offset().top},500)})})}($);
//# sourceMappingURL=index.js.map
