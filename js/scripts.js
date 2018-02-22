
jQuery(document).ready(function($){
	
	function preload(arrayOfImages) {
       $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
       });
     }

preload([
    '../images/1.jpg',
	'../images/2.jpg',
	'../images/3.jpg',
	'../images/4.jpg'
]);
	
	var isLogin = false;
	var changeBG;
	var msg1 = 'Wishing you a day that is as special in every way as you are. Happy Birthday!';
	var msg2 = 'Thinking of you on your birthday, and wishing you all the best! I hope it is as fantastic as you are, you deserve the best and nothing less.';
	var msgAll = [];
	var audio;
	var vid;
	var quote = '"The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds. That is what I hope to give you forever."';
    var last = []; 
	 
	 $(document).on('click','.login_btn', function(){ 
		 var obj = $(this).closest('.login_cont').find('.input_field');
		 var userName = obj.find('#username').val();
		 var passWrod = obj.find('#password').val();
		 
		 if(userName.toUpperCase() == 'GOLD' && passWrod.toUpperCase() == 'KADDU') {
			 isLogin = true;
				 } else {
			 isLogin = false;
			 alert('Opps..! Wrong Credentials Baby.')
		 }
		 
		 if(isLogin) {
			 audio = new Audio('../birthday/songs/1.mp3');
             audio.play();
			 
			  var imgNum = 1; 
			  $('.login_cont').fadeOut();
			  $('body').css('background-image','url(../birthday/images/1.jpg)');
			   changeBG = setInterval(function(){
				   var windowHeight = $(document).height();
				   $('.cover').css('height',windowHeight);
				 $('.cover').fadeIn('slow', function(){
					$('body').css('background-image','url(../birthday/images/'+imgNum+'.jpg)');				 
				 });								   
				 $('.cover').fadeOut('slow', function(){			  
				});
				 imgNum++;
				 if(imgNum>3) {
				  imgNum = 1;
				 }
			  },3500);
			  $('.message_cont').delay(300).fadeIn();
			  
			  var a = true;
			  var b = false;
			  var i = 0;
			  var y = 0;
			  var x = 0;
				  var interval = setInterval(function(){
					   msgAll[i] = msg1.charAt(y);
					   
				       $('.message_cont .message').append(msgAll[i]);
					   if(y>msg1.length && a){
						    $('.message_cont .message').one().append('<br/>');
							a = false;
							b = true;
					   }
					   if(b) {
					      msgAll[i] = msg2.charAt(x);
					      $('.message_cont .message').append(msgAll[i]);
						  x++;
					   }
					   i++;
					   y++;
					   if(i>(msg1.length + msg2.length)){ 
						   $('.surprise_btn').fadeIn();
						   clearInterval(interval);
					   }
				  }, 100);
		 }
	 });
	 
	 $(document).on('click','.surprise_btn', function(){
		 clearInterval(changeBG);
		 setTimeout(function(){
			 $('body').css('background-image','url(../birthday/images/bg2.jpg)');
		 },300);
		 
		 audio.pause();
		 $('.message_cont').hide();
		 $('.video_cont').fadeIn();
		 setTimeout(function(){ 
           playvideo()
		 }, 600);
	 });
	 
	 var p = 0;
	 
	 function playvideo() {
		 var vid = document.getElementById('myVideo');
		 vid.play();
		 
		vid.addEventListener('ended', function(){
			$('.video_cont').find('video').slideUp();
            var runQuote = setInterval(function(){
				last[p] = quote.charAt(p);
				$('.quote_cont').append(last[p]);
				p++;
				if(p>quote.length){
					clearInterval(runQuote);
				}
			}, 150);
        });
	 }
	 
});