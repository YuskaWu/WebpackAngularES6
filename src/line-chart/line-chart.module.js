import lineChart from './line-chart.directive';

export default angular.module('app.chart', ['gridshore.c3js.chart'])
  .directive('lineChart', lineChart)
  .name;