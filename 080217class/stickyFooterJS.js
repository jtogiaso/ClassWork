document.getElementById('testButton').addEventListener("click", function() {
	var theDiv = document.getElementById("bodyCon");
	var moreText = document.createTextNode("<p>This is that much more content. Keep pressing the button for more content.</p>\n");
	theDiv.appendChild(moreText);
	theDiv.appendChild(document.createElement("br"));
})