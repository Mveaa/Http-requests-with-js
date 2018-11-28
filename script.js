const section = document.querySelector('section');
const requestURL = 'https://api.publicapis.org/categories';

const handleResponse = function(categoriesArray) {
	for (var i = 0; i < categoriesArray.length; i++) {
		var list = document.createElement('li');
		list.textContent = categoriesArray[i];
		section.appendChild(list);
	}
}

const handleError = function(categoriesArray) {
	var h1Element = document.createElement('h1');
	h1Element.textContent = 'Something went wrong';
	section.appendChild(h1Element);
}

const http1 =  new httpServiceFactory;
http1.get(requestURL, handleResponse, handleError);

