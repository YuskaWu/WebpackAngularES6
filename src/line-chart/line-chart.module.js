// We have configed 'c3-angular' as vendor entry bundle, when the vendor bundle has created, 
// the package will be included in it, so it don't need to import it again.
//import 'c3-angular';

import lineChart from './line-chart.directive';

export default angular.module('app.chart', ['gridshore.c3js.chart'])
  .directive('lineChart', lineChart)
  .name;