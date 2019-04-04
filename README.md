## App Stack

1- FrontEnd is react/Redux
2- BackEnd is nodejs
3- Nginx is used for cross origin app communications

### NGINX
1- Its the first container in front of other containers (nodejs/react) and handles the web traffic where to redirect the requests.
2- Server Nodejs is running at port 5000
3- Client React is running at port 3000
4- Accessing App set as port 4001
5- Any requests with /api url redirecting to nodejs server/container
6- Any request non initial with /api redirecting to react client/container
7- Nginx settings in client is setting up the index.html that will serve the SPA .

### NODEJS

1- Feature based structure followed. Property contains controller, routes and model
2- Text file is used as fake db and loaded data with streams without memory overloading.
3- On text file reading , data manipulated as an array of property object with properties x,y coordinates and price.For percentage ratio the max value of data set to MaxValue in order to calculate every price ratio (On Frontend statuses set).

### React/Redux

1- Root component is set as store holder and to be used in unit test easily as a wrapper.
2- Dashboard component is the home page component and loads the PropertyList component.
3- App state triggers fetchingProperties with actions.
4- Action LoadProperty sets the state of request for any loading bars, spinners etc.
5- Action LoadPropertySuccess set the response from server.like property and maxValue.
6- Selectors used for getting particular state slice to prevent unnecessary component renders.Selectors use memoiziation.
7- ratioStatus() function sets status color class for every price when its rendering and classnames set dynamically for every type of status.

### Commands

## Client/React 
    1- npm install to install dependencies
    2- npm run start for running locally
    3- npm run test for unit tests
    4- npm run build for build version
## Server/Nodejs 
    1- npm install to install dependencies
    2- npm run dev for running locally
    3- npm run test for unit tests
    4- npm run build for build version

### Docker Running

1- After pulling the repo run in root directory
    `docker-compose up`
2- Open browser and type http://localhost:4001