angular.module('app').directive('topbar', [topbarDirective]);

function topbarDirective() {

  return {
    templateUrl: 'views/topbar.html'
  };
}

