$(function(){

	var current_id='';

	$("body").keypress(function(event){
		event.preventDefault();
		if (event.which===13){
			//enter was pressed.  current_id is collected; do what we're doing with it
			//then clear it out.
			$(this).trigger("got_id",[current_id]);
			current_id="";
		}
		else
		{
			current_id=current_id+String.fromCharCode(event.which);
		}
	});


	$("body").on("got_id",function(ev,arg){
		$("#last_text_scanned").text(arg);
		setTimeout(function(){
			$("#last_text_scanned").fadeOut(1000,function(){current_id=''; $("#last_text_scanned").text('').fadeIn();})
		},3*1000)
	});
});
