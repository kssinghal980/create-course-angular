myApp.directive('dropable', function($rootScope){
    return function(scope,element, attrs){
        var dropZoneOne = element[0];
        var title;
        var subject;
        var lessons = attrs.lessons;
        scope.$on('DRAG_START', function(ev, data){
            title = data.title;
            subject = data.subject;
        })
        dropZoneOne.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        dropZoneOne.addEventListener('drop', function(e) {
            $rootScope.$broadcast("DRAG_ENDS",{lessons:lessons, topic:title, subject:subject});
        });

    }
})