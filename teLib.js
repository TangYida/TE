var error = new Object();
error.unknownCmd = "UNKNOWN COMMAND!";

function showMsg(str,type) {
	var command = document.getElementById("commandLine");
	if(type == 1)
		command.style = "background:#cc0033;"
	command.type = "text";
	command.value = str;
	command.focus();
}
