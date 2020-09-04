function runCode() {
	var code = document.getElementById("code").value;
	var preview = document.getElementById("preview");
	preview.contentDocument.open();
	preview.contentDocument.write(code);
	preview.contentDocument.close();
}

window.onbeforeunload = function() {
	return "";
};

var maximized = false;

function maximize() {
	if (maximized) {
		maximized = false;
		$("#maxButton").text("Maximize Preview");
		$("#previewColumn").removeClass("m12");
		$("#previewColumn").addClass("m6");
		$("#codeColumn").show();
		$("#preview").css("height", "height: calc(100vh - 100px);");
	}
	else {
		maximized = true;
		$("#maxButton").text("Default View");
		$("#previewColumn").removeClass("m6");
		$("#previewColumn").addClass("m12");
		$("#codeColumn").hide();
		$("#preview").css("height", "height: calc(100vh - 100px);");
	}
}