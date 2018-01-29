!function(n){n.module("selectize",[]).directive("selectize",["$parse","$timeout",function(e,t){var i=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,a=/.*?(?=\s?\|)|.*\b/;return{scope:{multiple:"@",opts:"@selectize"},require:"?ngModel",link:function(o,r,u,s){function c(){o.$watchCollection(function(){return s.$modelValue},function(n){y=n,S=!0,x||p()})}function l(){o.$parent.$watchCollection(C,function(n){b=n||[],k=!0,x||p()})}function f(){o.$parent.$watch(u.ngDisabled,function(n){V&&(n?V.disable():V.enable())})}function p(){return V?void(x=t(function(){var n=y,e=b,t=Object.keys(V.options),i=0===t.length||V.options["?"]&&1===t.length;if(k&&(i||V.clearOptions(),V.load(function(n){n(e.map(function(n,e){return{text:h(n),value:e}}))})),S||k){var a=O(n);(o.multiple||0===a.length)&&(V.clear(),s.$setViewValue(n)),a.forEach(function(n){V.addItem(n)}),V.removeOption("?");var r=V.getOption(0);r&&V.setActiveOption(r)}S=k=!1,x=null})):(z||v(),void(S=k=!1))}function v(){z=!0,o.$evalAsync(function(){z=!1,$(r).selectize(A),V=r[0].selectize,u.ngOptions&&(o.multiple?(V.on("item_add",d),V.on("item_remove",w)):A.create&&V.on("item_add",m))})}function d(n){var e=s.$viewValue,t=o.$parent.$eval(C)[n];n=t?g(t):n,-1===e.indexOf(n)&&(e.push(n),!t&&A.create&&-1===o.$parent[D].indexOf(n)&&o.$parent[D].push(n),o.$evalAsync(function(){s.$setViewValue(e)}))}function m(n){var e=s.$viewValue,t=o.$parent.$eval(C)[n];n=t?g(t):n,e!==n&&(e=n,t||-1!==o.$parent[D].indexOf(n)||o.$parent[D].push(n),o.$evalAsync(function(){s.$setViewValue(e)}))}function w(n){var e=s.$viewValue,t=o.$parent.$eval(C)[n];n=t?g(t):n;var i=e.indexOf(n);i>=0&&(e.splice(i,1),o.$evalAsync(function(){s.$setViewValue(e)}))}function O(e){if(e=n.isArray(e)?e:[e]||[],!u.ngOptions)return e.map(function(n){return V.options[n]?V.options[n].value:""});var t=o.$parent.$eval(C);if(!t)return[];var i=t.reduce(function(n,t,i){var a=g(t);return e.indexOf(a)>=0&&(n[a]=i),n},{});return Object.keys(i).map(function(n){return i[n]})}function g(n){var e={};return e[j]=n,E(e)}function h(n){var e={};return e[j]=n,q(e)}var V,y,b,x,A=o.$parent.$eval(o.opts)||{},z=!1,S=!1,k=!1;if(c(),u.ngDisabled&&f(),u.ngOptions){var _=u.ngOptions.match(i),j=_[4]||_[6],C=_[7],D=C.match(a),q=e(_[2]||_[1]),E=e(_[2]?_[1]:j);l(),o.$on("$destroy",function(){x&&t.cancel(x)})}}}}])}(angular);