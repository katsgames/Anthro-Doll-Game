
/*current variables
	var currentTail,
	currentBack,
	currentBodyType,
	currentFace,
	currentNose,
	currentCheekFluff,
	currentEars,
	currentInsideEar, 
	currentHairTop,
	currentBangs, 
	currentFacialExpression,
	currentEyesWhites,
	currentEyesColor,
	currentEyebrows,
	currentBangs, 
	currentUnderwear,
	currentLeggings,
	currentTightShirt,
	currentGloves,
	currentDress,
	currentSecondaryDressPattern, 
	currentSkirt,
	currentLooseShirt,
	currentArmorTop,
	currentSecondaryArmorTopPattern,
	currentThirdArmorTopPattern,
	currentArmorBottom,
	currentSecondaryArmorBottomPattern,
	currentThirdArmorBottomPattern,
	currentLimbArmor,
	currentSecondaryLimbPattern, 
	currentCoat, 
	currentJewerly, 
	currentGlasses, 
	currentMobilityDevice, 
	currentPonytail; */
	
//color variables 
	var currentBackgroundColor = [255, 255, 255];
	var currentBodyColor = [255, 255, 255];
	var currentNoseColor = [255, 255, 255]; 
	var currentOvercoatColor = [0, 0, 0];
	var currentUndercoatColor = [255, 255, 255]; 
	var currentSpotOneColor = [0, 0, 0];
	var currentSpotTwoColor = [255, 255, 255]; 
	var currentHairColor = [255, 255, 255]; 
	var currentInsideEar = [255, 255, 255];
	var currentEyesWhitesColor = [255, 255, 255]; 
	var currentEyesColorColor = [0, 0, 0]; 
	var currentEyebrowsColor = [255, 255, 255];
	var currentGlassesColor = [0, 0, 0];
	var currentUnderwearColor = [0, 0, 0]; 
	var currentLeggingsColor = [255, 255, 255];
	var currentTightShirtColor = [255, 255, 255]; 
	var currentGlovesColor = [255, 255, 255]; 
	var currentDressColor = [255, 255, 255];
	var currentSecondaryDressColor = [255, 255, 255]; 
	var currentSkirtColor = [255, 255, 255]; 
	var currentSkirtPatternColor = [255, 255, 255]; 
	var currentLooseShirtColor = [255, 255, 255]; 
	var currentArmorTopColor = [255, 255, 255]; 
	var currentSecondaryArmorTopColor = [255, 255, 255];
	var currentThirdArmorTopColor = [255, 255, 255]; 
	var currentArmorBottomColor = [255, 255, 255]; 
	var currentSecondaryArmorBottomColor = [255, 255, 255];
	var currentThirdArmorColor = [255, 255, 255];
	var currentLimbArmorColor = [255, 255, 255];
	var currentSecondaryLimbColor = [255, 255, 255];
	var currentBeltColor = [255, 255, 255];
	var currentBeltStudsColor = [255, 255, 255];
	var currentCoatColor = [255,255,255];
	var currentCoatSecondaryColor = [255, 255, 255];
	var currentEarringColor = [255,255,255];
	var currentAccessoryOneColor = [255, 255, 255];
	var currentMobilityDeviceColor = [255,255,255];
	var currentMiscColor 
	var currentWeaponColor = [255, 255, 255];
	var currentWeaponHiltColor = [255, 255, 255];
	var currentWeaponGemColor = [255, 0, 0];
	var currentMagicWeaponColor = [255, 255, 255];
	
	
	
//recoloring function
	
	var recolor = function (img, color) {
		if(!color){ 
			var canvasTwo = document.createElement("canvas");
			canvasTwo.width = img.width; 
			canvasTwo.height = img.height; 
			var ctx = canvasTwo.getContext("2d"); 
			ctx.drawImage (img, 0, 0); 
			
			return canvasTwo; 
		}
		 var canvasTwo = document.createElement("canvas");
		 canvasTwo.width = img.width; 
		 canvasTwo.height = img.height; 
		 var ctx = canvasTwo.getContext("2d"); 
		 ctx.drawImage (img, 0, 0); 
		var data = ctx.getImageData(0, 0, canvasTwo.width, canvasTwo.height);
		
		var counter = 0;

		for (var i = 0; i < data.data.length; i = i + 4) {
			if (data.data[i] == 255 && data.data[i+1] == 255 && data.data[i+2] == 255) {
				data.data[i] = color[0]
				data.data[i+1] = color[1]
				data.data[i+2] = color[2];
			}
			
		};
		ctx.putImageData(data, 0, 0);
			
		return canvasTwo; 
	};
	
//main function change draw image later

