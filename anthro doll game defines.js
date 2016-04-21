//variables for what the audience needs to choose

	//backgrounds
	var currentBackground = "background blank"; 
	var backgroundList = ["background alepolis", "background blank", "background damias room", "background mt valentine", "background uris house", "background walled city", "background wildy"];
	
	//back accessories
	var currentBackAccessory = "no back accessory"; 
	var backAccessoryList = ["bow"];
	
	//tails
	var currentTail = "no tail";
	var tailList = ["wolf tail", "long haired cat tail", "short haired cat tail", "otter tail", "no tail"];
	
	//tail undercoats
	var currentTailUndercoat = "no tail undercoat"; 
	var tailUndercoatList = ["tail tip", "tail bottom", "no tail undercoat"]; 
	
	//tail overcoats
	var currentTailOvercoat = "no tail overcoat";
	var tailOvercoatList = ["dark tail top", "no tail overcoat"];
	
	//tail spots 
	var currentTailSpotOne = "no tail spot";
	var tailSpotOneList = ["calico tail dark", "cheetah tail", "maris spots tail", "ocelot tail", "no tail spot", "snow leopard tail dark", "tiger tail"];
	
	//tail spot two
	var currentTailSpotTwo = "no tail spot two";
	var tailSpotTwoList = ["no tail spot two", "calico tail light", "snow leopard tail light"];
	
	//pony tails back
	var currentPonytail = "no ponytail"; 
	var ponytailList = ["straight pigtails", "straight ponytail", "single bun", "buns", "no ponytail", "wavy pigtails", "wavy ponytail", "pigtail puffs", "big puff", "little puffs"];
	
	//bodies
	var currentBodyType = "buff boobs";
	var bodyList = ["buff boobs", "buff flat", "fat boobs", "fat flat"];
	
	//undercoat bodies
	var currentUndercoatBody = "no body undercoat";
	var undercoatBodyList = ["no body undercoat", "right glove", "underbelly", "chest diamond", "left fingers", "left glove", "left socks", "left toes", "right fingers", "right sock", "right toes"];
	
	//overcoat bodies
	var currentOvercoatBody = "no body overcoat";
	var overcoatBodyList = ["no body overcoat", "dark back", "dark arms", "dark arms half", "dark legs side", "dark legs"];
	
	//spot one bodies
	var currentSpotOneBody = "no body spot one";
	var spotOneBodyList =["calico body dark", "no body spot one", "cheetah body", "maris spots body", "ocelot body", "snow leopard body", "tiger body"];
	
	//spot two bodies
	var currentSpotTwoBody = "no body spot two";
	var spotTwoBodyList = ["no body spot two", "calico body light", "ocelot body light", "snow leopard body light"];
	
	//underwear 
	var currentUnderwear = "underwear"; 
	var underwearList = ["underwear"];
	
	//species
	var speciesList = ["otter","fox","wolf","cat"];
	var currentSpecies = "cat";
	
	//head unercoat 
	var currentHeadUndercoat = "no head undercoat";
	var headUndercoatList = ["no head undercoat", "engies face", "uris face"];
	
	//head overcoat
	var currentHeadOvercoat = "no head overcoat"; 
	var headOvercoatList = ["no head overcoat", "head stripe", "jayes face"];
	
	//head spot one
	var currentHeadSpotOne = "no head spot one";
	var headSpotOneList = ["calico face dark", "cheetah face", "no head spot one", "maris spots face", "ocelot face", "snow leopard face", "tiger face"];
	
	//head spot two 
	var currentHeadSpotTwo = "no head spot two";
	var headSpotTwoList = ["no head spot two", "calico face light"];
	
	//front of hair backs
	var currentHair = "no hair front"; 
	var hairList = ["hair jessies", "hair wavy long", "hair wavy shoulderlength", "hair straight shoulderlength", "hair pulled back", "hair cornrows", "hair dreadlocks", "hair microbraids", "hair loose curly", "hair straight long", "hair no hair", "hair afro", "hair shortest straight", "hair shortest wavy", "hair shortest curly"];
	
	//cheek fluff
	var currentCheekFluff = "cheek fluff none"; 
	var cheekFluffList = ["cheek fluff none", "cheek fluff engie", "cheek fluff haskel", "cheek fluff damia"]; 
	
	//cheek fluff undercoats
	var currentCheekFluffUndercoat = "no cheek fluff undercoat";
	var cheekFluffUndercoatList = ["no cheek fluff undercoat", "uris face fluff"];
	
	//cheek fluff spot one
	var currentCheekFluffSpotOne = "no cheek fluff spot one";
	var cheekFluffSpotOneList = ["calico cheeks dark", "maris spots cheeks", "no cheek fluff spot one"];
	
	//cheek fluff spot two
	var currentCheekFluffSpotTwo = "no cheek fluff spot two";
	var cheekFluffSpotTwoList = ["no cheek fluff spot two", "calico cheeks light"];
	
	//ears
	var currentEars = "ears cat up";
	var earList = ["ears lynx up", "ears lynx down", "ears cat up", "ears cat down", "ears wolf up", "ears wolf down", "ears otter"];
	
	//ear undercoat
	var currentEarUndercoat = "no ear undercoat"
	var earUndercoatList = ["no ear undercoat", "inside"];
	
	//ear overcoat
	var currentEarOvercoat = "no ear overcoat";
	var earOvercoatList = ["no ear overcoat", "dark ears", "snow leopard ears"];
	
	//ear spot one
	var currentEarSpotOne = "no ear spot one";
	var earSpotOneList = ["no ear spot one", "dark ears", "calico ears", "cheetah ears"];
	
	//mouths
	var currentFacialExpression = "neutral"; 
	var mouthList = ["smile mouth closed", "smile mouth open", "neutral", "frown", "growl"];
	
	//eyes
	var currentEyes = "sashkas eyes"; 
	var eyeList = ["sashkas eyes","jessies eyes","candis eyes","engies eyes","damias eyes"];
	
	//eyebrows
	var currentEyebrows = "no eyebrows";
	var eyebrowList = ["thin smile", "thin sad", "thin angry", "thin flat", "thick smile", "thick sad", "thick angry", "thick flat", "no eyebrows"];
	
	//glasses
	var currentGlasses = "no glasses";
	var glassesList = ["no glasses", "glasses oval", "glasses square", "glasses sun", "glasses tiny"];
	
	//bangs 
	var currentBangs = "no bangs"; 
	var bangsList = ["bangs claras", "bangs cornrows", "bangs dreadlocks", "bangs jessies", "bangs loose curly", "bangs microbraids", "bangs fringe", "bangs straight off to one side", "bangs straight peekaboo", "bangs wavy off to one side", "bangs wavy peekaboo", "no bangs"];
	
	//leggings and stockings 
	var currentLeggings = "no leggings"; 
	var leggingsList = ["fishnets", "stockings", "leggings", "thigh highs", "leg warmers", "no leggings"];
	
	//tight shirts
	var currentTightShirt = "no tight shirt"; 
	var tightShirtList = ["tank top", "t shirt", "long sleeved shirt", "tube top", "bikini", "no tight shirt"];
	
	//gloves
	var currentGloves = "no gloves"; 
	var gloveList = ["gloves vestas", "gloves sashkas", "gloves regular", "gloves fancy", "no gloves"];
	
	//dresses
	var currentDress = "no dress"; 
	var dressList = ["jessies dress", "backless dress", "poofy dress", "one strap dress", "plain dress", "lacy dress", "sleeved dress", "sack dress", "no dress"];
	
	//secondary dress colors 
	var currentSecondaryDressPattern = "dress trim";
	var secondaryDressList = ["dress trim", "no dress trim"];
	
	//skirts and pants
	var currentSkirt = "no skirt"; 
	var skirtList = ["jeans", "cargo", "jean shorts", "poofy skirt", "tight skirt", "no skirt"];
	
	//skirts patterns
	var currentSkirtPattern = "skirt trim";
	var secondarySkirtList = ["no skirt trim", "skirt trim"];
	
	//looser shirts
	var currentLooseShirt = "no loose shirt"; 
	var looseShirtList = ["loose t shirt", "underbust corset", "overbust corset", "sweatshirt", "shawl", "knit shirt", "rib shirt", "no loose shirt"];
	
	//armour tops
	var currentArmorTop = "no armor top"; 
	var armorTopList = ["sashkas armor top", "sophias armor top", "chainmail top", "armored crop top", "bullet proof vest", "no armor top"];
	
	//armour tops secondary colors
	var currentSecondaryArmorTopPattern = "no armor top second"; 
	var secondaryArmorTopList = ["armor top second", "no armor top second"];
	
	//armour tops tretiary colors 
	var currentThirdArmorTopPattern = "no armor top third"; 
	var thirdArmorTopList = ["armor top third", "no armor top third"];
	
	//armor bottoms 
	var currentArmorBottom = "no armor bottom"; 
	var armorBottomList = ["sophias armor legs", "thigh pads", "chainskirt", "no armor bottom"]; 
	
	//armor bottoms secondaries/ lowlights
	var currentSecondaryArmorBottomPattern = "no armor bottom second"; 
	var armorBottomSecondaryList = ["armor bottom second", "no armor bottom second"];
	
	//armor bottoms tretiaries/ highlights
	var currentThirdArmorBottomPattern = "no armor bottom third";
	var armorBottomThirdList = ["armor bottom third", "no armor bottom third"];
	
	//armor limbs you can apply more than one at once
	var currentLimbArmor = "no limb armor"; 
	var armorLimbList = ["forearm guards", "shoulder pads small", "shoulder pads large", "shin coverings", "feet coverings", "armored gloves", "no limb armor"]; 
	
	//armor limbs secondary colors
	var currentSecondaryLimbPattern = "no armor limb trim"; 
	var armorLimbSecondaryList = ["armor limb trim", "no armor limb trim"];
	
	//belts
	var currentBelt = "no belt"; 
	var beltList = ["no belt", "hip belt", "loose belt", "waist belt"];
	
	//second belt color
	var currentBeltStuds = "no belt studs";
	var beltStudsList = ["no belt studs", "studs"];
	
	//coats 
	var currentCoat = "no coat"; 
	var coatList = ["trenchcoat", "sashkas coat", "poofy coat", "furry coat", "rain coat", "isildas coat", "no coat"]; 
	
	//secondary coat colors
	var currentCoatSecondary = "no coat trim"; 
	var secondaryCoatList = ["coat trim", "no coat trim"];
	
	//earring
	var currentEarring= "no earrings";
	
	var earringList = ["small earings", "loopy earrigns", "no earrings"]
	
	//tight/body dependant accessories u should be able to apply more than one
	var currentAccessoryOne = "no tight necklace";
	var accessoryOneList = ["choker", "no tight necklace"]; 

	//misc acessories
	var currentMisc = "no misc"; 
	var miscList = ["loose necklace", "normal cane", "four point cane", "sashkas necklace", "scarf", "loose braclets", "bracers", "no misc"];
	
	
	//mobility devices
	var currentMobilityDevice = "no mobility"; 
	var mobilityList = ["wrist braces", "elbow braces", "knee braces", "ankle braces", "no mobility"];
	
	//weapons
	var currentWeapon = "no weapon"; 
	var weaponList = ["dagger up hand", "godsmasher hammer", "no weapon", "knives", "pistol", "shield", "spear", "sword"];
	
	//magic weapons
	var currentMagicWeapon = "no magic weapon";
	var magicWeaponList = ["no magic weapon", "magic dagger down hand", "magic dagger up hand", "magic hammer", "magic katar", "magic mace", "magic shield", "magic spear", "magic sword down hand", "magic sword up hand", "magic whip down hand", "magic whip up hand", "magic scimitar down hand", "magic scimitar up hand"];
	
	//weapons hilts
	var currentWeaponHilt = "no hilt"; 
	var weaponHiltList = ["dagger up hand hilt", "godsmasher hammer hilt", "no hilt", "shield hilt", "spear hilt", "sword hilt"];
	
	//weapons gems
	var currentWeaponGem = "no gem";
	var weaponGemList = ["shield gem", "spear gem", "sword gem", "no gem"];
	
	//pony tails
	var currentBraid = "no braid"; 
	var braidList = ["braid", "no braid"];
	
	//emotions
	var currentEmotion = "none";
	var emotionList = ["anger", "sweat", "heavy blush", "light blush", "hearts", "scribbly", "none"];
	
