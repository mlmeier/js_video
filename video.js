var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	video.loop = false;
});


document.querySelector("#play").addEventListener("click", function() {
	video.play();
});
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	
	console.log("Speed = ",video.playbackRate)
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	
	console.log("Speed = ",video.playbackRate)
});
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
});
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";

	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}

	
	
});


document.querySelector("#slider").addEventListener('input', function(x) {
  video.volume = this.value;
  document.querySelector("#slider").innerHTML = this.value;
});
document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("link").setAttribute("href","");
})
document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("link").setAttribute("href","css/video.css");
})
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

