(this["webpackJsonp3d-mouse"]=this["webpackJsonp3d-mouse"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),c=(n(9),n(1)),l=(n(10),n(11),window.Autodesk),u=window.THREE,s=function(e){var t=e.urn,n=e.token,r=new l.Viewing.ViewingApplication("MyViewerDiv"),i=Object(a.useState)("Select element"),s=Object(c.a)(i,2),d=s[0],m=s[1];function v(e){var t=r.bubble.search({type:"geometry"});0!==t.length&&r.selectItem(t[1].data,E,f)}function w(e){alert("Error onDocumentLoadFailure",e)}function E(e,n){var a=1;"urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YWpiYWRiYXNuZGJhbXNkbmFfL2RldGFpbC5kd2c"===t&&(a=1e4);var o=e.navigation,r=o.getPosition(),i=o.getTarget(),c=new u.Vector3;c.subVectors(r,i).normalize(),c.multiplyScalar(a),r.add(c),o.setPosition(r),e.addEventListener(l.Viewing.SELECTION_CHANGED_EVENT,(function(e){e.dbIdArray[0]?m("Selected ID is ".concat(e.dbIdArray[0])):m("Select element")}))}function f(e){alert("Error onItemLoadFail",e)}var g={env:"AutodeskProduction",getAccessToken:function(e){e(n,3600)}},b={extensions:[]};return Object(a.useEffect)((function(){l.Viewing.Initializer(g,(function(){r.registerViewer(r.k3D,l.Viewing.Viewer3D,b),r.loadDocument(t,v,w)}))}),[]),o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{id:"selectedId"},d),o.a.createElement("div",{id:"MyViewerDiv"}))};var d=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),l=Object(c.a)(i,2),u=l[0],d=l[1];return o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{className:"container"},"Token",o.a.createElement("input",{value:n,onChange:function(e){return r(e.target.value)},className:"control"})),o.a.createElement("div",{className:"container"},"URN",o.a.createElement("input",{value:u,onChange:function(e){return d(e.target.value)},className:"control"}))),n&&u&&o.a.createElement(s,{token:n,urn:"urn:".concat(u)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.954a4738.chunk.js.map