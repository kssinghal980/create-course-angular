myApp.directive('removeCourse', function($rootScope, $window){
    return function(scope, element){
        scope.removeCourse = function(index, lesson){
            if($window.confirm('Are you sure you want to delete topic?')){
                element.children()[index].remove();
                $rootScope.$broadcast("TOPIC_REMOVED",{index:index, lesson:lesson});//do something when user confirms
            }
        }
    }
})