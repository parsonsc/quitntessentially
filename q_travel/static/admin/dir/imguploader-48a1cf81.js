(function(){define(["bs-form","ng-flow"],function(){return angular.module("schemaForm").directive("imguploader",["$window",function(n){return{restrict:"A",require:"ngModel",link:function(e,r,i){var o,u;return u=e.$eval(i.imguploader),o=u.model,e.$on("flow::fileSuccess",function(n,r,i,o){var u;return u=angular.fromJson(o),e.ngModel.$setViewValue(u.name),e.$digest()}),e.click=function(e){return n.open("/admin/file/crop?src="+e)}}}}])})}).call(this);