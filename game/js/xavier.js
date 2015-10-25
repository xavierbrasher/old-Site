$(document).ready(function (){

	if (localStorage.getItem("userAuthentication") != "true") {
		window.location.href = "index.html";
	}
	else{
		localStorage.setItem("userAuthentication", "");
		$('#nameInput').val(localStorage.getItem("username"));
		$('#username').html(localStorage.getItem("username"))
	}

	$('#correct1').click(function(){
		var answer = $('#question1').val();
		console.log(answer);
		if (answer==40) {
			alert("question1 is correct")
		}
		else {
			alert(" wrong!")
		}
	});

	$('#question1').keypress(function(e){

		if(e.which == 13) {
	    	var answer = $('#question1').val();
		
			if (answer==40) {
				alert("question1 is correct")
			}
			else {
				alert(" wrong!");
		    }
		}
	});

	$('#correct2').click(function(){
		var answer = $('#question2').val();
		
		if (answer==31) {
			alert("question2 is correct")
		}
		else {
			alert(" wrong!")
		}
	});

	$('#question2').keypress(function(e){

		if(e.which == 13) {
	    	var answer = $('#question2').val();
		
			if (answer==31) {
				alert("question2 is correct")
			}
			else {
				alert(" wrong!");
		    }
		}
	});

	$('#correct3').click(function(){
		var answer = $('#question3').val();
		
		if (answer==12) {
			alert("question3 is correct")
		}
		else {
			alert(" wrong!")
		}
	});

	$('#question3').keypress(function(e){

		if(e.which == 13) {
	    	var answer = $('#question3').val();
		
			if (answer==12) {
				alert("question3 is correct")
			}
			else {
				alert(" wrong!");
		    }
		}
	});	

	$('#correct4').click(function(){
		var answer = $('#question4').val();
		
		if (answer==30) {
			alert("question4 is correct")
		}
		else {
			alert(" wrong!")
		}
	});

	$('#question4').keypress(function(e){

		if(e.which == 13) {
	    	var answer = $('#question4').val();
		
			if (answer==30) {
				alert("question4 is correct")
			}
			else {
				alert(" wrong!");
		    }
		}
	});

	$('#correct5').click(function(){
		var answer = $('#question5').val();
		
		if (answer==14) {
			alert("question5 is correct")
		}
		else {
			alert(" wrong!")
		}
	});

	$('#question5').keypress(function(e){

		if(e.which == 13) {
	    	var answer = $('#question5').val();
		
			if (answer==14) {
				alert("question5 is correct")
			}
			else {
				alert(" wrong!");
		    }
		}
	});




	// CREATE A REFERENCE TO FIREBASE
        var messagesRef = new Firebase('https://xavierchat.firebaseio.com/chat');

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
        messagesRef.on('child_added', function (snapshot) {
          //GET DATA
          console.log(snapshot.key());
          test = snapshot;
          var data = snapshot.val();
          var username = data.name || "??????";
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
