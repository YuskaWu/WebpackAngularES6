class  LineChartController {
  constructor($scope, $filter){
    
  }
}
LineChartController.$inject = ['$scope', '$filter'];

function lineChart () {
  return {
    restrict : "E",
    templateUrl : "line-chart/line-chart.html",
    controller: LineChartController,
    controllerAs: 'vm',
    scope: {}
  };  
}
lineChart.$inject = [];


export default lineChart;