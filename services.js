var services = {};
// CityService
services.cityNameService = function () {
    this.cityName = "Pune";
};
// WeatherService
services.weatherService = ['$resource', function ($resource) {
    this.getWeather = function (city, days) {
        var appID = '1f16ad619e78cbde0b9a2f7ba0ff9c6c'
        var weatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast/daily');
        return weatherApi.get({
            appid: appID
            , cnt: days
            , units: 'metric'
            , q: city
        });
    }
}];
app.service(services);