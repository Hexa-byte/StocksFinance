//Angular code for our frontend can show

var stocksFinance = angular.module('stocksFinance', []);
$(document).ready(function () {
    $('#stockresults').hide();
});

var base_url = "http://query.yahooapis.com/v1/public/yql";
var base_url_query = "?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22";
var base_url_trailJSON = "%22)%0A%09%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";


    $(document).ready(function () {
        $("#searchButton").click(function () {
            $("#stockresults").show(1000);
        });
    });

var financeCtrl = function ($scope, $http) {

    $scope.runSearchAPI = function () {


        // gets input value from search box
        var stockTicker = $('#searchInput').val().toString();

        url = base_url + base_url_query + stockTicker + base_url_trailJSON;


        var togoURL = 'http://query.yahooapis.com/v1/public/yql?q=select*from%20yahoo.finance%20.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22%20MSFT%22)%0A%09%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=';
        
        $http.get(url)
            .success(function (data) {
                return $scope.apiCall = data;
            });
    };
};
