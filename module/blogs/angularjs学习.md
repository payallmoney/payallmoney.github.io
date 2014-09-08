###ng-repeat
* 当内容有ng-model 时 ,由于ng-repeat 生成了一个新的scope,部分控件(如input[radio])在绑定ng-model 时需要使用$parent, 如原来是 ng-model="test" 变为 ng-model = "$parent.test" 否则无法绑定数据,bug说明见[issues#1100](https://github.com/angular/angular.js/issues/1100")
 
###ui-select2 ng-options
* ui-select2 不能和 ng-options 同时使用 
