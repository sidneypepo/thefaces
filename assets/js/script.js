var secondsLeft = 3

function redirectToMainPage() {
	if(secondsLeft > 0) {
		document.getElementById("redirecting").innerHTML = `This page will redirect you in ${secondsLeft} seconds.`
		setTimeout("redirectToMainPage()", 1000)
		secondsLeft--

	} else {
		document.getElementById("redirecting").innerHTML = "Redirecting..."
		window.location.href = "../"

	}

}