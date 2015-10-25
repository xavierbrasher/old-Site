$(document).ready(function(){

	$('#sign-in').click(function(){

		var username = $('#inputName3').val();
		var password = $('#inputPassword3').val();

		console.log(username);
		console.log(password);
		
		//window.location.href = "workinprogress.html";
		var messagesRef = new Firebase('https://xavierchat.firebaseio.com/credentials');

		// Attach an asynchronous callback to read the data at our posts reference
		messagesRef.on("value", function(snapshot) {

			var credentials = snapshot.val();

			console.log(credentials[username]);

			if (username!="" && password==credentials[username]) {
				localStorage.setItem("userAuthentication", "true");
				localStorage.setItem("username", username);
				window.location.href = "workinprogress.html";
			}
			else {
				alert("wrong")
			};
			

		}, function (errorObject) {
  			console.log("The read failed: " + errorObject.code);
		});


	})

});
