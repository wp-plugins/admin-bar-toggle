jQuery(document).ready(function($) {

	

		$('html').css({marginTop:'0'});

		$('#wpadminbar').css({marginTop:'-28px'});

		

		$('#wpadminbar').after('<a id="showadminbar" href="/">&darr;</a>');

		

		$('#wp-admin-bar-hideshow a').click(function() {

			

			$('html').stop().animate({marginTop:'0'},250);

			$('#wpadminbar').stop().animate({marginTop:'-28px'},250,function(){

				$('#showadminbar').stop().animate({marginTop:'0'},250);

			});

			

			return false;

		});

		

		$('#showadminbar').click(function() {

			

			$(this).stop().animate({marginTop:'-28px'},250,function(){

				$('html').stop().animate({marginTop:'28px'},250);

				$('#wpadminbar').stop().animate({marginTop:'0'},250);

			});

			

			return false;

		});

		

		

		

});