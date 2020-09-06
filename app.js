function runCode() {
	var code = $("#code").val();
	var preview = document.getElementById("preview");
	preview.contentDocument.open();
	preview.contentDocument.write(code);
	preview.contentDocument.close();
}

window.onbeforeunload = function() {
	return "";
};

var view = 1;
var codeSave;

function clearAll() {
	codeSave = $("#code").val();
	$("#code").val("");
	$("#modal-clear").hide();
	$("#restore-question").show();
}

function addTemplate() {
	var template = "<!doctype html>\n<html>\n<head>\n<title>\nPage Title\n</title>\n</head>\n<body>\n\n</body>\n</html>";
	$("#code").val($("#code").val() + template);
}

function restoreCode() {
	$("#code").val(codeSave);
	$("#restore-question").hide();
}

function mainView() {
	view = 1;
	$("#previewColumn").removeClass("m12");
	$("#previewColumn").addClass("m6");
	$("#codeColumn").removeClass("m12");
	$("#codeColumn").addClass("m6");
	$("#preview").css("width", "100%");
	$("#preview").css("height", "calc(100vh - 100px)");
	$("#code").css("height", "calc(100vh - 100px)");
	$("#codeColumn").show();
	$("#previewColumn").show();
}

function maximize() {
	view = 2;
	mainView(); // Reset View
	$("#previewColumn").removeClass("m6");
	$("#previewColumn").addClass("m12");
	$("#preview").css("width", "100%");
	$("#preview").css("height", "calc(100vh - 100px)");
	$("#codeColumn").hide();
}

function mobileView() {
	view = 3;
	mainView();
	$("#previewColumn").removeClass("m6");
	$("#previewColumn").addClass("m12");
	$("#codeColumn").hide();
	$("#preview").css("width", "400px");
	$("#preview").css("height", "700px");
}

function wideView() {
	view = 4; 
	mainView();
	$("#codeColumn").removeClass("m6");
	$("#codeColumn").addClass("m12");
	$("#previewColumn").removeClass("m6");
	$("#previewColumn").addClass("m12");
	$("#code").css("height", "calc(50vh - 50px)");
	$("#preview").css("height", "calc(50vh - 50px)");
}

function focusView() {
	view = 5;
	mainView();
	$("#codeColumn").removeClass("m6");
	$("#codeColumn").addClass("m12");
	$("#code").css("width", "100%");
	$("#code").css("height", "calc(100vh - 100px)");
	$("#previewColumn").hide();
}

$(document).delegate('#code', 'keydown', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode == 9) {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;
    $(this).val($(this).val().substring(0, start)
                + "\t"
                + $(this).val().substring(end));
    this.selectionStart =
    this.selectionEnd = start + 1;
  }
});