"use strict";!function(i){var a=!1,r=!1,c=1,l=1;function s(){i(".menu").removeClass("active"),i(".ham").removeClass("rotate"),setTimeout(function(){i(".ham").removeClass("active")},200)}i(document).ready(function(){var t=!1;TweenMax.set("section.banner .cow",{opacity:0,x:50,y:20}),TweenMax.set("section.banner figure.pic-1,section.banner figure.pic-2",{opacity:0,x:80,y:-15}),TweenMax.set("section.banner figure.pic-3",{opacity:0,x:-50}),TweenMax.set("section.banner figure.pic-4",{opacity:0,x:50}),TweenMax.set("section.banner .slogan-txt,section.banner .title-box,section.video,section.setmeal,section.teaching,section.cooperation",{opacity:0,y:50});var e=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".leading-page",offset:0,triggerHook:0,reverse:!1}).on("enter leave",function(e){console.log("18yearsold"),gtag("event","page_view",{page_title:"18yearsold"})}).addTo(e);i(".yes").on("click",function(){var e,t;i(".leading-page").fadeOut(),i("article").show(),t=new ScrollMagic.Controller,new ScrollMagic.Scene({triggerElement:".banner",offset:0,duration:i(".banner").height(),triggerHook:0,reverse:!0}).on("enter leave",function(e){"enter"==e.type&&(console.log("Index ga"),gtag("event","page_view",{page_title:"Index"}))}).addTo(t),new ScrollMagic.Scene({triggerElement:".video",offset:0,duration:i(".video").height()/4,triggerHook:.5,reverse:!0}).on("enter leave",function(e){"enter"==e.type&&(gtag("event","page_view",{page_title:"ASMR"+c}),console.log("ASMR"+c))}).addTo(t),new ScrollMagic.Scene({triggerElement:".setmeal",offset:0,duration:i(".setmeal").height()/5,triggerHook:.5,reverse:!0}).on("enter leave",function(e){"enter"==e.type&&(gtag("event","page_view",{page_title:"Menu"+l}),console.log("Menu"+l))}).addTo(t),new ScrollMagic.Scene({triggerElement:".teaching",offset:0,duration:i(".teaching").height(),triggerHook:.5,reverse:!0}).on("enter leave",function(e){"enter"==e.type&&(console.log("video ga"),gtag("event","page_view",{page_title:"Video"}))}).addTo(t),new ScrollMagic.Scene({triggerElement:".cooperation",offset:0,duration:i(".cooperation").height(),triggerHook:.5,reverse:!0}).on("enter leave",function(e){"enter"==e.type&&(console.log("Kanpai ga"),gtag("event","page_view",{page_title:"Kanpai"}))}).addTo(t),e=new ScrollMagic.Controller,new ScrollMagic.Scene({triggerElement:"section.banner",offset:100,triggerHook:0,reverse:!0}).setClassToggle("header","active").addTo(e),t=(new TimelineMax).add(TweenMax.to("section.banner .cow",.5,{opacity:1,x:0,y:0,ease:Power1.easeOut})).add(TweenMax.to("section.banner figure.pic-1",.5,{opacity:1,x:0,y:0,ease:Power1.easeOut})).add(TweenMax.to("section.banner figure.pic-2",.5,{opacity:1,x:0,y:0,delay:-.2,ease:Power1.easeOut})).add(TweenMax.to("section.banner figure.pic-3,section.banner figure.pic-4",.5,{opacity:1,x:0,y:0,ease:Power1.easeOut})).add(TweenMax.to("section.banner .slogan-txt",.5,{opacity:1,x:0,y:0,delay:-.5,ease:Power1.easeOut})).add(TweenMax.to("section.banner .title-box",.5,{opacity:1,x:0,y:0,delay:-.5,ease:Power1.easeOut})),new ScrollMagic.Scene({triggerElement:"section.banner",offset:-100,triggerHook:.5,reverse:!1}).setTween(t).addTo(e),t=(new TimelineMax).add(TweenMax.to("section.video",.5,{opacity:1,x:0,y:0,ease:Power1.easeOut})),new ScrollMagic.Scene({triggerElement:"section.video",offset:-100,triggerHook:.5,reverse:!1}).setTween(t).on("enter leave",function(e){"enter"==e.type&&(a=!0)}).addTo(e),t=(new TimelineMax).add(TweenMax.to("section.setmeal",.5,{opacity:1,x:0,y:0,ease:Power1.easeOut})),new ScrollMagic.Scene({triggerElement:"section.setmeal",offset:-100,triggerHook:.5,reverse:!1}).setTween(t).on("enter leave",function(e){"enter"==e.type&&(r=!0)}).addTo(e),t=(new TimelineMax).add(TweenMax.to("section.teaching",.5,{opacity:1,x:0,y:0,ease:Power1.easeOut})),new ScrollMagic.Scene({triggerElement:"section.teaching",offset:-100,triggerHook:.5,reverse:!1}).setTween(t).addTo(e),t=(new TimelineMax).add(TweenMax.to("section.cooperation",.5,{opacity:1,x:0,y:0,ease:Power1.easeOut})),new ScrollMagic.Scene({triggerElement:"section.cooperation",offset:-100,triggerHook:.5,reverse:!1}).setTween(t).addTo(e)}),i(".no").on("click",function(){window.history.go(-1)}),i(".ham").on("click",function(){var e=this;(t=!t)?(i(".menu").addClass("active"),i(this).addClass("active"),setTimeout(function(){i(e).addClass("rotate")},200)):s()});var n=i("#video-carousel").owlCarousel({loop:!1,margin:10,responsiveClass:!0,items:1,nav:!1,center:!0,dots:!0,onChanged:function(e){if(!a)return!1;c=e.item.index+1,gtag("event","page_view",{page_title:"ASMR"+(e.item.index+1)}),console.log("ASMR"+(e.item.index+1))}});i(".video .arrow-left").click(function(){n.trigger("prev.owl.carousel")}),i(".video .arrow-right").click(function(){n.trigger("next.owl.carousel")});var o=i("#setmeal-carousel").owlCarousel({loop:!1,margin:10,responsiveClass:!0,items:1,nav:!1,center:!0,dots:!0,onChanged:function(e){if(!r)return!1;l=e.item.index+1,gtag("event","page_view",{page_title:"Menu"+(e.item.index+1)}),console.log("Menu"+(e.item.index+1))}});i(".setmeal .arrow-left").click(function(){o.trigger("prev.owl.carousel")}),i(".setmeal .arrow-right").click(function(){o.trigger("next.owl.carousel")}),i(".menu-item:nth-child(1)").on("click",function(){s(),i("html,body").animate({scrollTop:i("section.banner").offset().top},500)}),i(".menu-item:nth-child(2)").on("click",function(){s(),i("html,body").animate({scrollTop:i("section.video").offset().top},500)}),i(".menu-item:nth-child(3)").on("click",function(){s(),i("html,body").animate({scrollTop:i("section.setmeal").offset().top},500)}),i(".menu-item:nth-child(4)").on("click",function(){s(),i("html,body").animate({scrollTop:i("section.teaching").offset().top},500)}),i(".menu-item:nth-child(5)").on("click",function(){s(),i("html,body").animate({scrollTop:i("section.cooperation").offset().top},500)})})}($);
//# sourceMappingURL=index.js.map
