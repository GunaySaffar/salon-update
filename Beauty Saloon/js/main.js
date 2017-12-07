$(document).ready(function(){
	$('.menu-trigger').click(function(){
		$('.menu').fadeToggle(300);
	})
})
$( window ).resize(function() {
  if ($( window ).innerWidth()<767 )
   { 
   	$('.menu').hide();
  }	
});