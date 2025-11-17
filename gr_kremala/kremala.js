(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"kremala_atlas_1", frames: [[1252,1179,114,42],[0,1365,1443,80],[0,0,1683,888],[1082,1179,168,174],[475,1179,605,70],[1252,1223,114,42],[0,1447,974,42],[1445,890,316,287],[1445,1179,316,287],[1685,0,316,287],[1685,289,316,287],[1685,578,316,287],[475,890,316,287],[793,890,316,287],[1111,890,316,287],[0,890,473,473]]}
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



(lib.CachedBmp_45 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(img.CachedBmp_38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2325,186);


(lib.background_black = function() {
	this.initialize(img.background_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2667,1500);


(lib.flame1 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flame2 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.flame3 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flame4 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flame5 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.flame6 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.flame7 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.flame8 = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.niki_head = function() {
	this.initialize(ss["kremala_atlas_1"]);
	this.gotoAndStop(15);
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
	this.answer = new cjs.Text("Τη νύχτα της ηρωικής Εξόδου του Μεσολογγίου συγκεντρώθηκαν στο σπίτι του Χρήστου Καψάλη 400 περίπου γυναικόπαιδα και γέροι. Τη στιγμή που οι Τουρκοαιγύπτιοι είχαν κυκλώσει το σπίτι και ήταν έτοιμοι να εισβάλουν, ο ηρωικός Καψάλης έριξε έναν αναμμένο δαυλό στην πυρίτιδα.", "normal 500 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.answer.name = "answer";
	this.answer.textAlign = "center";
	this.answer.lineHeight = 27;
	this.answer.lineWidth = 610;
	this.answer.parent = this;
	this.answer.setTransform(-58.75,-24.05);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.answer);
	}

	this.timeline.addTween(cjs.Tween.get(this.answer).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EgzuAKhIAA1BMBndAAAIAAVBg");
	this.shape.setTransform(-58.475,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.the_erotisi, new cjs.Rectangle(-389.5,-37.3,662.1,134.6), null);


(lib.the_backgr = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.background_black();
	this.instance.setTransform(0,0,0.4799,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.the_backgr, new cjs.Rectangle(0,0,1280,720), null);


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
	this.keimeno = new cjs.Text("Ανώνυμο γερμανικό εργαστήριο, περ. 1840-50@Δίσκος μεταλλικός επιχρωματισμένος, 48,5 × 63,5 εκ.@\nΣυλλογή Έργων Τέχνης της Βουλής των Ελλήνων, αρ. ευρ. 95", "italic 700 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.keimeno.name = "keimeno";
	this.keimeno.textAlign = "center";
	this.keimeno.lineHeight = 27;
	this.keimeno.lineWidth = 873;
	this.keimeno.parent = this;
	this.keimeno.setTransform(-24.5,-26.6);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.keimeno);
	}

	this.timeline.addTween(cjs.Tween.get(this.keimeno).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sxolia, new cjs.Rectangle(-463.1,-28.6,877.2,58.2), null);


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
	this.instance = new lib.CachedBmp_44();
	this.instance.setTransform(-404.45,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.otitlos, new cjs.Rectangle(-404.4,0,721.5,40), null);


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


(lib.floga = function(mode,startPosition,loop,reversed) {
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
	this.frame_9 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_19 = function() {
		this.gotoAndPlay(10);
	}
	this.frame_29 = function() {
		this.gotoAndPlay(20);
	}
	this.frame_69 = function() {
		this.gotoAndPlay(30);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(40).call(this.frame_69).wait(1));

	// Layer_1
	this.instance = new lib.flame1();

	this.instance_1 = new lib.flame2();

	this.instance_2 = new lib.flame3();

	this.instance_3 = new lib.flame4();

	this.instance_4 = new lib.flame5();

	this.instance_5 = new lib.flame6();

	this.instance_6 = new lib.flame7();

	this.instance_7 = new lib.flame8();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_7}]},20).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316,287);


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
	this.instance = new lib.CachedBmp_38();
	this.instance.setTransform(62.65,11.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_39();
	this.instance_1.setTransform(396.5,47.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ehj/AI/IAAx9MDH/AAAIAAR9g");
	this.shape.setTransform(640,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,115);


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
	this.shape.graphics.f("#FFFFFF").s().p("AiVD6QhkAAAAhkIAAkrQAAhkBkAAIErAAQBkAAAABkIAAErQAABkhkAAg");
	this.shape.setTransform(25,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiVD6QhkAAAAhkIAAkrQAAhkBkAAIErAAQBkAAAABkIAAErQAABkhkAAg");
	this.shape_1.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


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


(lib.b_24 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAVB2IAAi4QAAgKgDgEQgDgFgGAAQgLAAgMAUIAAB1IgxAAIAAh5QAAgZgGgVIAtgGQAFAJACAPQAJgMAKgHQALgGAPAAQATAAAMANQALAOAAAXIAADDg");
	this.shape.setTransform(0.025,3.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVB2IAAi4QAAgKgDgEQgDgFgGAAQgLAAgMAUIAAB1IgxAAIAAh5QAAgZgGgVIAtgGQAFAJACAPQAJgMAKgHQALgGAPAAQATAAAMANQALAOAAAXIAADDg");
	this.shape_1.setTransform(0.025,3.525);

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


(lib.b_23 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAAAzQgEATgKAJQgLAJgTAAQgbAAgPgVQgPgUAAgqQAAgxASgrIAsAAQgHAagEAVQgDAWAAAVQAAAaAEALQAEALAJAAQAIAAADgFQAEgFAAgPIAAg4IArgGIAAA+QAAAOAEAGQADAFAIAAQAIAAAFgKQAEgLAAgcQAAgUgEgWQgDgVgHgaIAsAAQASArAAAxQAAAqgPAUQgQAVgaAAQgmAAgHglg");
	this.shape.setTransform(0.025,0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAzQgEATgKAJQgLAJgTAAQgbAAgPgVQgPgUAAgqQAAgxASgrIAsAAQgHAagEAVQgDAWAAAVQAAAaAEALQAEALAJAAQAIAAADgFQAEgFAAgPIAAg4IArgGIAAA+QAAAOAEAGQADAFAIAAQAIAAAFgKQAEgLAAgcQAAgUgEgWQgDgVgHgaIAsAAQASArAAAxQAAAqgPAUQgQAVgaAAQgmAAgHglg");
	this.shape_1.setTransform(0.025,0.475);

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


(lib.b_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgzBJQgRgQAAgdIAAhzIAxAAIAAB0QAAAMAEAFQAEAFAIAAQAXAAAAgzQAAgkgIgzIAwAAIAHAuQACAVAAAWQAAAegLATQgLAUgRAIQgRAJgTAAQgcAAgRgPg");
	this.shape.setTransform(0.025,0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzBJQgRgQAAgdIAAhzIAxAAIAAB0QAAAMAEAFQAEAFAIAAQAXAAAAgzQAAgkgIgzIAwAAIAHAuQACAVAAAWQAAAegLATQgLAUgRAIQgRAJgTAAQgcAAgRgPg");
	this.shape_1.setTransform(0.025,0.475);

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


(lib.b_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXA2QgmgCgTgSQgUgSAAgbIAAhsIAwAAIAABpQAAAOAGAJQAHAIAQADIAAiLIAtAAIAACKQAQgDAIgMQAHgLAAgXQAAgkgHg1IAvAAQAIAsAAAuQAAAmgUAVQgVAVgmADIAAA9IgtAGg");
	this.shape.setTransform(0.1,3.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA2QgmgCgTgSQgUgSAAgbIAAhsIAwAAIAABpQAAAOAGAJQAHAIAQADIAAiLIAtAAIAACKQAQgDAIgMQAHgLAAgXQAAgkgHg1IAvAAQAIAsAAAuQAAAmgUAVQgVAVgmADIAAA9IgtAGg");
	this.shape_1.setTransform(0.1,3.75);

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


(lib.b_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAfIgbBcIgxgGIA1h7QgRgpgMgWQgLgWgOgQIAvgPQALASAGAQQAHARAIAhIAUhTIAyAFIguBuIA0B4IgwAJg");
	this.shape.setTransform(-0.125,3.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAfIgbBcIgxgGIA1h7QgRgpgMgWQgLgWgOgQIAvgPQALASAGAQQAHARAIAhIAUhTIAyAFIguBuIA0B4IgwAJg");
	this.shape_1.setTransform(-0.125,3.525);

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


(lib.b_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXA5QhMgHAAhKQAAgZAEgXQAGgWAHgXIAvAAQgJAZgDAVQgFAVAAAWQABAaAGALQAHAMAPADIAAhNQAAghAQgSQAPgSAcAAQAgAAAQAVQAQAVAAAvQAAArgTAWQgSAVgpAEIAAA9IgtAFgAAahSQgEAGAAASIAABSQANgCAGgGQAGgFADgLQACgLABgWQgBgXgBgMQgCgMgDgEQgEgEgGAAQgHAAgDAGg");
	this.shape.setTransform(-0.05,3.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA5QhMgHAAhKQAAgZAEgXQAGgWAHgXIAvAAQgJAZgDAVQgFAVAAAWQABAaAGALQAHAMAPADIAAhNQAAghAQgSQAPgSAcAAQAgAAAQAVQAQAVAAAvQAAArgTAWQgSAVgpAEIAAA9IgtAFgAAahSQgEAGAAASIAABSQANgCAGgGQAGgFADgLQACgLABgWQgBgXgBgMQgCgMgDgEQgEgEgGAAQgHAAgDAGg");
	this.shape_1.setTransform(-0.05,3.475);

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


(lib.b_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBGQgMgMAAgYIAAhUIgNAAIgPABIgLADIgJgiQAIgDAKgCQAJgCASAAIBgAAIAAAlIgsAAIAABPQAAAJACAGQADAFAGADIgNAkQgYgFgLgNg");
	this.shape.setTransform(-0.15,0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBGQgMgMAAgYIAAhUIgNAAIgPABIgLADIgJgiQAIgDAKgCQAJgCASAAIBgAAIAAAlIgsAAIAABPQAAAJACAGQADAFAGADIgNAkQgYgFgLgNg");
	this.shape_1.setTransform(-0.15,0.475);

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


(lib.b_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag8BCQgVgYAAgrQAAgoAVgYQAVgXAoAAQAfAAAyADIAAAkIgggCQALAHAFAOQAFANAAARQAAAbgKAVQgIATgSALQgRALgWAAQglAAgTgXgAgNgwQgJAEgEAMQgEAKAAAVQAAAdAHANQAFAMAOgBQAMABAGgMQAGgNAAgcQAAgngKgOQgPAAgIAFg");
	this.shape.setTransform(0.35,0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BCQgVgYAAgrQAAgoAVgYQAVgXAoAAQAfAAAyADIAAAkIgggCQALAHAFAOQAFANAAARQAAAbgKAVQgIATgSALQgRALgWAAQglAAgTgXgAgNgwQgJAEgEAMQgEAKAAAVQAAAdAHANQAFAMAOgBQAMABAGgMQAGgNAAgcQAAgngKgOQgPAAgIAFg");
	this.shape_1.setTransform(0.35,0.35);

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


(lib.b_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIglQAAhVBIAAQAjAAATAWQATAXAAAtQAAAZgHAUQgIAVgOAMQgNAMgTAAQgWAAgNgTIAABPIgxAFgAgShKQgFAMAAAdIAAAnQAIAPAOAAQAYAAAAg1QAAgfgGgMQgGgLgLAAQgNAAgFAMg");
	this.shape.setTransform(0.125,3.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIglQAAhVBIAAQAjAAATAWQATAXAAAtQAAAZgHAUQgIAVgOAMQgNAMgTAAQgWAAgNgTIAABPIgxAFgAgShKQgFAMAAAdIAAAnQAIAPAOAAQAYAAAAg1QAAgfgGgMQgGgLgLAAQgNAAgFAMg");
	this.shape_1.setTransform(0.125,3.475);

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


(lib.b_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAgBGQgMgMAAgYIAAhUIgdAAIAACEIgxAAIAAiEIgKABIgJADIgJgiQAJgDAJgCQAKgCASAAIB+AAIAAAlIgRAAIAABPQAAAJADAFQADAFAHAEIgPAkQgXgFgMgNg");
	this.shape.setTransform(-0.35,0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBGQgMgMAAgYIAAhUIgdAAIAACEIgxAAIAAiEIgKABIgJADIgJgiQAJgDAJgCQAKgCASAAIB+AAIAAAlIgRAAIAABPQAAAJADAFQADAFAHAEIgPAkQgXgFgMgNg");
	this.shape_1.setTransform(-0.35,0.475);

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


(lib.b_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3BDQgVgXAAgsQAAgqAVgYQAUgXAjAAQAkAAAUAXQAVAXAAArQAAAqgVAYQgUAZgkAAQgjgBgUgXgAgSgpQgHANABAcQgBAdAHANQAGAMAMAAQANAAAHgNQAFgMAAgdQAAgcgFgNQgHgMgNAAQgMAAgGAMg");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3BDQgVgXAAgsQAAgqAVgYQAUgXAjAAQAkAAAUAXQAVAXAAArQAAAqgVAYQgUAZgkAAQgjgBgUgXgAgSgpQgHANABAcQgBAdAHANQAGAMAMAAQANAAAHgNQAFgMAAgdQAAgcgFgNQgHgMgNAAQgMAAgGAMg");
	this.shape_1.setTransform(0,0.2);

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


(lib.b_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGB/QAKgHAGgGQAFgFAAgIQAAgGgCgDQgCgEgFgDQgFgEgKgGQgUgJgKgIQgLgIgHgNQgHgOAAgUQAAgxAzgJQgngLAAgkQAAgQAIgMQAIgMAOgHQAPgHARAAQARAAANAFQANAEAMAKIgVAaIgOgIQgFgCgIAAQgKAAgFAHQgFAGAAAMQAAANAFAHQAHAHAMAAIAPAAIgEAhIgNAAQgQAAgHAJQgJAKAAARQAAAMAEAIQAEAHAHAGQAIAGAPAIQAVALAJAKQAKAKAAASQAAATgNAPQgNAOgcANg");
	this.shape.setTransform(0.625,0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGB/QAKgHAGgGQAFgFAAgIQAAgGgCgDQgCgEgFgDQgFgEgKgGQgUgJgKgIQgLgIgHgNQgHgOAAgUQAAgxAzgJQgngLAAgkQAAgQAIgMQAIgMAOgHQAPgHARAAQARAAANAFQANAEAMAKIgVAaIgOgIQgFgCgIAAQgKAAgFAHQgFAGAAAMQAAANAFAHQAHAHAMAAIAPAAIgEAhIgNAAQgQAAgHAJQgJAKAAARQAAAMAEAIQAEAHAHAGQAIAGAPAIQAVALAJAKQAKAKAAASQAAATgNAPQgNAOgcANg");
	this.shape_1.setTransform(0.625,0.125);

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


(lib.b_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBYQgLg/gMgnQgMgogOgRIAsgQQAMAPAIAjQAKAiAEAzIAdiGIAwAKIgxCkg");
	this.shape.setTransform(-0.15,-0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBYQgLg/gMgnQgMgogOgRIAsgQQAMAPAIAjQAKAiAEAzIAdiGIAwAKIgxCkg");
	this.shape_1.setTransform(-0.15,-0.075);

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


(lib.b_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhFh3IAxAAIAAB3QAAAQANAAQAMAAAJgSIAAh1IAxAAIAABvQAAAgAHAaIgtAFIgEgMIgCgOQgOAXgQAAQgIAAgFgDQgGgDgFgHQAGALADALQADAKAAAQIAAAcIguAFg");
	this.shape.setTransform(0.225,3.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFh3IAxAAIAAB3QAAAQANAAQAMAAAJgSIAAh1IAxAAIAABvQAAAgAHAaIgtAFIgEgMIgCgOQgOAXgQAAQgIAAgFgDQgGgDgFgHQAGALADALQADAKAAAQIAAAcIguAFg");
	this.shape_1.setTransform(0.225,3.725);

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


(lib.b_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALBGQgIgcgGg3IgbCJIgwgLIAuijIARAAQgGgTgKgIQgJgIgWgEIAGgiQAbAFARAIQAQAIALARQALAQAGAeQAJAsAHAbQAHAaAHARQAHASAKAPIgvAQQgNgZgIgdg");
	this.shape.setTransform(0.375,-3.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALBGQgIgcgGg3IgbCJIgwgLIAuijIARAAQgGgTgKgIQgJgIgWgEIAGgiQAbAFARAIQAQAIALARQALAQAGAeQAJAsAHAbQAHAaAHARQAHASAKAPIgvAQQgNgZgIgdg");
	this.shape_1.setTransform(0.375,-3.15);

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


(lib.b_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAiBSQgKgGgIgRIgjg/IAxhVIAqARIgpBDIAfAuIAHAIIAHAEIgRAlQgPgCgKgGgAhFBVIAAh6QAAgZgGgVIAtgGQAFAKADAOQACANAAAYIAABxg");
	this.shape.setTransform(0.675,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBSQgKgGgIgRIgjg/IAxhVIAqARIgpBDIAfAuIAHAIIAHAEIgRAlQgPgCgKgGgAhFBVIAAh6QAAgZgGgVIAtgGQAFAKADAOQACANAAAYIAABxg");
	this.shape_1.setTransform(0.675,0.25);

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


(lib.b_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSBGQgMgNAAgXIAAh5IAwAAIAAB0QAAAJADAFQADAFAHAEIgPAkQgWgFgMgNg");
	this.shape.setTransform(0.475,0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBGQgMgNAAgXIAAh5IAwAAIAAB0QAAAJADAFQADAFAHAEIgPAkQgWgFgMgNg");
	this.shape_1.setTransform(0.475,0.475);

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


(lib.b_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2BeQgSgeAAhAQAAh7BIAAQAkAAATAeQASAeAAA/QAAA/gSAfQgTAegkAAQgjAAgTgegAgWA8QADAQAGAHQAFAFAIAAQAJAAAFgGQAGgGADgQQADgRABgeIg1AAQAAAeAEARgAgNhSQgHAHgCAQQgDAPgCAeIA2AAQgBgegDgPQgDgQgFgHQgGgFgJAAQgIAAgFAFg");
	this.shape.setTransform(0,-3.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BeQgSgeAAhAQAAh7BIAAQAkAAATAeQASAeAAA/QAAA/gSAfQgTAegkAAQgjAAgTgegAgWA8QADAQAGAHQAFAFAIAAQAJAAAFgGQAGgGADgQQADgRABgeIg1AAQAAAeAEARgAgNhSQgHAHgCAQQgDAPgCAeIA2AAQgBgegDgPQgDgQgFgHQgGgFgJAAQgIAAgFAFg");
	this.shape_1.setTransform(0,-3.15);

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


(lib.b_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMB9QAMgHAEgGQAFgGABgIQgBgIgEgEQgFgFgNgGQgSgJgKgJQgLgJgEgNQgFgNAAgTQAAgfAVgiQAVgiAogbQgHACgLABQgKACgLAAIgoAAIAGgjIBsAAIAGAaQgqAngQAeQgPAfAAAbQABAMADAIQACAIAHAGQAGAGANAGQAVAKAIAKQAJAKAAARQAAAUgNAOQgNAPgcAMg");
	this.shape.setTransform(0.65,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMB9QAMgHAEgGQAFgGABgIQgBgIgEgEQgFgFgNgGQgSgJgKgJQgLgJgEgNQgFgNAAgTQAAgfAVgiQAVgiAogbQgHACgLABQgKACgLAAIgoAAIAGgjIBsAAIAGAaQgqAngQAeQgPAfAAAbQABAMADAIQACAIAHAGQAGAGANAGQAVAKAIAKQAJAKAAARQAAAUgNAOQgNAPgcAMg");
	this.shape_1.setTransform(0.65,0.375);

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


(lib.b_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguBMQgTgNAAgZQAAgSALgLQALgKAWgEQgmgHAAgeQAAgWASgNQARgMAbAAQAigBAYAUIgTAZQgJgFgHgCQgIgDgIAAQgKAAgEAFQgFAEAAAKQAAAIAFAFQAFAFAKABIATAAIgFAeIgQAAQgMAAgFAGQgGAFAAAKQAAAWAXAAQAJAAAIgDQAJgEAKgGIAVAbQgMAJgQAGQgRAFgTABQgdgBgTgOg");
	this.shape.setTransform(0.425,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBMQgTgNAAgZQAAgSALgLQALgKAWgEQgmgHAAgeQAAgWASgNQARgMAbAAQAigBAYAUIgTAZQgJgFgHgCQgIgDgIAAQgKAAgEAFQgFAEAAAKQAAAIAFAFQAFAFAKABIATAAIgFAeIgQAAQgMAAgFAGQgGAFAAAKQAAAWAXAAQAJAAAIgDQAJgEAKgGIAVAbQgMAJgQAGQgRAFgTABQgdgBgTgOg");
	this.shape_1.setTransform(0.425,0.2);

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


(lib.b_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2BnQgUgVAAgpQAAgwAsgWQgRgKgGgKQgGgKAAgPQAAgVAQgOQAQgOAfAAQARAAAPAFQAOAGAKAIIgVAaIgPgIQgIgDgIAAQgKAAgFAEQgFAFAAAHQAAAGACADQACAEAGAEIARAJQAWAKANAMQANALAGAPQAGAPAAAYQAAAngUAXQgUAWgjAAQgiAAgUgVgAgUAGQgEANAAAVQAAAbAGAKQAGAKAMAAQANAAAGgKQAGgKAAgbQAAgQgDgKQgCgJgGgHQgHgHgMgHQgLAKgEAMg");
	this.shape.setTransform(-0.025,-3.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BnQgUgVAAgpQAAgwAsgWQgRgKgGgKQgGgKAAgPQAAgVAQgOQAQgOAfAAQARAAAPAFQAOAGAKAIIgVAaIgPgIQgIgDgIAAQgKAAgFAEQgFAFAAAHQAAAGACADQACAEAGAEIARAJQAWAKANAMQANALAGAPQAGAPAAAYQAAAngUAXQgUAWgjAAQgiAAgUgVgAgUAGQgEANAAAVQAAAbAGAKQAGAKAMAAQANAAAGgKQAGgKAAgbQAAgQgDgKQgCgJgGgHQgHgHgMgHQgLAKgEAMg");
	this.shape_1.setTransform(-0.025,-3.15);

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


(lib.b_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBVQAAgRAHgTQgLg2gQgpQgPgogOgVIAsgPQALAPAKAfQAKAfAEAvIAbh8IAxAKIg1CbIgGAYQgCAKAAALQAAAPACAQIglAEQgKgTAAgTg");
	this.shape.setTransform(-0.15,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBVQAAgRAHgTQgLg2gQgpQgPgogOgVIAsgPQALAPAKAfQAKAfAEAvIAbh8IAxAKIg1CbIgGAYQgCAKAAALQAAAPACAQIglAEQgKgTAAgTg");
	this.shape_1.setTransform(-0.15,3.5);

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


(lib.b_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhMhYQAAghAUgRQATgSAfAAQAfAAARARQATAQgBAcQABArgpAJQAXADARAOQAQAOAAAgQAAAVgIAQQgJARgOAIQgPAJgSAAQgWAAgSgNIAABIIgwAHgAgXhyQgFAIAAASIAACGQALAHAPAAQANAAAIgIQAIgKAAgTQAAgoghAAIgKAAIADghIAGAAQAIAAAGgJQAFgIABgRQAAgQgGgHQgFgHgJAAQgKAAgGAHg");
	this.shape.setTransform(0.45,0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMhYQAAghAUgRQATgSAfAAQAfAAARARQATAQgBAcQABArgpAJQAXADARAOQAQAOAAAgQAAAVgIAQQgJARgOAIQgPAJgSAAQgWAAgSgNIAABIIgwAHgAgXhyQgFAIAAASIAACGQALAHAPAAQANAAAIgIQAIgKAAgTQAAgoghAAIgKAAIADghIAGAAQAIAAAGgJQAFgIABgRQAAgQgGgHQgFgHgJAAQgKAAgGAHg");
	this.shape_1.setTransform(0.45,0.125);

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


(lib.b_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeA8IgCgLQgIAUgKALQgLALgSAAQgcgBgPgWQgRgXABgrQgBgbAJgVQAHgVAOgLQAPgLAUAAQAkAAAIArIAGgmIAoAAIgUBWIAHAjQACAHAEAEQAEAEAGACIgPAlQgegFgEgagAgdACQAAAcAGAMQAFAMAKAAQAIAAAHgMQAGgMAFgfQgFgegGgLQgFgLgJAAQgWAAAAA3g");
	this.shape.setTransform(0.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeA8IgCgLQgIAUgKALQgLALgSAAQgcgBgPgWQgRgXABgrQgBgbAJgVQAHgVAOgLQAPgLAUAAQAkAAAIArIAGgmIAoAAIgUBWIAHAjQACAHAEAEQAEAEAGACIgPAlQgegFgEgagAgdACQAAAcAGAMQAFAMAKAAQAIAAAHgMQAGgMAFgfQgFgegGgLQgFgLgJAAQgWAAAAA3g");
	this.shape_1.setTransform(0.1,0.2);

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
	this.instance = new lib.CachedBmp_45();
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
	this.instance = new lib.CachedBmp_41();
	this.instance.setTransform(-151.15,104.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// text
	this.instance_1 = new lib.CachedBmp_42();
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
	this.instance = new lib.CachedBmp_40();
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
	this.eikona.setTransform(88,267);

	this.timeline.addTween(cjs.Tween.get(this.eikona).wait(1));

	// eikona
	this.eikona_back = new lib.eikona();
	this.eikona_back.name = "eikona_back";
	this.eikona_back.setTransform(213,2);

	this.timeline.addTween(cjs.Tween.get(this.eikona_back).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apokoma, new cjs.Rectangle(0,0,0,0), null);


(lib.lexi_kremalas = function(mode,startPosition,loop,reversed) {
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
	this.let11 = new lib.damaki_1();
	this.let11.name = "let11";
	this.let11.setTransform(530,28.5,1,1,0,0,0,25,28.5);

	this.let10 = new lib.damaki_1();
	this.let10.name = "let10";
	this.let10.setTransform(479.5,28.5,1,1,0,0,0,25,28.5);

	this.let9 = new lib.damaki_1();
	this.let9.name = "let9";
	this.let9.setTransform(429,28.5,1,1,0,0,0,25,28.5);

	this.let8 = new lib.damaki_1();
	this.let8.name = "let8";
	this.let8.setTransform(378.5,28.5,1,1,0,0,0,25,28.5);

	this.let7 = new lib.damaki_1();
	this.let7.name = "let7";
	this.let7.setTransform(328,28.5,1,1,0,0,0,25,28.5);

	this.let6 = new lib.damaki_1();
	this.let6.name = "let6";
	this.let6.setTransform(277.5,28.5,1,1,0,0,0,25,28.5);

	this.let5 = new lib.damaki_1();
	this.let5.name = "let5";
	this.let5.setTransform(227,28.5,1,1,0,0,0,25,28.5);

	this.let4 = new lib.damaki_1();
	this.let4.name = "let4";
	this.let4.setTransform(176.5,28.5,1,1,0,0,0,25,28.5);

	this.let3 = new lib.damaki_1();
	this.let3.name = "let3";
	this.let3.setTransform(126,28.5,1,1,0,0,0,25,28.5);

	this.let2 = new lib.damaki_1();
	this.let2.name = "let2";
	this.let2.setTransform(75.5,28.5,1,1,0,0,0,25,28.5);

	this.let1 = new lib.damaki_1();
	this.let1.name = "let1";
	this.let1.setTransform(25,28.5,1,1,0,0,0,25,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.let1},{t:this.let2},{t:this.let3},{t:this.let4},{t:this.let5},{t:this.let6},{t:this.let7},{t:this.let8},{t:this.let9},{t:this.let10},{t:this.let11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lexi_kremalas, new cjs.Rectangle(0,0,555,57), null);


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

	this.instance = new lib.CachedBmp_43();
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
	this.to_sxolio.setTransform(24.5,-28.6);

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

}).prototype = getMCSymbolPrototype(lib.footer, new cjs.Rectangle(-640,-60,1280,61), null);


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

	// floga
	this.kremasmenos = new lib.floga();
	this.kremasmenos.name = "kremasmenos";
	this.kremasmenos.setTransform(1186.8,259.45,0.6,0.6001,0,0,0,160.7,146.5);
	this.kremasmenos.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.kremasmenos).wait(1));

	// entoli
	this.entoli = new lib.entoli();
	this.entoli.name = "entoli";

	this.timeline.addTween(cjs.Tween.get(this.entoli).wait(1));

	// kriptolexo
	this.ww = new lib.lexi_kremalas();
	this.ww.name = "ww";
	this.ww.setTransform(704.2,394.6);

	this.gr24 = new lib.b_23();
	this.gr24.name = "gr24";
	this.gr24.setTransform(1226,613.3);
	new cjs.ButtonHelper(this.gr24, 0, 1, 2, false, new lib.b_23(), 3);

	this.gr23 = new lib.b_21();
	this.gr23.name = "gr23";
	this.gr23.setTransform(1155.95,613.3);
	new cjs.ButtonHelper(this.gr23, 0, 1, 2, false, new lib.b_21(), 3);

	this.gr22 = new lib.b_20();
	this.gr22.name = "gr22";
	this.gr22.setTransform(1086.2,613.3);
	new cjs.ButtonHelper(this.gr22, 0, 1, 2, false, new lib.b_20(), 3);

	this.gr21 = new lib.b_19();
	this.gr21.name = "gr21";
	this.gr21.setTransform(1016.45,613.3);
	new cjs.ButtonHelper(this.gr21, 0, 1, 2, false, new lib.b_19(), 3);

	this.gr20 = new lib.b_22();
	this.gr20.name = "gr20";
	this.gr20.setTransform(946.7,613.3);
	new cjs.ButtonHelper(this.gr20, 0, 1, 2, false, new lib.b_22(), 3);

	this.gr19 = new lib.b_18();
	this.gr19.name = "gr19";
	this.gr19.setTransform(876.95,613.3);
	new cjs.ButtonHelper(this.gr19, 0, 1, 2, false, new lib.b_18(), 3);

	this.gr18 = new lib.b_17();
	this.gr18.name = "gr18";
	this.gr18.setTransform(807.2,613.3);
	new cjs.ButtonHelper(this.gr18, 0, 1, 2, false, new lib.b_17(), 3);

	this.gr17 = new lib.b_16();
	this.gr17.name = "gr17";
	this.gr17.setTransform(737.45,613.3);
	new cjs.ButtonHelper(this.gr17, 0, 1, 2, false, new lib.b_16(), 3);

	this.gr16 = new lib.b_15();
	this.gr16.name = "gr16";
	this.gr16.setTransform(1226,553.3);
	new cjs.ButtonHelper(this.gr16, 0, 1, 2, false, new lib.b_15(), 3);

	this.gr15 = new lib.b_14();
	this.gr15.name = "gr15";
	this.gr15.setTransform(1155.95,553.3);
	new cjs.ButtonHelper(this.gr15, 0, 1, 2, false, new lib.b_14(), 3);

	this.gr14 = new lib.b_13();
	this.gr14.name = "gr14";
	this.gr14.setTransform(1086.2,553.3);
	new cjs.ButtonHelper(this.gr14, 0, 1, 2, false, new lib.b_13(), 3);

	this.gr13 = new lib.b_12();
	this.gr13.name = "gr13";
	this.gr13.setTransform(1016.45,553.3);
	new cjs.ButtonHelper(this.gr13, 0, 1, 2, false, new lib.b_12(), 3);

	this.gr12 = new lib.b_11();
	this.gr12.name = "gr12";
	this.gr12.setTransform(946.7,553.3);
	new cjs.ButtonHelper(this.gr12, 0, 1, 2, false, new lib.b_11(), 3);

	this.gr11 = new lib.b_10();
	this.gr11.name = "gr11";
	this.gr11.setTransform(876.95,553.3);
	new cjs.ButtonHelper(this.gr11, 0, 1, 2, false, new lib.b_10(), 3);

	this.gr10 = new lib.b_9();
	this.gr10.name = "gr10";
	this.gr10.setTransform(807.2,553.3);
	new cjs.ButtonHelper(this.gr10, 0, 1, 2, false, new lib.b_9(), 3);

	this.gr9 = new lib.b_8();
	this.gr9.name = "gr9";
	this.gr9.setTransform(737.45,553.3);
	new cjs.ButtonHelper(this.gr9, 0, 1, 2, false, new lib.b_8(), 3);

	this.gr8 = new lib.b_7();
	this.gr8.name = "gr8";
	this.gr8.setTransform(1226,493.3);
	new cjs.ButtonHelper(this.gr8, 0, 1, 2, false, new lib.b_7(), 3);

	this.gr7 = new lib.b_24();
	this.gr7.name = "gr7";
	this.gr7.setTransform(1155.95,493.3);
	new cjs.ButtonHelper(this.gr7, 0, 1, 2, false, new lib.b_24(), 3);

	this.gr6 = new lib.b_6();
	this.gr6.name = "gr6";
	this.gr6.setTransform(1086.2,493.3);
	new cjs.ButtonHelper(this.gr6, 0, 1, 2, false, new lib.b_6(), 3);

	this.gr5 = new lib.b_5();
	this.gr5.name = "gr5";
	this.gr5.setTransform(1016.45,493.3);
	new cjs.ButtonHelper(this.gr5, 0, 1, 2, false, new lib.b_5(), 3);

	this.gr4 = new lib.b_4();
	this.gr4.name = "gr4";
	this.gr4.setTransform(946.7,493.3);
	new cjs.ButtonHelper(this.gr4, 0, 1, 2, false, new lib.b_4(), 3);

	this.gr3 = new lib.b_3();
	this.gr3.name = "gr3";
	this.gr3.setTransform(876.95,493.3);
	new cjs.ButtonHelper(this.gr3, 0, 1, 2, false, new lib.b_3(), 3);

	this.gr2 = new lib.b_2();
	this.gr2.name = "gr2";
	this.gr2.setTransform(807.2,493.3);
	new cjs.ButtonHelper(this.gr2, 0, 1, 2, false, new lib.b_2(), 3);

	this.gr1 = new lib.b_1();
	this.gr1.name = "gr1";
	this.gr1.setTransform(737.45,493.3);
	new cjs.ButtonHelper(this.gr1, 0, 1, 2, false, new lib.b_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gr1},{t:this.gr2},{t:this.gr3},{t:this.gr4},{t:this.gr5},{t:this.gr6},{t:this.gr7},{t:this.gr8},{t:this.gr9},{t:this.gr10},{t:this.gr11},{t:this.gr12},{t:this.gr13},{t:this.gr14},{t:this.gr15},{t:this.gr16},{t:this.gr17},{t:this.gr18},{t:this.gr19},{t:this.gr20},{t:this.gr21},{t:this.gr22},{t:this.gr23},{t:this.gr24},{t:this.ww}]}).wait(1));

	// apantiseis
	this.erotisis = new lib.the_erotisi();
	this.erotisis.name = "erotisis";
	this.erotisis.setTransform(406,163.3);

	this.timeline.addTween(cjs.Tween.get(this.erotisis).wait(1));

	// backgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcs, new cjs.Rectangle(0,0,1280,720), null);


// stage content:
(lib.kremala = function(mode,startPosition,loop,reversed) {
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
		var kremasma;
		var oi_erotiseis=[[],[],[],[],[]];
		var the_apok=this.apok;
		var the_bara=this.bara;
		var the_intro=this.intro;
		var the_mcs=this.mc;
		var the_backgr=this.backgr;
		var the_levels=this.intro.levels;
		var toggles=[the_levels.inv1,the_levels.inv2];
		var xx,epipedo,ask_index,flag_tick,points_to_earn;
		var quest_numbs=[];
		var tis_baras=[the_bara.home,the_bara.back,the_bara.epom,the_bara.xronos, the_bara.epidosi,the_bara.to_sxolio,the_bara.zoom_in,the_bara.zoom_out,the_bara.closeit,the_bara.otitlos];
		var ta_damakia=[the_bara.epidosi.d1,the_bara.epidosi.d2,the_bara.epidosi.d3,the_bara.epidosi.d4,the_bara.epidosi.d5];
		var alfabita=["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω"];
		var alfabita_kript=["-","Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω"];
		var gr_buts=[the_mcs.gr1,the_mcs.gr2,the_mcs.gr3,the_mcs.gr4,the_mcs.gr5,the_mcs.gr6,
						   the_mcs.gr7,the_mcs.gr8,the_mcs.gr9,the_mcs.gr10,the_mcs.gr11,the_mcs.gr12,
						   the_mcs.gr13,the_mcs.gr14,the_mcs.gr15,the_mcs.gr16,the_mcs.gr17,the_mcs.gr18,
						   the_mcs.gr19,the_mcs.gr20,the_mcs.gr21,the_mcs.gr22,the_mcs.gr23,the_mcs.gr24];
		var grammata=[the_mcs.ww.let1,the_mcs.ww.let2,the_mcs.ww.let3,the_mcs.ww.let4,the_mcs.ww.let5,
							the_mcs.ww.let6,the_mcs.ww.let7,the_mcs.ww.let8,the_mcs.ww.let9,the_mcs.ww.let10,
							the_mcs.ww.let11];
		
		var	o_xronos,bima_xronou;
		var paper_displayed=false;
		function start_up() {
			var preload1 = new createjs.LoadQueue();
			createjs.Sound.registerSound("sounds/krem1.mp3", "intro");
			createjs.Sound.registerSound("sounds/krem2.mp3", "odigies");
			createjs.Sound.registerSound("sounds/krem3.mp3", "bravo");
			createjs.Sound.registerSound("sounds/krem4.mp3", "wrong");
			createjs.Sound.registerSound("sounds/krem_c23.mp3", "wrong_letter");
			createjs.Sound.registerSound("sounds/krem5.mp3", "telos_xronou");
			createjs.Touch.enable(stage);
			the_bara.home.addEventListener("click",gotomenou);
		
			the_backgr.mouseEnabled=true;
			the_backgr.mouseChildren=false;
			the_backgr.alpha=0;
			the_backgr.addEventListener("click",tipota);
			
			the_intro.niki_talks.mouseChildren=false;
			the_intro.niki_talks.cursor="pointer";
			the_intro.niki_talks.addEventListener("click",say_intro);
		
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
			for (i=0;i<24;i++) {
				gr_buts[i].theid=i;
				gr_buts[i].cursor="pointer";
				gr_buts[i].addEventListener("click",epilogi_gramma);
				gr_buts[i].alpha=1;
				gr_buts[i].mouseChildren=false;
			}
			
			
			createjs.Ticker.addEventListener("tick", tiki_tiki);
			
			preload1.addEventListener("fileload", handleFileComplete1);
			preload1.loadFile("xml/kremala.xml");
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
		//	the_apok.eikona_back.scale=0.41;
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
			ask_index=0;
			the_intro.mouseEnabled=false;
			the_intro.visible=false;
			createjs.Sound.stop();
			createjs.Sound.play("odigies");
			before_display_erotisi();
		}
		function before_display_erotisi() {
			createjs.Tween.get(the_backgr).to({alpha: 1}, 300, createjs.Ease.none()).call(telos_before);
		}
		function telos_before(e) {
			display_erotisi();
		}
		
		function display_erotisi() {
			points_to_earn=1;
			display_kremala();
			the_mcs.erotisis.answer.text=oi_erotiseis[1][quest_numbs[ask_index]];
			the_mcs.erotisis.answer.y=-20+(112-the_mcs.erotisis.answer.getMeasuredHeight())/2;
			the_bara.to_sxolio.keimeno.text=oi_erotiseis[4][quest_numbs[ask_index]].replace(/@/g, "\n");
			the_mcs.visible=true;
			the_apok.visible=true;
			the_mcs.mouseEnabled=true;
			the_mcs.entoli.gotoAndStop(0);
			the_apok.mouseEnabled=false;
			fortose_apokoma(oi_erotiseis[0][quest_numbs[ask_index]]);
			the_bara.xronos.aspro.scaleX=1;
		//	o_xronos=0;
		//	flag_tick=1;
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
						deixe_sosto();
						createjs.Sound.stop();
						createjs.Sound.play("telos_xronou");
						the_mcs.kremasmenos.gotoAndPlay(30);
						for (i=0;i<24;i++) {
							gr_buts[i].mouseEnabled=false;
							gr_buts[i].cursor="default";
						}
						for (i=0;i<grammata_lexis.length;i++) {
							if (grammata_lexis[i]!="@") {
								grammata[i].gramma.text=grammata_lexis[i];
								grammata[i].epilogi.gotoAndStop(1);
							}
						}
		
					}
				}
			}
		}
		function epomeni(e) {
			ask_index++;
			createjs.Sound.stop();
			before_display_erotisi();
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
			preload.loadFile("img/kr"+poio_aa+".png");
		};
		function fortothike_apokoma(event) {
			var new_eik=new createjs.Bitmap(event.result);
			if (the_apok.eikona.numChildren>0) {
				the_apok.eikona.removeChildAt(0);
			}
			the_apok.eikona.addChild(new_eik);
		//	the_apok.eikona.scaleX=0.6;
		//	the_apok.eikona.scaleY=0.6;
			the_apok.eikona.scaleX=0.24;
			the_apok.eikona.scaleY=0.24;
			fortose_eikona(oi_erotiseis[0][quest_numbs[ask_index]]);
			stage.update();
		}	
		function fortose_eikona(poio_aa){
			var preload = new createjs.LoadQueue();
			preload.addEventListener("fileload", fortothike_eikona);
			preload.loadFile("img/kr"+poio_aa+".jpg");
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
			createjs.Tween.get(the_backgr).to({alpha: 0}, 300, createjs.Ease.none()).call(telos_back_anim);
		
		//	the_apok.visible=true;
		//	the_mcs.visible=true;
			stage.update();
		}	
		function display_kremala() {
			var tix;
			var lexis,proto_gramma;
			var dummy;
			kremasma=0;
			grammata_lexis=[];
			for (i=0;i<24;i++) {
				gr_buts[i].alpha=1;
				gr_buts[i].mouseEnabled=true;
			}
			for (i=0;i<11;i++) {
				grammata[i].gramma.text=""
				grammata[i].epilogi.gotoAndStop(0);
				grammata[i].visible=false;
			}
			the_mcs.kremasmenos.gotoAndPlay(0);
		
			lexis=oi_erotiseis[3][quest_numbs[ask_index]];
			for (i=0;i<lexis.length;i++) {
				grammata_lexis.push(lexis.substr(i,1));
				grammata[i].visible=true;
			}
			
			if (epipedo==0) {
				proto_gramma=grammata_lexis[0];
				for (i=0;i<lexis.length;i++) {
					if (grammata_lexis[i]==proto_gramma) {
						grammata[i].gramma.text=proto_gramma;
						grammata_lexis[i]="@";
					}
				}
				gr_buts[alfabita.indexOf(proto_gramma)].alpha=0.3;
				gr_buts[alfabita.indexOf(proto_gramma)].mouseEnabled=false;
			}
			the_mcs.ww.x=700+(11-lexis.length)*22;
			stage.update();
		}
		function epilogi_gramma(e) {
			var flag=0;
			var keim;
			createjs.Sound.stop();
			e.currentTarget.alpha=0.3;
			e.currentTarget.mouseEnabled=false;
			e.currentTarget.cursor="default";
			for (i=0;i<grammata_lexis.length;i++) {
				if (grammata_lexis[i]==alfabita[e.currentTarget.theid]) {
					grammata[i].gramma.text=alfabita[e.currentTarget.theid];
					grammata_lexis[i]="@";
					flag++;
				}
			}
			if (flag==0) {
				kremasma++;
				points_to_earn=2;
				the_mcs.kremasmenos.gotoAndPlay(kremasma*10);
				if (kremasma==3) {
					createjs.Sound.stop();
					createjs.Sound.play("wrong");
					points_to_earn=3;
					flag_tick=0;
					for (i=0;i<24;i++) {
						gr_buts[i].mouseEnabled=false;
						gr_buts[i].cursor="default";
					}
					for (i=0;i<grammata_lexis.length;i++) {
						if (grammata_lexis[i]!="@") {
							grammata[i].gramma.text=grammata_lexis[i];
							grammata[i].epilogi.gotoAndStop(1);
						}
					}
					deixe_sosto();
				} else {
					createjs.Sound.stop();
					createjs.Sound.play("wrong_letter");
				}
			} else {
				flag=0;
		//		createjs.Sound.play("sosto_mp3");
				for (i=0;i<grammata_lexis.length;i++) {
					if (grammata_lexis[i]!="@") {
						flag=1;
						break;
					}
				}
				if (flag==0) {
					flag_tick=0;
					deixe_sosto();
					createjs.Sound.stop();
					createjs.Sound.play("bravo");
					for (i=0;i<24;i++) {
						gr_buts[i].mouseEnabled=false;
						gr_buts[i].cursor="default";
					}
				}
			}
		}
		function telos_back_anim(e) {
		//	the_backgr.visible=false;
			o_xronos=0;
			flag_tick=1;
		}
		function tipota(e) {
			
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

	// background_copy
	this.backgr = new lib.the_backgr();
	this.backgr.name = "backgr";
	this.backgr.setTransform(640,359.9,1,1,0,0,0,640,359.9);

	this.timeline.addTween(cjs.Tween.get(this.backgr).wait(1));

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
		{src:"images/CachedBmp_38.png?1617869033127", id:"CachedBmp_38"},
		{src:"images/background_black.jpg?1617869033127", id:"background_black"},
		{src:"images/kremala_atlas_1.png?1617869033069", id:"kremala_atlas_1"}
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