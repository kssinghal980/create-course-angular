
myApp.directive('draggable', function($rootScope) {
    return function(scope, element, attrs) {
        var el = element[0];
        el.draggable = true;
        el.addEventListener('dragstart',function(e) {
            var title = attrs.title;
            var subject = attrs.subject;
            $rootScope.$broadcast("DRAG_START", {title:title, subject:subject});
        });
    }
});