# Project Title
Berlin Event Feed Web Application
Visit https://berlin-block.herokuapp.com/ to view the Application
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
These instructions highlighted in this section will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment section for notes on how to deploy the project on a live system

### Prerequisites 
The prerequisites are list of software or frameworks that would be required to setup the application. Also, the steps to install them should be documented too. 
Example: jdk, .net framework, nodeJs, intellij etc.

### Dependencies 
Dependencies are list of external applications/platforms that the software development largely depends on for it to function.  
Example: eBillsPay depends on NIP, Authserve as a dependency for most APIs 

### Setup 
This section should describe the step-by-step guide on how the application is setup on a local machine/development environment.  

## Screenshot(s) 
<img width="1728" alt="Screenshot 2022-07-05 at 02 15 23" src="https://user-images.githubusercontent.com/29065413/177227525-c6077068-15af-427e-b06a-41037ca06002.png">

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
This section should explain how to run the automated tests for this application. There should be a breakdown of each of the tests and what it’s aimed to achieve. 

## Deployment 
This section should describe how to deploy this on a live system. The details of Jenkins configuration for the repo should be stated. 

## Contributing 
N/A


## Versioning 

| Version No    | Description of change | Date       |
| ------------- |:---------------------:| ----------:|
| 1.0           | First Deployment      | 29/06/2022 |
| 1.1           | Added Search          | 19/02/2022 |
| 1.2           | Bug fix               | 19/02/2022 |
| 1.3           | Added new Cors Proxy  | 19/02/2022 |
| 1.4           | Added Loader          | 19/02/2022 |
| 1.5           | Integrate CI/CD       | 19/02/2022 |
| 1.6           | Dynamic Variable      | 19/02/2022 |


## Authors 
- Ibrahim Bashir 
  
## License 
- N/A
  
## Acknowledgments 
- Dunja Bitar. 
 
 
## Additional Information 
This section should capture additional information that is useful and it is related to the project. 
  

 
