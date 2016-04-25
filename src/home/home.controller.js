export default class HomeController {
  constructor($state) {
    this.state = $state;
  }

  go(page) {
    this.state.go(page);
  }
}

HomeController.$inject = ['$state'];