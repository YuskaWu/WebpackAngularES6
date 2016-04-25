import './card-gallery.scss';
import controller from './card-gallery.controller';

export default angular.module('app.card-gallery', [])
  .controller('CardGalleryController', controller)
  .name;