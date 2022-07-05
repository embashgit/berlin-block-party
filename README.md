# Project Title
Berlin Event Feed Web Application. with a search functionality using the search api from `www.berlin.de/sen/finanzen/service/zuwendungsdatenbank/index.php`
Visit [Berlin Blocker](https://berlin-block.herokuapp.com/) to view the deployed Application
## Summary 
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites) 
- [Dependencies](#dependencies)
- [Setup](#setup)
- [Screenshots](#screenshots) 
- [Repo Structure](#repo-structure) 
- [Running the tests](#running-the-tests) 
- [Deployment](#deployment) 
- [Contributing](#contributing) 
- [Versioning](#versioning) 
- [Authors](#authors)
- [License](#license)
- [Acknowledgements](#acknowledgements) 
- [Additional information](#additional-information)  
  
## Getting Started
Follow this guide to set up Berlin Block project locally, To successfully run the App, a CORS by-passer is needed to allow app to fetch data, with this I have created a proxy server 
```
https://github.com/embashgit/cors-any
```
 I deployed on heroku the same server i (deployed the working application on), to allow the app fetch Data without being stopped by CORS, to use this CORS parser, create a file on the root directory name is `.env` and set 
```
CORSURL=https://bash-cors-any.herokuapp.com/
``` 

### Prerequisites 
- [node v16](https://nodejs.org).
- [Angular v14](https://angular.io/).
- [Dotenv](https://www.npmjs.com/package/dotenv).

### Dependencies 
- [Tailwind css](https://tailwindcss.com/).
- [TypeScript](https://www.typescriptlang.org/)

### Setup 
- clone the repo using 
```
git clone https://github.com/embashgit/berlin-block-party
```
- install the dependencies using `npm install`
- Set Environment Varables inside `.env` file as specified in `.env.examples` the variables are: 

```
BASEURL=writetheurlhere.com
SEARCHURL=writesearchurlhere.com
CORSURL=writecorsbypasser.com/
```
​- run `npm run lint` to lint code for better developer experience
- start the development server using `npm run dev`
- visit `http://localhost:4200` on your browser and you will be presented with the Main page

## Screenshot(s) 
<img width="1728" alt="Screenshot 2022-07-05 at 02 18 04" src="https://user-images.githubusercontent.com/29065413/177227689-73a875e5-272a-4a49-8831-25f9748d56b1.png">

## Repo Structure 
 ```
/
├─ src/
│   ├── app                                     # Root App Components
│   ├── app-routing.module.ts
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── component                               # Components
│   │   ├── event-card                          # Reusable event card display 
│   │   │   ├── event-card.component.css        
│   │   │   ├── event-card.component.html
│   │   │   ├── event-card.component.spec.ts
│   │   │   └── event-card.component.ts
│   │   ├── footer                              # Footer component 
│   │   │   ├── footer.component.css
│   │   │   ├── footer.component.html
│   │   │   ├── footer.component.spec.ts
│   │   │   └── footer.component.ts
│   │   ├── index.ts
│   │   ├── navbar                              # Navigation component
│   │   │   ├── navbar.component.css
│   │   │   ├── navbar.component.html
│   │   │   ├── navbar.component.spec.ts
│   │   │   └── navbar.component.ts
│   │   ├── notification                        # Notification Display
│   │   │   ├── notification.component.css
│   │   │   ├── notification.component.html
│   │   │   ├── notification.component.spec.ts
│   │   │   └── notification.component.ts
│   │   ├── search-form                         # Search bar component
│   │   │   ├── search-form.component.css
│   │   │   ├── search-form.component.html
│   │   │   ├── search-form.component.spec.ts
│   │   │   └── search-form.component.ts
│   │   └── searh-result                        # Search result display component
│   │       ├── searh-result.component.css
│   │       ├── searh-result.component.html
│   │       ├── searh-result.component.spec.ts
│   │       └── searh-result.component.ts
│   ├── models                                  # Data Model
│   │   └── events.model.ts
│   ├── pages                                   # Pages Component    
│   │   ├── event-container
│   │   │   ├── event-container.component.css
│   │   │   ├── event-container.component.html
│   │   │   ├── event-container.component.spec.ts
│   │   │   └── event-container.component.ts
│   │   ├── event-details                       # Event Detaits
│   │   │   ├── event-details.component.css
│   │   │   ├── event-details.component.html
│   │   │   ├── event-details.component.spec.ts
│   │   │   └── event-details.component.ts
│   │   └── index.ts
│   ├── service                                 # API Service
│   │   ├── AbstractJsonService.ts
│   │   ├── event.service.spec.ts
│   │   ├── event.service.ts
│   │   └── module-name.d.ts
│   └── store                                   # Static store
│   |   └── locations.json
├── |---assets                                  # Static files
|   │   ├── copy-svgrepo-com.svg
│   |   ├── favicon.webp
|   │   └── scripts
│   |   └── setEnv.js
|   ├── environments                            # Env files
|   │   ├── environment.prod.ts
|   │   └── environment.ts
|   ├── favicon.ico                             # Fav Icon
|   ├── index.html                              # Root HTML file         
|   ├── main.ts                                 # Root HTML  file
|   ├── polyfills.ts                            # Data needed to by angular
|   ├── styles.css                              # Styling 
|   └── test.ts                                 # Test Config file
├─ .gitignore                                   # List of files and folders not tracked by Git
├─ .eslintrc.json                               # Linting preferences for JavasScript
├─ angular.json                                 # Configuration for Fractal
├─ .env.example                                 # sample of environment variables
├─ .editconfig                                  # Config file
|- .browserslistrc                              # This file is used by the build system to adjust CSS
├─ karma.conf.js                                # Configuration for Karma
├─ package.json                                 # Project manifest
├─ package-lock.json                            # Project lock file
├─ tailwind.config.js                           # Configuration for Tailwind
├─ tconfig.app.js                               # Typescript config file
├─ tsconfig.json                                # Typescript config file
├─ tsconfig.spec.json                           # Typescript config file
├─ server.js                                    # Express server file
└─ README.md                                    # Mackdown file 
```

## Running the tests
Use `npm run test` to run the unit test, 

## Deployment

-   Github Action was used for Continuos Integration (CI)
-   Heroku pipeline was created and Linked to the Staging branch for Continous Deployment (CD)
-   All Rules are Passed before Automatic Deployment is triggered by Github action

## Contributing 
N/A


## Versioning 

| Version No     | Description of change                                                 | Date                |
|:--------------:|:---------------------------------------------------------------------:|:-------------------:|
| v1.0           | First Deployment                                                      | 03/07/2022 1:40  PM |
| v1.1           | Added Search                                                          | 03/07/2022 2:11  PM |
| v1.2           | Bug fix (Rollback)                                                    | 03/07/2022 3:00  PM |
| v1.3           | Added Git actions fix                                                 | 04/07/2022 1:00  PM |
| v1.4           | Added new Cors Proxy                                                  | 04/07/2022 3:00  PM |
| v1.5           | Added Loader                                                          | 04/07/2022 5:00  PM |
| v1.6           | Integrate CI/CD                                                       | 04/07/2022 5:54  PM |
| v1.7           | Dynamic Variable injection in the server                              | 05/07/2022 10:40 PM |


## Authors 
- Ibrahim Bashir 
  
## License 
- N/A
  
## Acknowledgments 
- Dunja Bitar. 
- [Berlin Open Data](https://daten.berlin.de/datensaetze/rss.xml/berliner-stra%C3%9Fen-und-volksfeste-2020)
 
 
## Additional Information 

 <!-- ### Important Note: Please Reachout to the Author for Live API -->

 
