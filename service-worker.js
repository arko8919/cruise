"use strict";var precacheConfig=[["/cruise/index.html","bcaf88b928f5c23c81cb8d16610b1b62"],["/cruise/static/css/main.162271c9.css","4f34e3de44ec697c6c650c6068f76829"],["/cruise/static/js/main.d4173557.js","cdcf70271f5d4f12c69283e59aa7e343"],["/cruise/static/media/carnival-cruises.8f36568a.jpg","8f36568aab09d68f7337ad865bcb12fa"],["/cruise/static/media/celebrity-cruises.b8e091b2.jpg","b8e091b24d3ce8a77ceb96cb2b29679d"],["/cruise/static/media/cruise-and-maritime-voyages.6079e01d.jpg","6079e01dd0412b4b99ebb4badea957be"],["/cruise/static/media/cunard.d7e64a3a.jpg","d7e64a3aefc81ef4b79a5fa28a3d3462"],["/cruise/static/media/fred-olsen.ed6545fe.jpg","ed6545fec2687850be37c17d0e9084b4"],["/cruise/static/media/holland-america-cruises.fb5a3c84.jpg","fb5a3c847d7f03e160712f6c7447039d"],["/cruise/static/media/msc-cruises.a5ae866c.jpg","a5ae866c58d344eb05e72d0d22301638"],["/cruise/static/media/ncl-cruises.7640b7c8.jpg","7640b7c867afa00343adec13b051a795"],["/cruise/static/media/pando.0159c900.jpg","0159c9007cf8f4690158bb1b984fd530"],["/cruise/static/media/princess-cruises.fadc6795.jpg","fadc679552cabab0d6f241cf1b096aa1"],["/cruise/static/media/royal-caribbean.ef456d1c.jpg","ef456d1c20b521432416010aad826e03"],["/cruise/static/media/thomson-cruises.1d1ce0f1.jpg","1d1ce0f107c3badbb48bbd36c9564950"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/cruise/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});