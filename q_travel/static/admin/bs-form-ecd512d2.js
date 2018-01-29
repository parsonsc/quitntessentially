define(["schema-form"],function(){angular.module("schemaForm").run(["$templateCache",function(e){e.put("directives/decorators/bootstrap/actions-trcl.html",'<div class="btn-group" ng-transclude=""></div>'),e.put("directives/decorators/bootstrap/actions.html",'<div class="btn-group {{ form.class }}"><input ng-repeat-start="item in form.items" type="submit" class="btn {{ item.style || \'btn-primary\' }}" value="{{item.title}}" ng-if="item.type === \'submit\'"><button ng-repeat-end="" class="btn {{ item.style || \'btn-default\' }}" type="button" ng-if="item.type !== \'submit\'" ng-click="buttonClick($event,item)">{{item.title}}</button></div>'),e.put("directives/decorators/bootstrap/array.html",'<div sf-array="form" ng-model="$$value$$" ng-model-options="form.ngModelOptions" class="{{ form.class }}"><h3 ng-show="form.title && form.notitle !== true">{{ form.title }}</h3><ul class="list-group" ng-model="modelArray" ui-sortable=""><li class="list-group-item" ng-repeat="item in modelArray track by $index"><button ng-click="deleteFromArray($index)" style="position: relative; z-index: 20;" type="button" class="close pull-right"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><sf-decorator ng-init="arrayIndex = $index" form="copyWithIndex($index)"></sf-decorator></li><div class="clearfix" style="padding: 15px;"><button ng-click="appendToArray()" type="button" class="btn {{ form.style.add || \'btn-default\' }} pull-right"><i class="glyphicon glyphicon-plus"></i> {{ form.add || \'Add\'}}</button></div><div class="help-block" ng-show="(hasError() && errorMessage(schemaError())) || form.description" ng-bind-html="(hasError() && errorMessage(schemaError())) || form.description"></div></ul></div>'),e.put("directives/decorators/bootstrap/checkbox.html",'<div class="checkbox {{ form.class }}" ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}"><label><input type="checkbox" sf-changed="form" ng-model="$$value$$" ng-model-options="form.ngModelOptions" schema-validate="form"><span ng-bind-html="form.title"></span></label><div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div></div>'),e.put("directives/decorators/bootstrap/checkboxes.html",'<div sf-array="form" ng-model="$$value$$" class="form-group {{ form.class }}" ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}"><label class="control-label" ng-show="showTitle()">{{form.title}}</label><div class="checkbox" ng-repeat="val in titleMapValues track by $index"><label><input type="checkbox" sf-changed="form" ng-model="titleMapValues[$index]"><span ng-bind-html="form.titleMap[$index].name"></span></label></div><div class="help-block" ng-show="(hasError() && errorMessage(schemaError())) || form.description" ng-bind-html="(hasError() && errorMessage(schemaError())) || form.description"></div></div>'),e.put("directives/decorators/bootstrap/default.html",'<div class="form-group {{ form.class }}" ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false }"><label class="control-label" ng-show="showTitle()">{{form.title}}</label><input ng-show="form.key" type="{{form.type}}" sf-changed="form" placeholder="{{form.placeholder}}" class="form-control" ng-model-options="form.ngModelOptions" ng-model="$$value$$" schema-validate="form"><span ng-if="form.feedback !== false" class="form-control-feedback" ng-class="evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }"></span><div class="help-block" ng-show="(hasError() && errorMessage(schemaError())) || form.description" ng-bind-html="(hasError() && errorMessage(schemaError())) || form.description"></div></div>'),e.put("directives/decorators/bootstrap/fieldset-trcl.html",'<fieldset ng-disabled="form.readonly" class="{{form.class}}"><legend ng-show="form.title">{{ form.title }}</legend><div ng-transclude=""></div></fieldset>'),e.put("directives/decorators/bootstrap/fieldset.html",'<fieldset ng-disabled="form.readonly" class="{{form.class}}"><legend ng-show="form.title">{{ form.title }}</legend><sf-decorator ng-repeat="item in form.items" form="item"></sf-decorator></fieldset>'),e.put("directives/decorators/bootstrap/geocode.html",'<div class="form-group has-feedback {{form.wrapclass}}" ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}" geocode="{model: $$value$$}"><label ng-show="showTitle()">{{form.title}}</label><div class="row"><div class="col-md-8"><div class="map-canvas"></div></div><div class="col-md-4"><div class="form-group input-group"><input type="text" sf-changed="form" ng-model="$$value$$.address" ng-model-options="form.ngModelOptions" schema-validate="form" class="form-control"><span class="input-group-btn"><a class="btn btn-success" ng-click="locate($$value$$)"><span class="glyphicon glyphicon-screenshot"></span></a></span></div><div class="form-group"><input type="text" sf-changed="form" ng-model="$$value$$.lat" ng-model-options="form.ngModelOptions" schema-validate="form" class="form-control"></div><div class="form-group"><input type="text" sf-changed="form" ng-model="$$value$$.lng" ng-model-options="form.ngModelOptions" schema-validate="form" class="form-control"></div></div></div></div>'),e.put("directives/decorators/bootstrap/help.html",'<div class="helpvalue" ng-bind-html="form.helpvalue"></div>'),e.put("directives/decorators/bootstrap/img.html",'<div class="img-uploader" flow-init="{target: \'/admin/file/upload\'}" flow-files-submitted="$flow.upload()" flow-name="images" imguploader="{model: $$value$$ }" ng-show="form.key" sf-changed="form" ng-model-options="form.ngModelOptions" ng-model="$$value$$" schema-validate="form"><img ng-src="/media/admin/{{$$value$$}}"> <span class="btn btn-default" flow-btn="">Upload image</span> <span ng-if="form.feedback !== false" class="form-control-feedback" ng-class="evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }"></span><div class="help-block" ng-show="(hasError() && errorMessage(schemaError())) || form.description" ng-bind-html="(hasError() && errorMessage(schemaError())) || form.description"></div></div>'),e.put("directives/decorators/bootstrap/link.html",'<a href="{{form.url}}" class="{{form.class}}" target="{{form.target}}">{{form.label}}</a>'),e.put("directives/decorators/bootstrap/multiselect.html",'<div class="form-group {{form.class}}" ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}"><label class="control-label" ng-show="showTitle()">{{form.title}}</label><select ng-model="$$value$$" ng-model-options="form.ngModelOptions" sf-changed="form" class="form-control {{form.class}}" schema-validate="form" multiple="true" selectize="{ labelField: \'name\', valueField: \'value\', options: form.titleMap, placeholder: form.placeholder, url: form.url }"></select><div class="help-block" ng-show="(hasError() && errorMessage(schemaError())) || form.description" ng-bind-html="(hasError() && errorMessage(schemaError())) || form.description"></div></div>'),e.put("directives/decorators/bootstrap/radio-buttons.html",'<div class="form-group" ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}"><div><label class="control-label" ng-show="showTitle()">{{form.title}}</label></div><div class="btn-group"><label class="btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-primary\' : form.style.unselected || \'btn-primary\'; }}" ng-class="{ active: item.value === $$value$$ }" ng-repeat="item in form.titleMap"><input type="radio" sf-changed="form" style="display: none;" ng-model="$$value$$" ng-model-options="form.ngModelOptions" ng-value="item.value"><span ng-bind-html="item.name"></span></label></div><div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div></div>'),e.put("directives/decorators/bootstrap/radios-inline.html",'<div class="form-group" ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}"><label class="control-label" ng-show="showTitle()">{{form.title}}</label><div><label class="radio-inline" ng-repeat="item in form.titleMap"><input type="radio" sf-changed="form" ng-model="$$value$$" ng-value="item.value"><span ng-bind-html="item.name"></span></label></div><div class="help-block" ng-show="(hasError() && errorMessage(schemaError())) || form.description" ng-bind-html="(hasError() && errorMessage(schemaError())) || form.description"></div></div>'),e.put("directives/decorators/bootstrap/radios.html",'<div class="form-group" ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}"><label class="control-label" ng-show="showTitle()">{{form.title}}</label><div class="radio" ng-repeat="item in form.titleMap"><label><input type="radio" sf-changed="form" ng-model="$$value$$" ng-model-options="form.ngModelOptions" ng-value="item.value"><span ng-bind-html="item.name"></span></label></div><div class="help-block" ng-show="(hasError() && errorMessage(schemaError())) || form.description" ng-bind-html="(hasError() && errorMessage(schemaError())) || form.description"></div></div>'),e.put("directives/decorators/bootstrap/readonly.html",'<div class="form-group"><label ng-show="showTitle()">{{form.title}}</label><input ng-if="form.type !== \'textarea\'" type="text" disabled="" class="form-control" value="{{$$value$$}}"><textarea ng-if="form.type === \'textarea\'" disabled="" class="form-control">{{$$value$$}}</textarea><div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div></div>'),e.put("directives/decorators/bootstrap/richtext.html",'<div class="form-group has-feedback {{form.wrapclass}}" ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}"><label ng-show="showTitle()" ng-class="{{form.labelclass}}">{{form.title}}</label><textarea class="form-control {{form.class}}" sf-changed="form" ng-model="$$value$$" ng-model-options="form.ngModelOptions" schema-validate="form" richtext="{options: form.options || {}}"></textarea><span class="help-block">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span></div>'),e.put("directives/decorators/bootstrap/section.html",'<div ng-if="!form.condition || evalExpr(form.condition,{ model: model, \'arrayIndex\': arrayIndex })"><sf-decorator ng-repeat="item in form.items" form="item"></sf-decorator></div>'),e.put("directives/decorators/bootstrap/select.html",'<div class="form-group {{form.class}}" ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}"><label class="control-label" ng-show="showTitle()">{{form.title}}</label><select ng-model="$$value$$" ng-model-options="form.ngModelOptions" sf-changed="form" class="form-control" schema-validate="form" selectize="{ labelField: \'name\', valueField: \'value\', options: form.titleMap, placeholder: form.placeholder, url: form.url }"></select><div class="help-block" ng-show="(hasError() && errorMessage(schemaError())) || form.description" ng-bind-html="(hasError() && errorMessage(schemaError())) || form.description"></div></div>'),e.put("directives/decorators/bootstrap/submit.html",'<div class="form-group"><input type="submit" class="btn {{ form.style || \'btn-primary\' }}" value="{{form.title}}" ng-if="form.type === \'submit\'"><button class="btn {{ form.style || \'btn-default\' }}" type="button" ng-click="buttonClick($event,form)" ng-if="form.type !== \'submit\'">{{form.title}}</button></div>'),e.put("directives/decorators/bootstrap/tabarray.html",'<div sf-array="form" ng-init="selected = { tab: 0 }" class="clearfix"><div ng-if="!form.tabType || form.tabType !== \'right\'" ng-class="{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}"><ul class="nav nav-tabs" ng-class="{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}" style="margin-bottom: 15px"><li ng-repeat="item in modelArray track by $index" ng-click="$event.preventDefault() || (selected.tab = $index)" ng-class="{active: selected.tab === $index}"><a href="#">{{evalExpr(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-click="$event.preventDefault() || (selected.tab = appendToArray().length - 1)" class="tab-add-btn"><a href="#"><i class="glyphicon glyphicon-plus"></i> {{ form.add || \'Add\'}}</a></li></ul></div><div ng-class="{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}"><div class="tab-content"><div class="tab-pane clearfix" ng-repeat="item in modelArray track by $index" ng-show="selected.tab === $index" ng-class="{active: selected.tab === $index}"><sf-decorator form="copyWithIndex($index)"></sf-decorator><button ng-click="deleteFromArray($index)" type="button" class="btn {{ form.style.remove || \'btn-default\' }} pull-right tab-remove-btn"><i class="glyphicon glyphicon-trash"></i> {{ form.remove || \'Remove\'}}</button></div></div></div><div ng-if="form.tabType === \'right\'" class="col-xs-3"><ul class="nav nav-tabs tabs-right" style="margin-bottom: 15px"><li ng-repeat="item in modelArray track by $index" ng-click="$event.preventDefault() || (selected.tab = $index)" ng-class="{active: selected.tab === $index}"><a href="#">{{evalExpr(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-click="$event.preventDefault() || appendToArray()"><a href="#"><i class="glyphicon glyphicon-plus"></i> {{ form.add || \'Add\'}}</a></li></ul></div></div>'),e.put("directives/decorators/bootstrap/tabs.html",'<div ng-init="selected = { tab: 0 }"><ul class="nav nav-tabs" style="margin-bottom: 15px"><li ng-repeat="tab in form.tabs" ng-click="$event.preventDefault() || (selected.tab = $index)" ng-class="{active: selected.tab === $index}"><a href="#">{{ tab.title }}</a></li></ul><div class="tab-content"><div class="tab-pane" ng-repeat="tab in form.tabs" ng-show="selected.tab === $index" ng-class="{active: selected.tab === $index}"><bootstrap-decorator ng-repeat="item in tab.items" form="item"></bootstrap-decorator></div></div></div>'),e.put("directives/decorators/bootstrap/textarea.html",'<div class="form-group has-feedback {{form.wrapclass}}" ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}"><label ng-show="showTitle()" ng-class="{{form.labelclass}}">{{form.title}}</label><textarea class="form-control {{form.class}}" sf-changed="form" ng-model="$$value$$" ng-model-options="form.ngModelOptions" schema-validate="form"></textarea><span class="help-block">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span></div>'),e.put("directives/decorators/bootstrap/wrap.html",'<div class="{{form.class}}"><label class="title" ng-show="form.title">{{ form.title }}</label><sf-decorator ng-repeat="item in form.items" form="item"></sf-decorator></div>')}]),angular.module("schemaForm").config(["schemaFormDecoratorsProvider",function(e){var t="directives/decorators/bootstrap/";e.createDecorator("bootstrapDecorator",{textarea:t+"textarea.html",richtext:t+"richtext.html",fieldset:t+"fieldset.html",array:t+"array.html",tabarray:t+"tabarray.html",tabs:t+"tabs.html",section:t+"section.html",conditional:t+"section.html",actions:t+"actions.html",select:t+"select.html",multiselect:t+"multiselect.html",checkbox:t+"checkbox.html",checkboxes:t+"checkboxes.html",number:t+"default.html",password:t+"default.html",submit:t+"submit.html",button:t+"submit.html",radios:t+"radios.html","radios-inline":t+"radios-inline.html",radiobuttons:t+"radio-buttons.html",help:t+"help.html","default":t+"default.html",wrap:t+"wrap.html",geocode:t+"geocode.html",link:t+"link.html",img:t+"img.html"},[function(e){return e.readonly&&e.key&&"fieldset"!==e.type?t+"readonly.html":void 0}]),e.createDirectives({textarea:t+"textarea.html",richtext:t+"richtext.html",select:t+"select.html",multiselect:t+"multiselect.html",checkbox:t+"checkbox.html",checkboxes:t+"checkboxes.html",number:t+"default.html",submit:t+"submit.html",button:t+"submit.html",text:t+"default.html",date:t+"default.html",password:t+"default.html",datepicker:t+"datepicker.html",input:t+"default.html",radios:t+"radios.html","radios-inline":t+"radios-inline.html",radiobuttons:t+"radio-buttons.html",geocode:t+"geocode.html",link:t+"link.html",img:t+"img.html"})}]).directive("sfFieldset",function(){return{transclude:!0,scope:!0,templateUrl:"directives/decorators/bootstrap/fieldset-trcl.html",link:function(e,t,s){e.title=e.$eval(s.title)}}})});