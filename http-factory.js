function httpServiceFactory() {
	const request = new XMLHttpRequest();

	return {
		get: function(url, successCallback, errorCallback) {
			request.open('GET', url);
			request.responseType = 'json';
			request.onload = function() {
				const response = request.response;
				successCallback(response);
			};
			request.onerror = function() {
				const response = request.response;
				errorCallback(response);
			};
			request.send();
		}
	}
}