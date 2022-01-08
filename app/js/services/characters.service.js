app.factory("charactersService", function ($http) {
  return {
    getCharacters: function (page = 1) {
      return $http.get("https://rickandmortyapi.com/api/character?page=" + page)
    }
  }
})
