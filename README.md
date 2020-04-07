![Fetch()](https://fetch-for-jobs.herokuapp.com/img/logo2.png)

# Fetch (): Eugene Sokoletsky, Mark Zheng, Nes Martinez

_Fetch your dream job today._

## Intro

Fetch is a mobile-responsive job board for software engineers at the intersection of technology with other industries. Fetch is deployed at: [https://fetch-for-jobs.herokuapp.com/](https://fetch-for-jobs.herokuapp.com/).

Built by Eugene Sokoletsky, Mark Zheng, and Nes Martinez as part of Fullstack Academy’s Capstone Senior Project.

## Features

* Employers can post new job listings
* Employers are able to chat with interested user applicants via live chat feature
* Employers can create their own private chat room to speak with candidates
* Users are able to upload resume, cover letter, and other files
* Messages are persistent in the database
* Candidates are able to save and apply later to jobs of their choice
* Allow users to login with Google or Linkedin accounts
* Users may search for jobs by title and location of the position

## Tech Stack

* MongoDB
* Mongoose
* Express.js
* React
* Node.js
* Redux
* Socket.io
* Material UI

## Setup

===How to Run===
First, install the latest versions of `node` and `npm` from [nodejs.org](https://www.nodejs.org).
Install a version of [MongoDB](https://www.mongodb.com/download-center) to run on your machine.

Then, from a console, run:

```
1) Run git clone https://github.com/FSA-TEAM-8/Fetch.git
2) Cd into Fetch
3) Create a cluster on MongoDB
4) Acquire the MongoDB connection string by clicking on connect and selecting “Connect your application”
5) Set the connection string as the mongoURL in db.js file
6) Run npm run seed
7) Run npm install
8) Run npm run start-dev
```

The webapp should now be accessible from http://localhost:8080/. To test user, employer, and admin functionality, please use:

* User: `“yellow@email.com” with password “123”`
* Employer: `“blue@email.com” with password “123”`
* Admin: `“red@email.com” with password “123:`

## Screenshots

![Welcome Screen](/img/SS1.png)

## Project Challenges

* As a team, we needed to reframe our organizational thinking around data, and how we conceptualize model relationships and referencing, while moving from a SQL to a NoSQL database.
* Looking backward, it would have been beneficial to lay down some parameters around design concepts (colors, fonts, buttons, etc.), rather than implement them as we built the components. This would have allowed for a more streamline process.

## Learning Takeaways

* Socket.io functionality is easily interactable with Redux dispatches and action creators.
* React Hooks allows for direct ease of use to React state and lifecycle methods.
* NoSQL’s document-oriented database provides a flexible and dynamic layout resulting in quick adaptability to any changes made to the database.
* MongoDB with mongoose provides many methods to retrieve the collection of data user wants, but in some cases user’s need to manually custom methods to find desired data.

## Time-Permitting Stretch Goals

* Implement third party APIs to allow Fetch to be a central link to new job listings
* Live updates of new job listings from other sites
* Enhanced search of job with filtering by salary, company, location, and/or experience level
* Provide fast candidate resume distribution to interested employers
