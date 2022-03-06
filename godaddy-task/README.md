To run the project, run one after the other in the folder of the project: 
npm install 
npm run build 
npm start

The project opens in the browser on localhost, port 3000.

--

I used create-react-app as base for the application, as it is recommended for building new Single Page Applications.

I used fetch for the API call for the following reasons. 
Fetch is considered for browser-agnostic AJAX calls.
Fetch does NOT scale well, but for such a simple project scalability is not a concern. If it is a concern, the axios library can be used. Other option is the redux-saga library, but it involves redux usage and is an overkill for most scenarios.

--

