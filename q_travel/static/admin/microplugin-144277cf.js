!function(n,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():n.MicroPlugin=e()}(this,function(){var n={};n.mixin=function(n){n.plugins={},n.prototype.initializePlugins=function(n){var i,t,r,o=this,s=[];if(o.plugins={names:[],settings:{},requested:{},loaded:{}},e.isArray(n))for(i=0,t=n.length;t>i;i++)"string"==typeof n[i]?s.push(n[i]):(o.plugins.settings[n[i].name]=n[i].options,s.push(n[i].name));else if(n)for(r in n)n.hasOwnProperty(r)&&(o.plugins.settings[r]=n[r],s.push(r));for(;s.length;)o.require(s.shift())},n.prototype.loadPlugin=function(e){var i=this,t=i.plugins,r=n.plugins[e];if(!n.plugins.hasOwnProperty(e))throw new Error('Unable to find "'+e+'" plugin');t.requested[e]=!0,t.loaded[e]=r.fn.apply(i,[i.plugins.settings[e]||{}]),t.names.push(e)},n.prototype.require=function(n){var e=this,i=e.plugins;if(!e.plugins.loaded.hasOwnProperty(n)){if(i.requested[n])throw new Error('Plugin has circular dependency ("'+n+'")');e.loadPlugin(n)}return i.loaded[n]},n.define=function(e,i){n.plugins[e]={name:e,fn:i}}};var e={isArray:Array.isArray||function(n){return"[object Array]"===Object.prototype.toString.call(n)}};return n});