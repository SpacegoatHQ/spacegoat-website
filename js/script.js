/* 	Author: Peter Moricz | SPACEGOAT Interactive
	Email: peter.moricz@spacegoat.com

*/

$(window).load( function() {

	$( '.sitePreloader' ).delay( 200 ).fadeOut( 300, function() {
		$( this ).remove();
		$( 'header a.logo, header h1, header p.get-in-touch, header .rocket, header .cloud-left, header .cloud-right, header .clouds-back' ).addClass( 'animated' );
	});
});

$(document).ready(function(){
	
});