function Selection(names,colorNames,choiceLists){
	if(names.constructor === Array)//names is an array here
	{
		this.names=names;
	}else{
		this.names = [names];
	}	
	if(colorNames.constructor===Array){
			this.colorNames=colorNames;
	}else{
		this.colorNames = [colorNames];
	}
	if(choiceLists[0].constructor===Array)//if array of array
	{
		this.choiceLists=choiceLists;
	}else{
		this.choiceLists=[choiceLists];
	}
}
//list of arrays
var geneticsTab = [new Selection("currentTail","currentBodyColor",tailList), new Selection("currentSpecies","currentBodyColor", speciesList), new Selection ("currentBodyType", "currentBodyColor", bodyList), new Selection ("currentCheekFluff", "currentBodyColor", cheekFluffList), new Selection ("currentEars", "currentBodyColor", earList)]; 
var furPatternTab = [new Selection("currentTailUndercoat", "currentUndercoatColor", tailUndercoatList), new Selection ("currentTailOvercoat", "currentOvercoatColor", tailOvercoatList), new Selection ("currentTailSpotOne", "currentSpotOneColor", tailSpotOneList), new Selection ("currentTailSpotTwo", "currentSpotTwoColor", tailSpotTwoList), new Selection ("currentUndercoatBody", "currentUndercoatColor", undercoatBodyList), new Selection ("currentOvercoatBody", "currentOvercoatColor", overcoatBodyList), new Selection ("currentSpotOneBody", "currentSpotOneColor", spotOneBodyList), new Selection ("currentSpotTwoBody", "currentSpotTwoColor", spotTwoBodyList), new Selection ("currentHeadUndercoat", "currentUndercoatColor", headUndercoatList), new Selection ("currentHeadOvercoat", "currentOvercoat Color", headOvercoatList), new Selection ("currentHeadSpotOne", "currentSpotOneColor", headSpotOneList), new Selection ("currentHeadSpotTwo", "currentSpotTwoColor", headSpotTwoList), new Selection ("currentCheekFluffUndercoat", "currentUndercoatColor", cheekFluffUndercoatList), new Selection ("currentCheekFluffSpotOne", "currentSpotOneColor", cheekFluffSpotOneList), new Selection ("currentCheekFluffSpotTwo", "currentSpotTwoColor", cheekFluffSpotTwoList), new Selection ("currentEarUndercoat", "currentUndercoatColor", earUndercoatList), new Selection ("currentEarOvercoat", "currentOvercoatColor", earOvercoatList), new Selection ("currentEarSpotOne", "currentSpotOneColor", earSpotOneList)];
var expressionTab = [new Selection ("currentEyes","currentEyesWhitesColor", eyeList), new Selection ("currentEyebrows", "currentEyebrowsColor", eyebrowList), new Selection ("currentFacialExpression", "null", mouthList), new Selection("currentEmotion","currentBodyColor", emotionList)]; 
var hairTab = [new Selection ("currentHair", "currentHairColor", hairList), new Selection ("currentBangs", "currentHairColor", bangsList), new Selection ("currentPonytail", "currentHairColor", ponytailList), new Selection ("currentBraid", "currentHairColor", braidList)]; 
var tightClothesTab = [new Selection ("currentLeggings", "currentLeggingsColor", leggingsList), new Selection ("currentTightShirt", "currentTightShirtColor", tightShirtList)]; 
var dressTab = [new Selection ("currentDress", "currentDressColor", dressList)];
var looserClothesTab = [new Selection ("currentLooseShirt", "currentLooseShirtColor", looseShirtList), new Selection ("currentSkirt", "currentSkirtColor", skirtList)]; 
var armorTab = [new Selection ("currentArmorTop", "currentArmorTopColor", armorTopList), new Selection ("currentArmorBottom", "currentArmorBottomColor", armorBottomList), new Selection ("currentLimbArmor", "currentLimbArmorColor", armorLimbList)];
var coatAndGloveTab = [new Selection ("currentGloves", "currentGlovesColor", gloveList), new Selection ("currentCoat", "currentCoatColor", coatList)]; 
var weaponsTab = [new Selection ("currentWeapon", "currentWeaponColor", weaponList), new Selection ("currentMagicWeapon", "currentMagicWeaponColor", magicWeaponList) ]; 
var accessoriesTab = [new Selection ("currentEarring", "currentEarringColor", earringList), new Selection ("currentAccessoryOne", "currentAccessoryOneColor", accessoryOneList), new Selection ("currentMisc", "currentMiscColor", miscList), new Selection ("currentGlasses", "currentGlassesColor", glassesList), new Selection ("currentMobilityDevice", "currentMobilityDeviceColor", mobilityList), new Selection ("currentBelt", "currentBeltColor", beltList), new Selection ("currentBackAccessory", "currentAccessoryOneColor", backAccessoryList)]; 
var backgroundsTab = [new Selection ("currentBackground", "currentBackgroundColor", backgroundList)];