var drawDoll = function(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	var currentFace;
	switch(currentFacialExpression){
		case "neutral":
			currentFace = "face mouth shut";
			break;
		case "smile mouth open":
			currentFace = "face mouth open";
			break;
		case "smile mouth closed":
			currentFace = "face mouth shut";
			break;
		case "growl":
			currentFace = "face mouth open";
			break;
		case "frown":
			currentFace = "face mouth shut";
			break;
	}
	
	var drawingOrder = [
	currentBackground ,
	currentBackAccessory, 
	currentTail,
	currentTail + " " + currentTailUndercoat,
	currentTail + " " + currentTailOvercoat,
	currentTail + " " + currentTailSpotOne,
	currentTail + " " + currentTailSpotTwo,
	currentTail + " lines",
	currentHair + " back",
	currentBangs + " back", 
	currentPonytail, 
	currentBodyType,
	currentBodyType + " " + currentUndercoatBody ,
	currentBodyType + " " + currentOvercoatBody ,
	currentBodyType + " " + currentSpotOneBody,
	currentBodyType + " " + currentSpotTwoBody, 
	currentBodyType + " lines", 
	currentBodyType + " " + currentUnderwear,
	currentBodyType + " " + currentLeggings,
	currentBodyType + " " + currentTightShirt,
	currentBodyType + " " + currentGloves,
	currentBodyType + " " + currentDress,
	currentBodyType + " " + currentDress + " " + currentSecondaryDressPattern, 
	currentBodyType + " " + currentSkirt,
	currentBodyType + " " + currentSkirt + " " + currentSkirtPattern,
	currentBodyType + " " + currentLooseShirt,
	currentBodyType + " " + currentArmorTop,
	currentBodyType + " " + currentArmorTop + " " + currentSecondaryArmorTopPattern,
	currentBodyType + " " + currentArmorTop + " " + currentThirdArmorTopPattern,
	currentBodyType + " " + currentArmorBottom,
	currentBodyType + " " + currentArmorBottom + " " + currentSecondaryArmorBottomPattern,
	currentBodyType + " " + currentArmorBottom + " " + currentThirdArmorBottomPattern,
	currentBodyType + " " + currentLimbArmor,
	currentBodyType + " " + currentLimbArmor + " " + currentSecondaryLimbPattern,
	currentBodyType + " " + currentBelt,
	currentBodyType + " " + currentBelt + " " + currentBeltStuds, 
	currentBodyType + " " + currentCoat, 
	currentBodyType + " " + currentCoat + currentCoatSecondary ,
	currentBodyType + " " + currentAccessoryOne, 
	currentMisc, 
	currentSpecies + " " + currentFace, 
	currentSpecies + " " + currentFace + " " + currentHeadUndercoat,
	currentSpecies + " " + currentFace + " " + currentHeadOvercoat, 
	currentSpecies + " " + currentFace + " " + currentHeadSpotOne, 
	currentSpecies + " " + currentFace + " " + currentHeadSpotTwo,
	currentSpecies + " " + currentFace + " lines", 
	currentSpecies + " nose",
	currentSpecies + " " + currentCheekFluff, 
	currentCheekFluff + " " + currentCheekFluffUndercoat, 
	currentCheekFluff + " " + currentCheekFluffSpotOne, 
	currentCheekFluff + " " + currentCheekFluffSpotTwo,
	currentHair,
	currentEars,
	currentEars + " " + currentEarUndercoat, 
	currentEars + " " + currentEarOvercoat, 
	currentEars + " " + currentEarSpotOne, 
	currentSpecies + " " + currentFace + " " + currentFacialExpression,
	currentEyes + " whites",
	currentEyes + " base color",
	currentEyebrows,
	currentGlasses,
	currentBangs, 
	currentEars + " " + currentEarring, 
	currentBodyType + " " + currentMobilityDevice, 
	currentWeapon, 
	currentWeapon + " " + currentWeaponHilt,
	currentWeapon + " " + currentWeaponGem, 
	currentMagicWeapon,
	currentBraid,
	currentEmotion];
	//parallel array with colors
	var colorOrder = 
	 [
	 currentBackgroundColor,
	 currentAccessoryOneColor, 
	 currentBodyColor ,
	 currentUndercoatColor ,
	 currentOvercoatColor ,
	 currentSpotOneColor ,
	 currentSpotTwoColor, 
	 null, //lines 
	 currentHairColor ,
	 currentHairColor , 
	 currentHairColor ,
	 currentBodyColor ,
	 currentUndercoatColor ,
	 currentOvercoatColor ,
	 currentSpotOneColor ,
	 currentSpotTwoColor,
	 null, //lines
	 currentUnderwearColor , 
	 currentLeggingsColor ,
	 currentTightShirtColor ,
	 currentGlovesColor ,
	 currentDressColor ,
	 currentSecondaryDressColor ,
	 currentSkirtColor ,
	 currentSkirtPatternColor ,
	 currentLooseShirtColor ,
	 currentArmorTopColor ,
	 currentSecondaryArmorTopColor ,
	 currentThirdArmorTopColor ,
	 currentArmorBottomColor ,
	 currentSecondaryArmorBottomColor ,
	 currentThirdArmorColor ,
	 currentLimbArmorColor ,
	 currentSecondaryLimbColor ,
	 currentBeltColor,
	 currentBeltStudsColor, 
	 currentCoatColor,
	 currentCoatSecondaryColor,
	 currentAccessoryOneColor,
	 currentMiscColor,
	 currentBodyColor ,
	 currentUndercoatColor ,
	 currentOvercoatColor ,
	 currentSpotOneColor ,
	 currentSpotTwoColor,
	 null, //lines
	 currentNoseColor ,
	 currentBodyColor ,
	 currentUndercoatColor ,
	 currentSpotOneColor ,
	 currentSpotTwoColor,
	 currentHairColor ,
	 currentBodyColor ,
	 currentUndercoatColor,
	 currentOvercoatColor, 
	 currentSpotOneColor,
	 null, //facial expression
	 currentEyesWhitesColor ,
	 currentEyesColorColor ,
	 currentEyebrowsColor ,
	 currentGlassesColor, 
	 currentHairColor, //bangs
	 currentEarringColor,
	 currentMobilityDeviceColor,
	 currentWeaponColor,
	 currentWeaponHiltColor,
	 currentWeaponGemColor,
	 currentMagicWeaponColor, 
	 currentHairColor, 
	 null //emotion
	 ];
	 
	 
	 
	 
	 for(var i = 0; i < drawingOrder.length; i++){
		 var img = document.getElementById(drawingOrder[i]);
		 if(!img){console.log("not found: " + drawingOrder[i]);continue;};//if image is null just go on
		 var color = colorOrder[i];
		 console.log(img);
		 img = recolor(img,color);
		 ctx.drawImage(img,0,0);
		 

	 }
};


