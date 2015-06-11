var myApp = angular.module("myApp",[]);

function createCourseCtrl($scope){

    $scope.data=[
        {id:1, title: "Addition and Subtraction", subject: "math", grade: 1, noOfVideos: 2, noOfDocuments: 3, noOfQuestions: 5},
        {id:2, title: "Algebra", subject: "math", grade: 1, noOfVideos: 1, noOfDocuments: 0, noOfQuestions: 3},
        {id:3, title: "Advance Algebra", subject: "math", grade: 2, noOfVideos: 2, noOfDocuments: 2, noOfQuestions: 4},
        {id:4, title: "Geometry", subject: "math", grade: 3, noOfVideos: 1, noOfDocuments: 4, noOfQuestions: 5},
        {id:5, title: "Cafe", subject: "english", grade: 1, noOfVideos: 0, noOfDocuments: 1, noOfQuestions: 1},
        {id:6, title: "Countries", subject: "english", grade: 1, noOfVideos: 2, noOfDocuments: 1, noOfQuestions: 5},
        {id:7, title: "Holiday activities", subject: "english", grade: 2, noOfVideos: 2, noOfDocuments: 1, noOfQuestions: 3},
        {id:8, title: " The Classroom", subject: "english", grade: 3, noOfVideos: 1, noOfDocuments: 3, noOfQuestions: 10},
        {id:9, title: "Astronomy", subject: "science", grade: 1, noOfVideos: 3, noOfDocuments: 0, noOfQuestions: 3},
        {id:10, title: "Chemistry", subject: "science", grade: 1, noOfVideos: 1, noOfDocuments: 2, noOfQuestions: 2},
        {id:11, title: "Physics", subject: "science", grade: 2, noOfVideos: 2, noOfDocuments: 4, noOfQuestions: 5},
        {id:12, title: "Ecology", subject: "science", grade: 3, noOfVideos: 0, noOfDocuments: 3, noOfQuestions: 6}
    ];
    $scope.grades = [];
    $scope.subjects = [];
    $scope.dragEnd = {};
    $scope.topics={
        "first":[],
        "second":[],
        "third":[]
    };
    $scope.courses = [1,2,3];
    $scope.lessons = ["first","second","third"];

    $scope.topicCreated = {};
    angular.forEach($scope.data, function(d){
        if($scope.grades.indexOf(d.grade) < 0){
            $scope.grades.push(d.grade);
        }
        if($scope.subjects.indexOf(d.subject) < 0){
            $scope.subjects.push(d.subject);
        }
    });

    $scope.createCourse = function(e){
        if(e.keyCode == 13)
            $scope.courseCreated = true;
    }

     $scope.createTopic = function(e, index){
        if(e.keyCode == 13)
            $scope.topicCreated[index] = true;
    }

    $scope.$on("DRAG_ENDS", function(ev, data){
        $scope.$apply(function(){
            $scope.dragEnd[data.lessons] = true;
            $scope.topics[data.lessons].push({
                topic:data.topic,
                subject:data.subject
            });
        })
    })

}