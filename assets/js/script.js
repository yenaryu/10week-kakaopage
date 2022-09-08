$(function(){

      /*  @@@@@@@@@ footer 버튼 @@@@@@@@@ */
      $('.info-btn').click(function(e){ 
        e.preventDefault(); 
        $('.hide-menu').toggleClass('active'); 
        $('.info-btn').toggleClass('active'); 
      });


      /* @@@@@@@@@@@@@ top 요일 @@@@@@@@@@@ */
     $('.group-day .day-item').click(function(e){
          e.preventDefault();

          target = $(this).attr('name') //name-id연결
          $(this).addClass('active').siblings().removeClass('active');
          $(target).addClass('active').siblings().removeClass('active');
        });

       
      /* @@@@@@@@@@@@ 웹툰 웹소설 구분 @@@@@@@@*/
      $('.top-title').click(function(e){
        e.preventDefault(); 

        target = $(this).attr('href') //href-id연결
        $(this).addClass('active').siblings().removeClass('active');
        $(target).addClass('active').siblings().removeClass('active');
     
      });


});