# IncidentReport-WebApps

*IncidentReport-WebApps* is a report logger with MySQL, Node, Express, Handlebars and a homemade ORM. This Incident Report Apps has followed the MVC design pattern; used Node and MySQL to query and route data in our app, and Handlebars to generate our HTML.
    
## Table of Contents 

* [Screen Shots](#screenshots)
    
* [Installation](#installation)

* [Structure](#structure)
    
* [Usage](#usage)
    
* [License](#license)
    
* [Contributing](#contributing)
    
* [Questions](#questions)

## Screenshots


## Installation
    
This project uses 3 npm packages: 
* [express](https://expressjs.com/en/starter/installing.html)
* [express-handlebars](https://www.npmjs.com/package/express-handlebars)
* [mysql](https://www.npmjs.com/package/mysql)
To install necessary dependencies, run the following command:
    
```
npm install express --save
```

```
npm install express-handlebars
```

```
npm install mysql
```
    

## Structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── ireport_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── ireport.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── styles.css
│       └── img
│           └── ireport.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


## Usage
    
To run tests, run the following command:
    
```
npm start
```
  

## License
The license is MIT standard license.
        
## Contributing
    
It is an open project and everyone can contribute - please send an email requesting to be added as a contributor

## Link to the App
<a href="http://ireport.world">The URLs of the deployed applications in iReport World Website</a><hr>

     
## Questions
    
If you have any questions about the repo, open an issue or contact [annisapf](https://github.com/annisapf/) directly at a.purbandari@gmail.com.


