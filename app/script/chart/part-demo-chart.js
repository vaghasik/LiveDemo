(function ($window, angular) {

    'use strict';

    var partDemoChart = function ($log) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                partObj : "=obj"
            },
            templateUrl: 'app/script/chart/part-demo-chart.html',
            link: function (scope) {
                // Hard code demo data for now
                scope.demoNewRequestSingleColumnChart = {
                    type: 'msline',
                    dataFormat: 'json',
                    dataSource: {
                        "chart": {
                            "caption": "Price History",
                            "xaxisname": "Month",
                            "yaxisname": "Amount",
                            "numberprefix": "$",
                            "yAxisMinValue": "3",
                            "showYAxisValues": "1",

                            "paletteColors" : "#f2d249, #d998cb, #b6d957",
                            "baseFontColor" : "#666666",
                            "baseFont" : "Helvetica Neue",
                            "bgColor" : "#ffffff",
                            "showShadow" : "0",
                            
                            "showCanvasBorder": "1",
                            "canvasBorderThickness": "1",
                            "canvasBorderColor": "#cccccc",
                            "showalternatehgridcolor": "0",
                            "showBorder": "0",
                            "showvalues": "0",

                            "numDivLines": "4",
                            "numVDivLines": "10",
                            "divlineAlpha" : "100",
                            "divlineColor" : "#D7D7D7",
                            "divlineThickness" : "1",
                            "divLineIsDashed" : "0",
                            
                            "legendPosition": "right",
                            "legendCaption": "Volume breaks"
                        },
                        "categories": [
                            {
                                "category": [
                                    { "label": "Jan" },
                                    { "label": "Feb" },
                                    { "label": "Mar" },
                                    { "label": "Apr" },
                                    {   "vline": "true",
                                        "lineposition": "0",
                                        "color": "#6baa01",
                                        "labelHAlign": "center",
                                        "labelPosition": "0",
                                        "label": "current",
                                        "dashed":"1",
                                    },
                                    { "label": "May" },
                                    { "label": "Jun" }, 
                                    { "label": "Jul" }, 
                                    { "label": "Aug" }, 
                                    { "label": "Sep" },
                                    { "label": "Oct" }, 
                                    { "label": "Nov" }, 
                                    { "label": "Dec" }
                                ]
                            }
                        ],
                        "dataset": [
                            {
                                "seriesname": "Actual Revenue 1",
                                "data": [
                                    { "value": "3.00" },
                                    { "value": "3.01" },
                                    { "value": "3.01" },
                                    { "value": "3.02" },
                                    { "value": "3.03" },
                                    { "value": "3.02" },
                                    { "value": "3.01" },
                                    { "value": "3.01" },
                                    { "value": "3.04" },
                                    { "value": "3.06" },
                                    { "value": "3.09" },
                                    { "value": "3.11" }
                                ]
                            },
                            {
                                "seriesname": "Actual Revenue 2",
                                "data": [
                                    { "value": "3.09" },
                                    { "value": "3.10" },
                                    { "value": "3.11" },
                                    { "value": "3.13" },
                                    { "value": "3.14" },
                                    { "value": "3.14" },
                                    { "value": "3.15" },
                                    { "value": "3.17" },
                                    { "value": "3.19" },
                                    { "value": "3.21" },
                                    { "value": "3.22" },
                                    { "value": "3.23" }
                                ]
                            },
                            {
                                "seriesname": "Actual Revenue 3",
                                "data": [
                                    { "value": "3.17" },
                                    { "value": "3.21" },
                                    { "value": "3.22" },
                                    { "value": "3.25" },
                                    { "value": "3.26" },
                                    { "value": "3.27" },
                                    { "value": "3.30" },
                                    { "value": "3.30" },
                                    { "value": "3.30" },
                                    { "value": "3.30" },
                                    { "value": "3.31" },
                                    { "value": "3.23" }
                                ]
                            }
                        ]
                    }
                }
            }
        };
    };
    var tag = 'partDemoChart';
    angular.module('bomApp').directive(tag, partDemoChart);
})(window, angular);
