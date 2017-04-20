angular.module('fluidApp').controller('mainCtrl', function($scope, $window){

    $scope.fluidInit = function(){
        $window.FluidEffect.init();
        $window.FluidEffect.start();
    }

    $scope.fluidInit();
});