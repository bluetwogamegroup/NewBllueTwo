// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    LEVEL1: "LEVEL1" //THIS IS WHERE WE SET UP SCENES

  }
};
exports.CST = CST;
},{}],"src/Scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadScene).call(this, {
      key: _CST.CST.SCENES.LOAD
    }));
  } //ALL OF THE ABOVE MANDATORY FOR ALL THE SCENES, JUST MAKE SURE TO CHANGE CLASS NAME AND THE KEY FOR EACH SCENE


  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      //LOADING ALL THE ASSETS WE'RE GONNA USE
      this.load.image("TitleScreen", "./assets/TitleScreen.png");
      this.load.image("StartButton", "./assets/StartButton.png");
      this.load.image("OptionsButton", "./assets/OptionsButton.png");
      this.load.image("Level1Scene", "./assets/level.png"); //FOR SPRITESHEETS YOU HAVE TO GIVE IT THE HEIGHT AND FRAME OF ONE SPRITE ENGINE TAKES CARE OF THE REST

      this.load.spritesheet("RUN", "./assets/Haru'unRunningsword2.png", {
        //THE CAPITAL RUN HERE IS THE KEY WHICH WE USE TO REFER TO THIS SPRITESHEET
        frameHeight: 45,
        frameWidth: 90
      });
      this.load.spritesheet("IDLE", "./assets/IDLE.png", {
        frameHeight: 90,
        frameWidth: 90
      });
      this.load.spritesheet("BEAM", "./assets/HRBEAM.png", {
        frameHeight: 45,
        frameWidth: 120
      });
      this.load.spritesheet("SLASH", "./assets/HRSLASH.png", {
        frameHeight: 117,
        frameWidth: 250
      });
      this.load.spritesheet("SWING", "./assets/HRSWING.png", {
        frameHeight: 86,
        frameWidth: 113
      }); //this is how you load the audio pretty simple, there are more options to play with it but its not our priority

      this.load.audio("TitleScreenMusic", "./assets/TitleMusic.mp3"); //create loading bar

      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0xffffff //white

        }
      });
      /*
      Loader Events:
          complete - when done loading everything
          progress - loader number progress in decimal
      */
      //simulate large load THIS IS TO MAKE IT LOAD LONGER SO WE HAVE TIME TO LOAD THE ASSETS, so far i didnt see the need for it

      /*
      for(let i = 0; i < 100; i++){
          this.load.spritesheet("HaruunRunning" + i, "./assets/Haru'unRunningsword2.png", {
              frameHeight: 45,
              frameWidth: 90
          } );
      }*/
      //WHILE ITS LOADING THIS IS WHAT ITS DISPLAYING ON THE SCREEN

      this.load.on("progress", function (percent) {
        loadingBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
        console.log(percent);
      });
      this.load.on("complete", function () {
        console.log("done"); //this is what we get once the loading is complete
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU, "Hello From Load Scene"); //we load the menu scene and we send it data in this case a strin
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js"}],"src/Scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: _CST.CST.SCENES.MENU
    }));
  } //init function is used to pass and grab data from different scenes, could be useful for passing the hp and player stats


  _createClass(MenuScene, [{
    key: "init",
    value: function init(data) {
      //paramater passed from LoadScene.js gets passed here
      console.log(data);
      console.log("I GOT IT");
    }
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      //creating images
      var playButton = this.add.image(300, 250, "StartButton").setOrigin(0).setDepth(1);
      this.add.image(300, 500, "OptionsButton").setOrigin(0).setDepth(1);
      this.add.image(0, 0, "TitleScreen").setOrigin(0).setDepth(0); //create sprites 
      //this can be removed i was just learning how to do stuff

      var hoverSprite = this.add.sprite(100, 100, "IDLE");
      hoverSprite.setScale(2);
      hoverSprite.setVisible(false);
      /* THIS MAKES THE SOUND PLAY EVEN IF THE GAME TAB ISNT IN FOCUS, music was annoying after a while
      this.sound.pauseOnBlur = true;
      this.sound.play("TitleScreenMusic", {
          loop: true
      })
      */
      //creates the animation you see once you hover over the start button

      this.anims.create({
        key: "idle",
        frameRate: 2,
        repeat: -1,
        frames: this.anims.generateFrameNumbers("IDLE", {
          frames: [0, 1]
        })
      }); //button interaction
      //think this is pretty self explanatory

      playButton.setInteractive();
      playButton.on("pointerover", function () {
        hoverSprite.setVisible(true);
        hoverSprite.play("idle");
        hoverSprite.x = playButton.x;
        hoverSprite.y = playButton.y;
      });
      playButton.on("pointerout", function () {
        hoverSprite.setVisible(false);
      });
      playButton.on("pointerup", function () {
        console.log("OUTTA BITCH STOP CLICKIN");

        _this.scene.start(_CST.CST.SCENES.LEVEL1);
      });
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST":"src/CST.js"}],"src/Scenes/Level1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Level1 = void 0;

var _CST = require("../CST");

var _LoadScene = require("./LoadScene");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Level1 =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(Level1, _Phaser$Scene);

  function Level1() {
    _classCallCheck(this, Level1);

    return _possibleConstructorReturn(this, _getPrototypeOf(Level1).call(this, {
      key: _CST.CST.SCENES.LEVEL1
    }));
  } //preloading all the scenes cuz its a level and we dont wanna wait for enginge to grab them


  _createClass(Level1, [{
    key: "preload",
    value: function preload() {
      this.anims.create({
        key: "idle",
        frameRate: 10,
        repeat: -1,
        frames: this.anims.generateFrameNumbers("IDLE", {
          frames: [0, 1]
        })
      });
      this.anims.create({
        key: "idleLeft",
        frameRate: 5,
        repeat: -1,
        frames: this.anims.generateFrameNumbers("IDLE", {
          frames: [1, 0]
        })
      });
      this.anims.create({
        key: "runRight",
        frameRate: 7,
        repeat: -1,
        frames: this.anims.generateFrameNumbers("RUN", {
          frames: [2, 3, 4, 5, 6, 7]
        })
      });
      this.anims.create({
        key: "runLeft",
        frameRate: 7,
        repeat: -1,
        frames: this.anims.generateFrameNumbers("RUN", {
          frames: [7, 6, 5, 4, 3, 2]
        })
      });
      this.anims.create({
        key: "slash",
        frameRate: 60,
        repeat: -1,
        frames: this.anims.generateFrameNumbers("SLASH", {
          frames: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        })
      });
    }
  }, {
    key: "create",
    value: function create() {
      console.log("Loaded Level1");
      this.add.image(0, 0, "Level1Scene").setOrigin(0).setDepth(0); //setting the lvl 

      this.idleHarun = this.add.sprite(100, 600, "IDLE").setScale(1).play("idle"); //initializing sprite so that it can be used

      this.runRightHarun = this.add.sprite(this.idleHarun.x, this.idleHarun.y + 25, "RUN").setScale(1).play("runRight").setVisible(false);
      this.idleLeftHarun = this.add.sprite(this.idleHarun.x, this.idleHarun.y + 25, "RUN").setScale(1).play("idleLeft").setVisible(false);
      this.runLeftHarun = this.add.sprite(this.idleLeftHarun.x, this.idleLeftHarun.y + 25, "RUN").setScale(1).play("runLeft").setVisible(false);
      this.slashHarun = this.add.sprite(325, 575, "RUN").setScale(1).play("slash").setVisible(false);
      window.runRightHarun = this.runRightHarun; //making it global so we can use it outside this shithole

      window.idleHarun = this.idleHarun;
      window.idleLeftHarun = this.idleLeftHarun;
      window.runLeftHarun = this.runLeftHarun;
      window.slashHarun = this.slashHarun;
      this.keyboard = this.input.keyboard.addKeys("W, A, S, D");
      this.cameras.main.startFollow(this.idleHarun); //THIS ONE LINE DOES THE FUCKING CAMERA THING IM GONNA KILL MYSELF
    }
  }, {
    key: "update",
    value: function update(delta) {
      var isRunning = false; //this is where the magic happens, D works FINE need help with logic for A, too tired atm

      if (this.keyboard.D.isDown === true) {
        console.log("d is down");
        this.idleHarun.flipX = false;
        this.runRightHarun.flipX = false;
        this.idleHarun.setVisible(false);
        this.runRightHarun.setVisible(true);
        this.idleHarun.x = this.idleHarun.x + 2;
        this.runRightHarun.x = this.idleHarun.x;
        this.runRightHarun.play("runRight", true);
      } else if (this.keyboard.A.isDown === true) {
        this.idleHarun.flipX = true;
        this.runRightHarun.flipX = true;
        this.idleHarun.setVisible(false);
        this.runRightHarun.setVisible(true);
        this.idleHarun.x = this.idleHarun.x - 2;
        this.runRightHarun.x = this.idleHarun.x;
        this.runRightHarun.play("runRight", true);
        this.isflipped = true;
        console.log("a is down");
      } else {
        this.idleHarun.setVisible(true);
        this.runRightHarun.setVisible(false);
        console.log("d is up");
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.game.debug.cameraInfo(this.game.camera, 32, 32);
    }
  }]);

  return Level1;
}(Phaser.Scene);

exports.Level1 = Level1;
},{"../CST":"src/CST.js","./LoadScene":"src/Scenes/LoadScene.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./Scenes/LoadScene");

var _MenuScene = require("./Scenes/MenuScene");

var _Level = require("./Scenes/Level1");

/** @type {import ("../typings/phaser")} */
var game = new Phaser.Game({
  width: 800,
  height: 800,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, //dont forget to add scenes as you make them otherwise you wont see them
  _Level.Level1],
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  }
});
},{"./Scenes/LoadScene":"src/Scenes/LoadScene.js","./Scenes/MenuScene":"src/Scenes/MenuScene.js","./Scenes/Level1":"src/Scenes/Level1.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55491" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.map