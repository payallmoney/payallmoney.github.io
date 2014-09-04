'use strict';

angular.module('myblog.version', [
  'myblog.version.interpolate-filter',
  'myblog.version.version-directive'
])

.value('version', '0.1');
