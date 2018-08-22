function downloadfileClick()
{
	showMsg(":w ",2);
}
function openfileClick()
{
	showMsg(":e ",2);
}
function audioClick()
{
	editor.focus();  
	//let session = editor.getSession();
	//let count = session.getLength();
	//editor.gotoLine(count, session.getLine(count - 1).length);
	isAudioOn = !isAudioOn;
}

/******************************************************/

function readCommand(command)
{
	if(command.charAt(0) == '"') {
		var index;
		for(index=1;command.charAt(index) && command.charAt(index) != '"';index++)
		{}
		command = command.substring(index + 1);
	}

	/*TODO BIG TODO! MUST TODO!*/
	/*single cmd*/
	var cmd = command.substring(1,
			command.indexOf(' '));
	var args = command.substring(
			command.indexOf(' ') + 1);
	callCmd(cmd,args);
}

function callCmd(cmd,args)
{
	try{

	switch(cmd) {
	case 'w':
		if(args)
			storage.setItem(args,editor.getValue());
		else 
			//...
			;
		break;
	case 'e':
		if(args) {
			editor.session.setValue(storage[args]);
		}
		else
			throw error.syntaxErr;
		break;
	case 'color':
		if(args) {
			editor.setTheme("ace/theme/" + args);
			storage.setItem("_code-theme",args);
		} else
			///...
			;
		break;
	default:
		throw error.unknownCmd;
		break;
	}

	}/*throw*/
	catch(err) {
		alert(err);
	}
}
