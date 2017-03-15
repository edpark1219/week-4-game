$(document).ready(function() {

	// Character arrays [hp, attack power, counterattack power]

	var characters = {
		steph: [150, 5, 8, 8],
		lebron: [200, 13, 15, 3],
		brodie: [130, 8, 10, 5],
		harden: [100, 10, 13, 6]
	}

	var charChoose = false;
	var enemyChoose = false;
	var enemy;
	var yourChar;


	//Choose character

	$("#harden").on("click", function() {

		
		if (charChoose === false) {
			yourChar = "harden";	
			$("#lebron").appendTo("#enemies");
			$("#brodie").appendTo("#enemies");
			$("#steph").appendTo("#enemies");
			charChoose = true;
		}
		
	});

	$("#lebron").on("click", function() {

		if (charChoose === false) {
			yourChar = "lebron";	
			$("#harden").appendTo("#enemies");
			$("#brodie").appendTo("#enemies");
			$("#steph").appendTo("#enemies");
			charChoose = true;
		}

	});

	$("#brodie").on("click", function() {

		if (charChoose === false) {
			yourChar = "brodie";
			$("#lebron").appendTo("#enemies");
			$("#harden").appendTo("#enemies");
			$("#steph").appendTo("#enemies");
			charChoose = true;
		}

	});

	$("#steph").on("click", function() {

		if (charChoose === false) {
			yourChar = "steph";	
			$("#lebron").appendTo("#enemies");
			$("#brodie").appendTo("#enemies");
			$("#harden").appendTo("#enemies");
			charChoose = true;
			console.log(yourChar);
			console.log(charChoose);
		}

	});

	//Move enemies

	$("#lebron").on("click", function() {

		if (charChoose == true && enemyChoose == false) {

			if (yourChar != "lebron") {
				$("#lebron").appendTo("#defender");
				enemy = "lebron";
			}
		}
	});

	$("#harden").on("click", function() {

		if (charChoose == true && enemyChoose == false) {

			if (yourChar != "harden") {
				$("#harden").appendTo("#defender");
				enemy = "harden";
			}
		}
	});

	$("#brodie").on("click", function() {

		if (charChoose == true && enemyChoose == false) {

			if (yourChar != "brodie") {
				$("#brodie").appendTo("#defender");
				enemy = "brodie";
			}
		}
	});

	$("#steph").on("click", function() {

		if (charChoose == true && enemyChoose == false) {

			if (yourChar != "steph") {
				$("#steph").appendTo("#defender");
				enemy = "steph";
			}
		}
	});

	// Attack!

	$("#attack").on("click", function() {
		if (characters[enemy][1] < 1) {
			characters[enemy][1] = characters[enemy][1]-characters[yourChar][2];
			characters[yourChar][1] = characters[yourChar][1]-characters[enemy][3];
			$("#attackmsg").html("You lost " + characters[enemy][3] + "hp. Your enemy lost " + characters[yourChar][1] + "hp.");
			characters[yourChar][2] = characters[yourChar][2]+characters[yourChar][4];
		}

		else {
			$("#attackmsg").html("Please select another enemy.");
		}
		
	});
	

});