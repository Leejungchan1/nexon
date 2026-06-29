$(function(){
    var n = 0;

    var moving = false;

    $("html, body").on("mousewheel DOMMouseScroll",function(e){ // mousewheel 크롬 엣지 오페라 DOMMouseScroll 파이어폭스
        // console.log(e);
        var delta = e.originalEvent.wheelDelta // 크롬 엣지 오페라 
        console.log(delta);

        var detail = e.originalEvent.detail // 파이어폭스
        console.log(detail);

        if(moving == false){

            moving=true;

            var height = $(window).innerHeight();
            console.log(height)

            var con_top = $(".container").offset().top; 
            console.log(con_top);

            if( delta == -120 || detail == 3){
                //마우스 다운
                if( n < 4 ){
                    n++;
                    con_top -= height; // -= 누적
                }

            }else if( delta == 120 || detail == -3){
                //마우스 업
                if( n > 0 ){
                    n--;
                    con_top += height; // += 누적
                }
            }
            console.log("n :",n);
            console.log("con_top :" ,con_top);
        }

        $(".container").animate({top: con_top},500,function(){
            moving=false;
            $(".btn_group li").removeClass("on");
            $(".btn_group li").eq(n).addClass("on");
        })
    })




})