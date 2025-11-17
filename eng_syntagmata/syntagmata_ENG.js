(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"syntagmata_ENG_atlas_1", frames: [[1654,176,114,42],[0,1001,933,80],[0,0,1652,524],[1654,0,154,174],[475,569,600,70],[1654,220,114,42],[475,641,943,41],[475,526,1268,41],[0,526,473,473]]}
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



(lib.CachedBmp_79 = function() {
	this.initialize(ss["syntagmata_ENG_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["syntagmata_ENG_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["syntagmata_ENG_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["syntagmata_ENG_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["syntagmata_ENG_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["syntagmata_ENG_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["syntagmata_ENG_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["syntagmata_ENG_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.background_black = function() {
	this.initialize(img.background_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2667,1500);


(lib.niki_head = function() {
	this.initialize(ss["syntagmata_ENG_atlas_1"]);
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// answer
	this.answer = new cjs.Text("τα δύο σώματα, Βουλευτικό και Εκτελεστικό, συμμετέχουν ισότιμα στην διαδικασία παρασκευής και ψήφισης των νόμων.", "normal 500 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.answer.name = "answer";
	this.answer.lineHeight = 27;
	this.answer.lineWidth = 518;
	this.answer.parent = this;
	this.answer.setTransform(12,-26.5);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.answer);
	}

	this.timeline.addTween(cjs.Tween.get(this.answer).wait(2));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.098)").s().p("EguzAGxIAAthMBdnAAAIAANhg");
	this.shape.setTransform(299.575,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("EguzAGxIAAthMBdnAAAIAANhg");
	this.shape_1.setTransform(299.575,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-43.3,599.2,86.6);


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
	this.answer = new cjs.Text("Με βάση τη σελίδα τίτλου, το Προσωρινό Πολίτευμα της Ελλάδος, με συντάκτη τον Α. Πολυζωΐδη, από τα συνταγματικά κείμενα ποιων χωρών έχει δεχθεί επιρροές;", "normal 500 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.answer.name = "answer";
	this.answer.textAlign = "center";
	this.answer.lineHeight = 27;
	this.answer.lineWidth = 724;
	this.answer.parent = this;
	this.answer.setTransform(0,-24);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.answer);
	}

	this.timeline.addTween(cjs.Tween.get(this.answer).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eg83AF1IAArpMB5vAAAIAALpg");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.the_erotisi, new cjs.Rectangle(-389.5,-37.3,779.1,74.6), null);


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
	this.instance = new lib.CachedBmp_78();
	this.instance.setTransform(-149.75,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.otitlos, new cjs.Rectangle(-149.7,0,466.5,40), null);


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
	this.instance = new lib.CachedBmp_72();
	this.instance.setTransform(323.15,11.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_73();
	this.instance_1.setTransform(405.25,11.2,0.5,0.5);

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
	this.instance = new lib.CachedBmp_79();
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

	// apantiseis
	this.mc1 = new lib.themc();
	this.mc1.name = "mc1";
	this.mc1.setTransform(720.15,281.9);

	this.erotisis = new lib.the_erotisi();
	this.erotisis.name = "erotisis";
	this.erotisis.setTransform(640,92.55);

	this.mc3 = new lib.themc();
	this.mc3.name = "mc3";
	this.mc3.setTransform(720.15,495.25);

	this.mc2 = new lib.themc();
	this.mc2.name = "mc2";
	this.mc2.setTransform(720.15,388.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc2},{t:this.mc3},{t:this.erotisis},{t:this.mc1}]}).wait(1));

	// backgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcs, new cjs.Rectangle(0,0,1319.3,720), null);


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
	this.instance = new lib.CachedBmp_75();
	this.instance.setTransform(-149.9,104.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// text
	this.instance_1 = new lib.CachedBmp_76();
	this.instance_1.setTransform(-15.45,5.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// toggle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiZGqQhAhAAAhaIAAofQAAhaBAhAQBAhABZAAQBaAABABAQBABAAABaIAAIfQAABahABAQhABAhaAAQhZAAhAhAgAhil2QgpApAAA6QAAA5ApApQApAqA5AAQA6AAApgqQApgpAAg5QAAg6gpgpQgqgqg5AAQg5AAgpAqg");
	this.shape.setTransform(-46.525,49);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({skewX:180},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.9,0,300,139.7);


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
	this.instance = new lib.CachedBmp_74();
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
	this.eikona.setTransform(30,141);

	this.timeline.addTween(cjs.Tween.get(this.eikona).wait(1));

	// eikona
	this.eikona_back = new lib.eikona();
	this.eikona_back.name = "eikona_back";
	this.eikona_back.setTransform(213,2);

	this.timeline.addTween(cjs.Tween.get(this.eikona_back).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apokoma, new cjs.Rectangle(0,0,0,0), null);


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

	this.instance = new lib.CachedBmp_77();
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

}).prototype = getMCSymbolPrototype(lib.footer, new cjs.Rectangle(-640,-60,1280,60), null);


// stage content:
(lib.syntagmata_ENG = function(mode,startPosition,loop,reversed) {
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
		var oi_erotiseis=[[],[],[],[],[],[],[]];
		var the_apok=this.apok;
		var the_bara=this.bara;
		var the_intro=this.intro;
		var the_mcs=this.mc;
		var oi_apant=[the_mcs.mc1,the_mcs.mc2,the_mcs.mc3];
		var the_levels=this.intro.levels;
		var toggles=[the_levels.inv1,the_levels.inv2];
		var xx,epipedo,ask_index,flag_tick,points_to_earn;
		var quest_numbs=[];
		var tis_baras=[the_bara.home,the_bara.back,the_bara.epom,the_bara.xronos, the_bara.epidosi,the_bara.zoom_in,the_bara.zoom_out,the_bara.closeit,the_bara.otitlos];
		var ta_damakia=[the_bara.epidosi.d1,the_bara.epidosi.d2,the_bara.epidosi.d3,the_bara.epidosi.d4,the_bara.epidosi.d5];
		var	o_xronos,bima_xronou;
		var paper_displayed=false;
		function start_up() {
			var preload1 = new createjs.LoadQueue();
			createjs.Sound.registerSound("sounds/eng_synt1.mp3", "intro");
			createjs.Sound.registerSound("sounds/eng_synt2.mp3", "odigies");
			createjs.Sound.registerSound("sounds/eng_synt_bravo_1.mp3", "bravo_1");
			createjs.Sound.registerSound("sounds/eng_synt_bravo_2.mp3", "bravo_2");
			createjs.Sound.registerSound("sounds/eng_synt_wrong_1.mp3", "wrong_1");
			createjs.Sound.registerSound("sounds/eng_synt_wrong_2.mp3", "wrong_2");
			createjs.Sound.registerSound("sounds/eng_synt_telos_xronou.mp3", "telos_xronou");
			createjs.Touch.enable(stage);
			the_intro.niki_talks.mouseChildren=false;
			the_intro.niki_talks.cursor="pointer";
			the_intro.niki_talks.addEventListener("click",say_intro);
			the_bara.home.addEventListener("click",gotomenou);
			flag_tick=0;
			bima_xronou=10;
			epipedo=0; //0=easy 1=difficult
			set_the_bara([1,0,0,0,0,0,0,0,1]);
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
			preload1.loadFile("xml/eng_syntagmata.xml");
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
		//	the_apok.eikona.x=0;
		//	the_apok.eikona.y=0;
		//	the_apok.eikona_back.x=0;
		//	the_apok.eikona_back.y=0;
		//	createjs.Tween.get(the_apok.eikona).to({alpha: 1,scale:0.615}, 300, createjs.Ease.none());
		//	createjs.Tween.get(the_apok.eikona_back).to({alpha: 1,scale:0.615}, 300, createjs.Ease.none());
			createjs.Tween.get(the_apok.eikona_back).to({alpha: 1}, 300, createjs.Ease.none());
			
			set_the_bara([0,0,0,0,0,1,0,1,0]);
			the_mcs.visible=false;
			the_apok.cursor="all-scroll";
		}
		function hide_paper(e) {
		//	createjs.Tween.get(the_apok.eikona).to({alpha:0}, 300, createjs.Ease.none());
			createjs.Tween.get(the_apok.eikona_back).to({alpha:0}, 300, createjs.Ease.none()).call(paper3);
		}
		function paper3(e) {
			the_apok.scale=1;
			the_apok.x=the_apok.thex;
			the_apok.y=the_apok.they;
		//	the_apok.eikona.x=the_apok.eikona.thex;
		//	the_apok.eikona.y=the_apok.eikona.they;
		//	the_apok.eikona_back.x=the_apok.eikona_back.thex;
		//	the_apok.eikona_back.y=the_apok.eikona_back.they;
		//	the_apok.eikona_back.scale=0.6;
		//	the_apok.eikona.scale=0.6;
			createjs.Tween.get(the_apok.eikona).to({alpha: 1}, 300, createjs.Ease.none());
			if (ask_index==4) {
				set_the_bara([1,1,0,1,1,0,0,0,0]);
			} else {
				set_the_bara([1,1,1,1,1,0,0,0,0]);	
			}
			paper_displayed=false;
			the_mcs.visible=true;
			the_apok.cursor="pointer";
		}
		function zooms_in(e) {
			createjs.Tween.get(the_apok).to({scale: 1.8}, 300, createjs.Ease.none());
			set_the_bara([0,0,0,0,0,0,1,1,0]);	
		}
		function zooms_out(e) {
			set_the_bara([0,0,0,0,0,1,0,1,0]);
			createjs.Tween.get(the_apok).to({scale: 1}, 300, createjs.Ease.none());
			the_apok.x=the_apok.thex;
			the_apok.y=the_apok.they;
		}
		function go_back(e) {
			flag_tick=0;
			set_the_bara([1,0,0,0,0,0,0,0,1]);
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
			display_erotisi();
		}
		function display_erotisi() {
			var alla=[-1,-1,-1];
			var tix;
			var tososto=Math.floor(Math.random()*3);
			points_to_earn=1;
			fortose_apokoma(oi_erotiseis[0][quest_numbs[ask_index]]);
			for (xx=0;xx<oi_apant.length;xx++) {
				if (xx==tososto) {
					alla[xx]=0;
					oi_apant[xx].soston=1;
				} else {
					do {
						tix=Math.floor(Math.random()*2)+1;
					} while (alla.indexOf(tix)>-1)
					alla[xx]=tix;
					oi_apant[xx].soston=0;
				}
				oi_apant[xx].gotoAndStop(0);
				oi_apant[xx].mouseEnabled=true;
				oi_apant[xx].x=oi_apant[xx].thex;
				oi_apant[xx].y=oi_apant[xx].they;
				oi_apant[xx].answer.text=oi_erotiseis[4+alla[xx]][quest_numbs[ask_index]];
				oi_apant[xx].answer.y=-27+(65-oi_apant[xx].answer.getMeasuredHeight())/2;
			}
			the_mcs.erotisis.answer.text=oi_erotiseis[3][quest_numbs[ask_index]];
			the_mcs.erotisis.answer.y=-26+(58-the_mcs.erotisis.answer.getMeasuredHeight())/2;
		//	the_bara.to_sxolio.keimeno.text=oi_erotiseis[3][quest_numbs[ask_index]]+"\n"+oi_erotiseis[4][quest_numbs[ask_index]];
			the_mcs.mouseEnabled=true;
			the_mcs.entoli.gotoAndStop(0);
			the_apok.mouseEnabled=false;
			the_bara.xronos.aspro.scaleX=1;
			o_xronos=0;
			flag_tick=1;
			set_the_bara([1,1,0,1,1,0,0,0,0]);
		}
		function epilexe(e) {
			console.log(e.currentTarget.soston);
			if (e.currentTarget.soston==1) {
				deixe_sosto();
				if (points_to_earn==1) {
					createjs.Sound.stop();
					createjs.Sound.play("bravo_1");
				} else {
					createjs.Sound.stop();
					createjs.Sound.play("bravo_2");
				}
			
			} else {
				createjs.Tween.get(e.currentTarget).to({x: 1700}, 300, createjs.Ease.none());
				points_to_earn=points_to_earn+1;
				if (points_to_earn==2) {
					createjs.Sound.stop();
					createjs.Sound.play("wrong_1");
				} else {
					createjs.Sound.stop();
					createjs.Sound.play("wrong_2");
					deixe_sosto();
				}
			}
			console.log(e.currentTarget.x);
		}
		function deixe_sosto() {
			the_mcs.entoli.gotoAndStop(1);
			the_apok.mouseEnabled=true;
			ta_damakia[ask_index].gotoAndStop(points_to_earn);
			flag_tick=0;
			for (xx=0;xx<oi_apant.length;xx++) {
				if (oi_apant[xx].soston==1) {
					oi_apant[xx].gotoAndStop(1);
					createjs.Tween.get(oi_apant[xx]).to({y: oi_apant[1].y}, 300, createjs.Ease.none());
				} else {
					oi_apant[xx].gotoAndStop(0);
					createjs.Tween.get(oi_apant[xx]).to({x: 1700}, 300, createjs.Ease.none());
				}
				oi_apant[xx].mouseEnabled=false;
			}		
			if (ask_index==4) {
				set_the_bara([1,1,0,1,1,0,0,0,0]);			
			} else {
				set_the_bara([1,1,1,1,1,0,0,0,0]);	
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
				o_xronos = o_xronos % 40;
				if (o_xronos==0) {
					if (the_bara.xronos.aspro.scaleX>0) {
						the_bara.xronos.aspro.scaleX=the_bara.xronos.aspro.scaleX-0.001;
					} else {
						flag_tick=0;
						points_to_earn=3;
						createjs.Sound.stop();
						createjs.Sound.play("telos_xronou");
						deixe_sosto();
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
			var epikefs = ["aa", "the_x", "the_y", "erotisi", "sosti", "latos1", "latos2"];
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
			preload.loadFile("img/synt_"+poio_aa+".png");
		};
		function fortothike_apokoma(event) {
			var new_eik=new createjs.Bitmap(event.result);
			if (the_apok.eikona.numChildren>0) {
				the_apok.eikona.removeChildAt(0);
			}
			the_apok.eikona.addChild(new_eik);
			the_apok.eikona.scaleX=0.32;
			the_apok.eikona.scaleY=0.32;
		//	the_apok.eikona.x=oi_erotiseis[1][quest_numbs[ask_index]];	
		//	the_apok.eikona.y=oi_erotiseis[2][quest_numbs[ask_index]];	
		//	the_apok.eikona.thex=oi_erotiseis[1][quest_numbs[ask_index]];	
		//	the_apok.eikona.they=oi_erotiseis[2][quest_numbs[ask_index]];	
			fortose_eikona(oi_erotiseis[0][quest_numbs[ask_index]]);
			stage.update();
		}	
		function fortose_eikona(poio_aa){
			var preload = new createjs.LoadQueue();
			preload.addEventListener("fileload", fortothike_eikona);
			preload.loadFile("img/synt_"+poio_aa+".jpg");
		};
		function fortothike_eikona(event) {
			var new_eik=new createjs.Bitmap(event.result);
			if (the_apok.eikona_back.numChildren>0) {
				the_apok.eikona_back.removeChildAt(0);
			}
			the_apok.eikona_back.addChild(new_eik);
			the_apok.eikona_back.scaleX=0.41;
			the_apok.eikona_back.scaleY=0.41;
		//	the_apok.eikona_back.x=oi_erotiseis[1][quest_numbs[ask_index]];	
		//	the_apok.eikona_back.y=oi_erotiseis[2][quest_numbs[ask_index]];	
		//	the_apok.eikona_back.thex=oi_erotiseis[1][quest_numbs[ask_index]];	
		//	the_apok.eikona_back.they=oi_erotiseis[2][quest_numbs[ask_index]];	
			the_apok.eikona_back.alpha=0;
			the_apok.visible=true;
			the_mcs.visible=true;
			stage.update();
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
p.nominalBounds = new cjs.Rectangle(613,345,706.3,390.1);
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
		{src:"images/background_black.jpg?1618212500286", id:"background_black"},
		{src:"images/syntagmata_ENG_atlas_1.png?1618212500253", id:"syntagmata_ENG_atlas_1"}
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