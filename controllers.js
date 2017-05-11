var controllers = {};

// MARK: HomeController (START)
controllers.HomeController = ['$scope', 'cityNameService', '$location', function($scope, cityNameService, $location) {
    
    $scope.cityName = cityNameService.cityName;
    
    $scope.$watch('cityName', function() {
        cityNameService.cityName = $scope.cityName;
    });
    
    $scope.submit = function() {
        $location.path("/forecast");
    }
}];
// MARK: HomeController (END)

// MARK: ForecastController (START)
controllers.ForecastController = ['$scope', '$routeParams', 'cityNameService', 'weatherService', function($scope, $routeParams, cityNameService, weatherService) {
    $scope.cityName = cityNameService.cityName;
    $scope.days = $routeParams.days || 1;
  
    $scope.weatherData = weatherService.getWeather($scope.cityName, $scope.days);
    
    $scope.convertToDate = function(weatherObject) {
        var date = new Date(weatherObject.dt *1000);
        return date;
    };
}];
// MARK: ForecastController (END)

app.controller(controllers);
