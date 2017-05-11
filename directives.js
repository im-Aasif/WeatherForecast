var directives = {};

directives.weatherItem = function() {
    return {
        templateUrl: 'directives/weather-template.html',
        scope: {
            weatherObject: "=",
            convertDate: "&"
        }
    }
};

app.directive(directives);