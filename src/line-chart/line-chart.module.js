import lineChart from './line-chart.directive';
import c3 from 'c3';

// Bad code, but it must be done because c3-angular need to access global c3 variable.
// The best way is to abandon c3-angular, just use c3 original api to get the chart done.
window.c3 = c3;

export default angular.module('app.chart', ['gridshore.c3js.chart'])
  .directive('lineChart', lineChart)
  .name;