app.config(function($routeProvider, $locationProvider, $sceDelegateProvider) {
    
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',  'http://api.openweathermap.org/data/2.5/forecast/daily'
    ]);
    
    $locationProvider.hashPrefix('');
    
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'ForecastController'
    })
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'ForecastController'
    });
});