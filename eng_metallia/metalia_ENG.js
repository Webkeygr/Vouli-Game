(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"metalia_ENG_atlas_1", frames: [[1628,176,114,42],[1047,318,579,80],[0,0,1580,316],[1628,0,154,174],[1047,400,600,70],[1628,220,114,42],[0,890,1353,41],[0,318,570,570],[572,318,473,473]]}
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



(lib.CachedBmp_64 = function() {
	this.initialize(ss["metalia_ENG_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["metalia_ENG_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["metalia_ENG_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["metalia_ENG_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["metalia_ENG_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["metalia_ENG_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["metalia_ENG_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.background_black = function() {
	this.initialize(img.background_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2667,1500);


(lib.img_01 = function() {
	this.initialize(ss["metalia_ENG_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.niki_head = function() {
	this.initialize(ss["metalia_ENG_atlas_1"]);
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

	// Layer_2
	this.instance = new lib.img_01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,570,570);


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
	this.keimeno = new cjs.Text("Φράνκ Άμπνεϋ Άστιγξ (Frank Abney Hastings) (1794-1828)", "italic 700 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.keimeno.name = "keimeno";
	this.keimeno.textAlign = "center";
	this.keimeno.lineHeight = 28;
	this.keimeno.lineWidth = 473;
	this.keimeno.parent = this;
	this.keimeno.setTransform(0,-13.8);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.keimeno);
	}

	this.timeline.addTween(cjs.Tween.get(this.keimeno).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sxolia, new cjs.Rectangle(-238.5,-15.8,477.1,31.6), null);


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
	this.instance = new lib.CachedBmp_63();
	this.instance.setTransform(27.55,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.otitlos, new cjs.Rectangle(27.6,0,289.5,40), null);


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

	// Layer_1
	this.instance = new lib.CachedBmp_58();
	this.instance.setTransform(301.7,11.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ehj/ADIIAAmPMDH/AAAIAAGPg");
	this.shape.setTransform(640,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.entoli, new cjs.Rectangle(0,0,1280,40), null);


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
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiQBpIAAjRIEhAAIAADRg");
	this.shape.setTransform(14.5,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiQBpIAAjRIEhAAIAADRg");
	this.shape_1.setTransform(14.5,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AiQBpIAAjRIEhAAIAADRg");
	this.shape_2.setTransform(14.5,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AiQBpIAAjRIEhAAIAADRg");
	this.shape_3.setTransform(14.5,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AiQBpIAAjRIEhAAIAADRg");
	this.shape_4.setTransform(14.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,21);


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
	this.instance = new lib.CachedBmp_64();
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
	this.mc2 = new lib.themc();
	this.mc2.name = "mc2";
	this.mc2.setTransform(410.4,496.3,0.5,0.5,0,0,0,285.9,283.9);

	this.mc1 = new lib.themc();
	this.mc1.name = "mc1";
	this.mc1.setTransform(180.4,217.85,0.5,0.5,0,0,0,286,282);

	this.mc4 = new lib.themc();
	this.mc4.name = "mc4";
	this.mc4.setTransform(868.55,497.3,0.5,0.5,0,0,0,282,285.9);

	this.mc3 = new lib.themc();
	this.mc3.name = "mc3";
	this.mc3.setTransform(1100.6,217.85,0.5,0.5,0,0,0,286,282);

	this.erotisi = new cjs.Text("Ενώ είχε πάρει διαβατήριο από την αυστριακή αστυνομία, με σκοπό να κατέβει στην Ελλάδα και να ενεργοποιήσει το επαναστατικό του σχέδιο, συλλαμβάνεται στην Τεργέστη, μετά από προδοσία ενός Έλληνα εμπόρου. Ανακρίνεται, φυλακίζεται, βασανίζεται επί έξι μήνες και τελικά σιδηροδέσμιος μεταφέρεται στο Βελιγράδι, όπου θανατώνεται μαζί με τους άλλους επτά συντρόφους του στον Πύργο Νεμπόιζα, τον Ιούνιο του 1798.", "normal 500 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.erotisi.name = "erotisi";
	this.erotisi.textAlign = "center";
	this.erotisi.lineHeight = 25;
	this.erotisi.lineWidth = 580;
	this.erotisi.parent = this;
	this.erotisi.setTransform(640,134.4);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.erotisi);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.erotisi},{t:this.mc3},{t:this.mc4},{t:this.mc1},{t:this.mc2}]}).wait(1));

	// backgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcs, new cjs.Rectangle(0,0,1280,720), null);


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
	this.instance = new lib.CachedBmp_60();
	this.instance.setTransform(-149.9,104.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// text
	this.instance_1 = new lib.CachedBmp_61();
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
	this.instance = new lib.CachedBmp_59();
	this.instance.setTransform(-62,-10.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// grammes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AVBBpIAAjRIAKAAIAADRgAQVBpIAAjRIAKAAIAADRgALpBpIAAjRIAKAAIAADRgAG9BpIAAjRIAKAAIAADRgACRBpIAAjRIAKAAIAADRgAiaBpIAAjRIAKAAIAADRgAnGBpIAAjRIAKAAIAADRgAryBpIAAjRIAKAAIAADRgAweBpIAAjRIAKAAIAADRgA1KBpIAAjRIAKAAIAADRg");
	this.shape.setTransform(135.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// aspro
	this.d10 = new lib.damaki();
	this.d10.name = "d10";
	this.d10.setTransform(285.5,0,1,1,0,0,0,14.5,10.5);

	this.d9 = new lib.damaki();
	this.d9.name = "d9";
	this.d9.setTransform(255.5,0,1,1,0,0,0,14.5,10.5);

	this.d8 = new lib.damaki();
	this.d8.name = "d8";
	this.d8.setTransform(225.5,0,1,1,0,0,0,14.5,10.5);

	this.d7 = new lib.damaki();
	this.d7.name = "d7";
	this.d7.setTransform(195.5,0,1,1,0,0,0,14.5,10.5);

	this.d6 = new lib.damaki();
	this.d6.name = "d6";
	this.d6.setTransform(165.5,0,1,1,0,0,0,14.5,10.5);

	this.d5 = new lib.damaki();
	this.d5.name = "d5";
	this.d5.setTransform(135.5,0,1,1,0,0,0,14.5,10.5);

	this.d4 = new lib.damaki();
	this.d4.name = "d4";
	this.d4.setTransform(105.5,0,1,1,0,0,0,14.5,10.5);

	this.d3 = new lib.damaki();
	this.d3.name = "d3";
	this.d3.setTransform(75.5,0,1,1,0,0,0,14.5,10.5);

	this.d2 = new lib.damaki();
	this.d2.name = "d2";
	this.d2.setTransform(45.5,0,1,1,0,0,0,14.5,10.5);

	this.d1 = new lib.damaki();
	this.d1.name = "d1";
	this.d1.setTransform(15.5,0,1,1,0,0,0,14.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d1},{t:this.d2},{t:this.d3},{t:this.d4},{t:this.d5},{t:this.d6},{t:this.d7},{t:this.d8},{t:this.d9},{t:this.d10}]}).wait(1));

	// kokkino
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("A3bBpIAAjRMAu3AAAIAADRg");
	this.shape_1.setTransform(150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epidosi, new cjs.Rectangle(-62,-10.5,362,21.2), null);


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

	this.instance = new lib.CachedBmp_62();
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
	this.to_sxolio.setTransform(-0.05,-29.5);

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
	this.epom = new lib.start();
	this.epom.name = "epom";
	this.epom.setTransform(-360,-29.5);
	new cjs.ButtonHelper(this.epom, 0, 1, 2, false, new lib.start(), 3);

	this.back = new lib.back();
	this.back.name = "back";
	this.back.setTransform(-527.15,-29.5);
	new cjs.ButtonHelper(this.back, 0, 1, 2, false, new lib.back(), 3);

	this.home = new lib.home();
	this.home.name = "home";
	this.home.setTransform(-587.15,-29.5);
	new cjs.ButtonHelper(this.home, 0, 1, 2, false, new lib.home(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.back},{t:this.epom}]}).wait(1));

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
(lib.metalia_ENG = function(mode,startPosition,loop,reversed) {
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
		var oi_erotiseis=[[],[],[],[],[]];
		var the_bara=this.bara;
		var the_intro=this.intro;
		var the_mcs=this.mc;
		var the_backgr=this.backgr;
		var oi_apant=[the_mcs.mc1,the_mcs.mc2,the_mcs.mc3,the_mcs.mc4];
		var the_levels=this.intro.levels;
		var toggles=[the_levels.inv1,the_levels.inv2];
		var xx,epipedo,ask_index,flag_tick,points_to_earn;
		var quest_numbs=[];
		var tis_baras=[the_bara.home,the_bara.back,the_bara.epom,the_bara.xronos, the_bara.epidosi, the_bara.to_sxolio,the_bara.otitlos];
		var ta_damakia=[the_bara.epidosi.d1,the_bara.epidosi.d2,the_bara.epidosi.d3,the_bara.epidosi.d4,the_bara.epidosi.d5,the_bara.epidosi.d6,the_bara.epidosi.d7,the_bara.epidosi.d8,the_bara.epidosi.d9,the_bara.epidosi.d10];
		var	o_xronos,bima_xronou;
		var paper_displayed=false;
		function start_up() {
			var preload1 = new createjs.LoadQueue();
			createjs.Sound.registerSound("sounds/eng_met1.mp3", "intro");
			createjs.Sound.registerSound("sounds/eng_met2.mp3", "odigies");
			createjs.Sound.registerSound("sounds/eng_met_c6.mp3", "bravo");
			createjs.Sound.registerSound("sounds/eng_met_c26.mp3", "wrong_1");
			createjs.Sound.registerSound("sounds/eng_met_c27.mp3", "wrong_2");
			createjs.Sound.registerSound("sounds/eng_met_c11.mp3", "telos_xronou");
			createjs.Touch.enable(stage);
			the_backgr.mouseEnabled=true;
			the_backgr.mouseChildren=false;
			the_backgr.alpha=0;
			the_backgr.addEventListener("click",tipota);
			the_bara.home.addEventListener("click",gotomenou);
			flag_tick=0;
			bima_xronou=10;
			epipedo=0; //0=easy 1=difficult
			set_the_bara([1,0,0,0,0,0,1]);
			the_intro.visible=true;
			the_mcs.visible=false;
			the_mcs.mouseEnabled=false;
			the_intro.start_it.addEventListener("click",start_the_game);
			
			the_intro.niki_talks.mouseChildren=false;
			the_intro.niki_talks.cursor="pointer";
			the_intro.niki_talks.addEventListener("click",say_intro);
		
			the_bara.epom.addEventListener("click",epomeni);
			the_bara.back.addEventListener("click",go_back);
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
			preload1.loadFile("xml/eng_metallia.xml");
		}
		function go_back(e) {
			flag_tick=0;
			set_the_bara([1,0,0,0,0,0,1]);
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
			for (xx=0;xx<10;xx++) {
				ta_damakia[xx].gotoAndStop(0);
			}	
			for (xx=0;xx<10;xx++) {
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
			var alla=[-1,-1,-1,-1];
			var tix;
			var tososto=Math.floor(Math.random()*4);
			points_to_earn=1;
			alla[tososto]=quest_numbs[ask_index];
			oi_apant[tososto].soston=1;
			
			for (xx=0;xx<oi_apant.length;xx++) {
				if (xx==tososto) {
		//			alla[xx]=quest_numbs[ask_index];
		//			oi_apant[xx].soston=1;
				} else {
					do {
						tix=Math.floor(Math.random()*oi_erotiseis[0].length)
					} while (alla.indexOf(tix)>-1)
					alla[xx]=tix;
					oi_apant[xx].soston=0;
				}
				oi_apant[xx].alpha=0.7;
				oi_apant[xx].scale=0.5;
				fortose_eikona(oi_erotiseis[0][alla[xx]],xx)
				oi_apant[xx].mouseEnabled=true;
				oi_apant[xx].x=oi_apant[xx].thex;
				oi_apant[xx].y=oi_apant[xx].they;
			}
			the_mcs.erotisi.text=oi_erotiseis[Math.floor(Math.random()*3+2)][quest_numbs[ask_index]];
			the_mcs.erotisi.y=132+(166-the_mcs.erotisi.getMeasuredHeight())/2;
		//		oi_apant[xx].answer.text=oi_erotiseis[3][alla[xx]];
		//		oi_apant[xx].answer.y=-57+(126-oi_apant[xx].answer.getMeasuredHeight())/2;
			
			the_bara.to_sxolio.keimeno.text=oi_erotiseis[1][quest_numbs[ask_index]];
			the_mcs.visible=true;
			the_mcs.mouseEnabled=true;
			the_mcs.entoli.visible=true;
			the_bara.xronos.aspro.scaleX=1;
		//	o_xronos=0;
		//	flag_tick=1;
			set_the_bara([1,1,0,1,1,0,0]);
		}
		function epilexe(e) {
			console.log(e.currentTarget.soston);
			if (e.currentTarget.soston==1) {
				createjs.Sound.stop();
				createjs.Sound.play("bravo");
				deixe_sosto();
				
			} else {
				createjs.Tween.get(e.currentTarget).to({scale:0}, 300, createjs.Ease.none());
				points_to_earn=points_to_earn+1;
				createjs.Sound.stop();
				if (points_to_earn==4) {
					createjs.Sound.play("telos_xronou");
					deixe_sosto();
				} else {
					if (points_to_earn==2) {
						createjs.Sound.play("wrong_1");
					} else {
						createjs.Sound.play("wrong_2");
					}
					
				}
			}
			console.log(e.currentTarget.x);
		}
		function deixe_sosto() {
			the_mcs.entoli.visible=false;
			ta_damakia[ask_index].gotoAndStop(points_to_earn);
			flag_tick=0;
			for (xx=0;xx<oi_apant.length;xx++) {
				if (oi_apant[xx].soston==1) {
					oi_apant[xx].alpha=1;
					createjs.Tween.get(oi_apant[xx]).to({scale:1, x:640, y:410 }, 300, createjs.Ease.none());
				} else {
					createjs.Tween.get(oi_apant[xx]).to({scale:0}, 300, createjs.Ease.none());
				}
				oi_apant[xx].mouseEnabled=false;
			}
			createjs.Tween.get(the_mcs.erotisi).to({y:0+(166-the_mcs.erotisi.getMeasuredHeight())/2}, 300, createjs.Ease.none());
			if (ask_index==9) {
				set_the_bara([1,1,0,1,1,1,0]);			
			} else {
				set_the_bara([1,1,1,1,1,1,0]);	
			}
		}
		function epilogi_epipedou(e) {
			e.currentTarget.parent.gotoAndStop(e.currentTarget.theid);
			epipedo=e.currentTarget.theid;
			bima_xronou=10*(epipedo+1);
		}
		function mesa(e) {
			if (e.currentTarget.mouseEnabled==true) {
				e.currentTarget.alpha=1;;
			}
		}
		function exo(e) {
			if (e.currentTarget.mouseEnabled==true) {
				e.currentTarget.alpha=0.7;
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
						createjs.Sound.stop();
						createjs.Sound.play("telos_xronou");
						points_to_earn=4;
						deixe_sosto();
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
			var epikefs = ["aa", "whois", "sxolio1", "sxolio2", "sxolio3"];
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
			preload.loadFile("img/met_img_"+poio_aa+".png");
			function fortothike_eikona(event) {
				var new_eik=new createjs.Bitmap(event.result);
				if (oi_apant[se_poia_karta].numChildren>0) {
					oi_apant[se_poia_karta].removeChildAt(0);
				}
				oi_apant[se_poia_karta].addChild(new_eik);
				if (se_poia_karta==3) {
					createjs.Tween.get(the_backgr).to({alpha: 0}, 300, createjs.Ease.none()).call(telos_back_anim);
				}
			}	
		};
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
		{src:"images/background_black.jpg?1618212451206", id:"background_black"},
		{src:"images/metalia_ENG_atlas_1.png?1618212451178", id:"metalia_ENG_atlas_1"}
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