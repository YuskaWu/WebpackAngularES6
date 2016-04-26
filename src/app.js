import angularMaterial from 'angular-material';
import uirouter from 'angular-ui-router';
import config from './app.config';
import home from './home/home.module';

angular.module('app', [angularMaterial, uirouter, home])
  .config(config);