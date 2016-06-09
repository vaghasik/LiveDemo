/*
 Copyright (c) 2015-2016 Ariba, Inc.
 All rights reserved. Patents pending.

 Responsible: Sili Yang
 */

/** component for fusion chart */
(function ($window, angular, FusionCharts) {

    'use strict';

    var fusionChart = function ($log) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                chartData: '=',     // JSON object containing fusion chart data
                chartHeight: '=',   // Height of the fusion chart (width is calculated automatically)
                chartId: '=',       // Id of div render the fusion chart at
                super: '=?'         //optional super is for easy calling method from containing controller
            },
            templateUrl: 'app/script/chart/fusion-chart.html',
            link: function (scope) {
                // Watch for the chartData binding to change so we can update the chart
                scope.$watch('chartData', function (value) {
                    if (scope.chartData) {
                        var chartElem = $("#" + scope.chartId);
                        if (chartElem  && chartElem.length > 0) {
                            scope.chartData.renderAt = scope.chartId;
                            scope.chartData.width = chartElem.outerWidth();
                            scope.chartData.height = scope.chartHeight;
                            new FusionCharts(scope.chartData).render();
                        }
                    }
                }, true);

                // Re-load chart on window resize to adjust chart width
                $(window).resize(function () {
                    if (scope.chartData) {
                        var chartElem = $("#" + scope.chartId);
                        if (chartElem && chartElem.length > 0) {
                            scope.chartData.renderAt = scope.chartId;
                            scope.chartData.width = chartElem.outerWidth();
                            scope.chartData.height = scope.chartHeight;
                            new FusionCharts(scope.chartData).render();
                        }
                    }
                });
            }
        };
    };

    var tag = 'fusionChart';
    angular.module('bomApp').directive(tag, fusionChart);

})(window, angular, FusionCharts);
