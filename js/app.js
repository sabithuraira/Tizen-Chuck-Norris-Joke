(function() {
	function shuffle(){
		document.getElementById("img-load").style.display="inline";
		$.getJSON("https://api.chucknorris.io/jokes/random", function(result){
			$("#message-content").html(result.value);
	        document.querySelector("#img-load").style.display = "none";
		});
	}

    function setDefaultEvents() {
        document.querySelector("#shuffle").addEventListener("click", shuffle);

        document.addEventListener("tizenhwkey", function(e) {
            if (e.keyName === "back") {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (error) {
                    console.error("getCurrentApplication(): " + error.message);
                }
            }
        });
    }

    function init() {
        setDefaultEvents();
        shuffle();
    }

    window.onload = init;
}());
