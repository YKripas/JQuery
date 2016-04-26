$(document).ready(function(){
	$("#contactname").val("Please enter your full name");
    $("#telephone").val("Incl local dialing code");
    $("#eventdate").val("Format DDMMYY");
    $("#details").val("The more you can enter here, the less we have to check with you ;)");
    $("input, textarea").focus(function(){
        $(this).select();
    });
        
});