var allTabs = [geneticsTab, furPatternTab, expressionTab, hairTab, tightClothesTab, dressTab, looserClothesTab, armorTab, coatAndGloveTab, accessoriesTab, weaponsTab,  backgroundsTab];
var tabNames = ["genetics", "fur_pattern", "expressions","hair","tight_clothes", "dress", "looser_clothes", "armor", "coats_and_gloves", "accessories", "weapons", "backgrounds"];

var colorList = 
	[
	 ["Bow","currentBackAccessoryColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]], 
	 ["Fur color","currentBodyColor",[255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["overcoat color", "currentOvercoatColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["undercoat color", "currentUndercoatColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["spot one", "currentSpotOneColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] , 
	 ["spot two", "currentSpotTwoColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["underwear", "currentUnderwearColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] , 
	 ["nose", "currentNoseColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["hair", "currentHairColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["eye whites", "currentEyesWhitesColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["eye color", "currentEyesColorColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["eyebrows", "currentEyebrowsColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["leggings", "currentLeggingsColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["undershirt", "currentTightShirtColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["gloves", "currentGlovesColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["dress base", "currentDressColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["dress trim", "currentSecondaryDressColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["skirt base", "currentSkirtColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["skirt trim", "currentSkirtPatternColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["shirt", "currentLooseShirtColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["armor top", "currentArmorTopColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["armor top secondary", "currentSecondaryArmorTopColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["armor top tretiary", "currentThirdArmorTopColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["armor bottom", "currentArmorBottomColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["armor bottom secondary", "currentSecondaryArmorBottomColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["armor bottom tretiary", "currentThirdArmorColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["limb armor", "currentLimbArmorColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["limb armor trim", "currentSecondaryLimbColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]] ,
	 ["coat", "currentCoatColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]],
	 ["earring", "currentEarringColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]],
	 ["first accessory", "currentAccessoryOneColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]], 
	 ["glasses", "currentGlassesColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]],
	 ["mobility devices", "currentMobilityDeviceColor", [255,255,255], [191, 191, 191], [129, 129, 129], [79, 79, 79], [22, 22, 22], [172, 126, 82], [104, 71, 32], [62, 41, 16], [28, 17, 5], [228, 91, 44], [171, 66, 30], [96, 36, 15], [222, 170, 102], [195, 136, 59], [153, 96, 23], [107, 180, 243], [73, 136, 189], [42, 90, 131], [21, 47, 69], [253, 173, 190], [245, 103, 133], [221, 41, 58], [142, 22, 34], [98, 215, 101], [47, 169, 50], [20, 114, 22], [9, 64, 10], [204, 88, 221], [149, 60, 162], [106, 30, 117], [53, 9, 59], [243, 236, 116], [223, 213, 58]]
	 ];
	 



//NOTES
//need two pages of fur pattern and color 
//bangs art mistakes: fringe, wavy off to one side,straight, wavy peeka boo
//microbraids back not working
//jessies hair has white dot in front o fface so does straight long and afro and shortest straight hair
//make so leg warmers can be toggled on with other leggings
//cant apply more than one limb armor
//cant apply more than one weapon
//FACE DOESNT WORK WITH ENGIES EYES if u click first on engies eyes
//nose, body not working with microbraid bangs when u click on bangs first
