var section = document.querySelector('section');
var requestURL = 'https://api.publicapis.org/categories';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
  request.onload = function() {
    var categoriesArray = request.response;
    populateSection(categoriesArray);
      function populateSection(jsonObj) {
        for (var i = 0; i < categoriesArray.length; i++) {
          var list = document.createElement('li');
          list.textContent = categoriesArray[i];
          section.appendChild(list);
        }}}