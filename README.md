# SpringBootApp

The goal of this app is to develop a Java backend using Spring Framework to interact with a database and handle requests. The Java backend serves a simple UI created using ReactJs. The backend has a REST API which listens for requests, handles them and interacts with the database.

The Java Source Files are located in src/main/java/com/backend/app.
App.java is the entry point for the program, it along with the basic directory structure was auto generated after running Spring Initializr.
The REST API source code can be found in src/main/java/com/backend/app/api, this is where most of the interesting Java code lives.

_The React frontend is just a tool used to quickly develop a nice UI, it can easily be swapped out for a Swing GUI._

## Installation

```bash
git clone git@github.com:nvme0/SpringBootApp.git
```

### Configuring MongoDB

Add the following lines to src/main/resources/application.properties.
Replace `<databaseURI>` with your database URI.
Replace `<databaseNmae>` with the name of your database, the app will create it if it doesn't exist.

```config
spring.data.mongodb.uri=<databaseURI>
spring.data.mongodb.database=<databaseNmae>
```

## Usage

Run App.java (located in src/main/java/com/backend/app), then navigate to <http://localhost:9001/>.

If using VSCODE, its recommended to install these extensions:

- Java Extension Pack
- Spring Boot Extension Pack
- Spring Boot Tools
- Checkstyle for Java

When you have Spring-boot extension installed, you will see a tab in the explorer on the left tool bar called "Spring-Boot Dashboard", you can start the app directly from there.

## System Requirements

### Mandatory

- Java SE installed on your system
- A modern web browser that is up to date (Firefox, Chrome, Brave, Safari, Opera etc)

### Optional

- Node Package Manager (npm) to build React frontend. The frontend comes prebuilt with this repo.

## Technologies Used

- Languages: Java, JavaScript/TypeScript, html, css
- Spring Framework, Spring Boot (Java)
- React Framework (JavaScript)
- Build Tools: Maven (Java), Webpack, npm (JavaScript)
- Checkstyle
- Server: TomCat
- Database: MongoDB
