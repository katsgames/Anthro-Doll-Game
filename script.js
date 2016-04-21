var akthanakos = new Image();
 akthanakos.src = "akthanakos request copy.png"


var somefunctionname = function () {
	var bodyType = document.querySelector('input[name = "bodies"]:checked').value;
	 alert(bodyType);
}; 

var drawakthanakos = function () {
	var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.drawImage(akthanakos,0,0)
}

var body = prompt ("Which body type do you want?")
	switch (body) {
		case 'skinnybody'
		break;
		case 'curvybody'
		break;
		case 'buffbody'
		break;
		case 'fatbody'
		break;
		case 'littlepersonbody'
		break;
		case 'wheelchairbuffybody'
		break;
		case 'wheelchairskinnybody'
		break;
		case 'wheelchairchubbybody'
		break;
		case 'wheelchairshortbody'
		break;
		case 'skinnybodybreasts'
		break;
		case 'curvybodybreasts'
		break;
		case 'buffbodybreasts'
		break;
		case 'fatbodybreasts'
		break;
		case 'littlepersonbodybreasts'
		break;
		case 'wheelchairbuffybodybreasts'
		break;
		case 'wheelchairskinnybodybreasts'
		break;
		case 'wheelchairchubbybodybreasts'
		break;
		case 'wheelchairshortbodybreasts'
		break;
		default: 
	}