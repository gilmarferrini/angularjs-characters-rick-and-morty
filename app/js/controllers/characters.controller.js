app.controller("charactersCtrl", function ($scope, charactersService) {
  $scope.characters = []
  $scope.currentPage = 1;
  $scope.totalPages = 0;

  var getCharactersByPage = function (page) {
    charactersService.getCharacters(page).then(function (response) {
      $scope.characters = response.data.results;
      $scope.totalPages = response.data.info.pages;
      console.log(response.data)
    })
  }

  var init = function () {
    getCharactersByPage(1)
  }

  init()

  $scope.nextPage = function (currentPage) {
    var newCurrentPage = currentPage + 1
    $scope.currentPage = newCurrentPage
    getCharactersByPage(newCurrentPage)
  }

  $scope.previousPage = function (currentPage) {
    if (currentPage === 1) {
      return;
    }

    var newCurrentPage = currentPage - 1

    $scope.currentPage = newCurrentPage;
    getCharactersByPage(newCurrentPage)
  }

})