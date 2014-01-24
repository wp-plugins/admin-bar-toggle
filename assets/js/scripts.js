jQuery(document).ready(function($) {

/* 	=============================
   	// !Variables 
   	============================= */
	
	var $desktopTopMargin = '32px',
		$mobTopMargin = 	'46px',
		$window = 			$(window),
		$firstLoad =		true,
		$adminBar =			$('#wpadminbar'),
		$html = 			$('html');
		
/* 	=============================
   	// !On Load 
   	============================= */
   	
	// ! Setup Admin bar on first load
	checkWidth();	
	$adminBar.after('<a id="showadminbar" href="/">&darr;</a>');

	// ! Hide Admin Bar
	$('#wp-admin-bar-hideshow a').click(function() {
		$html.stop().animate({marginTop:'0'},250,"linear");
		$adminBar.stop().animate({marginTop:'-'+$desktopTopMargin},250,"linear",function(){
			$('#showadminbar').stop().animate({marginTop:'0'},250,"linear");
		});
		
		barHidden();

		return false;
	});

	// ! Show Admin Bar
	$('#showadminbar').click(function() {
		$(this).stop().animate({marginTop:'-'+$desktopTopMargin},250,"linear",function(){
			$html.stop().animate({marginTop: $desktopTopMargin},250,"linear");
			$adminBar.stop().animate({marginTop:'0'},250,"linear");
		});	
		
		barShowing();

		return false;
	});	
	
/* 	=============================
   	// !On Resize 
   	============================= */	
   	
	$(window).resize(checkWidth);
	
/* 	=============================
   	// !Global Functions 
   	============================= */

	function checkWidth() {
        var windowsize = $window.width();
        // ! If window is less that 782
        if (windowsize <= 782) {
            $html.css({marginTop: $mobTopMargin});
            $adminBar.css({marginTop:'0'});
            // barShowing();
        } else {
        	// ! If window is greater than 782 and it's loading for the first time
	        if($firstLoad){
		        hideBar();				
				$firstLoad = false;
	        }
	        
	        if($html.hasClass('jck_ab_showing')){
		        $html.css({marginTop: $desktopTopMargin});
	        } else {
		        hideBar();
	        }
        }
    }
    
    function barShowing(){
    	$html.removeClass('jck_ab_hidden');
	    $html.addClass('jck_ab_showing');
    }
    
    function barHidden(){
    	$html.removeClass('jck_ab_showing');
	    $html.addClass('jck_ab_hidden');
    }
    
    function hideBar(){
	    $html.css({marginTop:'0'});
		$adminBar.css({marginTop:'-'+$desktopTopMargin});
		barHidden();
    }
});