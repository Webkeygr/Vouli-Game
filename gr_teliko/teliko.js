(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"teliko_atlas_1", frames: [[0,0,1632,954],[0,1430,1117,568],[0,956,1630,472]]},
		{name:"teliko_atlas_2", frames: [[914,606,627,80],[0,0,1111,568],[1814,0,2,42],[0,963,572,42],[1588,106,266,42],[1588,150,266,42],[1543,606,308,75],[0,832,769,129],[771,832,752,129],[0,701,895,129],[0,570,912,129],[897,701,776,129],[1113,475,776,129],[1588,0,224,104],[1113,0,473,473]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_84 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["teliko_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["teliko_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["teliko_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.background_black = function() {
	this.initialize(img.background_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2667,1500);


(lib.barbakeio = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.niki_head = function() {
	this.initialize(ss["teliko_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.zoforos = function() {
	this.initialize(img.zoforos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10628,250);


(lib.zoforos_black = function() {
	this.initialize(img.zoforos_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10628,250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zoforos_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.898)").s().p("EtD7ATiMAAAgnDMaH3AAAMAAAAnDg");
	this.shape.setTransform(5350,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(21));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AgFTiMAAAgnDIALAAMAAAAnDg");
	var mask_graphics_2 = new cjs.Graphics().p("EgoUATiMAAAgnDMBQpAAAMAAAAnDg");
	var mask_graphics_3 = new cjs.Graphics().p("EhnWATiMAAAgnDMDOtAAAMAAAAnDg");
	var mask_graphics_4 = new cjs.Graphics().p("EiAgATiMAAAgnDMEBBAAAMAAAAnDg");
	var mask_graphics_5 = new cjs.Graphics().p("EiP4ATiMAAAgnDMEfxAAAMAAAAnDg");
	var mask_graphics_6 = new cjs.Graphics().p("EjXrATiMAAAgnDMGvXAAAMAAAAnDg");
	var mask_graphics_7 = new cjs.Graphics().p("EkOXATiMAAAgnDMIcvAAAMAAAAnDg");
	var mask_graphics_8 = new cjs.Graphics().p("Ekn0ATiMAAAgnDMJPpAAAMAAAAnDg");
	var mask_graphics_9 = new cjs.Graphics().p("ElgCATiMAAAgnDMLAFAAAMAAAAnDg");
	var mask_graphics_10 = new cjs.Graphics().p("EmhzATiMAAAgnDMNDnAAAMAAAAnDg");
	var mask_graphics_11 = new cjs.Graphics().p("EnIzATiMAAAgnDMORnAAAMAAAAnDg");
	var mask_graphics_12 = new cjs.Graphics().p("EnWLATiMAAAgnDMOsXAAAMAAAAnDg");
	var mask_graphics_13 = new cjs.Graphics().p("EoBrATiMAAAgnDMQDXAAAMAAAAnDg");
	var mask_graphics_14 = new cjs.Graphics().p("EoPHATiMAAAgnDMQePAAAMAAAAnDg");
	var mask_graphics_15 = new cjs.Graphics().p("Eo28ATiMAAAgnDMRt5AAAMAAAAnDg");
	var mask_graphics_16 = new cjs.Graphics().p("Ep2ZATiMAAAgnDMTszAAAMAAAAnDg");
	var mask_graphics_17 = new cjs.Graphics().p("Eqj6ATiMAAAgnDMVH1AAAMAAAAnDg");
	var mask_graphics_18 = new cjs.Graphics().p("Eq80ATiMAAAgnDMV5pAAAMAAAAnDg");
	var mask_graphics_19 = new cjs.Graphics().p("ErUwATiMAAAgnDMWphAAAMAAAAnDg");
	var mask_graphics_20 = new cjs.Graphics().p("Er2cATiMAAAgnDMXs4AAAMAAAAnDg");
	var mask_graphics_21 = new cjs.Graphics().p("Es+PATiMAAAgnDMZ8fAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0.575,y:125}).wait(1).to({graphics:mask_graphics_2,x:258.075,y:125}).wait(1).to({graphics:mask_graphics_3,x:661.475,y:125}).wait(1).to({graphics:mask_graphics_4,x:822.4541,y:124.9988}).wait(1).to({graphics:mask_graphics_5,x:920.938,y:124.9988}).wait(1).to({graphics:mask_graphics_6,x:1380.4,y:125}).wait(1).to({graphics:mask_graphics_7,x:1730.4,y:125}).wait(1).to({graphics:mask_graphics_8,x:1893.275,y:125}).wait(1).to({graphics:mask_graphics_9,x:2253.125,y:125}).wait(1).to({graphics:mask_graphics_10,x:2673.95,y:125}).wait(1).to({graphics:mask_graphics_11,x:2923.575,y:125}).wait(1).to({graphics:mask_graphics_12,x:3009.175,y:125}).wait(1).to({graphics:mask_graphics_13,x:3287.575,y:125}).wait(1).to({graphics:mask_graphics_14,x:3373.575,y:125}).wait(1).to({graphics:mask_graphics_15,x:3628.475,y:125}).wait(1).to({graphics:mask_graphics_16,x:4034.55,y:125}).wait(1).to({graphics:mask_graphics_17,x:4325.85,y:125}).wait(1).to({graphics:mask_graphics_18,x:4485.3,y:125}).wait(1).to({graphics:mask_graphics_19,x:4638.525,y:125}).wait(1).to({graphics:mask_graphics_20,x:4854.05,y:125}).wait(1).to({graphics:mask_graphics_21,x:5313.6413,y:124.9988}).wait(1));

	// Layer_1
	this.instance = new lib.zoforos();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

	// Layer_3
	this.instance_1 = new lib.zoforos_black();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10700,250);


(lib.thesxolio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// answer
	this.keimeno = new cjs.Text("Τη νύχτα της 10ης Απριλίου 1826, οι Μεσολογγίτες οργάνωσαν τις δυνάμεις τους σε τρία σώματα. Στο μέσο του τριγώνου που θα σχημάτιζαν αυτές οι δυνάμεις, τοποθετήθηκαν τα γυναικόπαιδα. Ο Γεώργιος Καραϊσκάκης, που είχε αναλάβει να επιτεθεί από τις πλαγιές του Ζυγού για αντιπερισπασμό, δεν κατόρθωσε να υλοποιήσει το σχέδιο, καθώς ο Ιμπραήμ πληροφορήθηκε τις κινήσεις των πολιορκημένων.", "italic 500 16px 'Fira Sans Condensed'", "#333333");
	this.keimeno.name = "keimeno";
	this.keimeno.textAlign = "center";
	this.keimeno.lineHeight = 24;
	this.keimeno.lineWidth = 517;
	this.keimeno.parent = this;
	this.keimeno.setTransform(0,-71.7);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.keimeno);
	}

	this.timeline.addTween(cjs.Tween.get(this.keimeno).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgqHAMCIAA4DMBUPAAAIAAYDg");
	this.shape.setTransform(0.025,1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.thesxolio, new cjs.Rectangle(-269.5,-75,539.1,154), null);


(lib.thequestion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// answer
	this.keimeno = new cjs.Text("Σε ποια μάχη του 1821 αναφέρονται οι στίχοι από το δημοτικό τραγούδι;\n\nΈμεινε ο Διάκος στη φωτιά με δεκοχτώ λεβέντες.\nΤρεις ώρες επολέμαε με δεκοχτώ χιλιάδες.\nΒουλώσαν τα κουμπούρια του κι’ ανάψαν τα τουφέκια,\nκι’ ο Διάκος εξεσπάθωσε και στη φωτιά χουμάει,\n’ξήντα ταμπούρια χάλασε κ’ εφτά μπουλουκμπασίδες.\nΚαι το σπαθί του κόπηκε ανάμεσα απ’ τη χούφτα\nκαι ζωντανό τον έπιασαν και στον πασά τον πάνουν,\nχίλιοι τον παν από μπροστά και χίλιοι από κατόπι.", "normal 500 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.keimeno.name = "keimeno";
	this.keimeno.lineHeight = 27;
	this.keimeno.lineWidth = 553;
	this.keimeno.parent = this;
	this.keimeno.setTransform(18,-52);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.keimeno);
	}

	this.timeline.addTween(cjs.Tween.get(this.keimeno).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.2)").s().p("A1oXcI4ZAAMAAAgu3MBcDAAAMAAAAlpIAAJOg");
	this.shape.setTransform(294.575,83.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.thequestion, new cjs.Rectangle(0,-67,589.2,300.1), null);


(lib.themc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// answer
	this.answer = new cjs.Text("στη γραμμή Αμβρακικού-Παγασητικού. Το ελληνικό κράτος περιελάμβανε: την Πελοπόννησο, τη Στερεά Ελλάδα, τα νησιά του Αργοσαρωνικού, την Εύβοια, τις Κυκλάδες και τις Σποράδες", "normal 500 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.answer.name = "answer";
	this.answer.textAlign = "center";
	this.answer.lineHeight = 27;
	this.answer.lineWidth = 518;
	this.answer.parent = this;
	this.answer.setTransform(271.05,-40.5);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.answer);
	}

	this.timeline.addTween(cjs.Tween.get(this.answer).wait(3));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.098)").s().p("EgqHAImIAAxLMBUPAAAIAARLg");
	this.shape.setTransform(269.575,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("EgqHAImIAAxLMBUPAAAIAARLg");
	this.shape_1.setTransform(269.575,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("EgqHAImIAAxLMBUPAAAIAARLg");
	this.shape_2.setTransform(269.575,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-55,539.2,110);


(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// noun_start_597667.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiGB2QgFgFABgIIAAjRQgBgIAFgFQAEgFAIAAQAIAAAEAFQAFAFgBAIIAADRQABAIgFAFQgEAFgIAAQgIAAgEgFgAA2A/QgFgGAAgIQAAgIAFgFIAZgZIiGAAQgHAAgEgFQgFgFAAgGQAAgGAFgFQAEgFAHAAICHAAIgagYQgFgFAAgIQAAgHAFgFQAGgGAIAAQAHAAAFAGIA2A2QAGAFAAAIQAAAHgGAFIg2A2QgFAFgHAAQgIAAgGgFg");
	this.shape.setTransform(2.5,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiGB2QgFgFABgIIAAjRQgBgIAFgFQAFgFAHAAQAIAAAEAFQAFAFgBAIIAADRQABAIgFAFQgEAFgIAAQgHAAgFgFgAA2A/QgFgGAAgIQAAgIAFgFIAZgZIiHAAQgFAAgFgFQgFgFAAgGQAAgGAFgFQAFgFAFAAICIAAIgagYQgFgFAAgIQAAgHAFgFQAGgGAIAAQAHAAAFAGIA2A2QAFAFABAIQgBAHgFAFIg2A2QgFAFgHAAQgIAAgGgFg");
	this.shape_1.setTransform(2.5,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.5,43,43);


(lib.otitlos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_84();
	this.instance.setTransform(3.35,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.otitlos, new cjs.Rectangle(3.4,0,313.5,40), null);


(lib.nikitis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.instance = new lib.niki_head();
	this.instance.setTransform(32,218,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_81();
	this.instance_1.setTransform(362.15,218,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_82();
	this.instance_2.setTransform(360.75,218,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.niki_talks = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvnPpQmfmfAApKQAApIGfmgQGfmeJIAAQJKAAGfGeQGeGgAAJIQAAJKmeGfQmfGepKAAQpIAAmfmeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.niki_head();
	this.instance.setTransform(-142,-142,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.niki_talks, new cjs.Rectangle(-142,-142,283.8,283.8), null);


(lib.kapaki_xronou = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bBpIAAjRMAu3AAAIAADRg");
	this.shape.setTransform(150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kapaki_xronou, new cjs.Rectangle(0,-10.5,300,21), null);


(lib.kapaki = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kapaki, new cjs.Rectangle(0,0,1280,720), null);


(lib.home = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// noun_Home_2186916.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAqB9QgFAAgEgEQgEgDAAgGIAAhCIg6AAIAABCQAAAGgDADQgDAEgFAAIgsAAQgFAAgEgEQgEgEAAgFIAAhrIgcAAQgJAAgDgHQgDgIAHgFIB+hqQAEgDADAAQAFAAADADIB+BqQAGAFgCAIQgDAHgJAAIgcAAIAABrQAAAGgEADQgEAEgFAAg");
	this.shape.setTransform(0.0147,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqB9QgFAAgEgEQgEgDAAgGIAAhCIg6AAIAABCQAAAGgDADQgDAEgFAAIgsAAQgFAAgEgEQgEgEAAgFIAAhrIgcAAQgJAAgDgHQgDgIAHgFIB+hqQAEgDADAAQAFAAADADIB+BqQAGAFgCAIQgDAHgJAAIgcAAIAABrQAAAGgEADQgEAEgFAAg");
	this.shape_1.setTransform(0.0147,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.5,43,43);


(lib.helps = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// noun_help_1555613.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhWHDQgegfAAgwQAAgwAdgcQAdgcAygBQAwAAAeAdQAdAcABAxQAAAvgfAfQgfAfgwAAQguAAgegfgAhVCAQgThFAZhCQAZhEA9gtIApgfQAtgpgPgsQgRgxg9gHQhDgGg0AnIgKAHQgjAaggAAQggAAgXgaQgcgfACgqQABgqAfgdQA8g7BbgRQAPgDAVgCIAjgEQBcAFBAAgQBIAkApBKQArBLgPBOQgPBOhDA3QgPAMgeAVIgsAhQg1AsgSBEQgRBBgoAAQgpAAgThDg");
	this.shape.setTransform(0.003,0.0125,0.3345,0.3345);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcCXQgKgKAAgRQAAgPAJgKQAKgKARAAQAPAAAKAKQAKAKAAAQQAAAPgKALQgLAKgPAAQgPAAgKgKgAgcArQgGgXAIgWQAJgWATgQIAOgKQAPgOgFgOQgGgRgUgCQgWgCgRANIgEACQgLAJgLAAQgLAAgHgJQgKgKABgOQAAgOAKgJQAVgVAegFIAMgCIAMgBQAeABAVALQAYANAOAYQAPAZgFAbQgFAZgXATIgPALIgPAKQgRAPgHAWQgFAXgNAAQgOgBgGgWg");
	this.shape_1.setTransform(0.0129,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.5,43,43);


(lib.entoli_mcs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(-379.775,18.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(-379.3,18.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// backgr
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("EghRAC0IAAlnMBCjAAAIAAFng");
	this.shape_2.setTransform(-377,18);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-590,0,426,36);


(lib.damaki = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiQBpIAAjRIEhAAIAADRg");
	this.shape.setTransform(14.5,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiQBpIAAjRIEhAAIAADRg");
	this.shape_1.setTransform(14.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,21);


(lib.close = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// noun_Close_996783.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABGBqIhGhGIhGBGQgGAHgJAAQgIAAgGgHIgHgGQgGgGAAgIQAAgJAGgHIBHhGIhHhGQgGgGAAgJQAAgJAGgGIAHgGQAGgGAIAAQAJAAAGAGIBGBHIBGhHQAHgGAJAAQAJAAAFAGIAGAGQAHAHAAAIQAAAJgHAGIhGBGIBGBGQAHAHAAAJQAAAJgHAFIgGAGQgGAHgIAAQgJAAgHgHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABGBqIhGhGIhGBGQgGAHgJAAQgIAAgGgHIgHgGQgGgGAAgIQAAgJAGgHIBHhGIhHhGQgGgGAAgJQAAgJAGgGIAHgGQAGgGAIAAQAJAAAGAGIBGBHIBGhHQAHgGAJAAQAJAAAFAGIAGAGQAHAHAAAIQAAAJgHAGIhGBGIBGBGQAHAHAAAJQAAAJgHAFIgGAGQgGAHgIAAQgJAAgHgHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.5,43,43);


(lib.bilia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// noun_left_and_right_1980329_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaAqQgBgCAAgEIAAhHQAAgDABgDQABAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIABAAIBNAlQADABABAFQgBAFgDACIhNAkIgBABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAgAgfArIhNgkQgDgCgBgFQABgFADgBIBNglIABAAQABAAAAABQABAAAAAAQABAAAAABQABAAABAAQABADAAADIAABHQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgBgBg");
	this.shape.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AheBfQgognAAg4QAAg3AognQAngoA3AAQA4AAAnAoQAoAnAAA3QAAA4goAnQgnAog4AAQg3AAgngog");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bilia, new cjs.Rectangle(-13.5,-13.5,27,27), null);


(lib.back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// noun_back_1144365.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAqB8IhuhuQgGgFABgJQgBgHAGgGIBuhuQAFgGAIAAQAJAAAFAGQAGAFgBAJQABAIgGAFIhgBgIBgBhQAGAFgBAJQABAHgGAGQgFAGgJAAQgIAAgFgGg");
	this.shape.setTransform(-2.75,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqB8IhuhuQgGgFABgJQgBgHAGgGIBuhuQAFgGAIAAQAJAAAFAGQAGAFgBAJQABAIgGAFIhgBgIBgBhQAGAFgBAJQABAHgGAGQgFAGgJAAQgIAAgFgGg");
	this.shape_1.setTransform(-2.75,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.5,43,43);


(lib.apotelesma = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// Layer_3
	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(-193.9,-32.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_70();
	this.instance_1.setTransform(-193.9,-32.3,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_71();
	this.instance_2.setTransform(-228,-32.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_72();
	this.instance_3.setTransform(-223.75,-32.3,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_73();
	this.instance_4.setTransform(-188.05,-32.3,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_74();
	this.instance_5.setTransform(-192.3,-32.3,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_75();
	this.instance_6.setTransform(-76.95,-20.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("EgiXAFjIAArFMBEvAAAIAALFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("EglfAFjIAArFMBK/AAAIAALFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-35.5,480,71);


(lib.zoforos_me_scroll = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// zoforos
	this.i_zoforos = new lib.zoforos_1();
	this.i_zoforos.name = "i_zoforos";
	this.i_zoforos.setTransform(0.1,0,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.i_zoforos).wait(1));

	// bilia
	this.bilia = new lib.bilia();
	this.bilia.name = "bilia";
	this.bilia.setTransform(20,266.8);

	this.timeline.addTween(cjs.Tween.get(this.bilia).wait(1));

	// titlos_omadas
	this.omada = new cjs.Text("1η ομάδα", "normal 700 14px 'Fira Sans Condensed'", "#999999");
	this.omada.name = "omada";
	this.omada.textAlign = "center";
	this.omada.lineHeight = 24;
	this.omada.lineWidth = 100;
	this.omada.parent = this;
	this.omada.setTransform(640,260.3);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.omada);
	}

	this.timeline.addTween(cjs.Tween.get(this.omada).wait(1));

	// bara
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ehj/ACWIAAkrMDH/AAAIAAErg");
	this.shape.setTransform(640,267.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zoforos_me_scroll, new cjs.Rectangle(0,0,10699.9,283.9), null);


(lib.xronos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// grammes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AVBBpIAAjRIAKAAIAADRgAQVBpIAAjRIAKAAIAADRgALpBpIAAjRIAKAAIAADRgAG9BpIAAjRIAKAAIAADRgACRBpIAAjRIAKAAIAADRgAiaBpIAAjRIAKAAIAADRgAnGBpIAAjRIAKAAIAADRgAryBpIAAjRIAKAAIAADRgAweBpIAAjRIAKAAIAADRgA1KBpIAAjRIAKAAIAADRg");
	this.shape.setTransform(135.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// aspro
	this.aspro = new lib.kapaki_xronou();
	this.aspro.name = "aspro";

	this.timeline.addTween(cjs.Tween.get(this.aspro).wait(1));

	// kokkino
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("A3bBpIAAjRMAu3AAAIAADRg");
	this.shape_1.setTransform(150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.xronos, new cjs.Rectangle(0,-10.5,300,21), null);


(lib.odigies = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.barbakeio();
	this.instance.setTransform(193,458,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// close
	this.closes = new lib.close();
	this.closes.name = "closes";
	this.closes.setTransform(1075,84.05);
	new cjs.ButtonHelper(this.closes, 0, 1, 2, false, new lib.close(), 3);

	this.timeline.addTween(cjs.Tween.get(this.closes).wait(1));

	// keimen
	this.instance_1 = new lib.CachedBmp_83();
	this.instance_1.setTransform(231.95,68.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// fonto
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EhIWAnPMAAAhOcMCQtAAAMAAABOcg");
	this.shape.setTransform(640.025,307);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// backgr_copy
	this.kapaki = new lib.kapaki();
	this.kapaki.name = "kapaki";
	this.kapaki.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.kapaki).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.odigies, new cjs.Rectangle(0,0,1280,720), null);


(lib.mcs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// buttons
	this.but_next = new lib.start();
	this.but_next.name = "but_next";
	this.but_next.setTransform(566.15,-32.1);
	new cjs.ButtonHelper(this.but_next, 0, 1, 2, false, new lib.start(), 3);

	this.but_close = new lib.close();
	this.but_close.name = "but_close";
	this.but_close.setTransform(613.5,-333.5);
	new cjs.ButtonHelper(this.but_close, 0, 1, 2, false, new lib.close(), 3);

	this.xronos = new lib.xronos();
	this.xronos.name = "xronos";
	this.xronos.setTransform(614.05,-116,1,1,-90,0,0,119,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xronos},{t:this.but_close},{t:this.but_next}]}).wait(1));

	// apotelesma
	this.apotel = new lib.apotelesma();
	this.apotel.name = "apotel";
	this.apotel.setTransform(302.5,-32.1);

	this.timeline.addTween(cjs.Tween.get(this.apotel).wait(1));

	// entoli
	this.entoli = new lib.entoli_mcs();
	this.entoli.name = "entoli";
	this.entoli.setTransform(679.55,-340,1,1,0,0,0,590,20);

	this.timeline.addTween(cjs.Tween.get(this.entoli).wait(1));

	// titlos_enotitas
	this.titlos_enotitas = new cjs.Text("10η ενότητα: Ο Μπότσαρης επιτίθεται στο στρατόπεδο των Τούρκων στο Καρπενήσι", "italic 500 14px 'Fira Sans Condensed'", "#FFFFFF");
	this.titlos_enotitas.name = "titlos_enotitas";
	this.titlos_enotitas.textAlign = "center";
	this.titlos_enotitas.lineHeight = 23;
	this.titlos_enotitas.lineWidth = 569;
	this.titlos_enotitas.parent = this;
	this.titlos_enotitas.setTransform(-287.5,-15.8);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.titlos_enotitas);
	}

	this.timeline.addTween(cjs.Tween.get(this.titlos_enotitas).wait(1));

	// sxolio
	this.sxolio = new lib.thesxolio();
	this.sxolio.name = "sxolio";
	this.sxolio.setTransform(563.6,-89.6,1,1,0,0,0,261.1,62.9);

	this.timeline.addTween(cjs.Tween.get(this.sxolio).wait(1));

	// apantiseis
	this.mc1 = new lib.themc();
	this.mc1.name = "mc1";
	this.mc1.setTransform(294.05,-230.45,1,1,0,0,0,261.1,62.9);

	this.mc3 = new lib.themc();
	this.mc3.name = "mc3";
	this.mc3.setTransform(294.05,11.3,1,1,0,0,0,261.1,62.9);

	this.mc2 = new lib.themc();
	this.mc2.name = "mc2";
	this.mc2.setTransform(294.05,-109.6,1,1,0,0,0,261.1,62.9);

	this.erotisi = new lib.thequestion();
	this.erotisi.name = "erotisi";
	this.erotisi.setTransform(-320.95,-192.65,1,1,0,0,0,261.1,62.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.erotisi},{t:this.mc2},{t:this.mc3},{t:this.mc1}]}).wait(1));

	// backgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EhcLAyyMAAAhljMC4XAAAMAAABljg");
	this.shape.setTransform(0,-172.5037,1.0847,0.5769);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcs, new cjs.Rectangle(-640,-360,1280,375), null);


(lib.intro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.start_it = new lib.start();
	this.start_it.name = "start_it";
	this.start_it.setTransform(1138.8,543.9,2.5581,2.5581);
	new cjs.ButtonHelper(this.start_it, 0, 1, 2, false, new lib.start(), 3);

	this.timeline.addTween(cjs.Tween.get(this.start_it).wait(1));

	// keimeno
	this.niki_talks = new lib.niki_talks();
	this.niki_talks.name = "niki_talks";
	this.niki_talks.setTransform(338.9,314.9,1,1,0,0,0,141.9,141.9);

	this.instance = new lib.CachedBmp_80();
	this.instance.setTransform(381,31,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.niki_talks}]}).wait(1));

	// backgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.intro, new cjs.Rectangle(0,0,1280,720), null);


(lib.epidosi2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lezanta
	this.instance = new lib.CachedBmp_77();
	this.instance.setTransform(-138,-10.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// grammes
	this.instance_1 = new lib.CachedBmp_79();
	this.instance_1.setTransform(300,-10.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_78();
	this.instance_2.setTransform(0,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// aspro
	this.d21 = new lib.damaki();
	this.d21.name = "d21";
	this.d21.setTransform(308,0,0.4828,1,0,0,0,14.6,10.5);

	this.d20 = new lib.damaki();
	this.d20.name = "d20";
	this.d20.setTransform(293,0,0.4828,1,0,0,0,14.6,10.5);

	this.d19 = new lib.damaki();
	this.d19.name = "d19";
	this.d19.setTransform(278,0,0.4828,1,0,0,0,14.6,10.5);

	this.d18 = new lib.damaki();
	this.d18.name = "d18";
	this.d18.setTransform(263,0,0.4828,1,0,0,0,14.5,10.5);

	this.d17 = new lib.damaki();
	this.d17.name = "d17";
	this.d17.setTransform(248,0,0.4828,1,0,0,0,14.6,10.5);

	this.d16 = new lib.damaki();
	this.d16.name = "d16";
	this.d16.setTransform(233,0,0.4828,1,0,0,0,14.6,10.5);

	this.d15 = new lib.damaki();
	this.d15.name = "d15";
	this.d15.setTransform(218,0,0.4828,1,0,0,0,14.5,10.5);

	this.d14 = new lib.damaki();
	this.d14.name = "d14";
	this.d14.setTransform(203,0,0.4828,1,0,0,0,14.6,10.5);

	this.d13 = new lib.damaki();
	this.d13.name = "d13";
	this.d13.setTransform(188,0,0.4828,1,0,0,0,14.6,10.5);

	this.d12 = new lib.damaki();
	this.d12.name = "d12";
	this.d12.setTransform(173,0,0.4828,1,0,0,0,14.5,10.5);

	this.d11 = new lib.damaki();
	this.d11.name = "d11";
	this.d11.setTransform(158,0,0.4828,1,0,0,0,14.6,10.5);

	this.d10 = new lib.damaki();
	this.d10.name = "d10";
	this.d10.setTransform(143,0,0.4828,1,0,0,0,14.6,10.5);

	this.d9 = new lib.damaki();
	this.d9.name = "d9";
	this.d9.setTransform(128,0,0.4828,1,0,0,0,14.6,10.5);

	this.d8 = new lib.damaki();
	this.d8.name = "d8";
	this.d8.setTransform(113,0,0.4828,1,0,0,0,14.5,10.5);

	this.d7 = new lib.damaki();
	this.d7.name = "d7";
	this.d7.setTransform(98,0,0.4828,1,0,0,0,14.6,10.5);

	this.d6 = new lib.damaki();
	this.d6.name = "d6";
	this.d6.setTransform(83,0,0.4828,1,0,0,0,14.6,10.5);

	this.d5 = new lib.damaki();
	this.d5.name = "d5";
	this.d5.setTransform(68,0,0.4828,1,0,0,0,14.5,10.5);

	this.d4 = new lib.damaki();
	this.d4.name = "d4";
	this.d4.setTransform(53,0,0.4828,1,0,0,0,14.6,10.5);

	this.d3 = new lib.damaki();
	this.d3.name = "d3";
	this.d3.setTransform(38,0,0.4828,1,0,0,0,14.6,10.5);

	this.d2 = new lib.damaki();
	this.d2.name = "d2";
	this.d2.setTransform(23,0,0.4828,1,0,0,0,14.5,10.5);

	this.d1 = new lib.damaki();
	this.d1.name = "d1";
	this.d1.setTransform(8,0,0.4828,1,0,0,0,14.6,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d1},{t:this.d2},{t:this.d3},{t:this.d4},{t:this.d5},{t:this.d6},{t:this.d7},{t:this.d8},{t:this.d9},{t:this.d10},{t:this.d11},{t:this.d12},{t:this.d13},{t:this.d14},{t:this.d15},{t:this.d16},{t:this.d17},{t:this.d18},{t:this.d19},{t:this.d20},{t:this.d21}]}).wait(1));

	// kokkino
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("A4mBpIAAjRMAxNAAAIAADRg");
	this.shape.setTransform(157.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epidosi2, new cjs.Rectangle(-138,-10.5,453,21.2), null);


(lib.epidosi1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lezanta
	this.instance = new lib.CachedBmp_76();
	this.instance.setTransform(-138,-10.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// grammes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AXXBpIAAjRIAKAAIAADRgAVBBpIAAjRIAKAAIAADRgASrBpIAAjRIAKAAIAADRgAQVBpIAAjRIAKAAIAADRgAN/BpIAAjRIAKAAIAADRgALpBpIAAjRIAKAAIAADRgAJTBpIAAjRIAKAAIAADRgAG9BpIAAjRIAKAAIAADRgAEnBpIAAjRIAKAAIAADRgACRBpIAAjRIAKAAIAADRgAgEBpIAAjRIAJAAIAADRgAiaBpIAAjRIAKAAIAADRgAkwBpIAAjRIAKAAIAADRgAnGBpIAAjRIAKAAIAADRgApcBpIAAjRIAKAAIAADRgAryBpIAAjRIAKAAIAADRgAuIBpIAAjRIAKAAIAADRgAweBpIAAjRIAKAAIAADRgAy0BpIAAjRIAKAAIAADRgA1KBpIAAjRIAKAAIAADRgA3gBpIAAjRIAKAAIAADRg");
	this.shape.setTransform(150.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// aspro
	this.d21 = new lib.damaki();
	this.d21.name = "d21";
	this.d21.setTransform(308,0,0.4828,1,0,0,0,14.6,10.5);

	this.d20 = new lib.damaki();
	this.d20.name = "d20";
	this.d20.setTransform(293,0,0.4828,1,0,0,0,14.6,10.5);

	this.d19 = new lib.damaki();
	this.d19.name = "d19";
	this.d19.setTransform(278,0,0.4828,1,0,0,0,14.6,10.5);

	this.d18 = new lib.damaki();
	this.d18.name = "d18";
	this.d18.setTransform(263,0,0.4828,1,0,0,0,14.5,10.5);

	this.d17 = new lib.damaki();
	this.d17.name = "d17";
	this.d17.setTransform(248,0,0.4828,1,0,0,0,14.6,10.5);

	this.d16 = new lib.damaki();
	this.d16.name = "d16";
	this.d16.setTransform(233,0,0.4828,1,0,0,0,14.6,10.5);

	this.d15 = new lib.damaki();
	this.d15.name = "d15";
	this.d15.setTransform(218,0,0.4828,1,0,0,0,14.5,10.5);

	this.d14 = new lib.damaki();
	this.d14.name = "d14";
	this.d14.setTransform(203,0,0.4828,1,0,0,0,14.6,10.5);

	this.d13 = new lib.damaki();
	this.d13.name = "d13";
	this.d13.setTransform(188,0,0.4828,1,0,0,0,14.6,10.5);

	this.d12 = new lib.damaki();
	this.d12.name = "d12";
	this.d12.setTransform(173,0,0.4828,1,0,0,0,14.5,10.5);

	this.d11 = new lib.damaki();
	this.d11.name = "d11";
	this.d11.setTransform(158,0,0.4828,1,0,0,0,14.6,10.5);

	this.d10 = new lib.damaki();
	this.d10.name = "d10";
	this.d10.setTransform(143,0,0.4828,1,0,0,0,14.6,10.5);

	this.d9 = new lib.damaki();
	this.d9.name = "d9";
	this.d9.setTransform(128,0,0.4828,1,0,0,0,14.6,10.5);

	this.d8 = new lib.damaki();
	this.d8.name = "d8";
	this.d8.setTransform(113,0,0.4828,1,0,0,0,14.5,10.5);

	this.d7 = new lib.damaki();
	this.d7.name = "d7";
	this.d7.setTransform(98,0,0.4828,1,0,0,0,14.6,10.5);

	this.d6 = new lib.damaki();
	this.d6.name = "d6";
	this.d6.setTransform(83,0,0.4828,1,0,0,0,14.6,10.5);

	this.d5 = new lib.damaki();
	this.d5.name = "d5";
	this.d5.setTransform(68,0,0.4828,1,0,0,0,14.5,10.5);

	this.d4 = new lib.damaki();
	this.d4.name = "d4";
	this.d4.setTransform(53,0,0.4828,1,0,0,0,14.6,10.5);

	this.d3 = new lib.damaki();
	this.d3.name = "d3";
	this.d3.setTransform(38,0,0.4828,1,0,0,0,14.6,10.5);

	this.d2 = new lib.damaki();
	this.d2.name = "d2";
	this.d2.setTransform(23,0,0.4828,1,0,0,0,14.5,10.5);

	this.d1 = new lib.damaki();
	this.d1.name = "d1";
	this.d1.setTransform(8,0,0.4828,1,0,0,0,14.6,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d1},{t:this.d2},{t:this.d3},{t:this.d4},{t:this.d5},{t:this.d6},{t:this.d7},{t:this.d8},{t:this.d9},{t:this.d10},{t:this.d11},{t:this.d12},{t:this.d13},{t:this.d14},{t:this.d15},{t:this.d16},{t:this.d17},{t:this.d18},{t:this.d19},{t:this.d20},{t:this.d21}]}).wait(1));

	// kokkino
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("A4mBpIAAjRMAxNAAAIAADRg");
	this.shape_1.setTransform(157.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epidosi1, new cjs.Rectangle(-138,-10.5,453,21.2), null);


(lib.oi_zoforoi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// odigies
	this.odigies = new lib.odigies();
	this.odigies.name = "odigies";
	this.odigies.setTransform(463.1,244.1,1,1,0,0,0,463.1,244.1);

	this.timeline.addTween(cjs.Tween.get(this.odigies).wait(1));

	// oi_zoforoi
	this.zoforos2 = new lib.zoforos_me_scroll();
	this.zoforos2.name = "zoforos2";
	this.zoforos2.setTransform(5611.4,525,1,1,0,0,0,5611.4,150);

	this.zoforos1 = new lib.zoforos_me_scroll();
	this.zoforos1.name = "zoforos1";
	this.zoforos1.setTransform(5611.4,150,1,1,0,0,0,5611.4,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.zoforos1},{t:this.zoforos2}]}).wait(1));

	// backgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.oi_zoforoi, new cjs.Rectangle(0,0,10699.9,720), null);


(lib.footer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// titlos
	this.otitlos = new lib.otitlos();
	this.otitlos.name = "otitlos";
	this.otitlos.setTransform(471.55,-29.5,1,1,0,0,0,158.5,20);

	this.timeline.addTween(cjs.Tween.get(this.otitlos).wait(1));

	// xronos_epidosi
	this.epidosi1 = new lib.epidosi1();
	this.epidosi1.name = "epidosi1";
	this.epidosi1.setTransform(471.1,-32,1,1,0,0,0,150,10.5);

	this.epidosi2 = new lib.epidosi2();
	this.epidosi2.name = "epidosi2";
	this.epidosi2.setTransform(471.1,-6,1,1,0,0,0,150,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.epidosi2},{t:this.epidosi1}]}).wait(1));

	// buts
	this.helps = new lib.helps();
	this.helps.name = "helps";
	this.helps.setTransform(-467.15,-29.5);
	new cjs.ButtonHelper(this.helps, 0, 1, 2, false, new lib.helps(), 3);

	this.epom = new lib.start();
	this.epom.name = "epom";
	this.epom.setTransform(0,-29.5);
	new cjs.ButtonHelper(this.epom, 0, 1, 2, false, new lib.start(), 3);

	this.back = new lib.back();
	this.back.name = "back";
	this.back.setTransform(-527.15,-29.5);
	new cjs.ButtonHelper(this.back, 0, 1, 2, false, new lib.back(), 3);

	this.home = new lib.home();
	this.home.name = "home";
	this.home.setTransform(-587.15,-29.5);
	new cjs.ButtonHelper(this.home, 0, 1, 2, false, new lib.home(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.back},{t:this.epom},{t:this.helps}]}).wait(1));

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ehj/AEnIAApNMDH/AAAIAAJNg");
	this.shape.setTransform(0,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ehj/AEsIAApXMDH/AAAIAAJXg");
	this.shape_1.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.footer, new cjs.Rectangle(-640,-60,1280,60), null);


// stage content:
(lib.teliko = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var oi_erotiseis=[[],[],[],[],[],[]];
		var the_bara=this.bara;
		var epidoseis=[0,0];
		var poia_omada;
		var the_intro=this.intro;
		var the_mcs=this.mc;
		var oi_apant=[the_mcs.mc1,the_mcs.mc2,the_mcs.mc3];
		var yy,xx,ask_index,flag_tick,points_to_earn;
		var quest_numbs=[];
		var tis_baras=[the_bara.home,the_bara.back,the_bara.helps, the_bara.epom, the_bara.epidosi1, the_bara.epidosi2,the_mcs.but_close,the_mcs.but_next,the_mcs.xronos,the_bara.otitlos];
		var ta_damakia=[[the_bara.epidosi1.d1,the_bara.epidosi1.d2,the_bara.epidosi1.d3,the_bara.epidosi1.d4,the_bara.epidosi1.d5,the_bara.epidosi1.d6,the_bara.epidosi1.d7,the_bara.epidosi1.d8,the_bara.epidosi1.d9,the_bara.epidosi1.d10,
						the_bara.epidosi1.d11,the_bara.epidosi1.d12,the_bara.epidosi1.d13,the_bara.epidosi1.d14,the_bara.epidosi1.d15,the_bara.epidosi1.d16,the_bara.epidosi1.d17,the_bara.epidosi1.d18,the_bara.epidosi1.d19,the_bara.epidosi1.d20,the_bara.epidosi1.d21],
						[the_bara.epidosi2.d1,the_bara.epidosi2.d2,the_bara.epidosi2.d3,the_bara.epidosi2.d4,the_bara.epidosi2.d5,the_bara.epidosi2.d6,the_bara.epidosi2.d7,the_bara.epidosi2.d8,the_bara.epidosi2.d9,the_bara.epidosi2.d10,
						the_bara.epidosi2.d11,the_bara.epidosi2.d12,the_bara.epidosi2.d13,the_bara.epidosi2.d14,the_bara.epidosi2.d15,the_bara.epidosi2.d16,the_bara.epidosi2.d17,the_bara.epidosi2.d18,the_bara.epidosi2.d19,the_bara.epidosi2.d20,the_bara.epidosi2.d21]];
		var	o_xronos,bima_xronou;
		var the_zof=this.zoforoi;
		var oi_zoforoi=[the_zof.zoforos1,the_zof.zoforos2];
		var the_winner=this.nikitis;
		function start_up() {
			var preload1 = new createjs.LoadQueue();
			createjs.Sound.registerSound("sounds/game1.mp3", "intro");
			createjs.Sound.registerSound("sounds/game2.mp3", "odigies");
			createjs.Sound.registerSound("sounds/game3.mp3", "win_1");
			createjs.Sound.registerSound("sounds/game4.mp3", "win_2");
			createjs.Sound.registerSound("sounds/tel_bravo_1.mp3", "bravo_1");
			createjs.Sound.registerSound("sounds/tel_bravo_2.mp3", "bravo_2");
			createjs.Sound.registerSound("sounds/tel_wrong_1.mp3", "wrong_1");
			createjs.Sound.registerSound("sounds/tel_wrong_2.mp3", "wrong_2");
			createjs.Sound.registerSound("sounds/tel_telos_1.mp3", "telos_1");
			createjs.Sound.registerSound("sounds/tel_telos_2.mp3", "telos_2");
			createjs.Touch.enable(stage);
			the_intro.niki_talks.mouseChildren=false;
			the_intro.niki_talks.cursor="pointer";
			the_intro.niki_talks.addEventListener("click",say_intro);
			the_bara.home.addEventListener("click",gotomenou);
			bima_xronou=10;
			set_the_bara([1,0,0,0,0,0,0,0,0,1]);
			the_intro.visible=true;
			the_intro.visible=true;
			the_mcs.visible=false;
			the_mcs.mouseEnabled=false;
			the_zof.visible=false;
			the_zof.mouseEnabled=false;
			the_winner.visible=false;
			the_winner.mouseEnabled=false;
			the_winner.mouseChildren=false;
			the_winner.cursor="pointer";
			the_winner.addEventListener("click",hide_winner);
			the_intro.start_it.addEventListener("click",start_the_game);
			the_bara.epom.addEventListener("click",epomeni);
			the_mcs.but_next.addEventListener("click",epomeni);
			the_mcs.but_close.addEventListener("click",close_erotisi);
		//	the_mcs.kapaki.addEventListener("click",tipota);
			the_bara.back.addEventListener("click",go_back);
			the_bara.helps.addEventListener("click",open_odigies);
			the_zof.odigies.closes.addEventListener("click",close_odigies);
			the_zof.odigies.kapaki.addEventListener("click",tipota);
		
			for (xx=0;xx<oi_apant.length;xx++) {
				oi_apant[xx].mouseChildren=false;
				oi_apant[xx].cursor="pointer";
				oi_apant[xx].theid=xx;
				oi_apant[xx].thex=oi_apant[xx].x;
				oi_apant[xx].they=oi_apant[xx].y;
				oi_apant[xx].mouseEnabled=true;
				oi_apant[xx].addEventListener("click",epilexe);
				oi_apant[xx].addEventListener("mouseover",mesa);
				oi_apant[xx].addEventListener("mouseout",exo);
			}
			createjs.Ticker.addEventListener("tick", tiki_tiki);
			
			preload1.addEventListener("fileload", handleFileComplete1);
			preload1.loadFile("xml/teliko.xml");
			
			the_zof.zoforos1.bilia.addEventListener("pressmove",sire);
			the_zof.zoforos1.bilia.addEventListener("mousedown",patise);
			the_zof.zoforos2.bilia.addEventListener("pressmove",sire);
			the_zof.zoforos2.bilia.addEventListener("mousedown",patise);
		console.log(the_mcs.y);
		}
		function close_erotisi(e) {
			createjs.Sound.stop();
			the_mcs.visible=false;
			the_mcs.mouseEnabled=false;
			if (epidoseis[poia_omada]==21) {
				set_the_bara([1,1,1,0,1,1,0,0,0,0]);
			} else {
				set_the_bara([1,1,1,1,1,1,0,0,0,0]);
			}
		}
		function patise(e){
			var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
			e.currentTarget.difx=e.currentTarget.x-p.x;
		}
		function sire(e){
			var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
			if (e.currentTarget.difx+p.x<20) {
				e.currentTarget.x = 20;
			} else {
				if (e.currentTarget.difx+p.x>1260) {
					e.currentTarget.x = 1260;		
				} else {
					e.currentTarget.x = e.currentTarget.difx+p.x;
				}
			}
			e.currentTarget.parent.i_zoforos.x=150-9700*(e.currentTarget.x)/1280;
			console.log("zoforoi="+e.currentTarget.x+" - "+e.currentTarget.parent.i_zoforos.x)
		}
		function go_back(e) {
			createjs.Sound.stop();
			flag_tick=0;
			set_the_bara([1,0,0,0,0,0,0,0,0,1]);
			the_intro.visible=true;
			the_intro.mouseEnabled=true;
			the_zof.visible=false;
			the_zof.mouseEnabled=false;
			the_mcs.visible=false;
			the_mcs.mouseEnabled=false;
		}
		function set_the_bara(pos) {
			for (xx=0;xx<pos.length;xx++) {
				if (pos[xx]==0) {
					tis_baras[xx].mouseEnabled=false;
					tis_baras[xx].visible=false;
				} else {
					tis_baras[xx].mouseEnabled=true;
					tis_baras[xx].visible=true;
				}
			}
		}
		function start_the_game(e) {
			var lezantes=["1η ομάδα","2η ομάδα"];
			for (yy=0;yy<2;yy++) {
				oi_zoforoi[yy].omada.text=lezantes[yy];
				oi_zoforoi[yy].i_zoforos.gotoAndStop(0);
				for (xx=0;xx<21;xx++) {
					ta_damakia[yy][xx].gotoAndStop(0);
				}
			}
			epidoseis=[0,0];
			poia_omada=Math.floor(Math.random()*2);
			ask_index=0;
			the_intro.mouseEnabled=false;
			the_intro.visible=false;
			the_zof.mouseEnabled=true;
			the_zof.visible=true;
			the_zof.odigies.visible=true;
			the_zof.odigies.mouseEnabled=true;
			set_the_bara([0,0,0,0,0,0,0,0,0,0]);	
			createjs.Sound.stop();
			createjs.Sound.play("odigies");
		}
		function close_odigies(e) {
			createjs.Sound.stop();
			the_zof.odigies.visible=false;
			the_zof.odigies.mouseEnabled=false;
			set_the_bara([1,1,1,1,1,1,0,0,0,0]);	
		}
		function open_odigies(e) {
			the_zof.odigies.visible=true;
			the_zof.odigies.mouseEnabled=true;
			createjs.Sound.stop();
			createjs.Sound.play("odigies");
			set_the_bara([0,0,0,0,0,0,0,0,0,0]);		
		}
		function display_erotisi() {
			var oititloi=["Εισαγωγική ερώτηση","1η παράσταση: Ο όρκος των επαναστατών στη Βοστίτσα","2η παράσταση: Η εξέγερση στην Πάτρα","3η παράσταση: Εθνική Συνέλευση στην Καλαμάτα","4η παράσταση: Η δόξα του Πατριάρχη","5η παράσταση: Επανάσταση των Ελλήνων εναντίον των Τούρκων","6η παράσταση: Νίκες των Ελλήνων στη στεριά και στη θάλασσα","7η παράσταση: Εθνική Συνέλευση στην Επίδαυρο","8η παράσταση: Ο Κανάρης πυρπολεί τον τουρκικό στόλο στη Χίο","9η παράσταση:  Ο Μαυροκορδάτος υπερασπίζεται το Μεσολόγγι","10η παράσταση: Ο Μπότσαρης επιτίθεται στο στρατόπεδο των Τούρκων στο Καρπενήσι","11η παράσταση: Νίκη αιωρείται πάνω από βυθισμένα πλοία","12η παράσταση: Λεηλασία της Πελοποννήσου από τον Ιμπραήμ Πασά","13η παράσταση: Προσωποποίηση της πόλης του Μεσολογγίου","14η παράσταση: Η Συνθήκη του Λονδίνου","15η παράσταση: Νίκη των Ελλήνων εναντίον των Τούρκων στη θάλασσα","16η παράσταση: Ναυμαχία του Ναβαρίνου","17η παράσταση: Προσωποποίηση της Ελλάδας","18η παράσταση: Η ίδρυση από τον Καποδίστρια του «Πανελληνίου»","19η παράσταση: Ο Λουδοβίκος Α΄ παρουσιάζει τον Όθωνα στους Έλληνες","20η παράσταση: Η άφιξη του Όθωνα στο Ναύπλιο"];	
			var alla=[-1,-1,-1];
			var tix,tix_erot;
			do {
				tix_erot=Math.floor(Math.random()*oi_erotiseis[0].length);
			} while (oi_erotiseis[0][tix_erot]!=epidoseis[poia_omada]);
			for (xx=0;xx<oi_apant.length;xx++) {
				do {
					tix=Math.floor(Math.random()*3)
				} while (alla[tix]>-1)
				alla[tix]=xx;
			}
			for (xx=0;xx<oi_apant.length;xx++) {
				if (alla[xx]==0) {
					oi_apant[xx].soston=1;
				} else {
					oi_apant[xx].soston=0;
				}
				oi_apant[xx].gotoAndStop(0);
				oi_apant[xx].mouseEnabled=true;
				oi_apant[xx].alpha=1;
				oi_apant[xx].x=oi_apant[xx].thex;
				oi_apant[xx].y=oi_apant[xx].they;
				oi_apant[xx].answer.text=oi_erotiseis[2+alla[xx]][tix_erot];
				oi_apant[xx].answer.y=-40+(85-oi_apant[xx].answer.getMeasuredHeight())/2;
			}
			console.log(alla.toString());
			the_mcs.sxolio.keimeno.text=oi_erotiseis[5][tix_erot].replace(/@/g, "\n");
			the_mcs.sxolio.keimeno.y=-70+(147-the_mcs.sxolio.keimeno.getMeasuredHeight())/2;
			the_mcs.erotisi.keimeno.text=oi_erotiseis[1][tix_erot].replace(/@/g, "\n");;
			the_mcs.erotisi.keimeno.y=-50+(274-the_mcs.erotisi.keimeno.getMeasuredHeight())/2;
			the_mcs.titlos_enotitas.text=oititloi[epidoseis[poia_omada]];
			the_mcs.visible=true;
			the_mcs.mouseEnabled=true;
			the_mcs.entoli.visible=true;
			the_mcs.sxolio.visible=false;
			the_mcs.apotel.visible=false;
			the_mcs.entoli.gotoAndStop(poia_omada);
			the_mcs.xronos.aspro.scaleX=1;
			if (poia_omada==1) {
				the_mcs.y=360;
			} else {
				the_mcs.y=645;
			}
			o_xronos=0;
			flag_tick=1;
			set_the_bara([0,0,0,0,1,1,0,0,1,0]);
		}
		function epilexe(e) {
			flag_tick=0;
			if (e.currentTarget.soston==1) {
				deixe_sosto();
			} else {
				e.currentTarget.gotoAndStop(2);
				for (xx=0;xx<oi_apant.length;xx++) {
					oi_apant[xx].alpha=0;
					oi_apant[xx].mouseEnabled=false;
				}
				e.currentTarget.alpha=1;
				createjs.Tween.get(e.currentTarget).to({y: oi_apant[1].y}, 300, createjs.Ease.none());
				if (poia_omada==0) {
					the_mcs.apotel.gotoAndStop(0);
					createjs.Sound.stop();
					createjs.Sound.play("wrong_1");
				} else {
					the_mcs.apotel.gotoAndStop(1);
					createjs.Sound.stop();
					createjs.Sound.play("wrong_2");
				}
				deixe_latos();
			}
		}
		function deixe_latos() {
			if (poia_omada==0) {
				poia_omada=1;
			} else {
				poia_omada=0;
			}
			the_mcs.entoli.visible=false;
			the_mcs.apotel.visible=true;
			for (xx=0;xx<oi_apant.length;xx++) {
				oi_apant[xx].mouseEnabled=false;
			}
			set_the_bara([0,0,0,0,1,1,1,1,1,0]);
			stage.update();
		}
		function deixe_sosto() {
			var pos_bilia=[20,20,20,87,193,238,261,382,475,518,614,724,791,813,885,910,976,1085,1160,1201,1244,1260];
			var pos_zof=[-1,-1,-1,-508,-1313,-1654,-1829,-2749,-3451,-3782,-4505,-5341,-5848,-6013,-6560,-6746,-7252,-8079,-8647,-8957,-9277,-9398]
			if (poia_omada==0) {
				createjs.Sound.stop();
				createjs.Sound.play("bravo_1");
				the_mcs.apotel.gotoAndStop(2);
			} else {
				createjs.Sound.stop();
				createjs.Sound.play("bravo_2");
				the_mcs.apotel.gotoAndStop(3);
			}
			the_mcs.entoli.visible=false;
			the_mcs.apotel.visible=true;
			the_mcs.sxolio.visible=true;
			ta_damakia[poia_omada][epidoseis[poia_omada]].gotoAndStop(1);
			epidoseis[poia_omada]=epidoseis[poia_omada]+1;
			oi_zoforoi[poia_omada].bilia.x=pos_bilia[epidoseis[poia_omada]]
		//	oi_zoforoi[poia_omada].i_zoforos.x=pos_zof[epidoseis[poia_omada]]
			createjs.Tween.get(oi_zoforoi[poia_omada].i_zoforos).to({x: pos_zof[epidoseis[poia_omada]]}, 600, createjs.Ease.none());
			oi_zoforoi[poia_omada].i_zoforos.gotoAndStop(epidoseis[poia_omada]);
			for (xx=0;xx<oi_apant.length;xx++) {
				if (oi_apant[xx].soston==1) {
					oi_apant[xx].gotoAndStop(1);
					createjs.Tween.get(oi_apant[xx]).to({y: oi_apant[0].y}, 300, createjs.Ease.none());
				} else {
					createjs.Tween.get(oi_apant[xx]).to({alpha:0}, 200, createjs.Ease.none());
				}
				oi_apant[xx].mouseEnabled=false;
			}
			if (epidoseis[poia_omada]==21) {
				the_mcs.apotel.gotoAndStop(6);
				if (poia_omada==0) {
					createjs.Sound.stop();
					createjs.Sound.play("win_1");
				} else {
					createjs.Sound.stop();
					createjs.Sound.play("win_2");
				}
				the_winner.gotoAndStop(poia_omada);
				the_winner.visible=true;
				the_winner.mouseEnabled=true;
				set_the_bara([0,0,0,0,1,1,1,0,1,0]);	
			} else {
				set_the_bara([0,0,0,0,1,1,1,1,1,0]);	
			}
			stage.update();
		}
		function mesa(e) {
			if (e.currentTarget.mouseEnabled==true) {
				e.currentTarget.gotoAndStop(1);
			}
		}
		function exo(e) {
			if (e.currentTarget.mouseEnabled==true) {
				e.currentTarget.gotoAndStop(0);
			}
		}
		function tiki_tiki(e) {
			if (flag_tick==1) {
				o_xronos=o_xronos+bima_xronou;
				o_xronos = o_xronos % 20;
				if (o_xronos==0) {
					if (the_mcs.xronos.aspro.scaleX>0) {
						the_mcs.xronos.aspro.scaleX=the_mcs.xronos.aspro.scaleX-0.001;
					} else {
						flag_tick=0;
						for (xx=0;xx<oi_apant.length;xx++) {
							oi_apant[xx].alpha=0;
						}
						if (poia_omada==0) {
							the_mcs.apotel.gotoAndStop(4);
							createjs.Sound.stop();
							createjs.Sound.play("telos_1");
						} else {
							the_mcs.apotel.gotoAndStop(5);
							createjs.Sound.stop();
							createjs.Sound.play("telos_2");
						}
						deixe_latos();
					}
				}
			}
		}
		function epomeni(e) {
			createjs.Sound.stop();
			display_erotisi();
		}
		function handleFileComplete1(event) {
			var olon = event.result;
			var epikefs = ["enotis", "erotisi", "sosti", "latos1", "latos2", "sxolio"];
			var templist;
			for (i = 0; i < epikefs.length; i++) {
				templist = olon.getElementsByTagName(epikefs[i]);
				for (j = 0; j < templist.length; j++) {
					oi_erotiseis[i].push(templist[j].childNodes[0].nodeValue);
				}
			}
			console.log(oi_erotiseis);
		}
		function tipota(e) {
			
		}
		function hide_winner(e) {
			the_winner.visible=false;
			the_winner.mouseEnabled=false;
		}
		function say_intro(e) {
			console.log("intro");
			createjs.Sound.stop();
			createjs.Sound.play("intro");
		}
		function gotomenou(e) {
			createjs.Sound.stop();
			window.open("../index.html","_self");
		}
		start_up();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// nikitos
	this.nikitis = new lib.nikitis();
	this.nikitis.name = "nikitis";
	this.nikitis.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.nikitis).wait(1));

	// footer
	this.bara = new lib.footer();
	this.bara.name = "bara";
	this.bara.setTransform(1280,750,1,1,0,0,0,640,30);

	this.timeline.addTween(cjs.Tween.get(this.bara).wait(1));

	// mcs
	this.mc = new lib.mcs();
	this.mc.name = "mc";
	this.mc.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	// zoforoi
	this.zoforoi = new lib.oi_zoforoi();
	this.zoforoi.name = "zoforoi";
	this.zoforoi.setTransform(5611.4,318.5,1,1,0,0,0,5611.4,318.5);

	this.timeline.addTween(cjs.Tween.get(this.zoforoi).wait(1));

	// intro
	this.intro = new lib.intro();
	this.intro.name = "intro";
	this.intro.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.intro).wait(1));

	// background
	this.instance = new lib.background_black();
	this.instance.setTransform(-27,-15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(613,345,10086.9,390.1);
// library properties:
lib.properties = {
	id: '50BF6918D6A6334BA06740BD172AD498',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/background_black.jpg?1617869960486", id:"background_black"},
		{src:"images/zoforos.jpg?1617869960486", id:"zoforos"},
		{src:"images/zoforos_black.jpg?1617869960486", id:"zoforos_black"},
		{src:"images/teliko_atlas_1.png?1617869960446", id:"teliko_atlas_1"},
		{src:"images/teliko_atlas_2.png?1617869960446", id:"teliko_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['50BF6918D6A6334BA06740BD172AD498'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;