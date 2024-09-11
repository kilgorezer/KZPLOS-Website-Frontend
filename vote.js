function vote(option) {
	if(option == "HTML" || option == "CSS" || option == "JS" || option == "BF" || option == "Python" || option == "VBS") {
		var form = new FormData();
		form.append("vote", option);
		fetch("https://chat.kilgorezer.com/vote/vote.php", {
			method: "POST",
			body: form
		})
	}
}