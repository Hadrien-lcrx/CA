app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [
    {
      icon: 'assets/media/move.jpg',
      title: 'MOVE',
      developer: 'MOVE, Inc.',
      price: 0.99
    },
    {
      icon: 'assets/media/shutterbugg.jpg',
      title: 'Shutterbugg',
      developer: 'Chico Dusty',
      price: 2.99
    },
    {
      icon: 'assets/media/gameboard.jpg',
      title: 'Gameboard',
      developer: 'Armando P.',
      price: 1.99
    },
    {
      icon: 'assets/media/forecast.jpg',
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    }
  ];
}]);