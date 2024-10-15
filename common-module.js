angular.module('common', [])
.directive('commonHeader', function() {
    return {
        restrict: 'E',
        templateUrl: 'common-header.html'
    };
})
.directive('commonFooter', function() {
    return {
        restrict: 'E',
        templateUrl: 'common-footer.html'
    };
});
