function parsefiles() {
	const	input		= document.querySelector('input[type="file"][multiple]');
	const	files		= input.files;
	
	for (let i = 0; i < files.length; i++) {
		var file = files[i];
		var reader = new FileReader();
		reader.onload = function(event) {
			var converted = convert(event.target.result);
			if (converted)
				console.log('%c SUCCESFULLY CONVERTED: \"' + files[i].name + '\"', 'color: #33dd22');
			else {
				console.log('%c ERROR PARSING/CONVERTING: \"' + files[i].name + '\"', 'color: #dd3322');
				return (0);
			}
			console.log(converted);
		}
		reader.readAsText(file);
	}
}

function convert(fileContent) {
	return fileContent;
}
