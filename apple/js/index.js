$(document).ready(function () {
	var MUSIC = document.getElementById('music2');
    var switchBtn = true; //标记开关状态
    touch.on('.music-btn', 'tap', function(e){
        if(switchBtn == true){
           $('.music-btn').removeClass('musicRotate');
           MUSIC.pause();
           switchBtn = false; 
        }else{ 
            $('.music-btn').addClass('musicRotate'); 
              MUSIC.play();
              switchBtn = true; 
            }
    });
    //划屏
	var mySwiper = new Swiper ('.swiper-container', {
    	direction: 'vertical',
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
	  	}, 
	  	onSlideChangeEnd: function(swiper){ 
	    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  	} 
  	})

  	var mySwiper1 = new Swiper ('.swiper-container1', {
  		autoplay : 1500,
		autoplayDisableOnInteraction : false,
    	loop:true,

  	})
  	var mySwiper2 = new Swiper('.swiper-container2',{
  		autoplay : 1000,
		autoplayDisableOnInteraction : false,
		effect : 'coverflow',
		slidesPerView: 2,
		centeredSlides: true,
    	loop:true,

	})
  	//文字打印效果  
	var str = $('#page_inf').text(); 
  	var arr=[];
	for(var i=0;i<str.length;i++){
		arr.push(str.substr(i,1))
	}
	var t=setInterval(timer,100);
	var s=0;
	// console.log(str.length)
	$('#page_inf').text("");
	function timer(){
		$('#page_inf').text($('#page_inf').text() + arr.slice(s,s+1));
		// console.log(arr.slice(s,s+1))
		s++;
	}
	if(s>str.length){
		clearInterval(t);
	}     
})
