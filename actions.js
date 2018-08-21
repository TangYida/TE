function downloadfileClick()
{
	showMsg(":w ",2);
}
function audioClick()
{
	editor.focus();  
	//let session = editor.getSession();
	//let count = session.getLength();
	//editor.gotoLine(count, session.getLine(count - 1).length);
	if(isAudioOn) {
		isAudioOn = false;
	}
	else isAudioOn = true;
}

/******************************************************/

function readCommand(command)
{
	if(command.charAt(0) == ':') {
		//TODO single char
		var cmd = command.substring(1,
				command.indexOf(' '));
		var args = command.substring(
				command.indexOf(' ') + 1);
		callCmd(cmd,args);
	} else {
		callNml(command);
	}
}

function callCmd(cmd,args)
{
	if(cmd == 'w') {
		if(args != null) {
			storage.setItem(args,editor.getValue());
		} else 
			//...
			;
	}
}
	
function callNml(cmd)
{
	//...
}
