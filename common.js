$(document).ready(function(){
	$("#contactname").val("Please enter your full name");
    $("#telephone").val("Incl local dialing code");
    $("#eventdate").val("Format DDMMYY");
    $("#details").val("The more you can enter here, the less we have to check with you ;)");
    $("input, textarea").focus(function(){
        $(this).select();
    });
    
    //MAKING THE GALLERY CAPTIONS APPEAR ON HOVER
    $("figcaption").hide();
    $("figure").each(function(){
        $(this).hover(function(){
            $(this).find("figcaption").slideDown('medium');
        }, function(){
            $(this).find("figcaption").slideUp('medium');
        });
    });
        
});