$(function(){
    //메뉴

    $(".nav > a").click(function(){
        $(".h_inner .nav .m_menu").stop().slideDown();
        $(".modal").fadeIn();
    })

    $(".t_link > a").click(function(){
        $(".h_inner .nav .m_menu").stop().slideUp();
        $(".modal").fadeOut();
    })


    //미디어
    $(".move_img").slick({
        slidesToShow: 1,
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: "330px",
    })

    $(".pop_click div").click(function(){
        $(".popup").hide();
    })


})