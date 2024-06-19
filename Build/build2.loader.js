function createUnityInstance(e,r,n){function o(e,n){if(!o.aborted&&r.showBanner)return"error"==n&&(o.aborted=!0),r.showBanner(e,n);switch(n){case"error":console.error(e);break;case"warning":console.warn(e);break;default:console.log(e)}}function t(e){var r=e.reason||e.error,n=r?r.toString():e.message||e.reason||"",o=r&&r.stack?r.stack.toString():"";if(o.startsWith(n)&&(o=o.substring(n.length)),n+="\n"+o.trim(),n&&f.stackTraceRegExp&&f.stackTraceRegExp.test(n)){var t=e.filename||r&&(r.fileName||r.sourceURL)||"",a=e.lineno||r&&(r.lineNumber||r.line)||0;s(n,t,a)}}function a(e,r,n){var o=e[r];"undefined"!=typeof o&&o||(console.warn('Config option "'+r+'" is missing or empty. Falling back to default value: "'+n+'". Consider updating your WebGL template to include the missing config option.'),e[r]=n)}function i(e){e.preventDefault()}function s(e,r,n){if(f.startupErrorHandler)return void f.startupErrorHandler(e,r,n);if(!(f.errorHandler&&f.errorHandler(e,r,n)||(console.log("Invoking error handler due to\n"+e),"function"==typeof dump&&dump("Invoking error handler due to\n"+e),e.indexOf("UnknownError")!=-1||e.indexOf("Program terminated with exit(0)")!=-1||s.didShowErrorMessage))){var e="An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n"+e;e.indexOf("DISABLE_EXCEPTION_CATCHING")!=-1?e="An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.":e.indexOf("Cannot enlarge memory arrays")!=-1?e="Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.":e.indexOf("Invalid array buffer length")==-1&&e.indexOf("Invalid typed array length")==-1&&e.indexOf("out of memory")==-1&&e.indexOf("could not allocate memory")==-1||(e="The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),alert(e),s.didShowErrorMessage=!0}}function l(e,r){if("symbolsUrl"!=e){var o=f.downloadProgress[e];o||(o=f.downloadProgress[e]={started:!1,finished:!1,lengthComputable:!1,total:0,loaded:0}),"object"!=typeof r||"progress"!=r.type&&"load"!=r.type||(o.started||(o.started=!0,o.lengthComputable=r.lengthComputable,o.total=r.total),o.loaded=r.loaded,"load"==r.type&&(o.finished=!0));var t=0,a=0,i=0,s=0,l=0;for(var e in f.downloadProgress){var o=f.downloadProgress[e];if(!o.started)return 0;i++,o.lengthComputable?(t+=o.loaded,a+=o.total,s++):o.finished||l++}var d=i?(i-l-(a?s*(a-t)/a:0))/i:0;n(.9*d)}}function d(e){return new Promise(function(r,n){l(e);var t=new XMLHttpRequest;t.open("GET",f[e]),t.responseType="arraybuffer",t.addEventListener("progress",function(r){l(e,r)}),t.addEventListener("load",function(n){l(e,n),r(new Uint8Array(t.response))}),t.addEventListener("error",function(r){var n="Failed to download file "+f[e];"file:"==location.protocol?o(n+". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.","error"):console.error(n)}),t.send()})}function u(){return new Promise(function(e,r){var n=document.createElement("script");n.src=f.frameworkUrl,n.onload=function(){if("undefined"==typeof unityFramework||!unityFramework){var r=[["br","br"],["gz","gzip"]];for(var t in r){var a=r[t];if(f.frameworkUrl.endsWith("."+a[0])){var i="Unable to parse "+f.frameworkUrl+"!";if("file:"==location.protocol)return void o(i+" Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.","error");if(i+=' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: '+a[1]+'" present. Check browser Console and Devtools Network tab to debug.',"br"==a[0]&&"http:"==location.protocol){var s=["localhost","127.0.0.1"].indexOf(location.hostname)!=-1?"":"Migrate your server to use HTTPS.";i=/Firefox/.test(navigator.userAgent)?"Unable to parse "+f.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. '+s+' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.':"Unable to parse "+f.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.'}return void o(i,"error")}}o("Unable to parse "+f.frameworkUrl+"! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)","error")}var l=unityFramework;unityFramework=null,n.onload=null,e(l)},n.onerror=function(e){o("Unable to load file "+f.frameworkUrl+"! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)","error")},document.body.appendChild(n),f.deinitializers.push(function(){document.body.removeChild(n)})})}function c(){u().then(function(e){e(f)});var e=d("dataUrl");f.preRun.push(function(){f.addRunDependency("dataUrl"),e.then(function(e){var r=new DataView(e.buffer,e.byteOffset,e.byteLength),n=0,o="UnityWebData1.0\0";if(!String.fromCharCode.apply(null,e.subarray(n,n+o.length))==o)throw"unknown data format";n+=o.length;var t=r.getUint32(n,!0);for(n+=4;n<t;){var a=r.getUint32(n,!0);n+=4;var i=r.getUint32(n,!0);n+=4;var s=r.getUint32(n,!0);n+=4;var l=String.fromCharCode.apply(null,e.subarray(n,n+s));n+=s;for(var d=0,u=l.indexOf("/",d)+1;u>0;d=u,u=l.indexOf("/",d)+1)f.FS_createPath(l.substring(0,d),l.substring(d,u-1),!0,!0);f.FS_createDataFile(l,null,e.subarray(a,a+i),!0,!0,!0)}f.removeRunDependency("dataUrl")})})}n=n||function(){};var f={canvas:e,webglContextAttributes:{preserveDrawingBuffer:!1},streamingAssetsUrl:"StreamingAssets",downloadProgress:{},deinitializers:[],intervals:{},setInterval:function(e,r){var n=window.setInterval(e,r);return this.intervals[n]=!0,n},clearInterval:function(e){delete this.intervals[e],window.clearInterval(e)},preRun:[],postRun:[],print:function(e){console.log(e)},printErr:function(e){console.error(e),"string"==typeof e&&e.indexOf("wasm streaming compile failed")!=-1&&(e.toLowerCase().indexOf("mime")!=-1?o('HTTP Response Header "Content-Type" configured incorrectly on the server for file '+f.codeUrl+' , should be "application/wasm". Startup time performance will suffer.',"warning"):o('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file '+f.codeUrl+", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.","warning"))},locateFile:function(e){return"build.wasm"==e?this.codeUrl:e},disabledCanvasEvents:["contextmenu","dragstart"]};a(r,"companyName","Unity"),a(r,"productName","WebGL Player"),a(r,"productVersion","1.0");for(var g in r)f[g]=r[g];f.streamingAssetsUrl=new URL(f.streamingAssetsUrl,document.URL).href;var p=f.disabledCanvasEvents.slice();p.forEach(function(r){e.addEventListener(r,i)}),window.addEventListener("error",t),window.addEventListener("unhandledrejection",t);var h="",b="";document.addEventListener("webkitfullscreenchange",function(r){var n=document.webkitCurrentFullScreenElement;n===e?e.style.width&&(h=e.style.width,b=e.style.height,e.style.width="100%",e.style.height="100%"):h&&(e.style.width=h,e.style.height=b,h="",b="")});var m={Module:f,SetFullscreen:function(){return f.SetFullscreen?f.SetFullscreen.apply(f,arguments):void f.print("Failed to set Fullscreen mode: Player not loaded yet.")},SendMessage:function(){return f.SendMessage?f.SendMessage.apply(f,arguments):void f.print("Failed to execute SendMessage: Player not loaded yet.")},Quit:function(){return new Promise(function(r,n){f.shouldQuit=!0,f.onQuit=r,p.forEach(function(r){e.removeEventListener(r,i)}),window.removeEventListener("error",t),window.removeEventListener("unhandledrejection",t)})}};return f.SystemInfo=function(){function e(e,r,n){return e=RegExp(e,"i").exec(r),e&&e[n]}for(var r,n,o,t,a,i,s=navigator.userAgent+" ",l=[["Firefox","Firefox"],["OPR","Opera"],["Edg","Edge"],["SamsungBrowser","Samsung Browser"],["Trident","Internet Explorer"],["MSIE","Internet Explorer"],["Chrome","Chrome"],["CriOS","Chrome on iOS Safari"],["FxiOS","Firefox on iOS Safari"],["Safari","Safari"]],d=0;d<l.length;++d)if(n=e(l[d][0]+"[/ ](.*?)[ \\)]",s,1)){r=l[d][1];break}"Safari"==r&&(n=e("Version/(.*?) ",s,1)),"Internet Explorer"==r&&(n=e("rv:(.*?)\\)? ",s,1)||n);for(var u=[["Windows (.*?)[;)]","Windows"],["Android ([0-9_.]+)","Android"],["iPhone OS ([0-9_.]+)","iPhoneOS"],["iPad.*? OS ([0-9_.]+)","iPadOS"],["FreeBSD( )","FreeBSD"],["OpenBSD( )","OpenBSD"],["Linux|X11()","Linux"],["Mac OS X ([0-9_.]+)","MacOS"],["bot|google|baidu|bing|msn|teoma|slurp|yandex","Search Bot"]],c=0;c<u.length;++c)if(t=e(u[c][0],s,1)){o=u[c][1],t=t.replace(/_/g,".");break}var f={"NT 5.0":"2000","NT 5.1":"XP","NT 5.2":"Server 2003","NT 6.0":"Vista","NT 6.1":"7","NT 6.2":"8","NT 6.3":"8.1","NT 10.0":"10"};t=f[t]||t,a=document.createElement("canvas"),a&&(gl=a.getContext("webgl2"),glVersion=gl?2:0,gl||(gl=a&&a.getContext("webgl"))&&(glVersion=1),gl&&(i=gl.getExtension("WEBGL_debug_renderer_info")&&gl.getParameter(37446)||gl.getParameter(7937)));var g="undefined"!=typeof SharedArrayBuffer,p="object"==typeof WebAssembly&&"function"==typeof WebAssembly.compile;return{width:screen.width,height:screen.height,userAgent:s.trim(),browser:r||"Unknown browser",browserVersion:n||"Unknown version",mobile:/Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),os:o||"Unknown OS",osVersion:t||"Unknown OS Version",gpu:i||"Unknown GPU",language:navigator.userLanguage||navigator.language,hasWebGL:glVersion,hasCursorLock:!!document.body.requestPointerLock,hasFullscreen:!!document.body.requestFullscreen||!!document.body.webkitRequestFullscreen,hasThreads:g,hasWasm:p,hasWasmThreads:!1}}(),f.abortHandler=function(e){return s(e,"",0),!0},Error.stackTraceLimit=Math.max(Error.stackTraceLimit||0,50),new Promise(function(e,r){f.SystemInfo.hasWebGL?f.SystemInfo.hasWasm?(1==f.SystemInfo.hasWebGL&&f.print('Warning: Your browser does not support "WebGL 2.0" Graphics API, switching to "WebGL 1.0"'),f.startupErrorHandler=r,n(0),f.postRun.push(function(){n(1),delete f.startupErrorHandler,e(m)}),c()):r("Your browser does not support WebAssembly."):r("Your browser does not support WebGL.")})}