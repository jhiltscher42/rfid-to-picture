$(function(){

	var current_id='';

	$("body").keypress(function(event){
		console.log(event);
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


	$("body").on("got_id",function(ev,arg){console.log(arg)});
});
