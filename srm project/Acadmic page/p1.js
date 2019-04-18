
var myApp1 = angular.module('myCon2', ['ui.router']);

myApp1.config(function($stateProvider,urlRouterProvider) {

      // route for the home page

    var helloState = {
    name: 'home',
    url: '/home.html',
    template: '<h3>hello world!</h3>'
  }
  $stateProvider.state(helloState);

  var academicState={
    name:'planner',
    url:'',
    template:''

  }
  var StudentState={
    name:'update',
    url:'',
    template:''

  }
  var UpStudentState={
    name:'update',
    url:'',
    template:''

  }
  var UpparentState={
    name:'upadteP',
    url:'',
    template:''

  }
  var TimetState={
    name:'Batch1',
    url:'',
    template:''

  }
  v
  var Batch1State={
    name:'Batch1',
    url:'',
    template:''

  }

  var Batch2State={
    name:'Batch2',
    url:'',
    template:''

  }
  var CourseFeedbackState={
    name:'',
    url:'',
    template:''

  }
  var NewRegulationState={
    name:'',
    url:'',
    template:''

  }
    var CourseRegisState={
    name:'',
    url:'',
    template:''

  }
    var CourseconfirmState={
    name:'',
    url:'',
    template:''

  }
    var CoursefacultyState={
    name:'',
    url:'',
    template:''

  }

    var CourseNewRegulationState={
    name:'',
    url:'',
    template:''

  }
    var MyTimetableState={
    name:'',
    url:'',
    template:''

  }
    var logoutState={
    name:'',
    url:'',
    template:''

  }

  
});
