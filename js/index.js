/**
 * Created by Administrator on 2016/10/8.
 */
window.onload=function(){
    zhe.style.display="none"
}
var num=0;
setInterval(function(){
    if(num<3){
        $(".innerboxmianOne .showPIc img").css("opacity",0).eq(num).css("opacity",1);
        num++;
    }else{
        num=0;
    }
},2000);
var sum=0;
 var timer1=setInterval(function(){
    if(sum<5){
        $(".bg").css("opacity",0).eq(sum).css("opacity",1);
        sum++;
    }else{
        sum=0;
    }
},3000);
var a=0;
var timer2= setInterval(function(){
    if(a<6){
        $(".bgPic").css("opacity",0).eq(a).css({"opacity":1,"background-size":"120%,120% "}).siblings(".bgPic").css({"opacity":0,"background-size":"100%,100%"});
        a++;
    }else{
        a=0;
    }
},3000);
$(".bgsolid").delegate("a","click",function(){
   clearInterval(timer1);
    var fbg=$(this).css("background");
    var index=fbg.indexOf(")")+1
    var bg=fbg.substring(0,index);
    $(".bgPic").css({"display":"none"})
    $(".colorBg").css({"display":"block"});
    $(".colorBg").css({"background":bg});
});
$(".bgBtn").click(function(){
    alert(1)
    clearInterval(timer1);
    $(".bgPic").css({"display":"block"})
    $(".colorBg").css({"display":"none"});
})
$(".bgBtns").delegate("a","click",function(){
    clearInterval(timer1);
    var indedx=$(this).parent().index();
    $(".bgPic").css({"display":"none"})

    $(".colorBg").css({"display":"none"});
    $(".bg").eq(indedx).css({"opacity":1,"display":"block"}).siblings(".bg").css({"display":"none"})
})
if ($(window).outerWidth(true)<800){
    $(".innerbox").css({"display":"none"});
    $(".mdsH2").css({"display":"block"});

}else{
    $(".innerbox").css({"display":"block"});
    $(".mdsH2").css({"display":"none"});
}
$(window).resize(function(){
    console.log()
    if ($(window).outerWidth(true)<800){
            $(".innerbox").css({"display":"none"});
        $(".mdsH2").css({"display":"block"});

    }else{
        $(".innerbox").css({"display":"block"});
        $(".mdsH2").css({"display":"none"});
    }
})
$(".mdsH2").click(function(){
    var index=$(this).index(".mdsH2");
    $(".innerbox").eq(index).stop().slideToggle(500);
    if(index==1){
        setTimeout(function(){
            for(var j=0;j<$(".innnerbox2inner .jindu").length;j++){
                var w=$(".innnerbox2inner .jindu").eq(j).attr("data-jindu");
                $(".innnerbox2inner .jindu").eq(j).css({"width":w});
                //console.log(w)

            }
        },50)}else{
        for(var j=0;j<$(".innnerbox2inner .jindu").length;j++){
            //$(".innnerbox2inner .jindu").eq(j).css({"width":0});

        }
    }
})
$(".panel-heading").click(function(){
  var index=$(this).parent().index();
    $(".bottom-p .content1").slideUp();
    if($(".bottom-p .content1").eq(index).css("display")=="none"){
        $(".bottom-p .content1").eq(index).slideDown();

    }
    console.log( $(".bottom-p .content1").length)
});
$(".innerbox3inner ul li").click(function(){
    $(".innerbox3inner ul li span").removeClass("active");

    $(this).find("span").addClass("active");
    var index=$(this).index();
    if (index%2==0){
        $(".innerbox3Mian").eq(index).addClass("bounceInLeft").css({"display":"block"}).siblings(".innerbox3Mian").css({"display":"none"});
    }else if (index%3==0){
        $(".innerbox3Mian").eq(index).addClass("bounceInDown").css({"display":"block",}).siblings(".innerbox3Mian").css({"display":"none"});
    }else if (index%4==0){
        $(".innerbox3Mian").eq(index).addClass("bounceInUp").css({"display":"block",}).siblings(".innerbox3Mian").css({"display":"none"});}else{
        $(".innerbox3Mian").eq(index).addClass("bounceInUp").css({"display":"block"}).siblings(".innerbox3Mian").css({"display":"none"});
    }

    console.log($(".innerbox3Mian").length)
});
var swiper2 = new Swiper('.swiper-container2', {
    pagination: '.swiper-p2',
    slidesPerView: 1,
    paginationClickable: true,
    loop:true,
    speed:1000,
    autoplay:true,

});
var imgL=$(".personPicBox").offset().left+$(".personPicBox").width()/2;
var imgT=$(".personPicBox").offset().top+$(".personPicBox img").height()/2;

