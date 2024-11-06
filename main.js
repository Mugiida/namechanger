function styleButton() {
	let input = document.querySelector('input[type="text"]');
	let userInput = input.value;
	let styledDiv = document.querySelector("#styledContent");

	styledDiv.className = "decorated-text";
	styledDiv.innerHTML = userInput;
}

function convertToImage() {
	setTimeout(() => {
		html2canvas(document.getElementById("styledContent")).then(function (
			canvas
		) {
			let img = canvas.toDataURL("image/png");

			let downloadLink = document.createElement("a");
			downloadLink.href = img;
			downloadLink.download = "decorated-name.png";

			document.body.appendChild(downloadLink);
			downloadLink.click();
			document.body.removeChild(downloadLink);
		});
	}, 100); // Delay for 100 milliseconds
}