var main = function() {
	 for (var i = 0; i < allTabs.length; i++) {
		 makeTab(allTabs[i], tabNames[i]);
	 }
	setupColor();
	 $('#ultabs a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('#tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
	$('#ultabs li:first-child a').click();
	var things = $("img.useless");
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	for(var i = 0; i < things.length; i++){
		try{
		ctx.drawImage(things[i],1000,1000);
		}catch(e){
				
		console.log(things[i].id);
		}
	}
	drawDoll();
	
};

var makeTab = function(selectionList,name){	
        var li = document.createElement("li");
		li.innerHTML = '<a href="#'+name+'">'+name+'</a></li>';
		$("#ultabs").append(li);
		$("#tabs").append(createTabContent(selectionList,name));
}

var createTabContent = function(selectionList,name){
	var div = document.createElement("div");
	$(div).addClass("tab");
	div.id= name;
	var jquerydiv = $(div);
	for(var i = 0; i < selectionList.length; i++){
		//here we have an individual selection object
		for(var j = 0; j < selectionList[i].choiceLists[0].length; j++){
			jquerydiv.append(createButtonThing(selectionList[i],j));
		}
		jquerydiv.append(document.createElement("br"));
	}
	
	
	return div;

}
var createButtonThing = function(selection, index){
	var names = selection.names;
	var colorNames = selection.colorNames;
	var choiceLists = selection.choiceLists;
	var currentOnes =[];
	for(var i = 0; i < choiceLists.length; i++){
		currentOnes.push(choiceLists[i][index]);
	}
	var button = document.createElement("button"); /*document.createElement("img"); wait until we have smaller images
	button.src = document.getElementById(currentOnes[0]/*todo combine images/).src;*/
	//$(button).css("width","70px").css("height","100px");
	button.innerHTML = currentOnes[0];
	button.onclick = function(){
		for(var i = 0; i < currentOnes.length; i++){
			window[names[i]]=currentOnes[i];
		}
		drawDoll();
	}
	return button;
	
}

var setupColor = function(){

        var li = document.createElement("li");
		li.innerHTML = '<a href="#color">colors</a></li>';
		$("#ultabs").append(li);
		
		var div = document.createElement("div");
		div.id = "color";
		var $div = $(div);
		for(var i = 0; i < colorList.length; i++){
			$div.append(createColorLine(colorList[i]));
		}
		$("#tabs").append(div);
}
var createColorLine = function(array){
	var name = array[0];
	var varName = array[1];
	var div = document.createElement("div");
	div.innerHTML = name;
	var $div = $(div);
	for(var i = 2; i < array.length; i++){
		var newDiv = document.createElement("div");
		$(newDiv).css("width","15px").css("height","15px");
		$(newDiv).css("background-color","rgb("+array[i][0]+","+array[i][1]+","+array[i][2]+")");
		$(newDiv).click(makeColorFunction(varName,array[i]));
		$div.append(newDiv);
	}
	return div;
}
function makeColorFunction(varName,color){
	return function(){window[varName]=color;drawDoll();}
}

$(document).ready(main);