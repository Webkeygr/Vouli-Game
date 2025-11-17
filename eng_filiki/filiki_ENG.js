(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"filiki_ENG_atlas_1", frames: [[475,929,114,42],[475,806,457,80],[0,0,1630,732],[934,806,154,174],[475,734,600,70],[475,973,114,42],[475,888,175,39],[1077,734,179,39],[0,734,473,473]]}
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



(lib.CachedBmp_50 = function() {
	this.initialize(ss["filiki_ENG_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["filiki_ENG_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["filiki_ENG_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["filiki_ENG_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["filiki_ENG_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["filiki_ENG_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(img.CachedBmp_44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2115,140);


(lib.CachedBmp_43 = function() {
	this.initialize(ss["filiki_ENG_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(img.CachedBmp_42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,140);


(lib.CachedBmp_41 = function() {
	this.initialize(ss["filiki_ENG_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(img.CachedBmp_40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,140);


(lib.background_black = function() {
	this.initialize(img.background_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2667,1500);


(lib.niki_head = function() {
	this.initialize(ss["filiki_ENG_atlas_1"]);
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


(lib.sxolion = function(mode,startPosition,loop,reversed) {
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
	this.keimenon = new cjs.Text("asdasd aas", "normal 700 18px 'Fira Sans Condensed'", "#FFFFFF");
	this.keimenon.name = "keimenon";
	this.keimenon.lineHeight = 28;
	this.keimenon.lineWidth = 806;
	this.keimenon.parent = this;
	this.keimenon.setTransform(7.1,5.15);
	if(!lib.properties.webfonts['Fira Sans Condensed']) {
		lib.webFontTxtInst['Fira Sans Condensed'] = lib.webFontTxtInst['Fira Sans Condensed'] || [];
		lib.webFontTxtInst['Fira Sans Condensed'].push(this.keimenon);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EhADACWIAAkrMCAHAAAIAAErg");
	this.shape.setTransform(410,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.keimenon}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sxolion, new cjs.Rectangle(0,0,820,35), null);


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


(lib.sbise = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// noun_erase_3637813.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmAGfQgHAAgEgEQgFgFAAgGQAAgHAFgEQAEgFAHAAIBeAAIieidQgEgFAAgGQAAgHAEgEIC1i2QgLgLgFgHQgIgKAJgKIGKmLQAFgEAGAAQAHAAAEAEIE7E7QAEAEAAAHQAAAGgEAFImMGKQgEAFgHAAQgGAAgFgFIgQgQIhPBPIF+AAQAHAAAEAFQAFAEAAAHQAAAGgFAFQgEAEgHAAgAmeDYICoCoICLAAIBlhlIjujug");
	this.shape.setTransform(-0.0068,-0.0093,0.3165,0.3165);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah5CDQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBIAeAAIgygyQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIA5g6IgFgFQgDgDAEgDIB7h9QABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIBkBjQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIh9B8QAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgGgGIgYAZIB5AAQAAABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAgAiCBEIA1A1IAsAAIAfggIhKhLg");

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
	this.instance = new lib.CachedBmp_49();
	this.instance.setTransform(88.4,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.otitlos, new cjs.Rectangle(88.4,0,228.49999999999997,40), null);


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


(lib.keno = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj+iDIAxAAIACAUQAUgaAeAAQAgAAAQAaQAQAaAAAxQAAAegIAWQgJAXgPANQgQANgVAAQgZAAgQgUIAABYIg3AFgAjHhMIAABUQAKAQAPAAQAcAAAAg8QAAgjgGgNQgHgNgMAAQgQAAgMAVgAEiAmQgWgbAAguQAAguAVgcQAWgcAnAAQAmAAAVAZQAWAZAAAvIgBAUIhqAAQACAZAJAJQAJAKAQAAQALAAAKgEQAJgEAMgIIAXAfQgeAagnAAQgrAAgXgbgAFLhaQgGAKgCAbIA2AAIAAgCQAAgXgGgLQgGgMgOAAQgNAAgHALgACGAnQgXgbAAguQAAggAKgXQALgXAUgNQATgMAaAAQASAAAPAFQAOAGANAMIgXAgQgIgHgIgDQgIgDgIAAQgRAAgIAOQgIANAAAhQAAAgAIAMQAJAMAPAAQAJAAAHgCIAQgKIAYAhQgZAXgiAAQgpAAgXgagAg3AxQgPgRAAgbQAAgeAVgRQAVgQAnAAIAPAAIAAgJQAAgRgGgHQgGgHgOAAQgSAAgbAKIgNgjQAQgHASgEQASgDAOAAQAmAAARAQQASARAAAhIAABNQAAAKACAEQADAFAGACIgMAlQgQgCgLgGQgKgGgGgNQgRAcghAAQgaAAgQgQgAgIgUQgIAHAAANQAAANAFAGQAFAGAIAAQAIAAAGgEQAGgFAEgJIAAgiIgKAAQgQAAgIAHgAmOA5QgTgHgNgNIAageQAXASAWAAQALAAAGgFQAHgEAAgJQAAgHgDgDQgDgFgHgDQgIgEgPgGQgagJgMgOQgMgOAAgVQAAgQAIgOQAJgNAQgIQAQgHAWAAQATAAARAGQAQAGANALIgUAeQgWgOgTAAQgKAAgFAEQgGAEAAAIQAAAFADAEQADAEAHADQAIAEAPAGQAbAJAMANQANAOAAAWQAAAdgWARQgWARgiAAQgWAAgTgIg");
	this.shape.setTransform(0.575,3.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj+iDIAxAAIACAUQAUgaAeAAQAgAAAQAaQAQAaAAAxQAAAegIAWQgJAXgPANQgQANgVAAQgZAAgQgUIAABYIg3AFgAjHhMIAABUQAKAQAPAAQAcAAAAg8QAAgjgGgNQgHgNgMAAQgQAAgMAVgAEiAmQgWgbAAguQAAguAVgcQAWgcAnAAQAmAAAVAZQAWAZAAAvIgBAUIhqAAQACAZAJAJQAJAKAQAAQALAAAKgEQAJgEAMgIIAXAfQgeAagnAAQgrAAgXgbgAFLhaQgGAKgCAbIA2AAIAAgCQAAgXgGgLQgGgMgOAAQgNAAgHALgACGAnQgXgbAAguQAAggAKgXQALgXAUgNQATgMAaAAQASAAAPAFQAOAGANAMIgXAgQgIgHgIgDQgIgDgIAAQgRAAgIAOQgIANAAAhQAAAgAIAMQAJAMAPAAQAJAAAHgCIAQgKIAYAhQgZAXgiAAQgpAAgXgagAg3AxQgPgRAAgbQAAgeAVgRQAVgQAnAAIAPAAIAAgJQAAgRgGgHQgGgHgOAAQgSAAgbAKIgNgjQAQgHASgEQASgDAOAAQAmAAARAQQASARAAAhIAABNQAAAKACAEQADAFAGACIgMAlQgQgCgLgGQgKgGgGgNQgRAcghAAQgaAAgQgQgAgIgUQgIAHAAANQAAANAFAGQAFAGAIAAQAIAAAGgEQAGgFAEgJIAAgiIgKAAQgQAAgIAHgAmOA5QgTgHgNgNIAageQAXASAWAAQALAAAGgFQAHgEAAgJQAAgHgDgDQgDgFgHgDQgIgEgPgGQgagJgMgOQgMgOAAgVQAAgQAIgOQAJgNAQgIQAQgHAWAAQATAAARAGQAQAGANALIgUAeQgWgOgTAAQgKAAgFAEQgGAEAAAIQAAAFADAEQADAEAHADQAIAEAPAGQAbAJAMANQANAOAAAWQAAAdgWARQgWARgiAAQgWAAgTgIg");
	this.shape_1.setTransform(0.575,3.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnVDXQgyAAAAgyIAAlJQAAgyAyAAIOrAAQAyAAAAAyIAAFJQAAAygyAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AnVDXQgyAAAAgyIAAlJQAAgyAyAAIOrAAQAyAAAAAyIAAFJQAAAygyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-21.5,104,43);


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
	this.instance = new lib.CachedBmp_44();
	this.instance.setTransform(112.4,12.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ehj/AHbIAAu1MDH/AAAIAAO1g");
	this.shape.setTransform(640,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.entoli, new cjs.Rectangle(0,0,1280,95), null);


(lib.encript_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_43();
	this.instance.setTransform(166.3,26.85,0.5,0.5);

	this.kodikop = new cjs.Text("asd adasdasdad asd", "normal 700 32px 'Fira Mono'", "#FFFFFF");
	this.kodikop.name = "kodikop";
	this.kodikop.lineHeight = 49;
	this.kodikop.lineWidth = 535;
	this.kodikop.parent = this;
	this.kodikop.setTransform(265.95,15,1.5,1.5);
	if(!lib.properties.webfonts['Fira Mono']) {
		lib.webFontTxtInst['Fira Mono'] = lib.webFontTxtInst['Fira Mono'] || [];
		lib.webFontTxtInst['Fira Mono'].push(this.kodikop);
	}

	this.instance_1 = new lib.CachedBmp_42();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.kodikop},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.encript_mc, new cjs.Rectangle(0,0,1080,92.2), null);


(lib.decripted_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_41();
	this.instance.setTransform(158,26.85,0.5,0.5);

	this.apokodikop = new cjs.Text("asd adasdasdad asd", "normal 700 32px 'Fira Mono'", "#FFFFFF");
	this.apokodikop.name = "apokodikop";
	this.apokodikop.lineHeight = 49;
	this.apokodikop.lineWidth = 535;
	this.apokodikop.parent = this;
	this.apokodikop.setTransform(265.95,14.2,1.5,1.5);
	if(!lib.properties.webfonts['Fira Mono']) {
		lib.webFontTxtInst['Fira Mono'] = lib.webFontTxtInst['Fira Mono'] || [];
		lib.webFontTxtInst['Fira Mono'].push(this.apokodikop);
	}

	this.instance_1 = new lib.CachedBmp_40();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.apokodikop},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.decripted_mc, new cjs.Rectangle(0,0,1080,91.4), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBNQgTgOAAgZQAAgTALgKQALgKAWgEQgmgIAAgeQAAgVASgNQARgNAbAAQAiABAYASIgTAaQgJgFgHgDQgIgCgIAAQgKAAgEAFQgFAEAAAKQAAAJAFAEQAFAGAKgBIATAAIgFAgIgQAAQgMAAgFAEQgGAGAAAKQAAAWAXgBQAJAAAIgCQAJgDAKgHIAVAbQgMAKgQAFQgRAFgTAAQgdABgTgOg");
	this.shape.setTransform(0.425,-45.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAlBLQgRgPAAgdIAAhzIAxAAIAABzQAAANAEAFQAEAFAIAAQAXAAABg1QgBgigHgzIAwAAIAGAuQACAVAAAVQABAfgLATQgLAUgRAIQgRAIgUAAQgcAAgRgPgAiIBDQgVgXAAgsQAAgqAVgXQAVgYAjAAQAkgBAUAYQAVAXgBArQABArgVAXQgUAYgkAAQgkABgUgYgAhjgpQgGANAAAcQAAAeAGAMQAGAMANAAQANAAAHgMQAFgNABgdQgBgcgFgNQgHgMgNAAQgNAAgGAMg");
	this.shape_1.setTransform(0,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBLQgRgPAAgdIAAhzIAxAAIAABzQAAANAEAFQAEAFAIAAQAYAAAAg0QgBgjgHgzIAwAAIAHAtQACAWAAAVQAAAegLAUQgLAUgRAIQgRAJgUAAQgcgBgRgPgAiIBDQgVgXAAgsQAAgqAVgYQAUgXAkAAQAkAAAUAXQAVAXgBArQABAqgVAYQgUAZgkAAQgkgBgUgXgAhjgpQgHANABAcQgBAdAHANQAGAMANAAQANAAAHgNQAFgMAAgdQAAgcgFgNQgHgMgNAAQgNAAgGAMg");
	this.shape_2.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-54.4,43,75.9);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiUBRQAmgLATgPQATgQAHgcQgRAUgXAAQgQAAgNgJQgNgIgIgQQgHgQAAgVQAAgXAKgRQAJgRARgJQARgJAVAAQAlAAATAWQATAXAAAnQAAArgNAdQgOAcgbARQgbASgsAKgAhqhFQgHAJAAATQAAAVAGAIQAHAJAKAAQAPAAALgSQABgXgCgMQgDgMgFgGQgFgFgKAAQgMAAgGAKgABxBSIgCgMQgHAVgLAKQgLAKgSAAQgcABgQgXQgQgXAAgsQAAgaAIgVQAIgUAOgMQAPgMATAAQAmAAAIAsIAFgmIApAAIgVBWIAIAiQACAIAEAEQAEADAGACIgPAlQgegDgFgagAA2AWQAAAdAFAMQAGAMAKAAQAJAAAHgMQAGgMAFggQgFgdgGgLQgFgLgKAAQgWAAAAA2g");
	this.shape.setTransform(0.025,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXA2QgmgCgTgSQgUgSAAgbIAAhsIAwAAIAABpQAAAOAGAJQAHAIAQADIAAiLIAtAAIAACKQAQgDAIgMQAHgLAAgXQAAgkgHg1IAvAAQAIAsAAAuQAAAmgUAVQgVAVgmADIAAA9IgtAGg");
	this.shape_1.setTransform(0.1,3.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXA2QgmgCgTgSQgUgSAAgbIAAhsIAwAAIAABpQAAAOAGAJQAHAIAQADIAAiLIAtAAIAACKQAQgDAIgMQAHgLAAgXQAAgkgHg1IAvAAQAIAsAAAuQAAAmgUAVQgVAVgmADIAAA9IgtAGg");
	this.shape_2.setTransform(0.1,3.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-59,43,80.5);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2BnQgUgWAAgoQAAgvAsgXQgRgJgGgLQgGgKAAgPQAAgVAQgOQAQgOAfAAQARAAAPAFQAOAFAKAJIgVAaIgPgJQgIgCgIAAQgKAAgFAEQgFAFAAAHQAAAGACAEQACAEAGADIARAJQAWAKANAMQANALAGAPQAGAPAAAXQAAAogUAWQgUAXgjAAQgiAAgUgVgAgUAGQgEAOAAAUQAAAaAGALQAGALAMgBQANABAGgLQAGgLAAgaQAAgQgDgKQgCgJgGgHQgHgHgMgHQgLAKgEAMg");
	this.shape.setTransform(-0.025,-49.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAfIgbBcIgxgGIA1h7QgRgpgMgWQgLgWgOgQIAvgPQALASAGAQQAHARAIAhIAUhTIAyAFIguBuIA0B4IgwAJg");
	this.shape_1.setTransform(-0.125,3.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAfIgbBcIgxgGIA1h7QgRgpgMgWQgLgWgOgQIAvgPQALASAGAQQAHARAIAhIAUhTIAyAFIguBuIA0B4IgwAJg");
	this.shape_2.setTransform(-0.125,3.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-61.7,43,83.2);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcBVQAAgRAHgTQgLg3gQgoQgPgogOgVIAsgPQALAPAKAfQAKAeAEAvIAbh7IAxAKIg1CbIgGAYQgCAKAAALQAAAPACAPIglAFQgKgUAAgSg");
	this.shape.setTransform(-0.15,-42.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXA5QhMgHAAhKQAAgZAEgXQAGgWAHgXIAvAAQgJAZgDAVQgFAVAAAWQABAaAGALQAHAMAPADIAAhNQAAghAQgSQAPgSAcAAQAgAAAQAVQAQAVAAAvQAAArgTAWQgSAVgpAEIAAA9IgtAFgAAahSQgEAGAAASIAABSQANgCAGgGQAGgFADgLQACgLABgWQgBgXgBgMQgCgMgDgEQgEgEgGAAQgHAAgDAGg");
	this.shape_1.setTransform(-0.05,3.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXA5QhMgHAAhKQAAgZAEgXQAGgWAHgXIAvAAQgJAZgDAVQgFAVAAAWQABAaAGALQAHAMAPADIAAhNQAAghAQgSQAPgSAcAAQAgAAAQAVQAQAVAAAvQAAArgTAWQgSAVgpAEIAAA9IgtAFgAAahSQgEAGAAASIAABSQANgCAGgGQAGgFADgLQACgLABgWQgBgXgBgMQgCgMgDgEQgEgEgGAAQgHAAgDAGg");
	this.shape_2.setTransform(-0.05,3.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-54.4,43,75.9);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMhYQAAghAUgRQATgSAfAAQAfAAARARQATAQgBAcQABArgpAJQAXADARAOQAQAOAAAgQAAAVgIAQQgJARgOAIQgPAJgSAAQgWAAgSgNIAABIIgwAHgAgXhyQgFAIAAASIAACGQALAHAPAAQANAAAIgIQAIgKAAgTQAAgoghAAIgKAAIADghIAGAAQAIAAAGgJQAFgIABgRQAAgQgGgHQgFgHgJAAQgKAAgGAHg");
	this.shape.setTransform(0.45,-46.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBGQgMgMAAgYIAAhUIgNAAIgPABIgLADIgJgiQAIgDAKgCQAJgCASAAIBgAAIAAAlIgsAAIAABPQAAAJACAGQADAFAGADIgNAkQgYgFgLgNg");
	this.shape_1.setTransform(-0.15,0.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBGQgMgMAAgYIAAhUIgNAAIgPABIgLADIgJgiQAIgDAKgCQAJgCASAAIBgAAIAAAlIgsAAIAABPQAAAJACAGQADAFAGADIgNAkQgYgFgLgNg");
	this.shape_2.setTransform(-0.15,0.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-61.7,43,83.2);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeA9IgCgMQgIAVgKAKQgLAKgSAAQgcABgPgXQgRgXABgsQgBgaAJgVQAHgUAOgMQAPgMAUAAQAkAAAIAsIAGgmIAoAAIgUBWIAHAiQACAIAEAEQAEADAGACIgPAlQgegDgEgagAgdABQAAAdAGAMQAFAMAKAAQAIAAAHgMQAGgMAFgfQgFgegGgLQgFgLgJAAQgWAAAAA2g");
	this.shape.setTransform(0.1,-45.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8BCQgVgYAAgrQAAgoAVgYQAVgXAoAAQAfAAAyADIAAAkIgggCQALAHAFAOQAFANAAARQAAAbgKAVQgIATgSALQgRALgWAAQglAAgTgXgAgNgwQgJAEgEAMQgEAKAAAVQAAAdAHANQAFAMAOgBQAMABAGgMQAGgNAAgcQAAgngKgOQgPAAgIAFg");
	this.shape_1.setTransform(0.35,0.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BCQgVgYAAgrQAAgoAVgYQAVgXAoAAQAfAAAyADIAAAkIgggCQALAHAFAOQAFANAAARQAAAbgKAVQgIATgSALQgRALgWAAQglAAgTgXgAgNgwQgJAEgEAMQgEAKAAAVQAAAdAHANQAFAMAOgBQAMABAGgMQAGgNAAgcQAAgngKgOQgPAAgIAFg");
	this.shape_2.setTransform(0.35,0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-54.4,43,75.9);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BDQgVgXAAgsQAAgpAVgZQAUgYAjABQAkAAAUAXQAVAXAAArQAAAqgVAYQgUAZgkAAQgjgBgUgXgAgSgpQgHANABAcQgBAdAHANQAGAMAMAAQANAAAHgNQAFgMAAgdQAAgcgFgNQgHgMgNAAQgMAAgGAMg");
	this.shape.setTransform(0,-45.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhIglQAAhVBIAAQAjAAATAWQATAXAAAtQAAAZgHAUQgIAVgOAMQgNAMgTAAQgWAAgNgTIAABPIgxAFgAgShKQgFAMAAAdIAAAnQAIAPAOAAQAYAAAAg1QAAgfgGgMQgGgLgLAAQgNAAgFAMg");
	this.shape_1.setTransform(0.125,3.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIglQAAhVBIAAQAjAAATAWQATAXAAAtQAAAZgHAUQgIAVgOAMQgNAMgTAAQgWAAgNgTIAABPIgxAFgAgShKQgFAMAAAdIAAAnQAIAPAOAAQAYAAAAg1QAAgfgGgMQgGgLgLAAQgNAAgFAMg");
	this.shape_2.setTransform(0.125,3.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-54.4,43,75.9);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBpQgRgIgJgPQgJgOAAgSQAAgkAlgRQgQgKgGgMQgHgNAAgQQAAgRAJgOQAIgNAQgHQAQgHATAAQAfAAATAPQATAPAAAaQAAAeggATQAUAJALAPQAJAOAAASQAAASgJAPQgJAPgSAIQgSAIgXAAQgXAAgSgIgAgbAwQAAAPAHAHQAIAIANAAQANAAAIgIQAGgHABgOQAAgNgHgIQgGgHgQgHIgJgEQgSANAAAZgAgVg1QAAALAFAHQAFAHAMAGIAFACQAJgHAEgIQADgIABgLQgBgZgVAAQgWAAAAAag");
	this.shape.setTransform(0,-47.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3BDQgVgXAAgsQAAgqAVgYQAUgXAjAAQAkAAAUAXQAVAXAAArQAAAqgVAYQgUAZgkAAQgjgBgUgXgAgSgpQgHANABAcQgBAdAHANQAGAMAMAAQANAAAHgNQAFgMAAgdQAAgcgFgNQgHgMgNAAQgMAAgGAMg");
	this.shape_1.setTransform(0,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BDQgVgXAAgsQAAgqAVgYQAUgXAjAAQAkAAAUAXQAVAXAAArQAAAqgVAYQgUAZgkAAQgjgBgUgXgAgSgpQgHANABAcQgBAdAHANQAGAMAMAAQANAAAHgNQAFgMAAgdQAAgcgFgNQgHgMgNAAQgMAAgGAMg");
	this.shape_2.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-59,43,80.5);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABxBTIgCgLQgHAUgLALQgMALgRAAQgcgBgQgWQgQgXAAgrQAAgbAIgVQAHgVAPgLQAOgMAUABQAmAAAIArIAFgmIAoAAIgUBWIAHAjQACAHAEAEQAEADAHADIgQAlQgdgFgFgagAA1AZQAAAcAGAMQAFAMAKAAQAKAAAGgMQAHgMAEggQgFgdgFgLQgGgLgKAAQgWAAAAA3gAhOBsIAAgvIhUAAIAAghIA3iNIAqAPIgvB6IAjAAIAFgzIApAAIAAAzIAVAAIAAAlIgVAAIAAAvg");
	this.shape.setTransform(0.025,-47.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGB/QAKgHAGgGQAFgFAAgIQAAgGgCgDQgCgEgFgDQgFgEgKgGQgUgJgKgIQgLgIgHgNQgHgOAAgUQAAgxAzgJQgngLAAgkQAAgQAIgMQAIgMAOgHQAPgHARAAQARAAANAFQANAEAMAKIgVAaIgOgIQgFgCgIAAQgKAAgFAHQgFAGAAAMQAAANAFAHQAHAHAMAAIAPAAIgEAhIgNAAQgQAAgHAJQgJAKAAARQAAAMAEAIQAEAHAHAGQAIAGAPAIQAVALAJAKQAKAKAAASQAAATgNAPQgNAOgcANg");
	this.shape_1.setTransform(0.625,0.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGB/QAKgHAGgGQAFgFAAgIQAAgGgCgDQgCgEgFgDQgFgEgKgGQgUgJgKgIQgLgIgHgNQgHgOAAgUQAAgxAzgJQgngLAAgkQAAgQAIgMQAIgMAOgHQAPgHARAAQARAAANAFQANAEAMAKIgVAaIgOgIQgFgCgIAAQgKAAgFAHQgFAGAAAMQAAANAFAHQAHAHAMAAIAPAAIgEAhIgNAAQgQAAgHAJQgJAKAAARQAAAMAEAIQAEAHAHAGQAIAGAPAIQAVALAJAKQAKAKAAASQAAATgNAPQgNAOgcANg");
	this.shape_2.setTransform(0.625,0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-59,43,80.5);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyBgIBAioIhOAAIAAgmICBAAIAAAiIhHC6g");
	this.shape.setTransform(0,-47.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcBYQgLg/gMgnQgMgogOgRIAsgQQAMAPAIAjQAKAiAEAzIAdiGIAwAKIgxCkg");
	this.shape_1.setTransform(-0.15,-0.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcBYQgLg/gMgnQgMgogOgRIAsgQQAMAPAIAjQAKAiAEAzIAdiGIAwAKIgxCkg");
	this.shape_2.setTransform(-0.15,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-59,43,80.5);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2BWQgTgbAAgyQAAgkALgbQAKgcAUgPQATgPAaAAQAaAAATAOIgSAdQgMgIgNAAQgPAAgKAPQgKAQgDAeQARgVAZAAQAQAAAMAJQAMAIAIAQQAHAQAAAWQAAAXgIASQgKASgQAKQgPAKgXAAQglAAgTgbgAgXAOQABAYACAOQADAOAFAGQAGAGAIAAQAXAAAAgsQAAgVgFgIQgFgIgLAAQgNAAgOARg");
	this.shape.setTransform(0.2,-48.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFh3IAxAAIAAB3QAAAQANAAQAMAAAJgSIAAh1IAxAAIAABvQAAAgAHAaIgtAFIgEgMIgCgOQgOAXgQAAQgIAAgFgDQgGgDgFgHQAGALADALQADAKAAAQIAAAcIguAFg");
	this.shape_1.setTransform(0.225,3.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFh3IAxAAIAAB3QAAAQANAAQAMAAAJgSIAAh1IAxAAIAABvQAAAgAHAaIgtAFIgEgMIgCgOQgOAXgQAAQgIAAgFgDQgGgDgFgHQAGALADALQADAKAAAQIAAAcIguAFg");
	this.shape_2.setTransform(0.225,3.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-59.5,43,81);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIBOIAcgYQAIAJAJAFQAJAGALAAQANAAAJgKQAHgKABgUQAAgUgHgIQgHgHgLAAQgGAAgFABQgGABgHAEIggAAIAAhzIB5AAIgFAjIhGAAIAAAwQANgIAQAAQAZAAAPASQAPASAAAhQAAAXgJARQgKASgSAJQgRAKgXAAQgoAAgbghg");
	this.shape.setTransform(-0.3,-47.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALBGQgIgcgGg3IgbCJIgwgLIAuijIARAAQgGgTgKgIQgJgIgWgEIAGgiQAbAFARAIQAQAIALARQALAQAGAeQAJAsAHAbQAHAaAHARQAHASAKAPIgvAQQgNgZgIgdg");
	this.shape_1.setTransform(0.375,-3.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALBGQgIgcgGg3IgbCJIgwgLIAuijIARAAQgGgTgKgIQgJgIgWgEIAGgiQAbAFARAIQAQAIALARQALAQAGAeQAJAsAHAbQAHAaAHARQAHASAKAPIgvAQQgNgZgIgdg");
	this.shape_2.setTransform(0.375,-3.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-59,43,80.5);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIBvIAAgvIhTAAIAAghIA3iNIApAPIguB6IAhAAIAGgzIApAAIAAAzIAVAAIAAAlIgVAAIAAAvg");
	this.shape.setTransform(0.05,-48.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiBSQgKgGgIgRIgjg/IAxhVIAqARIgpBDIAfAuIAHAIIAHAEIgRAlQgPgCgKgGgAhFBVIAAh6QAAgZgGgVIAtgGQAFAKADAOQACANAAAYIAABxg");
	this.shape_1.setTransform(0.675,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBSQgKgGgIgRIgjg/IAxhVIAqARIgpBDIAfAuIAHAIIAHAEIgRAlQgPgCgKgGgAhFBVIAAh6QAAgZgGgVIAtgGQAFAKADAOQACANAAAYIAABxg");
	this.shape_2.setTransform(0.675,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-59.6,43,81.1);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBpQgRgIgNgQIAagZQAKALAJAEQAJAFALAAQAMAAAIgJQAIgIAAgQQAAgQgIgIQgIgHgPAAIgQAAIAFghIALAAQAMAAAIgIQAHgHAAgOQAAgMgGgHQgHgHgLAAQgUAAgRATIgZgaQAegdAmAAQAUAAAPAHQAPAIAIAMQAIANAAAPQAAAogqAMQAWACANAMQANANAAAYQAAATgJAPQgIAPgSAJQgRAJgWAAQgWAAgRgIg");
	this.shape.setTransform(-0.575,-48.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSBGQgMgNAAgXIAAh5IAwAAIAAB0QAAAJADAFQADAFAHAEIgPAkQgWgFgMgNg");
	this.shape_1.setTransform(0.475,0.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBGQgMgNAAgXIAAh5IAwAAIAAB0QAAAJADAFQADAFAHAEIgPAkQgWgFgMgNg");
	this.shape_2.setTransform(0.475,0.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-59.5,43,81);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BvIAAgkQAiglARgVQAPgUAGgNQAHgOAAgOQAAgNgGgIQgHgGgKAAQgKAAgHAEQgIAFgJAMIgdgWQAagmArAAQAUAAAQAJQAPAIAIAOQAIAOAAAQQAAASgGAQQgGAPgRAUQgQAUgeAhIBQAAIgGAmg");
	this.shape.setTransform(-0.375,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2BeQgSgeAAhAQAAh7BIAAQAkAAATAeQASAeAAA/QAAA/gSAfQgTAegkAAQgjAAgTgegAgWA8QADAQAGAHQAFAFAIAAQAJAAAFgGQAGgGADgQQADgRABgeIg1AAQAAAeAEARgAgNhSQgHAHgCAQQgDAPgCAeIA2AAQgBgegDgPQgDgQgFgHQgGgFgJAAQgIAAgFAFg");
	this.shape_1.setTransform(0,-3.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BeQgSgeAAhAQAAh7BIAAQAkAAATAeQASAeAAA/QAAA/gSAfQgTAegkAAQgjAAgTgegAgWA8QADAQAGAHQAFAFAIAAQAJAAAFgGQAGgGADgQQADgRABgeIg1AAQAAAeAEARgAgNhSQgHAHgCAQQgDAPgCAeIA2AAQgBgegDgPQgDgQgFgHQgGgFgJAAQgIAAgFAFg");
	this.shape_2.setTransform(0,-3.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-59.5,43,81);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHBsIAAinIgoAcIgVggIBBgsIAtAAIAADXg");
	this.shape.setTransform(-1.05,-48.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMB9QAMgHAEgGQAFgGABgIQgBgIgEgEQgFgFgNgGQgSgJgKgJQgLgJgEgNQgFgNAAgTQAAgfAVgiQAVgiAogbQgHACgLABQgKACgLAAIgoAAIAGgjIBsAAIAGAaQgqAngQAeQgPAfAAAbQABAMADAIQACAIAHAGQAGAGANAGQAVAKAIAKQAJAKAAARQAAAUgNAOQgNAPgcAMg");
	this.shape_1.setTransform(0.65,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMB9QAMgHAEgGQAFgGABgIQgBgIgEgEQgFgFgNgGQgSgJgKgJQgLgJgEgNQgFgNAAgTQAAgfAVgiQAVgiAogbQgHACgLABQgKACgLAAIgoAAIAGgjIBsAAIAGAaQgqAngQAeQgPAfAAAbQABAMADAIQACAIAHAGQAGAGANAGQAVAKAIAKQAJAKAAARQAAAUgNAOQgNAPgcAMg");
	this.shape_2.setTransform(0.65,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-59,43,80.5);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAzQgEATgKAJQgLAJgTAAQgbAAgPgVQgPgUAAgqQAAgxASgrIAsAAQgHAagEAVQgDAWAAAVQAAAaAEALQAEALAJAAQAIAAADgFQAEgFAAgPIAAg4IArgGIAAA+QAAAOAEAGQADAFAIAAQAIAAAFgKQAEgLAAgcQAAgUgEgWQgDgVgHgaIAsAAQASArAAAxQAAAqgPAUQgQAVgaAAQgmAAgHglg");
	this.shape.setTransform(-0.025,-45.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguBMQgTgNAAgZQAAgSALgLQALgKAWgEQgmgHAAgeQAAgWASgNQARgMAbAAQAigBAYAUIgTAZQgJgFgHgCQgIgDgIAAQgKAAgEAFQgFAEAAAKQAAAIAFAFQAFAFAKABIATAAIgFAeIgQAAQgMAAgFAGQgGAFAAAKQAAAWAXAAQAJAAAIgDQAJgEAKgGIAVAbQgMAJgQAGQgRAFgTABQgdgBgTgOg");
	this.shape_1.setTransform(0.425,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBMQgTgNAAgZQAAgSALgLQALgKAWgEQgmgHAAgeQAAgWASgNQARgMAbAAQAigBAYAUIgTAZQgJgFgHgCQgIgDgIAAQgKAAgEAFQgFAEAAAKQAAAIAFAFQAFAFAKABIATAAIgFAeIgQAAQgMAAgFAGQgGAFAAAKQAAAWAXAAQAJAAAIgDQAJgEAKgGIAVAbQgMAJgQAGQgRAFgTABQgdgBgTgOg");
	this.shape_2.setTransform(0.425,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-54.4,43,75.9);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXA2QgmgDgTgRQgUgSAAgbIAAhtIAwAAIAABqQAAAOAGAJQAHAJAQACIAAiMIAtAAIAACLQAQgDAIgMQAHgLAAgXQAAgkgHg2IAvAAQAIAtAAAuQAAAmgUAVQgVAVgmADIAAA9IgtAGg");
	this.shape.setTransform(0.1,-42.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2BnQgUgVAAgpQAAgwAsgWQgRgKgGgKQgGgKAAgPQAAgVAQgOQAQgOAfAAQARAAAPAFQAOAGAKAIIgVAaIgPgIQgIgDgIAAQgKAAgFAEQgFAFAAAHQAAAGACADQACAEAGAEIARAJQAWAKANAMQANALAGAPQAGAPAAAYQAAAngUAXQgUAWgjAAQgiAAgUgVgAgUAGQgEANAAAVQAAAbAGAKQAGAKAMAAQANAAAGgKQAGgKAAgbQAAgQgDgKQgCgJgGgHQgHgHgMgHQgLAKgEAMg");
	this.shape_1.setTransform(-0.025,-3.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BnQgUgVAAgpQAAgwAsgWQgRgKgGgKQgGgKAAgPQAAgVAQgOQAQgOAfAAQARAAAPAFQAOAGAKAIIgVAaIgPgIQgIgDgIAAQgKAAgFAEQgFAFAAAHQAAAGACADQACAEAGAEIARAJQAWAKANAMQANALAGAPQAGAPAAAYQAAAngUAXQgUAWgjAAQgiAAgUgVgAgUAGQgEANAAAVQAAAbAGAKQAGAKAMAAQANAAAGgKQAGgKAAgbQAAgQgDgKQgCgJgGgHQgHgHgMgHQgLAKgEAMg");
	this.shape_2.setTransform(-0.025,-3.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-54.4,43,75.9);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzBJQgRgQAAgdIAAhzIAxAAIAAB0QAAAMAEAFQAEAFAIAAQAXAAAAgzQAAgkgIgzIAwAAIAHAuQACAVAAAWQAAAegLATQgLAUgRAIQgRAJgTAAQgcAAgRgPg");
	this.shape.setTransform(0.175,-45.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcBVQAAgRAHgTQgLg2gQgpQgPgogOgVIAsgPQALAPAKAfQAKAfAEAvIAbh8IAxAKIg1CbIgGAYQgCAKAAALQAAAPACAQIglAEQgKgTAAgTg");
	this.shape_1.setTransform(-0.15,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcBVQAAgRAHgTQgLg2gQgpQgPgogOgVIAsgPQALAPAKAfQAKAfAEAvIAbh8IAxAKIg1CbIgGAYQgCAKAAALQAAAPACAQIglAEQgKgTAAgTg");
	this.shape_2.setTransform(-0.15,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-54.4,43,75.9);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGB/QAKgHAGgGQAFgFAAgIQAAgGgCgDQgCgEgFgDQgFgEgKgGQgUgJgKgIQgLgIgHgNQgHgOAAgUQAAgxAzgJQgngLAAgkQAAgQAIgMQAIgMAOgHQAPgHARAAQARAAANAFQANAEAMAKIgVAaIgOgIQgFgCgIAAQgKAAgFAHQgFAGAAAMQAAANAFAHQAHAHAMAAIAPAAIgEAhIgNAAQgQAAgHAJQgJAKAAARQAAAMAEAIQAEAHAHAGQAIAGAPAIQAVALAJAKQAKAKAAASQAAATgNAPQgNAOgcANg");
	this.shape.setTransform(0.625,-46.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhMhYQAAghAUgRQATgSAfAAQAfAAARARQATAQgBAcQABArgpAJQAXADARAOQAQAOAAAgQAAAVgIAQQgJARgOAIQgPAJgSAAQgWAAgSgNIAABIIgwAHgAgXhyQgFAIAAASIAACGQALAHAPAAQANAAAIgIQAIgKAAgTQAAgoghAAIgKAAIADghIAGAAQAIAAAGgJQAFgIABgRQAAgQgGgHQgFgHgJAAQgKAAgGAHg");
	this.shape_1.setTransform(0.45,0.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhMhYQAAghAUgRQATgSAfAAQAfAAARARQATAQgBAcQABArgpAJQAXADARAOQAQAOAAAgQAAAVgIAQQgJARgOAIQgPAJgSAAQgWAAgSgNIAABIIgwAHgAgXhyQgFAIAAASIAACGQALAHAPAAQANAAAIgIQAIgKAAgTQAAgoghAAIgKAAIADghIAGAAQAIAAAGgJQAFgIABgRQAAgQgGgHQgFgHgJAAQgKAAgGAHg");
	this.shape_2.setTransform(0.45,0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-61.7,43,83.2);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVB2IAAi4QAAgKgDgEQgDgFgGAAQgLAAgMAUIAAB1IgxAAIAAh5QAAgZgGgVIAtgGQAFAJACAPQAJgMAKgHQALgGAPAAQATAAAMANQALAOAAAXIAADDg");
	this.shape.setTransform(-0.225,-42.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeA8IgCgLQgIAUgKALQgLALgSAAQgcgBgPgWQgRgXABgrQgBgbAJgVQAHgVAOgLQAPgLAUAAQAkAAAIArIAGgmIAoAAIgUBWIAHAjQACAHAEAEQAEAEAGACIgPAlQgegFgEgagAgdACQAAAcAGAMQAFAMAKAAQAIAAAHgMQAGgMAFgfQgFgegGgLQgFgLgJAAQgWAAAAA3g");
	this.shape_1.setTransform(0.1,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeA8IgCgLQgIAUgKALQgLALgSAAQgcgBgPgWQgRgXABgrQgBgbAJgVQAHgVAOgLQAPgLAUAAQAkAAAIArIAGgmIAoAAIgUBWIAHAjQACAHAEAEQAEAEAGACIgPAlQgegFgEgagAgdACQAAAcAGAMQAFAMAKAAQAIAAAHgMQAGgMAFgfQgFgegGgLQgFgLgJAAQgWAAAAA3g");
	this.shape_2.setTransform(0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-55,43,76.5);


(lib.b_5_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag7BRQAmgLATgPQASgQAGgcQgQAUgWAAQgQAAgNgJQgNgIgIgQQgIgQABgVQAAgXAKgRQAJgRARgJQARgJAUAAQAlAAATAWQASAXAAAnQABArgNAdQgOAcgbARQgaASgsAKgAgRhFQgHAJAAATQAAAVAGAIQAHAJAKAAQAOAAALgSQAAgXgCgMQgCgMgGgGQgEgFgKAAQgLAAgGAKg");
	this.shape.setTransform(-0.15,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgBGQgMgMAAgYIAAhUIgdAAIAACEIgxAAIAAiEIgKABIgJADIgJgiQAJgDAJgCQAKgCASAAIB+AAIAAAlIgRAAIAABPQAAAJADAFQADAFAHAEIgPAkQgXgFgMgNg");
	this.shape_1.setTransform(-0.35,0.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBGQgMgMAAgYIAAhUIgdAAIAACEIgxAAIAAiEIgKABIgJADIgJgiQAJgDAJgCQAKgCASAAIB+AAIAAAlIgRAAIAABPQAAAJADAFQADAFAHAEIgPAkQgXgFgMgNg");
	this.shape_2.setTransform(-0.35,0.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-59,43,80.5);


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
	this.instance = new lib.CachedBmp_50();
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


(lib.who_is_who = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// poios
	this.he_is = new cjs.Text("asd adasdasdad asd", "normal 700 32px 'Fira Mono'", "#FFFFFF");
	this.he_is.name = "he_is";
	this.he_is.lineHeight = 49;
	this.he_is.lineWidth = 535;
	this.he_is.parent = this;
	this.he_is.setTransform(266.55,12.9,1.5,1.5);
	if(!lib.properties.webfonts['Fira Mono']) {
		lib.webFontTxtInst['Fira Mono'] = lib.webFontTxtInst['Fira Mono'] || [];
		lib.webFontTxtInst['Fira Mono'].push(this.he_is);
	}

	this.timeline.addTween(cjs.Tween.get(this.he_is).wait(1));

	// lezanta
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEHBNQgFgFAAgHQAAgHAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAHgFAFQgFAFgIAAQgIAAgEgFgAC3BOQgKgEgIgHIAPgRQAMALANAAQAGgBADgDQAEgCAAgFQAAgEgCgCQgBgDgEgCIgNgFQgPgFgGgIQgHgHAAgMQAAgIAFgIQAFgHAJgEQAJgEAMgBQAKAAAKAEQAJADAHAHIgLAQQgMgHgLAAQgGAAgDABQgDADAAADQAAADACACIAGAFIAMAEQAPAGAHAHQAHAIAAAMQAAARgMAJQgMAKgTgBQgMAAgLgEgAgQBEQgNgPAAgbQAAgaANgPQAMgPAWAAQAWAAANAPQAMAPAAAaQAAAagMAPQgNAPgWAAQgWABgMgPgAAGAAQgEAIAAASQAAASAEAIQADAIAJAAQAIAAAEgIQAEgIAAgSQAAgSgEgIQgEgHgIAAQgJAAgDAHgAB7BPIAAhpIAfAAIAABpgAhLBPIAAhLQAAgFgCgDQgCgDgEAAQgEABgDADQgEADgEAFIAABKIgfAAIAAiUIAfgCIAAA4QAGgHAGgEQAHgEAIAAQANABAHAHQAHAJAAAOIAABOgAjLBPIgOhqIgPBqIgpAAIgTiKIAfAAIAMByIAQhyIAhAAIAPByIAOhyIAeAAIgUCKgAEHAIQgFgFAAgHQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAHgFAFQgFAFgIAAQgIAAgEgFgAB+g0QgFgEAAgIQAAgHAFgGQAFgEAHAAQAIAAAFAEQAFAGAAAHQAAAIgFAEQgFAFgIABQgHgBgFgFg");
	this.shape.setTransform(218.175,34.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// plaisio
	this.to_sxolio = new lib.sxolion();
	this.to_sxolio.name = "to_sxolio";
	this.to_sxolio.setTransform(670,87.5,1,1,0,0,0,410,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EhUXAFeIAAq7MCovAAAIAAK7g");
	this.shape_1.setTransform(540,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.to_sxolio}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.who_is_who, new cjs.Rectangle(0,0,1080,105), null);


(lib.letters = function(mode,startPosition,loop,reversed) {
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
	this.b_space = new lib.keno();
	this.b_space.name = "b_space";
	this.b_space.setTransform(977.2,119.2,1.2,1.2);
	new cjs.ButtonHelper(this.b_space, 0, 1, 2, false, new lib.keno(), 3);

	this.b_erase = new lib.sbise();
	this.b_erase.name = "b_erase";
	this.b_erase.setTransform(873.15,119.2,1.2,1.2);
	new cjs.ButtonHelper(this.b_erase, 0, 1, 2, false, new lib.sbise(), 3);

	this.b1 = new lib.b_1();
	this.b1.name = "b1";
	this.b1.setTransform(25.8,80.05,1.2,1.2);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.b_1(), 3);

	this.b2 = new lib.b_2();
	this.b2.name = "b2";
	this.b2.setTransform(102.05,80.05,1.2,1.2);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.b_2(), 3);

	this.b3 = new lib.b_3();
	this.b3.name = "b3";
	this.b3.setTransform(178.3,80.05,1.2,1.2);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.b_3(), 3);

	this.b4 = new lib.b_4();
	this.b4.name = "b4";
	this.b4.setTransform(254.55,80.05,1.2,1.2);
	new cjs.ButtonHelper(this.b4, 0, 1, 2, false, new lib.b_4(), 3);

	this.b5 = new lib.b_5();
	this.b5.name = "b5";
	this.b5.setTransform(330.75,80.05,1.2,1.2);
	new cjs.ButtonHelper(this.b5, 0, 1, 2, false, new lib.b_5(), 3);

	this.b6 = new lib.b_6();
	this.b6.name = "b6";
	this.b6.setTransform(407,80.05,1.2,1.2);
	new cjs.ButtonHelper(this.b6, 0, 1, 2, false, new lib.b_6(), 3);

	this.b7 = new lib.b_7();
	this.b7.name = "b7";
	this.b7.setTransform(483.25,80.05,1.2,1.2);
	new cjs.ButtonHelper(this.b7, 0, 1, 2, false, new lib.b_7(), 3);

	this.b8 = new lib.b_8();
	this.b8.name = "b8";
	this.b8.setTransform(559.5,80.05,1.2,1.2);
	new cjs.ButtonHelper(this.b8, 0, 1, 2, false, new lib.b_8(), 3);

	this.b9 = new lib.b_9();
	this.b9.name = "b9";
	this.b9.setTransform(635.7,80.05,1.2,1.2);
	new cjs.ButtonHelper(this.b9, 0, 1, 2, false, new lib.b_9(), 3);

	this.b10 = new lib.b_10();
	this.b10.name = "b10";
	this.b10.setTransform(711.95,80.05,1.2,1.2);
	new cjs.ButtonHelper(this.b10, 0, 1, 2, false, new lib.b_10(), 3);

	this.b11 = new lib.b_11();
	this.b11.name = "b11";
	this.b11.setTransform(788.4,80.05,1.2,1.2);
	new cjs.ButtonHelper(this.b11, 0, 1, 2, false, new lib.b_11(), 3);

	this.b12 = new lib.b_12();
	this.b12.name = "b12";
	this.b12.setTransform(25.9,208.15,1.2,1.2,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.b12, 0, 1, 2, false, new lib.b_12(), 3);

	this.b13 = new lib.b_13();
	this.b13.name = "b13";
	this.b13.setTransform(102.15,205.35,1.2,1.2,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.b13, 0, 1, 2, false, new lib.b_13(), 3);

	this.b14 = new lib.b_14();
	this.b14.name = "b14";
	this.b14.setTransform(178.3,205.35,1.2,1.2,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.b14, 0, 1, 2, false, new lib.b_14(), 3);

	this.b15 = new lib.b_5_1();
	this.b15.name = "b15";
	this.b15.setTransform(254.55,205.35,1.2,1.2,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.b15, 0, 1, 2, false, new lib.b_5_1(), 3);

	this.b16 = new lib.b_16();
	this.b16.name = "b16";
	this.b16.setTransform(330.85,205.35,1.2,1.2,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.b16, 0, 1, 2, false, new lib.b_16(), 3);

	this.b17 = new lib.b_17();
	this.b17.name = "b17";
	this.b17.setTransform(407.1,205.35,1.2,1.2,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.b17, 0, 1, 2, false, new lib.b_17(), 3);

	this.b18 = new lib.b_18();
	this.b18.name = "b18";
	this.b18.setTransform(483.25,205.35,1.2,1.2,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.b18, 0, 1, 2, false, new lib.b_18(), 3);

	this.b19 = new lib.b_19();
	this.b19.name = "b19";
	this.b19.setTransform(559.5,205.35,1.2,1.2,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.b19, 0, 1, 2, false, new lib.b_19(), 3);

	this.b20 = new lib.b_20();
	this.b20.name = "b20";
	this.b20.setTransform(635.8,205.35,1.2,1.2,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.b20, 0, 1, 2, false, new lib.b_20(), 3);

	this.b21 = new lib.b_21();
	this.b21.name = "b21";
	this.b21.setTransform(712.05,205.35,1.2,1.2,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.b21, 0, 1, 2, false, new lib.b_21(), 3);

	this.b22 = new lib.b_22();
	this.b22.name = "b22";
	this.b22.setTransform(788.5,205.35,1.2,1.2,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.b22, 0, 1, 2, false, new lib.b_22(), 3);

	this.b_okey = new lib.okey();
	this.b_okey.name = "b_okey";
	this.b_okey.setTransform(902.25,380.1,2,2);
	new cjs.ButtonHelper(this.b_okey, 0, 1, 2, false, new lib.okey(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b_okey},{t:this.b22},{t:this.b21},{t:this.b20},{t:this.b19},{t:this.b18},{t:this.b17},{t:this.b16},{t:this.b15},{t:this.b14},{t:this.b13},{t:this.b12},{t:this.b11},{t:this.b10},{t:this.b9},{t:this.b8},{t:this.b7},{t:this.b6},{t:this.b5},{t:this.b4},{t:this.b3},{t:this.b2},{t:this.b1},{t:this.b_erase},{t:this.b_space}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.letters, new cjs.Rectangle(0,6,1039.6,417.1), null);


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
	this.instance = new lib.CachedBmp_46();
	this.instance.setTransform(-149.9,104.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// text
	this.instance_1 = new lib.CachedBmp_47();
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
	this.instance = new lib.CachedBmp_45();
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
	this.d1.setTransform(30.6,0,2.0345,1,0,0,0,14.6,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d1},{t:this.d2},{t:this.d3},{t:this.d4},{t:this.d5}]}).wait(1));

	// kokkino
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("A3bBpIAAjRMAu3AAAIAADRg");
	this.shape_1.setTransform(150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epidosi, new cjs.Rectangle(-62,-10.5,362,21.2), null);


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

	// plaisia
	this.whoiswho = new lib.who_is_who();
	this.whoiswho.name = "whoiswho";
	this.whoiswho.setTransform(510,578.85,1,1,0,0,0,540,35);

	this.plaisio_2 = new lib.decripted_mc();
	this.plaisio_2.name = "plaisio_2";
	this.plaisio_2.setTransform(510,496.55,1,1,0,0,0,540,45.7);

	this.plaisio_1 = new lib.encript_mc();
	this.plaisio_1.name = "plaisio_1";
	this.plaisio_1.setTransform(510,402.95,1,1,0,0,0,540,46.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.plaisio_1},{t:this.plaisio_2},{t:this.whoiswho}]}).wait(1));

	// buttons
	this.letters = new lib.letters();
	this.letters.name = "letters";
	this.letters.setTransform(742.7,318.1,1,1,0,0,0,519.8,213.6);

	this.timeline.addTween(cjs.Tween.get(this.letters).wait(1));

	// backgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcs, new cjs.Rectangle(-30,0,1310,720), null);


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

	this.instance = new lib.CachedBmp_48();
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
(lib.filiki_ENG = function(mode,startPosition,loop,reversed) {
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
		var oi_erotiseis=[[],[],[],[]];
		var the_bara=this.bara;
		var the_intro=this.intro;
		var the_mcs=this.mc;
		var the_levels=this.intro.levels;
		var toggles=[the_levels.inv1,the_levels.inv2];
		var xx,epipedo,ask_index,flag_tick,points_to_earn;
		var quest_numbs=[];
		var tis_baras=[the_bara.home,the_bara.back,the_bara.epom,the_bara.xronos, the_bara.epidosi,the_bara.otitlos];
		var ta_damakia=[the_bara.epidosi.d1,the_bara.epidosi.d2,the_bara.epidosi.d3,the_bara.epidosi.d4,the_bara.epidosi.d5,the_bara.epidosi.d6,the_bara.epidosi.d7,the_bara.epidosi.d8,the_bara.epidosi.d9,the_bara.epidosi.d10];
		var	o_xronos,bima_xronou;
		var decr=["α","β","γ","δ","ε","ζ","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ","τ","φ","χ","ψ","ου"," "];
		var lets=[the_mcs.letters.b1,the_mcs.letters.b2,the_mcs.letters.b3,the_mcs.letters.b4,the_mcs.letters.b5,the_mcs.letters.b6,the_mcs.letters.b7,the_mcs.letters.b8,the_mcs.letters.b9,the_mcs.letters.b10,the_mcs.letters.b11,the_mcs.letters.b12,the_mcs.letters.b13,the_mcs.letters.b14,the_mcs.letters.b15,the_mcs.letters.b16,the_mcs.letters.b17,the_mcs.letters.b18,the_mcs.letters.b19,the_mcs.letters.b20,the_mcs.letters.b21,the_mcs.letters.b22];
		var typed=[];
		function start_up() {
			var preload1 = new createjs.LoadQueue();
			createjs.Sound.registerSound("sounds/eng_fil1.mp3", "intro");
			createjs.Sound.registerSound("sounds/eng_fil2.mp3", "odigies");
			createjs.Sound.registerSound("sounds/eng_fil_c28.mp3", "bravo");
			createjs.Sound.registerSound("sounds/eng_fil_c8.mp3", "wrong");
			createjs.Sound.registerSound("sounds/eng_fil_c22.mp3", "telos_xronou");
			createjs.Touch.enable(stage);
			the_bara.home.addEventListener("click",gotomenou);
			the_intro.niki_talks.mouseChildren=false;
			the_intro.niki_talks.cursor="pointer";
			the_intro.niki_talks.addEventListener("click",say_intro);
		
			flag_tick=0;
			bima_xronou=10;
			epipedo=0; //0=easy 1=difficult
			set_the_bara([1,0,0,0,0,1]);
			the_intro.visible=true;
			the_mcs.visible=false;
			the_mcs.mouseEnabled=false;
			the_intro.start_it.addEventListener("click",start_the_game);
			the_bara.epom.addEventListener("click",epomeni);
			the_bara.back.addEventListener("click",go_back);
			for (xx=0;xx<lets.length;xx++) {
				lets[xx].mouseChildren=false;
				lets[xx].theid=xx;
				lets[xx].addEventListener("click",type_it);
			}
			the_mcs.letters.b_erase.addEventListener("click",sbise);
			the_mcs.letters.b_space.addEventListener("click",type_space);
			the_mcs.letters.b_okey.addEventListener("click",submit_it);
		
			the_mcs.plaisio_1.they=the_mcs.plaisio_1.y;
			the_mcs.plaisio_2.they=the_mcs.plaisio_2.y;
			the_mcs.whoiswho.they=the_mcs.whoiswho.y;
			
			for (xx=0;xx<2;xx++) {
				toggles[xx].mouseChildren=false;
				toggles[xx].cursor="pointer";
				toggles[xx].theid=xx;
				toggles[xx].addEventListener("click",epilogi_epipedou);
			}
			createjs.Ticker.addEventListener("tick", tiki_tiki);
			
			preload1.addEventListener("fileload", handleFileComplete1);
			preload1.loadFile("xml/eng_filiki.xml");
		}
		function sbise(e) {
			console.log(typed);
			createjs.Sound.stop();
			if (typed.length>0) {
				typed.splice(typed.length-1,1);
				console.log(typed);
				display_the_decrypted();
			}
		}
		function type_space(e) {
			createjs.Sound.stop();
			if (the_mcs.plaisio_2.apokodikop.text.length<28) {
				typed.push(" ");
			}
		}
		function type_it(e) {
			createjs.Sound.stop();
			if (the_mcs.plaisio_2.apokodikop.text.length<28) {
				typed.push(decr[e.currentTarget.theid]);
				display_the_decrypted();
			}
		}
		function display_the_decrypted() {
			the_mcs.plaisio_2.apokodikop.text=""
			for (xx=0;xx<typed.length;xx++) {
				the_mcs.plaisio_2.apokodikop.text=the_mcs.plaisio_2.apokodikop.text+typed[xx];
			}
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
			var temppin=oi_erotiseis[3][quest_numbs[ask_index]].split(",");
			console.log(oi_erotiseis[0][quest_numbs[ask_index]])
			the_mcs.whoiswho.visible=false;
			if (oi_erotiseis[1][quest_numbs[ask_index]]=="#") {
				the_mcs.whoiswho.to_sxolio.visible=false;
			} else {
				the_mcs.whoiswho.to_sxolio.visible=true;
				the_mcs.whoiswho.to_sxolio.keimenon.text=oi_erotiseis[1][quest_numbs[ask_index]];
			}
			the_mcs.plaisio_1.y=the_mcs.plaisio_1.they;
			the_mcs.plaisio_2.y=the_mcs.plaisio_2.they;
			the_mcs.whoiswho.y=the_mcs.whoiswho.they;
			
			the_mcs.whoiswho.he_is.text=oi_erotiseis[0][quest_numbs[ask_index]]
			
			the_mcs.plaisio_2.apokodikop.text="";
			typed=[];
			points_to_earn=1;
			the_mcs.plaisio_1.kodikop.text="";
			for (xx=0;xx<temppin.length;xx++) {
				the_mcs.plaisio_1.kodikop.text=the_mcs.plaisio_1.kodikop.text+temppin[xx];
			}
			
			the_mcs.visible=true;
			the_mcs.mouseEnabled=true;
			the_mcs.letters.visible=true;
			the_mcs.entoli.gotoAndStop(0);
			the_bara.xronos.aspro.scaleX=1;
			o_xronos=0;
			flag_tick=1;
			set_the_bara([1,1,0,1,1,0]);
		}
		function submit_it(e) {
			console.log(the_mcs.plaisio_1.y);
			console.log(the_mcs.plaisio_2.y);
			console.log(the_mcs.whoiswho.y);
			console.log(the_mcs.plaisio_2.apokodikop.text);
			console.log(oi_erotiseis[2][quest_numbs[ask_index]]);
			if (the_mcs.plaisio_2.apokodikop.text==oi_erotiseis[2][quest_numbs[ask_index]]) {
				the_mcs.letters.visible=false;
				createjs.Sound.stop();
				createjs.Sound.play("bravo");
				deixe_sosto();
			} else {
				points_to_earn=points_to_earn+1;
				createjs.Sound.stop();
				createjs.Sound.play("wrong");
				if (points_to_earn>3) {
					points_to_earn=3;
				}
			}
		}
		function deixe_sosto() {
			the_mcs.letters.visible=false;
			the_mcs.whoiswho.visible=true;
			createjs.Tween.get(the_mcs.plaisio_1).to({y: the_mcs.plaisio_1.they-150}, 300, createjs.Ease.none());
			createjs.Tween.get(the_mcs.plaisio_2).to({y: the_mcs.plaisio_2.they-150}, 300, createjs.Ease.none());
			createjs.Tween.get(the_mcs.whoiswho).to({y: the_mcs.whoiswho.they-150}, 300, createjs.Ease.none());
			ta_damakia[ask_index].gotoAndStop(points_to_earn);
			flag_tick=0;
			if (ask_index==4) {
				set_the_bara([1,1,0,1,1,0]);	
			} else {
				set_the_bara([1,1,1,1,1,0]);	
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
				o_xronos = o_xronos % 80;
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
			display_erotisi();
		}
		function handleFileComplete1(event) {
			var olon = event.result;
			var epikefs = ["kanoniko", "sxolio", "decripted", "encripted"];
			var templist;
			for (i = 0; i < epikefs.length; i++) {
				templist = olon.getElementsByTagName(epikefs[i]);
				for (j = 0; j < templist.length; j++) {
					oi_erotiseis[i].push(templist[j].childNodes[0].nodeValue);
				}
			}
			console.log(oi_erotiseis);
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

	// apokript
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
p.nominalBounds = new cjs.Rectangle(610,345,696.5,390.1);
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
		{src:"images/CachedBmp_44.png?1618212407990", id:"CachedBmp_44"},
		{src:"images/CachedBmp_42.png?1618212407990", id:"CachedBmp_42"},
		{src:"images/CachedBmp_40.png?1618212407990", id:"CachedBmp_40"},
		{src:"images/background_black.jpg?1618212407990", id:"background_black"},
		{src:"images/filiki_ENG_atlas_1.png?1618212407931", id:"filiki_ENG_atlas_1"}
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