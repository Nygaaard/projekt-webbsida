// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j2YDk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var _loginAdmin = require("./loginAdmin");
var _displayMenu = require("./displayMenu");
var _registerAdmin = require("./registerAdmin");
var _updateMenu = require("./updateMenu");
var _addMenu = require("./addMenu");
var _registerSubscriber = require("./registerSubscriber");
document.addEventListener("DOMContentLoaded", ()=>{
    //Variables
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const userNameLoginEl = document.getElementById("userNameLogin");
    const passwordLoginEl = document.getElementById("passWordLogin");
    const errorMessageEl = document.getElementById("errMessageLog");
    const firstnameEl = document.getElementById("firstname");
    const lastnameEl = document.getElementById("lastname");
    const emailEl = document.getElementById("email");
    const usernameRegisterEl = document.getElementById("username");
    const passwordRegisterEl = document.getElementById("password");
    const addCourseEl = document.getElementById("addCourse");
    const addCoursenameEl = document.getElementById("addCoursename");
    const addCourseDescriptionEl = document.getElementById("addCourseDescription");
    const addCoursePriceEl = document.getElementById("addCoursePrice");
    const addCourseCategoryEl = document.getElementById("addCourseCategory");
    const addDrinknameEl = document.getElementById("addDrinkname");
    const addDrinkDescriptionEl = document.getElementById("addDrinkDescription");
    const addDrinkPriceEl = document.getElementById("addDrinkPrice");
    const addDrinkEl = document.getElementById("addDrink");
    const firstnameSubEl = document.getElementById("firstnameSub");
    const lastnameSubEl = document.getElementById("lastnameSub");
    const emailSubEl = document.getElementById("emailSub");
    const addressSubEl = document.getElementById("addressSub");
    // Display menu if on menu page
    if (window.location.pathname.includes("menu")) {
        (0, _displayMenu.displayCourses)();
        (0, _displayMenu.displayDrinks)();
    }
    //If on index page
    if (window.location.pathname.includes("index")) {
        const subscribeEl = document.getElementById("subscribe");
        subscribeEl.addEventListener("click", async function() {
            event.preventDefault();
            const firstname = firstnameSubEl.value;
            const lastname = lastnameSubEl.value;
            const email = emailSubEl.value;
            const address = addressSubEl.value;
            try {
                await (0, _registerSubscriber.registerSubscriber)(firstname, lastname, email, address);
            } catch (error) {
                console.log("Error during subscription...", error);
            }
        });
    }
    // If on login page
    if (window.location.pathname.includes("login")) loginForm.addEventListener("submit", async (event1)=>{
        event1.preventDefault();
        const username = userNameLoginEl.value;
        const password = passwordLoginEl.value;
        // Clear previous error messages
        errorMessageEl.textContent = "";
        try {
            await (0, _loginAdmin.loginAdmin)(username, password);
        } catch (error) {
            console.error("Error during login:", error);
        }
    });
    // If on admin page
    if (window.location.pathname.includes("admin")) {
        (0, _updateMenu.displayCoursesAdmin)();
        (0, _updateMenu.displayDrinksAdmin)();
        //Register new user on admin page
        registerForm.addEventListener("submit", async (event1)=>{
            event1.preventDefault();
            const firstname = firstnameEl.value;
            const lastname = lastnameEl.value;
            const email = emailEl.value;
            const username = usernameRegisterEl.value;
            const password = passwordRegisterEl.value;
            try {
                await (0, _registerAdmin.registerAdmin)(firstname, lastname, email, username, password);
            } catch (error) {
                console.error("Error registering user", error);
            }
        });
        //Add new course on admin page
        addCourseEl.addEventListener("click", async function() {
            event.preventDefault();
            const coursename = addCoursenameEl.value;
            const description = addCourseDescriptionEl.value;
            const price = addCoursePriceEl.value;
            const category = addCourseCategoryEl.value;
            try {
                await (0, _addMenu.addCourse)(coursename, description, price, category);
                alert("Ny r\xe4tt tillagd!");
            } catch (error) {
                console.error("Error add new course");
            }
        });
        //Add new drink on admin page
        addDrinkEl.addEventListener("click", async function() {
            event.preventDefault();
            const drinkname = addDrinknameEl.value;
            const description = addDrinkDescriptionEl.value;
            const price = addDrinkPriceEl.value;
            try {
                await (0, _addMenu.addDrink)(drinkname, description, price);
                alert("Ny dryck tillagd!");
            } catch (error) {
                console.log("Error adding new drink");
            }
        });
    }
});

},{"./loginAdmin":"8Ahzo","./displayMenu":"gUxyG","./registerAdmin":"7KAcC","./updateMenu":"e1R4P","./addMenu":"iXZ8Y","./registerSubscriber":"1Vfy5"}],"8Ahzo":[function(require,module,exports) {
//Login admin
//Variables
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loginAdmin", ()=>loginAdmin);
parcelHelpers.export(exports, "validateUser", ()=>validateUser);
const errMessageLogEl = document.getElementById("errMessageLog");
const errmessageFailEl = document.getElementById("errMessageFail");
const errMessage = sessionStorage.getItem("failedLogin");
if (window.location.pathname.includes("login")) {
    if (errMessage) errmessageFailEl.textContent = errMessage;
}
async function loginAdmin(username, password) {
    try {
        //If any input field is missing
        if (!username || !password) {
            if (!username) errMessageLogEl.textContent = "Fyll i anv\xe4ndarnamnet";
            if (!password) errMessageLogEl.textContent = "Fyll i l\xf6senordet";
            errMessageLogEl.textContent = "B\xe5de anv\xe4ndarnamn och l\xf6senord m\xe5ste fyllas i ";
        }
        const url = "http://localhost:3000/api/login";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        //If wrong username/password
        if (!response.ok) errMessageLogEl.textContent = "Fel anv\xe4ndarnamn eller l\xf6senord";
        const data = await response.json();
        const token = data.response.token;
        const validate = await validateUser(token);
        //Validate authorization
        if (validate.message === "Protected route") {
            sessionStorage.removeItem("failedLogin");
            alert("Du \xe4r inloggad");
            window.location.href = `admin?username=${username}`;
        }
    } catch (error) {
        errmessageFailEl.textContent = "";
        sessionStorage.removeItem("failedLogin");
        errMessageLogEl.textContent = "Fel anv\xe4ndarnamn eller l\xf6senord";
    }
}
async function validateUser(token) {
    const url = "http://localhost:3000/api/protected";
    const response = await fetch(url, {
        method: "GET",
        headers: {
            authorization: "Bearer " + token
        }
    }).then((response)=>{
        if (!response.ok) throw new Error("Inloggningen misslyckades");
        localStorage.setItem("token", token);
        return response;
    }).catch((error)=>{
        console.error("Fel vid inloggning:", error.message);
    });
    return response.json();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gUxyG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Display courses
parcelHelpers.export(exports, "displayCourses", ()=>displayCourses);
//Display drinks
parcelHelpers.export(exports, "displayDrinks", ()=>displayDrinks);
var _getData = require("./getData");
async function displayCourses() {
    const courses = await (0, _getData.getCourses)();
    const courseSectionEl = document.getElementById("courseSection");
    // Create and append course header
    const courseHeader = document.createElement("h2");
    courseHeader.textContent = "R\xe4tter";
    courseSectionEl.appendChild(courseHeader);
    // Display courses
    courses.menu.forEach((course)=>{
        // Create course elements
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("menu-item");
        const courseName = document.createElement("h3");
        courseName.textContent = course.coursename;
        const description = document.createElement("p");
        description.textContent = course.description;
        const price = document.createElement("span");
        price.classList.add("price");
        price.textContent = course.price + " kr";
        // Append elements to course div
        courseDiv.appendChild(courseName);
        courseDiv.appendChild(description);
        courseDiv.appendChild(price);
        // Append course div to course section
        courseSectionEl.appendChild(courseDiv);
    });
}
async function displayDrinks() {
    const drinks = await (0, _getData.getDrinks)();
    const drinkSectionEl = document.getElementById("drinkSection");
    // Create and append drink header
    const drinkHeader = document.createElement("h2");
    drinkHeader.textContent = "Dryck";
    drinkSectionEl.appendChild(drinkHeader);
    // Display drinks
    drinks.menu.forEach((drink)=>{
        // Create drink elements
        const drinkDiv = document.createElement("div");
        drinkDiv.classList.add("menu-item");
        const drinkName = document.createElement("h3");
        drinkName.textContent = drink.drinkname;
        const description = document.createElement("p");
        description.textContent = drink.description;
        const price = document.createElement("span");
        price.classList.add("price");
        price.textContent = drink.price + " kr";
        // Append elements to drink div
        drinkDiv.appendChild(drinkName);
        drinkDiv.appendChild(description);
        drinkDiv.appendChild(price);
        // Append drink div to drink section
        drinkSectionEl.appendChild(drinkDiv);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./getData":"7kMqK"}],"7kMqK":[function(require,module,exports) {
//Get data from courses table
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCourses", ()=>getCourses);
//Get data from drinks table
parcelHelpers.export(exports, "getDrinks", ()=>getDrinks);
async function getCourses() {
    const url = "http://localhost:3000/api/courses";
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch  {
        console.error("Kunde inte h\xe4mta data");
    }
}
async function getDrinks() {
    const url = "http://localhost:3000/api/drinks";
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch  {
        console.error("Kunde inte h\xe4mta data");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7KAcC":[function(require,module,exports) {
//Register new admin
//Variables
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerAdmin", ()=>registerAdmin);
const errMessageRegEl = document.getElementById("errMessageReg");
async function registerAdmin(firstname, lastname, email, username, password) {
    try {
        //Validation
        //If any input field is empty
        if (!firstname || !lastname || !email || !username || !password) {
            errMessageRegEl.textContent = "Alla f\xe4lt m\xe5ste fyllas i.";
            return;
        }
        // Invalid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errMessageRegEl.textContent = "Ogiltig email-adress.";
            return;
        }
        //Invalid username
        if (username.length < 5) {
            errMessageRegEl.textContent = "Anv\xe4ndarnamn m\xe5ste vara minst 5 tecken l\xe5ngt.";
            return;
        }
        //Invalid password
        if (password.length < 8) {
            errMessageRegEl.textContent = "L\xf6senordet m\xe5ste vara minst 8 tecken l\xe5ngt.";
            return;
        }
        const url = "http://localhost:3000/api/register";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                username,
                password
            })
        });
        //If register succeeds
        if (!response.ok) {
            errMessageRegEl.textContent = "Kunde inte registrera ny anv\xe4ndare.";
            return;
        }
        //Return result
        const data = await response.json();
        alert("Du \xe4r nu registrerad!");
        let firstnameEl = document.getElementById("firstname");
        let lastnameEl = document.getElementById("lastname");
        let emailEl = document.getElementById("email");
        let usernameEl = document.getElementById("username");
        let passwordEl = document.getElementById("password");
        firstnameEl.value = "";
        lastnameEl.value = "";
        emailEl.value = "";
        usernameEl = "";
        passwordEl.value = "";
        return data;
    } catch (error) {
        console.log("Error register new user:");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1R4P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Display courses
parcelHelpers.export(exports, "displayCoursesAdmin", ()=>displayCoursesAdmin);
// Display drinks
parcelHelpers.export(exports, "displayDrinksAdmin", ()=>displayDrinksAdmin);
var _getData = require("./getData");
async function displayCoursesAdmin() {
    const courses = await (0, _getData.getCourses)();
    const updateFormEl = document.getElementById("update-form");
    // Create and append course header
    const courseHeader = document.createElement("h2");
    courseHeader.textContent = "R\xe4tter";
    updateFormEl.appendChild(courseHeader);
    // Display courses
    courses.menu.forEach((course, index)=>{
        // Generate unique IDs for each input
        const coursenameId = `coursename-${index}`;
        const descriptionId = `description-${index}`;
        const priceId = `price-${index}`;
        const categoryId = `category-${index}`;
        // Coursename
        const coursenameLabel = document.createElement("label");
        coursenameLabel.setAttribute("for", coursenameId);
        coursenameLabel.textContent = `Matr\xe4tt: ${course.coursename}`;
        const coursenameInput = document.createElement("input");
        coursenameInput.setAttribute("type", "text");
        coursenameInput.setAttribute("id", coursenameId);
        coursenameInput.setAttribute("name", "coursenameAdmin");
        coursenameInput.value = course.coursename;
        // Description
        const descriptionLabel = document.createElement("label");
        descriptionLabel.setAttribute("for", descriptionId);
        descriptionLabel.textContent = `Beskrivning: ${course.description}`;
        const descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("type", "text");
        descriptionInput.setAttribute("id", descriptionId);
        descriptionInput.setAttribute("name", "descriptionAdmin");
        descriptionInput.value = course.description;
        // Price
        const priceLabel = document.createElement("label");
        priceLabel.setAttribute("for", priceId);
        priceLabel.textContent = `Pris: ${course.price} kr`;
        const priceInput = document.createElement("input");
        priceInput.setAttribute("type", "text");
        priceInput.setAttribute("id", priceId);
        priceInput.setAttribute("name", "priceAdmin");
        priceInput.value = course.price;
        // Category
        const categoryLabel = document.createElement("label");
        categoryLabel.setAttribute("for", categoryId);
        categoryLabel.textContent = `Kategori:`;
        const categoryInput = document.createElement("input");
        categoryInput.setAttribute("type", "text");
        categoryInput.setAttribute("id", categoryId);
        categoryInput.setAttribute("name", "categoryAdmin");
        categoryInput.value = course.category;
        // Submit
        const updateCourseSubmitEl = document.createElement("input");
        updateCourseSubmitEl.setAttribute("type", "submit");
        updateCourseSubmitEl.setAttribute("id", `update-course-${index}`);
        updateCourseSubmitEl.value = "Uppdatera";
        //Onclick for update button
        updateCourseSubmitEl.onclick = function() {
            event.preventDefault();
            updateCourse(index, course.id);
            alert("R\xe4tt uppdaterad!");
        };
        //Delete
        const deleteCourseSubmitEl = document.createElement("input");
        deleteCourseSubmitEl.setAttribute("type", "submit");
        deleteCourseSubmitEl.setAttribute("id", `delete-course-${index}`);
        deleteCourseSubmitEl.value = "Radera";
        //Onclick for delete button
        deleteCourseSubmitEl.onclick = function() {
            event.preventDefault();
            deleteCourse(index, course.id);
            alert("R\xe4tt raderad!");
            coursenameInput.value = "";
            descriptionInput.value = "";
            priceInput.value = "";
            categoryInput.value = "";
        };
        // Append elements to update form
        updateFormEl.appendChild(coursenameLabel);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(coursenameInput);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(descriptionLabel);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(descriptionInput);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(priceLabel);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(priceInput);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(categoryLabel);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(categoryInput);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(updateCourseSubmitEl);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(deleteCourseSubmitEl);
        updateFormEl.appendChild(document.createElement("br"));
    });
}
async function displayDrinksAdmin() {
    const drinks = await (0, _getData.getDrinks)();
    const updateFormEl = document.getElementById("update-form");
    // Create and append drink header
    const drinkHeader = document.createElement("h2");
    drinkHeader.classList.add("dryck-header");
    drinkHeader.textContent = "Dryck";
    updateFormEl.appendChild(drinkHeader);
    // Display drinks
    drinks.menu.forEach((drink, index)=>{
        // Generate unique IDs for each input
        const drinknameId = `drinkname-${index}`;
        const drinkDescriptionId = `drink-description-${index}`;
        const drinkPriceId = `drink-price-${index}`;
        // Drinkname
        const drinknameLabel = document.createElement("label");
        drinknameLabel.setAttribute("for", drinknameId);
        drinknameLabel.textContent = `Dryck: ${drink.drinkname}`;
        const drinknameInput = document.createElement("input");
        drinknameInput.setAttribute("type", "text");
        drinknameInput.setAttribute("id", drinknameId);
        drinknameInput.setAttribute("name", "drinknameAdmin");
        drinknameInput.value = drink.drinkname;
        // Description
        const descriptionLabel = document.createElement("label");
        descriptionLabel.setAttribute("for", drinkDescriptionId);
        descriptionLabel.textContent = `Beskrivning: ${drink.description}`;
        const descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("type", "text");
        descriptionInput.setAttribute("id", drinkDescriptionId);
        descriptionInput.setAttribute("name", "descriptionDrinkAdmin");
        descriptionInput.value = drink.description;
        // Price
        const priceLabel = document.createElement("label");
        priceLabel.setAttribute("for", drinkPriceId);
        priceLabel.textContent = `Pris: ${drink.price} kr`;
        const priceInput = document.createElement("input");
        priceInput.setAttribute("type", "text");
        priceInput.setAttribute("id", drinkPriceId);
        priceInput.setAttribute("name", "priceDrinkAdmin");
        priceInput.value = drink.price;
        // Submit
        const updateDrinkSubmitEl = document.createElement("input");
        updateDrinkSubmitEl.setAttribute("type", "submit");
        updateDrinkSubmitEl.setAttribute("id", `update-drink-${index}`);
        updateDrinkSubmitEl.value = "Uppdatera";
        // Onclick for update button
        updateDrinkSubmitEl.onclick = function() {
            event.preventDefault();
            updateDrink(index, drink.id);
            alert("Dryck uppdaterad!");
        };
        // Delete
        const deleteDrinkSubmitEl = document.createElement("input");
        deleteDrinkSubmitEl.setAttribute("type", "submit");
        deleteDrinkSubmitEl.setAttribute("id", `delete-drink-${index}`);
        deleteDrinkSubmitEl.value = "Radera";
        // Onclick for delete button
        deleteDrinkSubmitEl.onclick = function() {
            event.preventDefault();
            deleteDrink(index, drink.id);
            alert("Dryck raderad!");
            drinknameInput.value = "";
            descriptionInput.value = "";
            priceInput.value = "";
        };
        // Append elements to update form
        updateFormEl.appendChild(drinknameLabel);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(drinknameInput);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(descriptionLabel);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(descriptionInput);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(priceLabel);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(priceInput);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(updateDrinkSubmitEl);
        updateFormEl.appendChild(document.createElement("br"));
        updateFormEl.appendChild(deleteDrinkSubmitEl);
        updateFormEl.appendChild(document.createElement("br"));
    });
}
//Update course
async function updateCourse(index, id) {
    const url = `http://localhost:3000/api/courses/${id}`;
    const coursename = document.getElementById(`coursename-${index}`).value;
    const description = document.getElementById(`description-${index}`).value;
    const price = document.getElementById(`price-${index}`).value;
    const category = document.getElementById(`category-${index}`).value;
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            coursename,
            description,
            price,
            category
        })
    });
}
//Delete course
async function deleteCourse(index, id) {
    const url = `http://localhost:3000/api/courses/${id}`;
    const coursename = document.getElementById(`coursename-${index}`).value;
    const description = document.getElementById(`description-${index}`).value;
    const price = document.getElementById(`price-${index}`).value;
    const category = document.getElementById(`category-${index}`).value;
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            coursename,
            description,
            price,
            category
        })
    });
}
// Update drinks
async function updateDrink(index, id) {
    const url = `http://localhost:3000/api/drinks/${id}`;
    const drinkname = document.getElementById(`drinkname-${index}`).value;
    const description = document.getElementById(`drink-description-${index}`).value;
    const price = document.getElementById(`drink-price-${index}`).value;
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            drinkname,
            description,
            price
        })
    });
}
// Delete drinks
async function deleteDrink(index, id) {
    const url = `http://localhost:3000/api/drinks/${id}`;
    const drinkname = document.getElementById(`drinkname-${index}`).value;
    const description = document.getElementById(`drink-description-${index}`).value;
    const price = document.getElementById(`drink-price-${index}`).value;
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            drinkname,
            description,
            price
        })
    });
}

},{"./getData":"7kMqK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXZ8Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addCourse", ()=>addCourse);
parcelHelpers.export(exports, "addDrink", ()=>addDrink);
const addCourseErrMsgEl = document.getElementById("addCourseErrMsg");
const addDrinkErrMsgEl = document.getElementById("addDrinkErrMsg");
async function addCourse(coursename, description, price, category) {
    try {
        if (!coursename || !description || !price || !category) addCourseErrMsgEl.textContent = "Alla f\xe4lt m\xe5ste fyllas i";
        const url = "http://localhost:3000/api/courses";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                coursename,
                description,
                price,
                category
            })
        });
    } catch (error) {
        console.log("Error adding new course");
    }
}
async function addDrink(drinkname, description, price) {
    try {
        if (!drinkname || !description || !price) addDrinkErrMsgEl.textContent = "Alla f\xe4lt m\xe5ste fyllas i";
        const url = "http://localhost:3000/api/drinks";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                drinkname,
                description,
                price
            })
        });
    } catch (error) {
        console.log("Error adding new drink");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Vfy5":[function(require,module,exports) {
//Register new admin
//Variables
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerSubscriber", ()=>registerSubscriber);
const errMessageSubscriberEl = document.getElementById("errMessageSubscribe");
if (window.location.pathname.includes("index")) errMessageSubscriberEl.classList.add("errMessageSub");
async function registerSubscriber(firstname, lastname, email, address) {
    try {
        //Validation
        //If any input field is empty
        if (!firstname || !lastname || !email || !address) {
            errMessageSubscriberEl.textContent = "Alla f\xe4lt m\xe5ste fyllas i.";
            return;
        }
        //Invalid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errMessageSubscriberEl.textContent = "Ogiltig email-adress.";
            return;
        }
        const url = "http://localhost:3000/api/subscribers";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                address
            })
        });
        //If register succeeds
        if (!response.ok) {
            errMessageSubscriberEl.textContent = "Kunde inte registrera prenumeration.";
            return;
        }
        //Return result
        const data = await response.json();
        alert("Du prenumererar nu p\xe5 nyhetsbrevet!");
        let firstnameEl = document.getElementById("firstname");
        let lastnameEl = document.getElementById("lastname");
        let emailEl = document.getElementById("email");
        let addressEl = document.getElementById("address");
        firstnameEl.value = "";
        lastnameEl.value = "";
        emailEl.value = "";
        addressEl.value = "";
        return data;
    } catch (error) {
        console.log(error);
        errMessageSubscriberEl.textContent = "N\xe5got gick fel...";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["j2YDk","1SICI"], "1SICI", "parcelRequiredfb8")

//# sourceMappingURL=admin.18dbc454.js.map
