# SpringBootApp

A Java Spring Boot Web App.

## Installation

```#!/bin/bash
git clone git@github.com:nvme0/SpringBootApp.git
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

Mandatory

- Java SE installed on your system
- An modern web browser that is up to date (Firefox, Chrome, Brave, Safari, Opera etc)

Optional

- Node Package Manager (npm) to build React frontend. It comes prebuilt with this repo.

## Where to find the Java Source Files

The Java Source Files are located in src/main/java/com/backend/app.
App.java is the entry point for the program, it along with the basic directory structure was auto generated after running Spring Initializr.
The REST API source code can be found in src/main/java/com/backend/app/api, this is where most of the interesting Java code lives.

## About

This is a simple app that demonstrates the usage of a bunch of technologies, some of which might be useful in the major assignment. The goal is to implement a Java backend that is able to serve static files (html, css, java, images) as well as act as a REST API. The idea is that the React frontend will act as the user interface (UI) to make requests to the Spring Java backend. The Spring Java backend will handle requests from the user and make queries to a MongoDB instance.

_The React frontend is just a tool used to quickly develop a nice UI, it can easily be swapped out for something else i.e. Swing._

## Technologies Used

- Languages: Java, JavaScript/TypeScript, html, css
- Spring Framework, Spring Boot (Java)
- React Framework (JavaScript)
- Build Tools: Maven (Java), Webpack, npm (JavaScript)
- Checkstyle
