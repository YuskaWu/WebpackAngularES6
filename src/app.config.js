routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      //template: require('./card-gallery.html'),
      templateUrl: 'home/home.html'
    })
    .state('card-gallery', {
      url: '/card-gallery',
      //template: require('./card-gallery.html'),
      templateUrl: 'card-gallery/card-gallery.html'
    });
}