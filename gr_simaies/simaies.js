(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"simaies_atlas_1", frames: [[1621,962,114,42],[475,890,680,80],[0,0,1660,888],[1451,962,168,174],[1157,890,605,70],[1621,1006,114,42],[475,972,974,42],[0,1365,1682,42],[0,890,473,473]]}
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



(lib.CachedBmp_60 = function() {
	this.initialize(ss["simaies_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["simaies_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["simaies_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["simaies_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["simaies_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["simaies_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["simaies_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["simaies_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.background_black = function() {
	this.initialize(img.background_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2667,1500);


(lib.niki_head = function() {
	this.initialize(ss["simaies_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.zoom_out = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgaAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA1AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(-2.8,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA1AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_1.setTransform(-2.8,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// noun_magnify_889290.svg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABbBvIhBhAQgYARgbAAQglAAgagbQgagaAAgkQAAglAagaQAagaAlAAQAkAAAaAaQAbAaAAAlQAAAbgRAYIBABBQAEADAAAHQAAAFgEAFQgFAEgFAAQgHAAgDgEgAhDhDQgSARAAAZQAAAZASARQARARAZAAQAZAAARgRQARgRAAgZQAAgZgRgRQgRgSgZAAQgZAAgRASg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABbBvIhBhAQgYARgbAAQglAAgagbQgagaAAgkQAAglAagaQAagaAlAAQAkAAAaAaQAbAaAAAlQAAAbgRAYIBABBQAEADAAAHQAAAFgEAFQgFAEgFAAQgHAAgDgEgAhDhDQgSARAAAZQAAAZASARQARARAZAAQAZAAARgRQARgRAAgZQAAgZgRgRQgRgSgZAAQgZAAgRASg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.5,43,43);


(lib.zoom = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgGAiQgDgDAAgEIAAgRIgRAAQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIARAAIAAgRQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAARIARAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgRAAIAAARQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(-2.55,-2.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAiQgDgDAAgEIAAgRIgRAAQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIARAAIAAgRQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAARIARAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgRAAIAAARQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1.setTransform(-2.55,-2.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// noun_magnify_889290.svg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABbBvIhBhAQgYARgbAAQglAAgagbQgagaAAgkQAAglAagaQAagaAlAAQAkAAAaAaQAbAaAAAlQAAAbgRAYIBABBQAEADAAAHQAAAFgEAFQgFAEgFAAQgHAAgDgEgAhDhDQgSARAAAZQAAAZASARQARARAZAAQAZAAARgRQARgRAAgZQAAgZgRgRQgRgSgZAAQgZAAgRASg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABbBvIhBhAQgYARgbAAQglAAgagbQgagaAAgkQAAglAagaQAagaAlAAQAkAAAaAaQAbAaAAAlQAAAbgRAYIBABBQAEADAAAHQAAAFgEAFQgFAEgFAAQgHAAgDgEgAhDhDQgSARAAAZQAAAZASARQARARAZAAQAZAAARgRQARgRAAgZQAAgZgRgRQgRgSgZAAQgZAAgRASg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.5,43,43);


(lib.the_erotisi = function(mode,startPosition,loop,reversed) {
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
	this.answer = new cjs.Text("Ο Ρήγας Βελεστινλής, στο Παράρτημα του Συντάγματός του (Νέα Πολιτική Διοίκησις, 1797), περιγράφει τη σημαία της δημοκρατικής του πολιτείας, η οποία είναι τρίχρωμη (κόκκινο, άσπρο, μαύρο) και φέρει τρεις σταυρούς, σύμβολα της ορθόδοξης πίστης, καθώς και το ρόπαλο του Ηρακλέους, ως συνδετικό στοιχείο με την αρχαιοελληνική ρώμη.", "normal 500 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.answer.name = "answer";
	this.answer.textAlign = "center";
	this.answer.lineHeight = 27;
	this.answer.lineWidth = 670;
	this.answer.parent = this;
	this.answer.setTransform(-28.45,-24.05);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.answer);
	}

	this.timeline.addTween(cjs.Tween.get(this.answer).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eg4aAKhIAA1BMBw1AAAIAAVBg");
	this.shape.setTransform(-28.475,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.the_erotisi, new cjs.Rectangle(-389.5,-37.3,722.1,134.6), null);


(lib.sxolia = function(mode,startPosition,loop,reversed) {
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
	this.keimeno = new cjs.Text("Ο Υψηλάντης αναδέχεται την αρχιστρατηγίαν του υπέρ ελευθερίας αγώνος, 1852. Peter Heinrich Lambert von Hess (1792-1871)\nιθογραφία 28,5 x 21,5 εκ. Συλλογή Έργων Τέχνης της Βουλής των Ελλήνων, αρ. ευρ. 306", "italic 700 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.keimeno.name = "keimeno";
	this.keimeno.textAlign = "center";
	this.keimeno.lineHeight = 27;
	this.keimeno.lineWidth = 1014;
	this.keimeno.parent = this;
	this.keimeno.setTransform(0,-26.6);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.keimeno);
	}

	this.timeline.addTween(cjs.Tween.get(this.keimeno).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sxolia, new cjs.Rectangle(-508.8,-28.6,1017.7,58.2), null);


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
	this.instance = new lib.CachedBmp_59();
	this.instance.setTransform(-22.85,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.otitlos, new cjs.Rectangle(-22.8,0,340,40), null);


(lib.okey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// noun_Okey_403295.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AimATIA9g8IA6A6ICZiaIA9A9IjWDWg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AimATIA9g8IA6A6ICZiaIA9A9IjWDWg");
	this.shape_1.setTransform(0,0.025);

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


(lib.inv_but = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AnzCgIAAk/IPnAAIAAE/g");
	this.shape.setTransform(50.025,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inv_but, new cjs.Rectangle(0,0,100.1,32), null);


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


(lib.entoli = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_53();
	this.instance.setTransform(219.6,11.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_54();
	this.instance_1.setTransform(396.5,11.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ehj/ADIIAAmPMDH/AAAIAAGPg");
	this.shape.setTransform(640,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,40);


(lib.eikona = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.damaki_maska = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC33").s().p("AiVD6QhkAAAAhkIAAkrQAAhkBkAAIErAAQBkAAAABkIAAErQAABkhkAAg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.damaki_maska, new cjs.Rectangle(0,0,50,50), null);


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
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiQBpIAAjRIEhAAIAADRg");
	this.shape.setTransform(14.5,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiQBpIAAjRIEhAAIAADRg");
	this.shape_1.setTransform(14.5,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AiQBpIAAjRIEhAAIAADRg");
	this.shape_2.setTransform(14.5,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AiQBpIAAjRIEhAAIAADRg");
	this.shape_3.setTransform(14.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

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

	// lezanta
	this.instance = new lib.CachedBmp_60();
	this.instance.setTransform(-62,-10.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.xronos, new cjs.Rectangle(-62,-10.5,362,21.2), null);


(lib.epipedo = function(mode,startPosition,loop,reversed) {
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

	// invisible_buts
	this.inv2 = new lib.inv_but();
	this.inv2.name = "inv2";
	this.inv2.setTransform(31,77.05,1,1,0,0,0,50,16);
	this.inv2.alpha = 0.0195;

	this.inv1 = new lib.inv_but();
	this.inv1.name = "inv1";
	this.inv1.setTransform(31,21.05,1,1,0,0,0,50,16);
	this.inv1.alpha = 0.0195;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inv1},{t:this.inv2}]}).wait(2));

	// sxolio
	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(-151.15,104.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// text
	this.instance_1 = new lib.CachedBmp_57();
	this.instance_1.setTransform(-15.45,5.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// toggle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiZGqQhAhAAAhaIAAofQAAhaBAhAQBAhABZAAQBaAABABAQBABAAABaIAAIfQAABahABAQhABAhaAAQhZAAhAhAgAhil2QgpApAAA6QAAA5ApApQApAqA5AAQA6AAApgqQApgpAAg5QAAg6gpgpQgqgqg5AAQg5AAgpAqg");
	this.shape.setTransform(-46.525,49);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({skewX:180},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.1,0,302.5,139.7);


(lib.epidosi = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_55();
	this.instance.setTransform(-62,-10.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// grammes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ASrBpIAAjRIAKAAIAADRgAJTBpIAAjRIAKAAIAADRgAgEBpIAAjRIAJAAIAADRgApcBpIAAjRIAKAAIAADRgAy0BpIAAjRIAKAAIAADRg");
	this.shape.setTransform(120.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// aspro
	this.d5 = new lib.damaki();
	this.d5.name = "d5";
	this.d5.setTransform(270.5,0,2.0345,1,0,0,0,14.5,10.5);

	this.d4 = new lib.damaki();
	this.d4.name = "d4";
	this.d4.setTransform(210.45,0,2.0345,1,0,0,0,14.5,10.5);

	this.d3 = new lib.damaki();
	this.d3.name = "d3";
	this.d3.setTransform(150.5,0,2.0345,1,0,0,0,14.5,10.5);

	this.d2 = new lib.damaki();
	this.d2.name = "d2";
	this.d2.setTransform(90.5,0,2.0345,1,0,0,0,14.5,10.5);

	this.d1 = new lib.damaki();
	this.d1.name = "d1";
	this.d1.setTransform(30.45,0,2.0345,1,0,0,0,14.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d1},{t:this.d2},{t:this.d3},{t:this.d4},{t:this.d5}]}).wait(1));

	// kokkino
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("A3bBpIAAjRMAu3AAAIAADRg");
	this.shape_1.setTransform(150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epidosi, new cjs.Rectangle(-62,-10.5,362,21.2), null);


(lib.damaki_1 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// gramma
	this.gramma = new cjs.Text("M", "bold 36px 'Calibri'", "#333333");
	this.gramma.name = "gramma";
	this.gramma.textAlign = "center";
	this.gramma.lineHeight = 44;
	this.gramma.lineWidth = 35;
	this.gramma.parent = this;
	this.gramma.setTransform(25,11.05);

	this.timeline.addTween(cjs.Tween.get(this.gramma).wait(1));

	// maska_epilogis
	this.epilogi = new lib.damaki_maska();
	this.epilogi.name = "epilogi";
	this.epilogi.setTransform(25,25,1,1,0,0,0,25,25);
	this.epilogi.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.epilogi).wait(1));

	// Layer_1_copy_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiBDmQhkAAAAhkIAAkDQAAhkBkAAIEDAAQBkAAAABkIAAEDQAABkhkAAg");
	this.shape_4.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiVD6QhkAAAAhkIAAkrQAAhkBkAAIErAAQBkAAAABkIAAErQAABkhkAAg");
	this.shape_5.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(204,0,102,0.098)").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_6.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.damaki_1, new cjs.Rectangle(0,0,50,57), null);


(lib.apokoma = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eikona_apokoma
	this.eikona = new lib.eikona();
	this.eikona.name = "eikona";
	this.eikona.setTransform(94,200);

	this.timeline.addTween(cjs.Tween.get(this.eikona).wait(1));

	// eikona
	this.eikona_back = new lib.eikona();
	this.eikona_back.name = "eikona_back";
	this.eikona_back.setTransform(213,2);

	this.timeline.addTween(cjs.Tween.get(this.eikona_back).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apokoma, new cjs.Rectangle(0,0,0,0), null);


(lib.kriptolexo = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.dam100 = new lib.damaki_1();
	this.dam100.name = "dam100";
	this.dam100.setTransform(960,568);

	this.dam99 = new lib.damaki_1();
	this.dam99.name = "dam99";
	this.dam99.setTransform(910,568);

	this.dam98 = new lib.damaki_1();
	this.dam98.name = "dam98";
	this.dam98.setTransform(860,568);

	this.dam97 = new lib.damaki_1();
	this.dam97.name = "dam97";
	this.dam97.setTransform(810,568);

	this.dam96 = new lib.damaki_1();
	this.dam96.name = "dam96";
	this.dam96.setTransform(760,568);

	this.dam95 = new lib.damaki_1();
	this.dam95.name = "dam95";
	this.dam95.setTransform(710,568);

	this.dam94 = new lib.damaki_1();
	this.dam94.name = "dam94";
	this.dam94.setTransform(660,568);

	this.dam93 = new lib.damaki_1();
	this.dam93.name = "dam93";
	this.dam93.setTransform(610,568);

	this.dam92 = new lib.damaki_1();
	this.dam92.name = "dam92";
	this.dam92.setTransform(560,568);

	this.dam91 = new lib.damaki_1();
	this.dam91.name = "dam91";
	this.dam91.setTransform(510,568);

	this.dam90 = new lib.damaki_1();
	this.dam90.name = "dam90";
	this.dam90.setTransform(960,518);

	this.dam89 = new lib.damaki_1();
	this.dam89.name = "dam89";
	this.dam89.setTransform(910,518);

	this.dam88 = new lib.damaki_1();
	this.dam88.name = "dam88";
	this.dam88.setTransform(860,518);

	this.dam87 = new lib.damaki_1();
	this.dam87.name = "dam87";
	this.dam87.setTransform(810,518);

	this.dam86 = new lib.damaki_1();
	this.dam86.name = "dam86";
	this.dam86.setTransform(760,518);

	this.dam85 = new lib.damaki_1();
	this.dam85.name = "dam85";
	this.dam85.setTransform(710,518);

	this.dam84 = new lib.damaki_1();
	this.dam84.name = "dam84";
	this.dam84.setTransform(660,518);

	this.dam83 = new lib.damaki_1();
	this.dam83.name = "dam83";
	this.dam83.setTransform(610,518);

	this.dam82 = new lib.damaki_1();
	this.dam82.name = "dam82";
	this.dam82.setTransform(560,518);

	this.dam81 = new lib.damaki_1();
	this.dam81.name = "dam81";
	this.dam81.setTransform(510,518);

	this.dam80 = new lib.damaki_1();
	this.dam80.name = "dam80";
	this.dam80.setTransform(960,468);

	this.dam79 = new lib.damaki_1();
	this.dam79.name = "dam79";
	this.dam79.setTransform(910,468);

	this.dam78 = new lib.damaki_1();
	this.dam78.name = "dam78";
	this.dam78.setTransform(860,468);

	this.dam77 = new lib.damaki_1();
	this.dam77.name = "dam77";
	this.dam77.setTransform(810,468);

	this.dam76 = new lib.damaki_1();
	this.dam76.name = "dam76";
	this.dam76.setTransform(760,468);

	this.dam75 = new lib.damaki_1();
	this.dam75.name = "dam75";
	this.dam75.setTransform(710,468);

	this.dam74 = new lib.damaki_1();
	this.dam74.name = "dam74";
	this.dam74.setTransform(660,468);

	this.dam73 = new lib.damaki_1();
	this.dam73.name = "dam73";
	this.dam73.setTransform(610,468);

	this.dam72 = new lib.damaki_1();
	this.dam72.name = "dam72";
	this.dam72.setTransform(560,468);

	this.dam71 = new lib.damaki_1();
	this.dam71.name = "dam71";
	this.dam71.setTransform(510,468);

	this.dam70 = new lib.damaki_1();
	this.dam70.name = "dam70";
	this.dam70.setTransform(960,418);

	this.dam69 = new lib.damaki_1();
	this.dam69.name = "dam69";
	this.dam69.setTransform(910,418);

	this.dam68 = new lib.damaki_1();
	this.dam68.name = "dam68";
	this.dam68.setTransform(860,418);

	this.dam67 = new lib.damaki_1();
	this.dam67.name = "dam67";
	this.dam67.setTransform(810,418);

	this.dam66 = new lib.damaki_1();
	this.dam66.name = "dam66";
	this.dam66.setTransform(760,418);

	this.dam65 = new lib.damaki_1();
	this.dam65.name = "dam65";
	this.dam65.setTransform(710,418);

	this.dam64 = new lib.damaki_1();
	this.dam64.name = "dam64";
	this.dam64.setTransform(660,418);

	this.dam63 = new lib.damaki_1();
	this.dam63.name = "dam63";
	this.dam63.setTransform(610,418);

	this.dam62 = new lib.damaki_1();
	this.dam62.name = "dam62";
	this.dam62.setTransform(560,418);

	this.dam61 = new lib.damaki_1();
	this.dam61.name = "dam61";
	this.dam61.setTransform(510,418);

	this.dam60 = new lib.damaki_1();
	this.dam60.name = "dam60";
	this.dam60.setTransform(960,368);

	this.dam59 = new lib.damaki_1();
	this.dam59.name = "dam59";
	this.dam59.setTransform(910,368);

	this.dam58 = new lib.damaki_1();
	this.dam58.name = "dam58";
	this.dam58.setTransform(860,368);

	this.dam57 = new lib.damaki_1();
	this.dam57.name = "dam57";
	this.dam57.setTransform(810,368);

	this.dam56 = new lib.damaki_1();
	this.dam56.name = "dam56";
	this.dam56.setTransform(760,368);

	this.dam55 = new lib.damaki_1();
	this.dam55.name = "dam55";
	this.dam55.setTransform(710,368);

	this.dam54 = new lib.damaki_1();
	this.dam54.name = "dam54";
	this.dam54.setTransform(660,368);

	this.dam53 = new lib.damaki_1();
	this.dam53.name = "dam53";
	this.dam53.setTransform(610,368);

	this.dam52 = new lib.damaki_1();
	this.dam52.name = "dam52";
	this.dam52.setTransform(560,368);

	this.dam51 = new lib.damaki_1();
	this.dam51.name = "dam51";
	this.dam51.setTransform(510,368);

	this.dam50 = new lib.damaki_1();
	this.dam50.name = "dam50";
	this.dam50.setTransform(960,318);

	this.dam49 = new lib.damaki_1();
	this.dam49.name = "dam49";
	this.dam49.setTransform(910,318);

	this.dam48 = new lib.damaki_1();
	this.dam48.name = "dam48";
	this.dam48.setTransform(860,318);

	this.dam47 = new lib.damaki_1();
	this.dam47.name = "dam47";
	this.dam47.setTransform(810,318);

	this.dam46 = new lib.damaki_1();
	this.dam46.name = "dam46";
	this.dam46.setTransform(760,318);

	this.dam45 = new lib.damaki_1();
	this.dam45.name = "dam45";
	this.dam45.setTransform(710,318);

	this.dam44 = new lib.damaki_1();
	this.dam44.name = "dam44";
	this.dam44.setTransform(660,318);

	this.dam43 = new lib.damaki_1();
	this.dam43.name = "dam43";
	this.dam43.setTransform(610,318);

	this.dam42 = new lib.damaki_1();
	this.dam42.name = "dam42";
	this.dam42.setTransform(560,318);

	this.dam41 = new lib.damaki_1();
	this.dam41.name = "dam41";
	this.dam41.setTransform(510,318);

	this.dam40 = new lib.damaki_1();
	this.dam40.name = "dam40";
	this.dam40.setTransform(960,268);

	this.dam39 = new lib.damaki_1();
	this.dam39.name = "dam39";
	this.dam39.setTransform(910,268);

	this.dam38 = new lib.damaki_1();
	this.dam38.name = "dam38";
	this.dam38.setTransform(860,268);

	this.dam37 = new lib.damaki_1();
	this.dam37.name = "dam37";
	this.dam37.setTransform(810,268);

	this.dam36 = new lib.damaki_1();
	this.dam36.name = "dam36";
	this.dam36.setTransform(760,268);

	this.dam35 = new lib.damaki_1();
	this.dam35.name = "dam35";
	this.dam35.setTransform(710,268);

	this.dam34 = new lib.damaki_1();
	this.dam34.name = "dam34";
	this.dam34.setTransform(660,268);

	this.dam33 = new lib.damaki_1();
	this.dam33.name = "dam33";
	this.dam33.setTransform(610,268);

	this.dam32 = new lib.damaki_1();
	this.dam32.name = "dam32";
	this.dam32.setTransform(560,268);

	this.dam31 = new lib.damaki_1();
	this.dam31.name = "dam31";
	this.dam31.setTransform(510,268);

	this.dam30 = new lib.damaki_1();
	this.dam30.name = "dam30";
	this.dam30.setTransform(960,218);

	this.dam29 = new lib.damaki_1();
	this.dam29.name = "dam29";
	this.dam29.setTransform(910,218);

	this.dam28 = new lib.damaki_1();
	this.dam28.name = "dam28";
	this.dam28.setTransform(860,218);

	this.dam27 = new lib.damaki_1();
	this.dam27.name = "dam27";
	this.dam27.setTransform(810,218);

	this.dam26 = new lib.damaki_1();
	this.dam26.name = "dam26";
	this.dam26.setTransform(760,218);

	this.dam25 = new lib.damaki_1();
	this.dam25.name = "dam25";
	this.dam25.setTransform(710,218);

	this.dam24 = new lib.damaki_1();
	this.dam24.name = "dam24";
	this.dam24.setTransform(660,218);

	this.dam23 = new lib.damaki_1();
	this.dam23.name = "dam23";
	this.dam23.setTransform(610,218);

	this.dam22 = new lib.damaki_1();
	this.dam22.name = "dam22";
	this.dam22.setTransform(560,218);

	this.dam21 = new lib.damaki_1();
	this.dam21.name = "dam21";
	this.dam21.setTransform(510,218);

	this.dam20 = new lib.damaki_1();
	this.dam20.name = "dam20";
	this.dam20.setTransform(960,168);

	this.dam19 = new lib.damaki_1();
	this.dam19.name = "dam19";
	this.dam19.setTransform(910,168);

	this.dam18 = new lib.damaki_1();
	this.dam18.name = "dam18";
	this.dam18.setTransform(860,168);

	this.dam17 = new lib.damaki_1();
	this.dam17.name = "dam17";
	this.dam17.setTransform(810,168);

	this.dam16 = new lib.damaki_1();
	this.dam16.name = "dam16";
	this.dam16.setTransform(760,168);

	this.dam15 = new lib.damaki_1();
	this.dam15.name = "dam15";
	this.dam15.setTransform(710,168);

	this.dam14 = new lib.damaki_1();
	this.dam14.name = "dam14";
	this.dam14.setTransform(660,168);

	this.dam13 = new lib.damaki_1();
	this.dam13.name = "dam13";
	this.dam13.setTransform(610,168);

	this.dam12 = new lib.damaki_1();
	this.dam12.name = "dam12";
	this.dam12.setTransform(560,168);

	this.dam11 = new lib.damaki_1();
	this.dam11.name = "dam11";
	this.dam11.setTransform(510,168);

	this.dam10 = new lib.damaki_1();
	this.dam10.name = "dam10";
	this.dam10.setTransform(960,118);

	this.dam9 = new lib.damaki_1();
	this.dam9.name = "dam9";
	this.dam9.setTransform(910,118);

	this.dam8 = new lib.damaki_1();
	this.dam8.name = "dam8";
	this.dam8.setTransform(860,118);

	this.dam7 = new lib.damaki_1();
	this.dam7.name = "dam7";
	this.dam7.setTransform(810,118);

	this.dam6 = new lib.damaki_1();
	this.dam6.name = "dam6";
	this.dam6.setTransform(760,118);

	this.dam5 = new lib.damaki_1();
	this.dam5.name = "dam5";
	this.dam5.setTransform(710,118);

	this.dam4 = new lib.damaki_1();
	this.dam4.name = "dam4";
	this.dam4.setTransform(660,118);

	this.dam3 = new lib.damaki_1();
	this.dam3.name = "dam3";
	this.dam3.setTransform(610,118);

	this.dam2 = new lib.damaki_1();
	this.dam2.name = "dam2";
	this.dam2.setTransform(560,118);

	this.dam1 = new lib.damaki_1();
	this.dam1.name = "dam1";
	this.dam1.setTransform(510,118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dam1},{t:this.dam2},{t:this.dam3},{t:this.dam4},{t:this.dam5},{t:this.dam6},{t:this.dam7},{t:this.dam8},{t:this.dam9},{t:this.dam10},{t:this.dam11},{t:this.dam12},{t:this.dam13},{t:this.dam14},{t:this.dam15},{t:this.dam16},{t:this.dam17},{t:this.dam18},{t:this.dam19},{t:this.dam20},{t:this.dam21},{t:this.dam22},{t:this.dam23},{t:this.dam24},{t:this.dam25},{t:this.dam26},{t:this.dam27},{t:this.dam28},{t:this.dam29},{t:this.dam30},{t:this.dam31},{t:this.dam32},{t:this.dam33},{t:this.dam34},{t:this.dam35},{t:this.dam36},{t:this.dam37},{t:this.dam38},{t:this.dam39},{t:this.dam40},{t:this.dam41},{t:this.dam42},{t:this.dam43},{t:this.dam44},{t:this.dam45},{t:this.dam46},{t:this.dam47},{t:this.dam48},{t:this.dam49},{t:this.dam50},{t:this.dam51},{t:this.dam52},{t:this.dam53},{t:this.dam54},{t:this.dam55},{t:this.dam56},{t:this.dam57},{t:this.dam58},{t:this.dam59},{t:this.dam60},{t:this.dam61},{t:this.dam62},{t:this.dam63},{t:this.dam64},{t:this.dam65},{t:this.dam66},{t:this.dam67},{t:this.dam68},{t:this.dam69},{t:this.dam70},{t:this.dam71},{t:this.dam72},{t:this.dam73},{t:this.dam74},{t:this.dam75},{t:this.dam76},{t:this.dam77},{t:this.dam78},{t:this.dam79},{t:this.dam80},{t:this.dam81},{t:this.dam82},{t:this.dam83},{t:this.dam84},{t:this.dam85},{t:this.dam86},{t:this.dam87},{t:this.dam88},{t:this.dam89},{t:this.dam90},{t:this.dam91},{t:this.dam92},{t:this.dam93},{t:this.dam94},{t:this.dam95},{t:this.dam96},{t:this.dam97},{t:this.dam98},{t:this.dam99},{t:this.dam100}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kriptolexo, new cjs.Rectangle(510,118,500,507), null);


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

	// epipedo
	this.levels = new lib.epipedo();
	this.levels.name = "levels";
	this.levels.setTransform(1019.65,542.9,1,1,0,0,0,74.3,49);

	this.timeline.addTween(cjs.Tween.get(this.levels).wait(1));

	// keimeno
	this.niki_talks = new lib.niki_talks();
	this.niki_talks.name = "niki_talks";
	this.niki_talks.setTransform(338.9,314.9,1,1,0,0,0,141.9,141.9);

	this.instance = new lib.CachedBmp_58();
	this.instance.setTransform(381,31,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.niki_talks}]}).wait(1));

	// backgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.intro, new cjs.Rectangle(0,0,1280,720), null);


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

	// sxolion
	this.to_sxolio = new lib.sxolia();
	this.to_sxolio.name = "to_sxolio";
	this.to_sxolio.setTransform(0,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.to_sxolio).wait(1));

	// xronos_epidosi
	this.epidosi = new lib.epidosi();
	this.epidosi.name = "epidosi";
	this.epidosi.setTransform(480.1,-6.5,1,1,0,0,0,150,10.5);

	this.xronos = new lib.xronos();
	this.xronos.name = "xronos";
	this.xronos.setTransform(480.1,-31.5,1,1,0,0,0,150,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xronos},{t:this.epidosi}]}).wait(1));

	// buts
	this.zoom_in = new lib.zoom();
	this.zoom_in.name = "zoom_in";
	this.zoom_in.setTransform(482.85,-29.5);
	new cjs.ButtonHelper(this.zoom_in, 0, 1, 2, false, new lib.zoom(), 3);

	this.zoom_out = new lib.zoom_out();
	this.zoom_out.name = "zoom_out";
	this.zoom_out.setTransform(542.85,-29.5);
	new cjs.ButtonHelper(this.zoom_out, 0, 1, 2, false, new lib.zoom_out(), 3);

	this.epom = new lib.start();
	this.epom.name = "epom";
	this.epom.setTransform(0,-29.5);
	new cjs.ButtonHelper(this.epom, 0, 1, 2, false, new lib.start(), 3);

	this.closeit = new lib.close();
	this.closeit.name = "closeit";
	this.closeit.setTransform(602.85,-29.5);
	new cjs.ButtonHelper(this.closeit, 0, 1, 2, false, new lib.close(), 3);

	this.back = new lib.back();
	this.back.name = "back";
	this.back.setTransform(-527.15,-29.5);
	new cjs.ButtonHelper(this.back, 0, 1, 2, false, new lib.back(), 3);

	this.home = new lib.home();
	this.home.name = "home";
	this.home.setTransform(-587.15,-29.5);
	new cjs.ButtonHelper(this.home, 0, 1, 2, false, new lib.home(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.back},{t:this.closeit},{t:this.epom},{t:this.zoom_out},{t:this.zoom_in}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.footer, new cjs.Rectangle(-640,-60,1280,62), null);


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

	// entoli
	this.entoli = new lib.entoli();
	this.entoli.name = "entoli";

	this.timeline.addTween(cjs.Tween.get(this.entoli).wait(1));

	// kriptolexo
	this.okey = new lib.okey();
	this.okey.name = "okey";
	this.okey.setTransform(1004.05,609.15,1.75,1.75);
	new cjs.ButtonHelper(this.okey, 0, 1, 2, false, new lib.okey(), 3);

	this.kript = new lib.kriptolexo();
	this.kript.name = "kript";
	this.kript.setTransform(544.05,238,1,1,0,0,0,300,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kript},{t:this.okey}]}).wait(1));

	// apantiseis
	this.erotisis = new lib.the_erotisi();
	this.erotisis.name = "erotisis";
	this.erotisis.setTransform(406,93.3);

	this.timeline.addTween(cjs.Tween.get(this.erotisis).wait(1));

	// backgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcs, new cjs.Rectangle(0,0,1280,720), null);


// stage content:
(lib.simaies = function(mode,startPosition,loop,reversed) {
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
		var lexeis=[];
		var poses_sostes,poses_lexeis;
		var lexeis_st_gr=[];
		var grammata_kript;
		
		var old_touched;
		var grid_size=10;
		var user_painted=[];
		var dragging;
		
		var oi_erotiseis=[[],[],[],[],[]];
		var the_apok=this.apok;
		var the_bara=this.bara;
		var the_intro=this.intro;
		var the_mcs=this.mc;
		var the_levels=this.intro.levels;
		var toggles=[the_levels.inv1,the_levels.inv2];
		var xx,epipedo,ask_index,flag_tick,points_to_earn;
		var quest_numbs=[];
		var tis_baras=[the_bara.home,the_bara.back,the_bara.epom,the_bara.xronos, the_bara.epidosi,the_bara.to_sxolio,the_bara.zoom_in,the_bara.zoom_out,the_bara.closeit,the_bara.otitlos];
		var ta_damakia=[the_bara.epidosi.d1,the_bara.epidosi.d2,the_bara.epidosi.d3,the_bara.epidosi.d4,the_bara.epidosi.d5];
		var boxes=[the_mcs.kript.dam1,the_mcs.kript.dam2,the_mcs.kript.dam3,the_mcs.kript.dam4,the_mcs.kript.dam5,the_mcs.kript.dam6,the_mcs.kript.dam7,the_mcs.kript.dam8,the_mcs.kript.dam9,the_mcs.kript.dam10,the_mcs.kript.dam11,the_mcs.kript.dam12,the_mcs.kript.dam13,the_mcs.kript.dam14,the_mcs.kript.dam15,the_mcs.kript.dam16,the_mcs.kript.dam17,the_mcs.kript.dam18,the_mcs.kript.dam19,the_mcs.kript.dam20,the_mcs.kript.dam21,the_mcs.kript.dam22,the_mcs.kript.dam23,the_mcs.kript.dam24,the_mcs.kript.dam25,the_mcs.kript.dam26,the_mcs.kript.dam27,the_mcs.kript.dam28,the_mcs.kript.dam29,the_mcs.kript.dam30,the_mcs.kript.dam31,the_mcs.kript.dam32,the_mcs.kript.dam33,the_mcs.kript.dam34,the_mcs.kript.dam35,the_mcs.kript.dam36,the_mcs.kript.dam37,the_mcs.kript.dam38,the_mcs.kript.dam39,the_mcs.kript.dam40,the_mcs.kript.dam41,the_mcs.kript.dam42,the_mcs.kript.dam43,the_mcs.kript.dam44,the_mcs.kript.dam45,the_mcs.kript.dam46,the_mcs.kript.dam47,the_mcs.kript.dam48,the_mcs.kript.dam49,the_mcs.kript.dam50,the_mcs.kript.dam51,the_mcs.kript.dam52,the_mcs.kript.dam53,the_mcs.kript.dam54,the_mcs.kript.dam55,the_mcs.kript.dam56,the_mcs.kript.dam57,the_mcs.kript.dam58,the_mcs.kript.dam59,the_mcs.kript.dam60,the_mcs.kript.dam61,the_mcs.kript.dam62,the_mcs.kript.dam63,the_mcs.kript.dam64,the_mcs.kript.dam65,the_mcs.kript.dam66,the_mcs.kript.dam67,the_mcs.kript.dam68,the_mcs.kript.dam69,the_mcs.kript.dam70,the_mcs.kript.dam71,the_mcs.kript.dam72,the_mcs.kript.dam73,the_mcs.kript.dam74,the_mcs.kript.dam75,the_mcs.kript.dam76,the_mcs.kript.dam77,the_mcs.kript.dam78,the_mcs.kript.dam79,the_mcs.kript.dam80,the_mcs.kript.dam81,the_mcs.kript.dam82,the_mcs.kript.dam83,the_mcs.kript.dam84,the_mcs.kript.dam85,the_mcs.kript.dam86,the_mcs.kript.dam87,the_mcs.kript.dam88,the_mcs.kript.dam89,the_mcs.kript.dam90,the_mcs.kript.dam91,the_mcs.kript.dam92,the_mcs.kript.dam93,the_mcs.kript.dam94,the_mcs.kript.dam95,the_mcs.kript.dam96,the_mcs.kript.dam97,the_mcs.kript.dam98,the_mcs.kript.dam99,the_mcs.kript.dam100];
		var alfabita=["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω"];
		var alfabita_kript=["-","Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω"];
		
		var	o_xronos,bima_xronou;
		var paper_displayed=false;
		function start_up() {
			var preload1 = new createjs.LoadQueue();
			createjs.Sound.registerSound("sounds/flag1.mp3", "intro");
			createjs.Sound.registerSound("sounds/flag2.mp3", "odigies");
			createjs.Sound.registerSound("sounds/flag3.mp3", "bravo");
			createjs.Sound.registerSound("sounds/flag_c25.mp3", "wrong");
			createjs.Sound.registerSound("sounds/flag4.mp3", "telos_xronou");
			createjs.Touch.enable(stage);
			the_intro.niki_talks.mouseChildren=false;
			the_intro.niki_talks.cursor="pointer";
			the_intro.niki_talks.addEventListener("click",say_intro);
			the_bara.home.addEventListener("click",gotomenou);
			
			flag_tick=0;
			bima_xronou=10;
			epipedo=0; //0=easy 1=difficult
			set_the_bara([1,0,0,0,0,0,0,0,0,1]);
			the_apok.thex=the_apok.x;
			the_apok.they=the_apok.y;
			the_apok.visible=false;
			paper_displayed=false;
			the_apok.mouseEnabled=false;
			the_apok.mouseChildren=false;
			the_apok.cursor="pointer";
			the_apok.addEventListener("click",display_paper);
			the_apok.addEventListener("pressmove",sire);
			the_apok.addEventListener("mousedown",patise);
			the_intro.visible=true;
			the_mcs.visible=false;
			the_mcs.mouseEnabled=false;
			the_intro.start_it.addEventListener("click",start_the_game);
			the_bara.epom.addEventListener("click",epomeni);
			the_bara.back.addEventListener("click",go_back);
			the_bara.zoom_in.addEventListener("click",zooms_in);
			the_bara.zoom_out.addEventListener("click",zooms_out);
			
		
			the_bara.closeit.addEventListener("click",hide_paper);
			for (xx=0;xx<2;xx++) {
				toggles[xx].mouseChildren=false;
				toggles[xx].cursor="pointer";
				toggles[xx].theid=xx;
				toggles[xx].addEventListener("click",epilogi_epipedou);
			}
			
			the_mcs.kript.mouseChildren=false;
			for (i=0;i<boxes.length;i++) {
				boxes[i].theid=i;
				boxes[i].mouseChildren=false;
				boxes[i].epilogi.visible=false;
				boxes[i].epilogi.gotoAndStop(0);
				boxes[i].tabEnabled=false;
				boxes[i].cursor="pointer";
				boxes[i].gramma.text="1";
			}
			for (i=0;i<boxes.length;i++) {
				boxes[i].addEventListener("click",click_mouse_on_damaki);
			}
			the_mcs.kript.addEventListener("mousedown",kato_mouse);
			the_mcs.kript.addEventListener("pressup",pano_mouse);
			the_mcs.kript.addEventListener("mouseout",pano_mouse);
			the_mcs.kript.addEventListener("pressmove",move_mouse);
			the_mcs.kript.addEventListener("click",click_mouse);
			the_mcs.okey.addEventListener("click",check_it)	
			
			createjs.Ticker.addEventListener("tick", tiki_tiki);
			
			preload1.addEventListener("fileload", handleFileComplete1);
			preload1.loadFile("xml/simaies.xml");
		}
		function patise(e){
			var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
			if (paper_displayed==true) {
				the_apok.difx=the_apok.x-p.x;
				the_apok.dify=the_apok.y-p.y;
			}
		}
		function sire(e){
			var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
			if (paper_displayed==true) {
				the_apok.x = the_apok.difx+p.x;
				the_apok.y = the_apok.dify+p.y;	
			}
		}
		function display_paper(e) {
			if (paper_displayed==false) {
				createjs.Sound.stop();
				paper_displayed=true;
				createjs.Tween.get(the_apok.eikona).to({alpha:0}, 300, createjs.Ease.none()).call(paper2);
			}	
		}
		function paper2(e) {
			createjs.Tween.get(the_apok.eikona_back).to({alpha: 1}, 300, createjs.Ease.none());
			set_the_bara([0,0,0,0,0,1,1,0,1,0]);
			the_mcs.visible=false;
			the_apok.cursor="all-scroll";
		}
		function hide_paper(e) {
			createjs.Tween.get(the_apok.eikona_back).to({alpha:0}, 300, createjs.Ease.none()).call(paper3);
		}
		function paper3(e) {
			the_apok.scale=1;
			the_apok.x=the_apok.thex;
			the_apok.y=the_apok.they;
		//	the_apok.eikona_back.scale=0.6;
			createjs.Tween.get(the_apok.eikona).to({alpha: 1}, 300, createjs.Ease.none());
			if (ask_index==4) {
				set_the_bara([1,1,0,1,1,0,0,0,0,0]);
			} else {
				set_the_bara([1,1,1,1,1,0,0,0,0,0]);	
			}
			paper_displayed=false;
			the_mcs.visible=true;
			the_apok.cursor="pointer";
		}
		function zooms_in(e) {
			createjs.Tween.get(the_apok).to({scale: 1.8}, 300, createjs.Ease.none());
			set_the_bara([0,0,0,0,0,1,0,1,1,0]);	
		}
		function zooms_out(e) {
			set_the_bara([0,0,0,0,0,1,1,0,1,0]);
			createjs.Tween.get(the_apok).to({scale: 1}, 300, createjs.Ease.none());
			the_apok.x=the_apok.thex;
			the_apok.y=the_apok.they;
		}
		function go_back(e) {
			flag_tick=0;
			set_the_bara([1,0,0,0,0,0,0,0,0,1]);
			the_apok.mouseEnabled=false;
			the_apok.visible=false;
			
			the_intro.visible=true;
			the_intro.mouseEnabled=true;
			the_mcs.visible=false;
			the_mcs.mouseEnabled=false;
			createjs.Sound.stop();
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
			quest_numbs=[];
			for (xx=0;xx<5;xx++) {
				ta_damakia[xx].gotoAndStop(0);
			}	
			for (xx=0;xx<5;xx++) {
				do {
					tix=Math.floor(Math.random()*oi_erotiseis[0].length)
				} while (quest_numbs.indexOf(tix)>-1)
				quest_numbs.push(tix);
			}
			console.log(quest_numbs);
			ask_index=0;
			the_intro.mouseEnabled=false;
			the_intro.visible=false;
			createjs.Sound.stop();
			createjs.Sound.play("odigies");
			display_erotisi();
		}
		function display_erotisi() {
			points_to_earn=1;
			setup_seira()
			fortose_apokoma(oi_erotiseis[0][quest_numbs[ask_index]]);
			the_mcs.erotisis.answer.text=oi_erotiseis[1][quest_numbs[ask_index]];
			the_mcs.erotisis.answer.y=-20+(112-the_mcs.erotisis.answer.getMeasuredHeight())/2;
			the_bara.to_sxolio.keimeno.text=oi_erotiseis[4][quest_numbs[ask_index]].replace(/@/g, "\n");
			the_mcs.mouseEnabled=true;
			the_mcs.entoli.gotoAndStop(0);
			the_apok.mouseEnabled=false;
			the_bara.xronos.aspro.scaleX=1;
			o_xronos=0;
			flag_tick=1;
			set_the_bara([1,1,0,1,1,0,0,0,0,0]);
		}
		function deixe_sosto() {
			the_mcs.entoli.gotoAndStop(1);
			the_mcs.erotisis.answer.text=oi_erotiseis[2][quest_numbs[ask_index]];
			the_mcs.erotisis.answer.y=-20+(112-the_mcs.erotisis.answer.getMeasuredHeight())/2;
			the_apok.mouseEnabled=true;
			ta_damakia[ask_index].gotoAndStop(points_to_earn);
			flag_tick=0;
			if (ask_index==4) {
				set_the_bara([1,1,0,1,1,0,0,0,0,0]);			
			} else {
				set_the_bara([1,1,1,1,1,0,0,0,0,0]);	
			}
		}
		function epilogi_epipedou(e) {
			e.currentTarget.parent.gotoAndStop(e.currentTarget.theid);
			epipedo=e.currentTarget.theid;
			bima_xronou=10*(epipedo+1);
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
					if (the_bara.xronos.aspro.scaleX>0) {
						the_bara.xronos.aspro.scaleX=the_bara.xronos.aspro.scaleX-0.001;
					} else {
						flag_tick=0;
						points_to_earn=3;
						createjs.Sound.stop();
						createjs.Sound.play("telos_xronou");
						check_it(null);
						ola_sosta();
		
					}
				}
			}
		}
		function epomeni(e) {
			ask_index++;
			the_apok.visible=false;
			the_mcs.visible=false;
			createjs.Sound.stop();
			display_erotisi();
		}
		function handleFileComplete1(event) {
			var olon = event.result;
			var epikefs = ["aa", "keno", "plires", "lexi", "infos"];
			var templist;
			for (i = 0; i < epikefs.length; i++) {
				templist = olon.getElementsByTagName(epikefs[i]);
				for (j = 0; j < templist.length; j++) {
					oi_erotiseis[i].push(templist[j].childNodes[0].nodeValue);
				}
			}
			console.log(oi_erotiseis);
		}
		function fortose_apokoma(poio_aa){
			var preload = new createjs.LoadQueue();
			preload.addEventListener("fileload", fortothike_apokoma);
			preload.loadFile("img/flag_"+poio_aa+".png");
		};
		function fortothike_apokoma(event) {
			var new_eik=new createjs.Bitmap(event.result);
			if (the_apok.eikona.numChildren>0) {
				the_apok.eikona.removeChildAt(0);
			}
			the_apok.eikona.addChild(new_eik);
			the_apok.eikona.scaleX=0.28;
			the_apok.eikona.scaleY=0.28;
			fortose_eikona(oi_erotiseis[0][quest_numbs[ask_index]]);
			stage.update();
		}	
		function fortose_eikona(poio_aa){
			var preload = new createjs.LoadQueue();
			preload.addEventListener("fileload", fortothike_eikona);
			preload.loadFile("img/flag_"+poio_aa+".jpg");
		};
		function fortothike_eikona(event) {
			var new_eik=new createjs.Bitmap(event.result);
			if (the_apok.eikona_back.numChildren>0) {
				the_apok.eikona_back.removeChildAt(0);
			}
			the_apok.eikona_back.addChild(new_eik);
			the_apok.eikona_back.scaleX=0.41;
			the_apok.eikona_back.scaleY=0.41;
			the_apok.eikona_back.alpha=0;
			the_apok.visible=true;
			the_mcs.visible=true;
			stage.update();
		}	
		function click_mouse_on_damaki(e){
			//console.log("on damaki");
			createjs.Sound.stop();
			old_touched=e.currentTarget.theid;
			e.currentTarget.epilogi.visible=!e.currentTarget.epilogi.visible;
			if (user_painted[parseInt(old_touched / grid_size)][old_touched % grid_size]==0) {
				user_painted[parseInt(old_touched / grid_size)][old_touched % grid_size]=1
			} else {
				user_painted[parseInt(old_touched / grid_size)][old_touched % grid_size]=0
			}
		}
		function kato_mouse(e){
			createjs.Sound.stop();
			dragging = true;
			old_touched=-1;
		}
		function pano_mouse(e){
			dragging = false;
		}
		function move_mouse(e) {
			var gr,st;
			if (dragging==true) {
				var objects= the_mcs.kript.getObjectUnderPoint(e.currentTarget.globalToLocal(e.stageX,e.stageY).x,e.currentTarget.globalToLocal(e.stageX,e.stageY).y,0); 
				if (objects!=null) {
					if (objects.parent.name.substr(0,3)=="dam") {
						if (objects.parent.theid!=old_touched) {
							old_touched=objects.parent.theid;
							gr=parseInt(old_touched / grid_size);
							st=old_touched % grid_size;
							objects.parent.epilogi.visible=!objects.parent.epilogi.visible;
							if (user_painted[parseInt(old_touched / grid_size)][old_touched % grid_size]==0) {
								user_painted[parseInt(old_touched / grid_size)][old_touched % grid_size]=1
							} else {
								user_painted[parseInt(old_touched / grid_size)][old_touched % grid_size]=0
							}
						}
					}			
				}
			}
		}
		function click_mouse(e){
			var objects= the_mcs.kript.getObjectUnderPoint(e.currentTarget.globalToLocal(e.stageX,e.stageY).x,e.currentTarget.globalToLocal(e.stageX,e.stageY).y,0); 
			if (objects!=null) {
				if (objects.parent.name.substr(0,3)=="dam") {
					if (objects.parent.theid!=old_touched) {
						old_touched=objects.parent.theid;
						objects.parent.epilogi.visible=!objects.parent.epilogi.visible;
						if (user_painted[parseInt(old_touched / grid_size)][old_touched % grid_size]==0) {
							user_painted[parseInt(old_touched / grid_size)][old_touched % grid_size]=1
						} else {
							user_painted[parseInt(old_touched / grid_size)][old_touched % grid_size]=0
						}
					}
				}			
			}
			
		}
		function setup_seira(){
			var axrista=[];
			var lexis,dummy;
			for (i=0;i<boxes.length;i++){
				boxes[i].epilogi.visible=false;
				boxes[i].epilogi.gotoAndStop(0);
			}
			user_painted=[];
			grammata_kript=[];
			lexeis_st_gr=[[]];
			for (i=0;i<10;i++) {
				grammata_kript.push([]);
				user_painted.push([]);
				for (j=0;j<10;j++) {
					grammata_kript[i].push(0);
					user_painted[i].push(0);
				}
			}
			lexeis=[];
			oles_oi_lexeis=oi_erotiseis[3][quest_numbs[ask_index]];
			my_patterns_2=[];
			lexeis.push(oi_erotiseis[3][quest_numbs[ask_index]]);
			poses_lexeis=1;
			i=0;
			do {
				if (vres_xoro(i)==true) {
					i++;			
				} else {
					//console.log("epanalipsi");
					i=0;
					grammata_kript=[];
					lexeis_st_gr=[[]];
					for (kk=0;kk<10;kk++) {
						grammata_kript.push([]);
						for (j=0;j<10;j++) {
							grammata_kript[kk].push(0);
						}
					}
				}
			} while (i<poses_lexeis);
			
			for (i=1;i<alfabita_kript.length;i++) {
				if (oles_oi_lexeis.indexOf(alfabita_kript[i])==-1) {
					axrista.push(alfabita_kript[i]);
				}
			}
		//	trace(axrista)
			for (i=0;i<10;i++) {
				for (j=0;j<10;j++) {
					if (grammata_kript[i][j]!=0) {
						boxes[i*10+j].gramma.text=alfabita_kript[grammata_kript[i][j]];
					} else {
						//boxes[i*10+j].gramma.text="-"
						
		//				boxes[i*10+j].gramma.text=alfabita_kript[Math.floor(Math.random()*24)+1]
						boxes[i*10+j].gramma.text=axrista[Math.floor(Math.random()*axrista.length)]
					}
				}
			}
			for (i=0;i<boxes.length;i++) {
				boxes[i].mouseEnabled=true;
			}
			the_mcs.okey.visible=true;
			the_mcs.kript.mouseEnabled=true;
			
			stage.update();	
		}
		
		function vres_xoro(poia){
			var ori_kat=Math.floor(Math.random()*2);
			var fores;
			var stili;
			var seira;
			var xx;
			var flag;
			fores=0;
			if (ori_kat==0) {
				//orizontia
				do {
					fores++;
					if (fores>100) {
						return false;
					}
					flag=0;
					seira=Math.floor(Math.random()*grid_size)+1;
					stili=Math.floor(Math.random()*(grid_size-lexeis[poia].length))+1;
					for (xx=0;xx<lexeis[poia].length;xx++) {
						if (grammata_kript[seira][stili+xx]!=0 && grammata_kript[seira][stili+xx]!=alfabita_kript.indexOf(lexeis[poia].substr(xx,1))) {
							flag=1;
							break;
						}
					}
					if (flag==0) {
						for (xx=0;xx<lexeis[poia].length;xx++) {
							grammata_kript[seira][stili+xx]=alfabita_kript.indexOf(lexeis[poia].substr(xx,1));
							lexeis_st_gr[poia].push([seira,stili+xx]);
						}
						break;
					}
				} while (true);
				return true;
			} else {
				//kateta
				do {
					fores++;
					if (fores>100) {
						return false;
					}
					flag=0;
					stili=Math.floor(Math.random()*grid_size);
					seira=Math.floor(Math.random()*(grid_size-lexeis[poia].length));
					//trace(seira,stili,poia,lexeis[poia],lexeis[poia].length)
					for (xx=0;xx<lexeis[poia].length;xx++) {
						if (grammata_kript[seira+xx][stili]!=0 && grammata_kript[seira+xx][stili]!=alfabita_kript.indexOf(lexeis[poia].substr(xx,1))) {
							flag=1;
							break;
						}
					}
					if (flag==0) {
						for (xx=0;xx<lexeis[poia].length;xx++) {
							grammata_kript[seira+xx][stili]=alfabita_kript.indexOf(lexeis[poia].substr(xx,1));
							lexeis_st_gr[poia].push([seira+xx,stili]);
						}
						break;
					}
				} while (true);
				return true;
			}
		}
		function check_it(e){
			var flag=0;
			var grammata_lexis,vrike_lexi;
			flag=0;
			for (i=0;i<grid_size;i++) {
				for (j=0;j<grid_size;j++) {
					if (grammata_kript[i][j]==0 && user_painted[i][j]==1) {
						flag=1;
						break;
					}
				}
				if (flag==1) {
		//			createjs.Sound.play("latos_mp3");			
		//			sosta=0;
		//			the_drastir_2.batmoi.text=sosta.toString();
					break;
				}
			}
			if (flag==0) {
				vrike_lexi=0;
				grammata_lexis=0;
				for (j=0;j<lexeis_st_gr[0].length;j++) {
					if (user_painted[lexeis_st_gr[0][j][0]][lexeis_st_gr[0][j][1]]==1) {
						grammata_lexis++
					}
					if (grammata_lexis==lexeis_st_gr[0].length) {
						vrike_lexi++;
					}
				}
				switch (vrike_lexi) {
					case 1:
		//				createjs.Sound.play("all_good");
		//				the_drastir_2.batmoi.text=sosta.toString();
						createjs.Sound.stop();
						createjs.Sound.play("bravo");
						ola_sosta();
						break;
				}       
			} else {
				points_to_earn=2;
				createjs.Sound.stop();
				createjs.Sound.play("wrong");
			}
		}
		function ola_sosta(){
			the_mcs.okey.visible=false;
			the_mcs.kript.mouseEnabled=false;
			for (i=0;i<grid_size;i++) {
				for (j=0;j<grid_size;j++) {
					boxes[i*grid_size+j].mouseEnabled=false;
					//boxes[i*grid_size+j].epilogi.visible=false;
					if (grammata_kript[i][j]==0) {
						boxes[i*grid_size+j].gramma.text=""				
					}
				}
			}
			for (j=0;j<lexeis_st_gr[0].length;j++) {
				boxes[lexeis_st_gr[0][j][0]*grid_size+lexeis_st_gr[0][j][1]].epilogi.gotoAndStop(0);
			}
			deixe_sosto();
		}
		function say_intro(e) {
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

	// footer
	this.bara = new lib.footer();
	this.bara.name = "bara";
	this.bara.setTransform(1280,750,1,1,0,0,0,640,30);

	this.timeline.addTween(cjs.Tween.get(this.bara).wait(1));

	// mcs
	this.mc = new lib.mcs();
	this.mc.name = "mc";
	this.mc.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	// apokoma
	this.apok = new lib.apokoma();
	this.apok.name = "apok";
	this.apok.setTransform(640.1,360,1,1,0,0,0,640.1,360);

	this.timeline.addTween(cjs.Tween.get(this.apok).wait(1));

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
p.nominalBounds = new cjs.Rectangle(613,345,693.5,390.1);
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
		{src:"images/background_black.jpg?1617869408151", id:"background_black"},
		{src:"images/simaies_atlas_1.png?1617869408116", id:"simaies_atlas_1"}
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