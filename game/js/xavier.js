$(document).ready(function (){

	$('#correct1').click(function(){
		var answer = $('#question1').val();
		
		if (answer==40) {
			alert("question1 is correct")
		}
		else {
			alert(" wrong! fatface")
		}
	});

	$('#question1').keypress(function(e){

		if(e.which == 13) {
	    	var answer = $('#question1').val();
		
			if (answer==40) {
				alert("question1 is correct")
			}
			else {
				alert(" wrong! fatface");
		    }
		}
	});

	$('#correct2').click(function(){
		var answer = $('#question2').val();
		
		if (answer==31) {
			alert("question2 is correct")
		}
		else {
			alert(" wrong! fatface")
		}
	});

	$('#question2').keypress(function(e){

		if(e.which == 13) {
	    	var answer = $('#question2').val();
		
			if (answer==31) {
				alert("question2 is correct")
			}
			else {
				alert(" wrong! fatface");
		    }
		}
	});

	$('#correct3').click(function(){
		var answer = $('#question3').val();
		
		if (answer==12) {
			alert("question3 is correct")
		}
		else {
			alert(" wrong! fatface")
		}
	});

	$('#question3').keypress(function(e){

		if(e.which == 13) {
	    	var answer = $('#question3').val();
		
			if (answer==12) {
				alert("question3 is correct")
			}
			else {
				alert(" wrong! fatface");
		    }
		}
	});	

	$('#correct4').click(function(){
		var answer = $('#question4').val();
		
		if (answer==30) {
			alert("question4 is correct")
		}
		else {
			alert(" wrong! fatface")
		}
	});

	$('#question4').keypress(function(e){

		if(e.which == 13) {
	    	var answer = $('#question4').val();
		
			if (answer==30) {
				alert("question4 is correct")
			}
			else {
				alert(" wrong! fatface");
		    }
		}
	});

	$('#correct5').click(function(){
		var answer = $('#question5').val();
		
		if (answer==14) {
			alert("question5 is correct")
		}
		else {
			alert(" wrong! fatface")
		}
	});

	$('#question5').keypress(function(e){

		if(e.which == 13) {
	    	var answer = $('#question5').val();
		
			if (answer==14) {
				alert("question5 is correct")
			}
			else {
				alert(" wrong! fatface");
		    }
		}
	});
	



});
