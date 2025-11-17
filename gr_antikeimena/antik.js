(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"antik_atlas_1", frames: [[1047,992,114,42],[1047,838,634,80],[0,0,1650,836],[1654,920,168,174],[1047,920,605,70],[572,1313,1318,42],[0,1520,1562,42],[0,838,570,680],[572,838,473,473]]}
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



(lib.CachedBmp_16 = function() {
	this.initialize(ss["antik_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["antik_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["antik_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["antik_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["antik_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["antik_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["antik_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.background_black = function() {
	this.initialize(img.background_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2667,1500);


(lib.im_07 = function() {
	this.initialize(ss["antik_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.niki_head = function() {
	this.initialize(ss["antik_atlas_1"]);
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
	this.keimeno = new cjs.Text("Ανώνυμο γερμανικό εργαστήριο, περ. 1840-50@ Δίσκος μεταλλικός επιχρωματισμένος, 48,5 × 63,5 εκ.@\nΣυλλογή Έργων Τέχνης της Βουλής των Ελλήνων, αρ. ευρ. 95", "italic 700 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.keimeno.name = "keimeno";
	this.keimeno.textAlign = "center";
	this.keimeno.lineHeight = 27;
	this.keimeno.lineWidth = 1032;
	this.keimeno.parent = this;
	this.keimeno.setTransform(518.15,-11);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.keimeno);
	}

	this.timeline.addTween(cjs.Tween.get(this.keimeno).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sxolia, new cjs.Rectangle(0,-13,1036.4,58.2), null);


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
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.otitlos, new cjs.Rectangle(0,0,317,40), null);


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
	this.shape.graphics.f("rgba(255,255,255,0.02)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kapaki, new cjs.Rectangle(0,0,1280,720), null);


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


(lib.front_card = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.im_07();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.front_card, new cjs.Rectangle(0,0,570,680), null);


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
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(249.15,11.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(310.65,11.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ehj/ADIIAAmPMDH/AAAIAAGPg");
	this.shape.setTransform(640,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,40);


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


(lib.back_card = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_16();
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


(lib.karta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// front_card
	this.front_card = new lib.front_card();
	this.front_card.name = "front_card";
	this.front_card.setTransform(285,340,1,1,0,0,0,285,340);

	this.timeline.addTween(cjs.Tween.get(this.front_card).wait(1));

	// back_card
	this.back_card = new lib.back_card();
	this.back_card.name = "back_card";
	this.back_card.setTransform(285,340,1,1,0,0,0,285,340);

	this.timeline.addTween(cjs.Tween.get(this.back_card).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.karta, new cjs.Rectangle(0,0,570,680), null);


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
	this.to_sxolio.setTransform(-104.5,-32,1,1,0,0,0,413.7,11);

	this.timeline.addTween(cjs.Tween.get(this.to_sxolio).wait(1));

	// xronos_epidosi
	this.xronos = new lib.xronos();
	this.xronos.name = "xronos";
	this.xronos.setTransform(480.1,-19,1,1,0,0,0,150,10.5);

	this.timeline.addTween(cjs.Tween.get(this.xronos).wait(1));

	// buts
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.back},{t:this.closeit}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.footer, new cjs.Rectangle(-640,-60,1280,62.2), null);


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
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-151.15,104.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// text
	this.instance_1 = new lib.CachedBmp_13();
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

	// kapaki
	this.kapaki = new lib.kapaki();
	this.kapaki.name = "kapaki";
	this.kapaki.setTransform(640.2,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.kapaki).wait(1));

	// entoli
	this.entoli = new lib.entoli();
	this.entoli.name = "entoli";

	this.timeline.addTween(cjs.Tween.get(this.entoli).wait(1));

	// apantiseis
	this.c12 = new lib.karta();
	this.c12.name = "c12";
	this.c12.setTransform(1172.85,471.95,0.35,0.35,0,0,0,285.2,340);

	this.c11 = new lib.karta();
	this.c11.name = "c11";
	this.c11.setTransform(959.8,471.95,0.35,0.35,0,0,0,285,340);

	this.c10 = new lib.karta();
	this.c10.name = "c10";
	this.c10.setTransform(746.75,471.95,0.35,0.35,0,0,0,285.2,340);

	this.c9 = new lib.karta();
	this.c9.name = "c9";
	this.c9.setTransform(533.7,471.95,0.35,0.35,0,0,0,285.2,340);

	this.c8 = new lib.karta();
	this.c8.name = "c8";
	this.c8.setTransform(320.65,471.95,0.35,0.35,0,0,0,285,340);

	this.c7 = new lib.karta();
	this.c7.name = "c7";
	this.c7.setTransform(107.6,471.95,0.35,0.35,0,0,0,285.2,340);

	this.c6 = new lib.karta();
	this.c6.name = "c6";
	this.c6.setTransform(1172.85,211.95,0.35,0.35,0,0,0,285.2,339.9);

	this.c5 = new lib.karta();
	this.c5.name = "c5";
	this.c5.setTransform(959.8,211.95,0.35,0.35,0,0,0,285,339.9);

	this.c4 = new lib.karta();
	this.c4.name = "c4";
	this.c4.setTransform(746.75,211.95,0.35,0.35,0,0,0,285.2,339.9);

	this.c3 = new lib.karta();
	this.c3.name = "c3";
	this.c3.setTransform(533.7,211.95,0.35,0.35,0,0,0,285.2,339.9);

	this.c2 = new lib.karta();
	this.c2.name = "c2";
	this.c2.setTransform(320.65,211.95,0.35,0.35,0,0,0,285,339.9);

	this.c1 = new lib.karta();
	this.c1.name = "c1";
	this.c1.setTransform(107.6,211.95,0.35,0.35,0,0,0,285.2,339.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c1},{t:this.c2},{t:this.c3},{t:this.c4},{t:this.c5},{t:this.c6},{t:this.c7},{t:this.c8},{t:this.c9},{t:this.c10},{t:this.c11},{t:this.c12}]}).wait(1));

	// backgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640.2,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcs, new cjs.Rectangle(0,0,1280.2,720), null);


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

	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(381,31,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.niki_talks}]}).wait(1));

	// backgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.intro, new cjs.Rectangle(0,0,1280,720), null);


// stage content:
(lib.antik = function(mode,startPosition,loop,reversed) {
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
		var which_card_to_animate,open_cards,skor;
		var anoiktes_kartes=[];
		var cards_x,cards_y;
		var cards_images=[];
		var oi_erotiseis=[[],[],[]];
		var the_bara=this.bara;
		var the_intro=this.intro;
		var the_mcs=this.mc;
		var the_levels=this.intro.levels;
		var toggles=[the_levels.inv1,the_levels.inv2];
		var xx,epipedo,ask_index,flag_tick;
		var quest_numbs=[];
		var the_cards=[the_mcs.c1,the_mcs.c2,the_mcs.c3,the_mcs.c4,the_mcs.c5,the_mcs.c6,the_mcs.c7,the_mcs.c8,the_mcs.c9,the_mcs.c10,the_mcs.c11,the_mcs.c12];
		var tis_baras=[the_bara.home,the_bara.back,the_bara.xronos,the_bara.to_sxolio,the_bara.closeit,the_bara.otitlos];
		var	o_xronos,bima_xronou;
		var paper_displayed=false;
		function start_up() {
			var preload1 = new createjs.LoadQueue();
			createjs.Sound.registerSound("sounds/antik1.mp3", "intro");
			createjs.Sound.registerSound("sounds/antik2.mp3", "odigies");
			createjs.Sound.registerSound("sounds/antik3.mp3", "oles");
			createjs.Sound.registerSound("sounds/antik4.mp3", "telos_xronou");
			createjs.Sound.registerSound("sounds/ant_c14.mp3", "first_pair");
			createjs.Sound.registerSound("sounds/ant_c15.mp3", "other_pair");
			createjs.Sound.registerSound("sounds/ant_c16.mp3", "no_pair");
			the_bara.home.addEventListener("click",gotomenou);
			createjs.Touch.enable(stage);
			the_intro.niki_talks.mouseChildren=false;
			the_intro.niki_talks.cursor="pointer";
			the_intro.niki_talks.addEventListener("click",say_intro);
			
			flag_tick=0;
			bima_xronou=20;
			epipedo=0; //0=easy 1=difficult
			set_the_bara([1,0,0,0,0,1]);
			the_intro.visible=true;
			the_mcs.visible=false;
			the_mcs.mouseEnabled=false;
			the_intro.start_it.addEventListener("click",start_the_game);
			the_mcs.kapaki.addEventListener("click",tipota);
			the_bara.back.addEventListener("click",go_back);
			the_bara.closeit.addEventListener("click",hide_sxolio);
			cards_x=[];
			cards_y=[];
			for (xx=0;xx<the_cards.length;xx++) {
				the_cards[xx].mouseChildren=false;
				the_cards[xx].cursor="pointer";
				the_cards[xx].theid=xx;
				the_cards[xx].thex=the_cards[xx].x;
				the_cards[xx].they=the_cards[xx].y;
				cards_x.push(the_cards[xx].x);
				cards_y.push(the_cards[xx].y);
				the_cards[xx].addEventListener("click",open_card);
			}
			console.log(cards_x);
			console.log(cards_y);
			
			for (xx=0;xx<2;xx++) {
				toggles[xx].mouseChildren=false;
				toggles[xx].cursor="pointer";
				toggles[xx].theid=xx;
				toggles[xx].addEventListener("click",epilogi_epipedou);
			}
			createjs.Ticker.addEventListener("tick", tiki_tiki);
			
			preload1.addEventListener("fileload", handleFileComplete1);
			preload1.loadFile("xml/antik.xml");
		}
		function hide_sxolio(e) {
			for (xx=0;xx<the_cards.length;xx++) {
				if (the_cards[xx].scale>0.6) {
					createjs.Tween.get(the_cards[xx]).to({scale:0.35, x:the_cards[xx].newx, y:the_cards[xx].newy}, 200, createjs.Ease.none())
				} else {
					createjs.Tween.get(the_cards[xx]).to({alpha:1}, 500, createjs.Ease.none())
				}
			}
			the_mcs.kapaki.visible=false;
			the_mcs.kapaki.mouseEnabled=false;
			the_mcs.entoli.visible=true;
			set_the_bara([1,1,1,0,0,0]);
		}
		function open_card(e) {
			var temp_sxolio;
			createjs.Sound.stop();
			if (e.currentTarget.canopen==false) {
				the_mcs.kapaki.visible=true;
				the_mcs.kapaki.mouseEnabled=true;
				open_cards=open_cards+1;
				anoiktes_kartes.push(e.currentTarget.theid);
				which_card_to_animate=e.currentTarget.theid;
				createjs.Tween.get(the_cards[which_card_to_animate]).to({scaleX:0}, 300, createjs.Ease.none()).call(open_anim_2)
			} else {
				if (e.currentTarget.scale<0.6) {
					the_mcs.entoli.visible=false;
					the_mcs.kapaki.visible=true;
					the_mcs.kapaki.mouseEnabled=true;
					temp_sxolio=oi_erotiseis[2][e.currentTarget.tosxolio];
					temp_sxolio=temp_sxolio.replace(/@/g, "\n");
					the_bara.to_sxolio.keimeno.text=temp_sxolio;
					set_the_bara([0,0,0,1,1,0]);
					e.currentTarget.newy=e.currentTarget.y;
					e.currentTarget.newx=e.currentTarget.x;
					for (xx=0;xx<the_cards.length;xx++) {
						if (the_cards[xx].theid==e.currentTarget.theid) {
							createjs.Tween.get(e.currentTarget).to({scale:1.3, x:640, y:340}, 500, createjs.Ease.none())
						} else {
							createjs.Tween.get(the_cards[xx]).to({alpha:0}, 200, createjs.Ease.none())
						}
					}
				}
			}
		
		}
		function open_anim_2(e) {
			createjs.Tween.get(the_cards[which_card_to_animate].front_card).to({alpha:0}, 100, createjs.Ease.none()).call(open_anim_3)
		}
		function open_anim_3(e) {
			createjs.Tween.get(the_cards[which_card_to_animate]).to({scaleX:0.35}, 300, createjs.Ease.none()).call(telos_open_anim);
		}
		function telos_open_anim(e) {
			if (open_cards==2) {
				if (the_cards[anoiktes_kartes[0]].soston==the_cards[anoiktes_kartes[1]].soston) {
					the_cards[anoiktes_kartes[0]].mouseEnabled=false;
					the_cards[anoiktes_kartes[1]].mouseEnabled=false;
					open_cards=0;
					anoiktes_kartes=[]
					the_mcs.kapaki.visible=false;
					the_mcs.kapaki.mouseEnabled=false;
					skor=skor+1;
					if (skor==6) {
						flag_tick=0;
						createjs.Sound.stop();
						createjs.Sound.play("oles");
						display_sosto();
					} else {
						if (skor==1) {
							createjs.Sound.stop();
							createjs.Sound.play("first_pair");
						} else {
							createjs.Sound.stop();
							createjs.Sound.play("other_pair");
						}
					}
				} else {
					createjs.Sound.stop();
					createjs.Sound.play("no_pair");
					createjs.Tween.get(the_cards[anoiktes_kartes[0]]).wait(1000).to({scaleX:0}, 300, createjs.Ease.none())
					createjs.Tween.get(the_cards[anoiktes_kartes[1]]).wait(1000).to({scaleX:0}, 300, createjs.Ease.none()).call(close_anim_2);
				}
			} else {
				the_mcs.kapaki.visible=false;
				the_mcs.kapaki.mouseEnabled=false;
			}
		}
		function close_anim_2(e) {
			createjs.Tween.get(the_cards[anoiktes_kartes[0]].front_card).to({alpha:1}, 100, createjs.Ease.none())
			createjs.Tween.get(the_cards[anoiktes_kartes[1]].front_card).to({alpha:1}, 100, createjs.Ease.none()).call(close_anim_3)
		}
		function close_anim_3(e) {
			createjs.Tween.get(the_cards[anoiktes_kartes[0]]).to({scaleX:0.35}, 300, createjs.Ease.none());
			createjs.Tween.get(the_cards[anoiktes_kartes[1]]).to({scaleX:0.35}, 300, createjs.Ease.none()).call(telos_close_anim);
		}
		function telos_close_anim(e) {
			open_cards=0;
			anoiktes_kartes=[]
			the_mcs.kapaki.visible=false;
			the_mcs.kapaki.mouseEnabled=false;
		}
		function display_sosto() {
			flag_tick=0;
			createjs.Tween.removeAllTweens();
			the_mcs.entoli.gotoAndStop(1);
			for (xx=0;xx<the_cards.length;xx++) {
				the_cards[xx].front_card.alpha=0;
				the_cards[xx].scaleX=0.35;
				if (the_cards[xx].pou>=100) {
					the_cards[xx].canopen=false;
					the_cards[xx].mouseEnabled=false;
					createjs.Tween.get(the_cards[xx]).to({x:cards_x[the_cards[xx].pou-94], y:cards_y[the_cards[xx].pou-94]}, 500, createjs.Ease.none());
				} else {
					the_cards[xx].canopen=true;
					the_cards[xx].mouseEnabled=true;
					createjs.Tween.get(the_cards[xx]).to({x:cards_x[the_cards[xx].pou], y:cards_y[the_cards[xx].pou]}, 500, createjs.Ease.none());
				}
			}
			the_mcs.kapaki.visible=false;
			the_mcs.kapaki.mouseEnabled=false;
		}
		function go_back(e) {
			flag_tick=0;
			set_the_bara([1,0,0,0,0,1]);
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
			createjs.Sound.stop();
			for (xx=0;xx<6;xx++) {
				do {
					tix=Math.floor(Math.random()*oi_erotiseis[0].length)
				} while (quest_numbs.indexOf(tix)>-1)
				quest_numbs.push(tix);
			}
			for (xx=0;xx<the_cards.length;xx++) {
				the_cards[xx].canopen=false;
				the_cards[xx].mouseEnabled=true;
				the_cards[xx].front_card.alpha=1;
				the_cards[xx].x=the_cards[xx].thex;
				the_cards[xx].y=the_cards[xx].they;
			}
			display_erotisi();
		}
		function display_erotisi() {
			cards_images=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
			for (xx=0;xx<6;xx++) {
				for (yy=0;yy<2;yy++) {
					do {
						tix=Math.floor(Math.random()*cards_images.length)
					} while (cards_images[tix]>-1)
					if (yy==0) {
						cards_images[tix]=xx;
						the_cards[tix].pou=xx;
					} else {
						cards_images[tix]=xx+100;
						the_cards[tix].pou=xx+100;
					}
					the_cards[tix].soston=xx;
					the_cards[tix].canopen=false;
				}
			}
			console.log(cards_images)
			for (xx=0;xx<cards_images.length;xx++) {
				if (cards_images[xx]>=100) {
					fortose_eikona(oi_erotiseis[0][quest_numbs[cards_images[xx]-100]]+"a",xx)
				} else {
					the_cards[xx].tosxolio=quest_numbs[cards_images[xx]];
					fortose_eikona(oi_erotiseis[0][quest_numbs[cards_images[xx]]],xx)
				}
			}
			skor=0;
			open_cards=0;
			anoiktes_kartes=[];
			the_mcs.kapaki.visible=false;
			the_mcs.kapaki.mouseEnabled=false;
			the_intro.mouseEnabled=false;
			the_intro.visible=false;
			the_mcs.visible=true;
			the_mcs.mouseEnabled=true;
			the_mcs.entoli.gotoAndStop(0);
			the_bara.xronos.aspro.scaleX=1;
			o_xronos=0;
			flag_tick=1;
			milaei=false;
			
			createjs.Sound.stop();
			createjs.Sound.play("odigies");
			set_the_bara([1,1,1,0,0,0]);
		}
		function epilogi_epipedou(e) {
			e.currentTarget.parent.gotoAndStop(e.currentTarget.theid);
			epipedo=e.currentTarget.theid;
			bima_xronou=20*(epipedo+1);
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
				o_xronos = o_xronos % 80;
				if (o_xronos==0) {
					if (the_bara.xronos.aspro.scaleX>0) {
						the_bara.xronos.aspro.scaleX=the_bara.xronos.aspro.scaleX-0.001;
					} else {
						flag_tick=0;
						createjs.Sound.stop();
						createjs.Sound.play("telos_xronou");
						display_sosto();
					}
				}
			}
		}
		function handleFileComplete1(event) {
			var olon = event.result;
			var epikefs = ["aa", "lezanta", "sxolia"];
			var templist;
			for (i = 0; i < epikefs.length; i++) {
				templist = olon.getElementsByTagName(epikefs[i]);
				for (j = 0; j < templist.length; j++) {
					oi_erotiseis[i].push(templist[j].childNodes[0].nodeValue);
				}
			}
			console.log(oi_erotiseis);
		}
		function fortose_eikona(poio_aa,se_poia_karta){
			console.log(poio_aa,se_poia_karta);
			var preload = new createjs.LoadQueue();
			preload.addEventListener("fileload", fortothike_eikona);
			preload.loadFile("img/img_"+poio_aa+".png");
			function fortothike_eikona(event) {
				var new_eik=new createjs.Bitmap(event.result);
				if (the_cards[se_poia_karta].back_card.numChildren>0) {
					the_cards[se_poia_karta].back_card.removeChildAt(0);
				}
				the_cards[se_poia_karta].back_card.addChild(new_eik);
			}	
		};
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

	// memory
	this.mc = new lib.mcs();
	this.mc.name = "mc";
	this.mc.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

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
		{src:"images/background_black.jpg?1617868653886", id:"background_black"},
		{src:"images/antik_atlas_1.png?1617868653863", id:"antik_atlas_1"}
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