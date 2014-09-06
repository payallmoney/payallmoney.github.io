###ng-repeat
*当内容有ng-model时 ,由于ng-repeat生成了一个新的scope,部分控件(如input[raion])需要使用$parent,否则无法绑定数据;bug说明见[issues#1100](https://github.com/angular/angular.js/issues/1100")
