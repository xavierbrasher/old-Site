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




	// CREATE A REFERENCE TO FIREBASE
        var messagesRef = new Firebase('https://xavierchat.firebaseio.com/');

        // REGISTER DOM ELEMENTS
        var messageField = $('#messageInput');
        var nameField = $('#nameInput');
        var messageList = $('#example-messages');

        // LISTEN FOR KEYPRESS EVENT
        messageField.keypress(function (e) {
          if (e.keyCode == 13) {
            //FIELD VALUES
            var username = nameField.val();
            var message = messageField.val();

            //SAVE DATA TO FIREBASE AND EMPTY FIELD
            messagesRef.push({name:username, text:message});
            messageField.val('');
          }
        });

        // Add a callback that is triggered for each chat message.
        messagesRef.limitToLast(10).on('child_added', function (snapshot) {
          //GET DATA
          var data = snapshot.val();
          var username = data.name || "anonymous";
          var message = data.text;

          //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
          var messageElement = $("<li>");
          var nameElement = $("<strong class='example-chat-username'></strong>")
          nameElement.text(username);
          messageElement.text(message).prepend(nameElement);

          //ADD MESSAGE
          messageList.append(messageElement)

          //SCROLL TO BOTTOM OF MESSAGE LIST
          messageList[0].scrollTop = messageList[0].scrollHeight;
        });
	



});
