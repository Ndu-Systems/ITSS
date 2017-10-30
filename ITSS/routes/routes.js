app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
         .when('/', {
             templateUrl: 'pages/account/login.html',
             controller: 'loginController'
         })
    .when('/admin-dashboard', {
        templateUrl: 'pages/admin/admin-dashboard.html',
        controller: 'loginController'
    })
    .when('/teacher-dashboard', {
        templateUrl: 'pages/teacher/teacher-dashboard.html',
        controller: 'loginController'
    })
    .when('/bursar-dashboard', {
        templateUrl: 'pages/bursar/bursar-dashboard.html',
        controller: 'loginController'
    })
    .when('/student-dashboard', {
        templateUrl: 'pages/student/student-dashboard.html',
        controller: 'loginController'
    });
});
