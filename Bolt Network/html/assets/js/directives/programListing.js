app.directive('programListing', function () {
  return {
    restrict: 'E',
    scope: {
      listing: '='
    },
    templateUrl: 'assets/js/directives/programListing.html'
  };
});