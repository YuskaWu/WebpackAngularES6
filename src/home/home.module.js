import cardGallery from '../card-gallery/card-gallery.module';
import lineChart from '../line-chart/line-chart.module';
import controller from './home.controller';


export default angular.module('app.home', [cardGallery, lineChart])
  .controller('HomeController', controller)
  .name;