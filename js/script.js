$(document).ready(function(){
    $('.bxslider').bxSlider();
    $('#MenuIcon').click(function(){

      if($('#PrimaryNavigation').hasClass('switch')){
        //條件正確時執行
        //顯示
        $('#PrimaryNavigation').slideDown();
        $('#PrimaryNavigation').removeClass('switch');
      }else{
        //條件不正確執行
        //隱藏
        $('#PrimaryNavigation').slideUp();
        $('#PrimaryNavigation').addClass('switch');
      }


    });

});
