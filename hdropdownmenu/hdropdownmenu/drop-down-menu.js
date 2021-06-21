$(document).ready(function(){
	
	var sds = document.getElementById("dum");
    if(sds == null){
        alert("You are using a free package.\n You are not allowed to remove the tag.\n");
        $("#selection").hide();
    }
    var sdss = document.getElementById("dumdiv");
    if(sdss == null){
        alert("You are using a free package.\n You are not allowed to remove the tag.\n");
        $("#selection").hide();
    }
	
	$("ul.navigation1 li span").mouseover(function() 
	{
		$(this).parent().find("ul.submenu").slideDown('fast').show();
		$(this).parent().hover(function()
		{
		}, 
		function()
		{	
			$(this).parent().find("ul.submenu").slideUp('slow'); //Hiding Submenu when mouseout
		});
	});
});