# movies-list
Simple application that list the movies from json array, allows you to access a movie details page and also search and filter the list by genre.

Application has routing implemented, each movie can be accessd by id. When an id which has no corresponding movie is access, the application shows a corresponding message.

Same goes for accessing a non-existent route, a 404 page is displayed.

Search and filter values are kept in  Redux store. When user navigates from the list to movie details and then back, the search and filter values from the store are displayed.

### How to start the application
1. run `npm install`
2. run `npm start`
3. open `http://localhost:4200` in the browser

### Unit tests
A grand total of four unit tests can be found for the application. Run then with the comman `npm test`