$(window).mousemove(function(ev){
    if (ev.pageY<$(".personPicBox").offset().top+$(".personPicBox").height()&&ev.pageY>$(".personPicBox").offset().top&&ev.pageX<$(".personPicBox").offset().left+$(".personPicBox").width()&&ev.pageX>$(".personPicBox").offset().left){
        //alert(1)
    }
    var y=ev.pageY-imgT;

    var x=ev.pageX-imgL;

    if (y<0&&x>0){
        //$(".personPicBox img").prop("src","img/m1.jpg")
    }if (y<0&&x<0){
        //$(".personPicBox img").prop("src","img/m2.jpg")
    }if (y>0&&x<0){
        //$(".personPicBox img").prop("src","img/m3.jpg")
    }if (y>0&&x>0){
        //$(".personPicBox img").prop("src","img/m4.jpg")
    }
})
var oldAni=$("#show select").val();
$("#show select").change(function(){
    var ani=$("#show select").val();
    $(".innerbox").removeClass(oldAni);
    $(".innerbox").addClass(ani);
    oldAni=$("#show select").val();


})
$(".list li").click(function(){
    var index=$(this).index();
    if(index<5){

        $(".innerbox").eq(index).css({"display":"block"}).siblings().css({"display":"none"});
        $(this).siblings().removeClass("active1");
        for(var i=0;i<$(".list li").length;i++){
            $(".list li").eq(i).find("i").removeClass("active2");
        }
        $(this).toggleClass("active1").find("i").addClass("active2");
        if(index==1){
            setTimeout(function(){
                for(var j=0;j<$(".innnerbox2inner .jindu").length;j++){
                    var w=$(".innnerbox2inner .jindu").eq(j).attr("data-jindu");
                    $(".innnerbox2inner .jindu").eq(j).css({"width":w});
                    console.log(w)

                }
            },50)

        }else{
            for(var j=0;j<$(".innnerbox2inner .jindu").length;j++){
                $(".innnerbox2inner .jindu").eq(j).css({"width":0});

            }
        }
    }
});
$("#color1").delegate("a","click",function(){
    console.log($(this).css("background"))

    $(".shezhiBg").css("background",$(this).css("background"))
    $(".shezhiBg5").css({"background":$(this).css("background"),
                            "opacity":"0.5"});


    var fbg=$(this).css("background");
    var index=fbg.indexOf(")")+1
    var bg=fbg.substring(0,index)
$(".border-list").css({"border": bg+"1px solid"})
    $(".medie").css({"border-top": bg+"5px solid"})
    $(".innerbox2 h5 ").css({"border-bottom": bg+"1px solid"});
    $(".mian .list li").css({"background":$(this).css("background")});
    $(".text").css({"color":bg});
    $(".innerboxmianOne ul li i").css({"color":bg});
    $(".innerboxmianOne ul li  label").css({"color":bg});
    $(".innerboxmianOne h1 ").css({"color":bg});
    $(".innerbox2 h1 ").css({"color":bg});
    $(".innerbox2 h5 span").css({"color":bg})
    $(".innerbox2 h5 i ").css({"color":bg})
    $(".innerbox2 h6").css({"color":bg})
    $(".innerbox2Btm span").css({"color":bg})
    $(".mian .list li i").css({"color":bg})
    $(".innerbox3inner h1").css({"color":bg})
    $(".innerbox4inner h1").css({"color":bg})
    $(".innerbox5inner h1").css({"color":bg})
    $(".innerbox5inner ul li span").css({"color":bg})
    //.innerbox5inner ul li span
    $(".service .tubiao i").css({"border":bg+"3px solid ","color":bg})
    //.innerboxmianOne h1

})
var onOffS=true;
$(".shezhi h2 a").click(function(){
    if (onOffS){
        $(".shezhi").animate({left:0},200,function(){
            onOffS=false;
        })

    }else{
        $(".shezhi").animate({left:-270},200,function(){
            onOffS=true;
        })
    }
});
var map = new BMap.Map("allmap");
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 15);
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("北京");
map.enableScrollWheelZoom(true);
var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
var top_left_navigation = new BMap.NavigationControl();

map.addControl(top_left_control);
map.addControl(top_left_navigation);

var marker = new BMap.Marker(point);
map.addOverlay(marker);
marker.setAnimation(BMAP_ANIMATION_BOUNCE);