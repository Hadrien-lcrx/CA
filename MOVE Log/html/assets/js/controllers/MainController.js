app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      icon: 'assets/media/pushup.jpg',
      name: 'Pushups',
      count: 20
    },
    {
      icon: 'assets/media/squat.jpg',
      name: 'Squats',
      count: 15
    },
    {
      icon: 'assets/media/pullup.jpg',
      name: 'Pullups',
      count: 10
    },
    {
      icon: 'assets/media/row.jpg',
      name: 'Rows',
      count: 10
    },
    {
      icon: 'assets/media/lunge.jpg',
      name: 'Lunges',
      count: 10
    },
    {
      icon: 'assets/media/stepup.jpg',
      name: 'Step Ups',
      count: 10
    },
    {
      icon: 'assets/media/situp.jpg',
      name: 'Sit Ups',
      count: 15
    }
  ];
  
  $scope.increase = function(index) {
    $scope.exercises[index].count += 1;
  };
  
  $scope.decrease = function(index) {
    $scope.exercises[index].count -= 1;
  };

}]);