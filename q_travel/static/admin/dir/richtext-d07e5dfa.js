(function(){define(["redactor","bs-form"],function(){return angular.module("schemaForm").directive("richtext",["$timeout",function(e){return{restrict:"A",require:"ngModel",link:function(n,r,t,i){var a,o,u,c,l,d;return l=n.$eval(t.richtext),l.minHeight=l.minHeight||400,l.imageUpload="/admin/file/post",l.wym=!0,l.linebreaks=!0,l.removeComments=!0,d=d=function(r){return e(function(){return n.$apply(function(){return i.$setViewValue(r)})})},c={changeCallback:d},o=t.redactor?n.$eval(t.redactor):{},u=void 0,a=$(r),angular.extend(c,l,o),e(function(){u=a.redactor(c),i.$render()}),i.$render=function(){angular.isDefined(u)&&e(function(){a.redactor("set",i.$viewValue||"")})}}}}])})}).call(this);