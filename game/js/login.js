$(document).ready(function(){

	var test = 4*9;
	alert(test);

	$('#sign-in').click(function(e){
		login();
		
	})

	$('#inputPassword3').keypress(function (e){

		if (e.which==13) {

			login();
		}; 
	});

	function login (){
		var username = $('#inputName3').val();
		var password = $('#inputPassword3').val();

		console.log(username);
		console.log(password);
		
		//window.location.href = "workinprogress.html";
		var messagesRef = new Firebase('https://xavierchat-7b688-default-rtdb.firebaseio.com/');

		// Attach an asynchronous callback to read the data at our posts reference
		messagesRef.on("value", function(snapshot) {

			var credentials = snapshot.val();

			console.log(credentials[username]);
			var okay = 1
			localStorage.setItem("userAuthentication", "true");
			localStorage.setItem("username", username);
			window.location.href = "workinprogress.html";
		

		}, function (errorObject) {
  			console.log("The read failed: " + errorObject.code);
		});
	}

});
