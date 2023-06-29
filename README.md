# Text Editor - Progressive Web Application (PWA)

Welcome to my text editor project! I have built a text editor that runs in the browser and meets the criteria of a Progressive Web Application (PWA). This application allows users to create notes or code snippets, with or without an internet connection, ensuring reliability and accessibility.

## User Story

- AS A developer
- I WANT to create notes or code snippets with or without an internet connection
- SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

- GIVEN a text editor web application
- WHEN I open my application in my editor
- THEN I should see a client server folder structure
- WHEN I run `npm run start` from the root directory
- THEN I find that my application should start up the backend and serve the client
- WHEN I run the text editor application from my terminal
- THEN I find that my JavaScript files have been bundled using webpack
- WHEN I run my webpack plugins
- THEN I find that I have a generated HTML file, service worker, and a manifest file
- WHEN I use next-gen JavaScript in my application
- THEN I find that the text editor still functions in the browser without errors
- WHEN I open the text editor
- THEN I find that IndexedDB has immediately created a database storage
- WHEN I enter content and subsequently click off of the DOM window
- THEN I find that the content in the text editor has been saved with IndexedDB
- WHEN I reopen the text editor after closing it
- THEN I find that the content in the text editor has been retrieved from our IndexedDB
- WHEN I click on the Install button
- THEN I download my web application as an icon on my desktop
- WHEN I load my web application
- THEN I should have a registered service worker using workbox
- WHEN I register a service worker
- THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
- WHEN I deploy to Heroku
- THEN I should have proper build scripts for a webpack application

## Approach

To tackle this challenge, I started with an existing application and implemented methods for getting and storing data to an IndexedDB database. I utilized the idb package, a lightweight wrapper around the IndexedDB API, to simplify data storage and retrieval. By following the PWA criteria, I ensured offline functionality and redundancy in case of unsupported browser features.

I used webpack to bundle the JavaScript files and generate the necessary HTML, service worker, and manifest files. The application utilizes next-gen JavaScript while ensuring browser compatibility. IndexedDB is employed to create an object store and facilitate the storage of content in the text editor. A service worker, built with workbox, is responsible for caching static assets.criteria.

## Completed tasks

To complete this project, I have accomplished the following tasks:

- Implemented IndexedDB to create an object store and included GET and PUT methods for data retrieval and storage.
- Ensured the application works seamlessly without an internet connection.
- Implemented automatic saving of content inside the text editor when the DOM window is unfocused.
- Bundled the application using webpack for optimized performance.
- Created a service worker with workbox to cache static assets and ensure offline functionality.
- Utilized babel to enable the use of async/await for asynchronous operations.
- Generated a manifest.json file using the WebpackPwaManifest plug-in.
- Configured the application to be installable as a Progressive Web Application.


## Conclusion

In conclusion, this text editor project demonstrates my ability to build a Progressive Web Application with offline functionality and data persistence. It meets the requirements of the challenge by utilizing IndexedDB for data storage, implementing service workers for caching, and following PWA best practices. The application is intuitive to use, and its user interface is clean and polished.

The application has been deployed to Heroku and can be accessed below. Feel free to check it out and experience the features of this text editor PWA.

## deployed Link



## Authors

- [Anotnio Lu](https://github.com/Anotnio-Lu)


## License

This project is licensed under MIT License .
