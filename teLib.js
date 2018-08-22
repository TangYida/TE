var error = new Object();
error.unknownCmd = "UNKNOWN COMMAND!";
error.syntaxErr = "COMMAND SYNTAX ERROR!";

function showMsg(str,type) {
	var command = document.getElementById("commandLine");
	if(type == 1)
		command.style = "background:#cc0033;"
	command.type = "text";
	command.value = str;
	command.focus();
}

function showWnd(str,type)
{
	;
}

function testDebug()
{
}
