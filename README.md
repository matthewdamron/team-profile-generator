<h1 align="center">
Team Profile Generator
![GitHub](https://img.shields.io/github/license/matthewdamron/team-profile-generator)
</h1>

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#Acceptance-criteria)
- [Screencast](#screencast)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Language](#language)
- [Contributors](#contributors)
- [Questions](#questions)

## Description
A node.js application that takes user input from inquirer to populate a HTML profile website for your team.<br />
When you complete the application it will create the index.html file in the dist directory.

## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Screencast
<!-- [![Watch the video](./utils/readme-generator.png)](https://drive.google.com/file/d/1fhJ8WjSsmwnVfBhrqTkjKFW5GMdggjMu/view?usp=sharing) -->

## Installation
[node.js](https://nodejs.org)<br />
`npm install`

## Usage
After you install Node.js on your computer browse to the application location in your terminal.<br />
Run the command 'node app' and folow the propmts to complete the index.html file.

## License
![GitHub](https://img.shields.io/github/license/matthewdamron/team-profile-generator)<br />
This application is covered by the MIT license. 

## Language
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

## Contributors
Matt

## Questions
Find me on GitHub: [matthewdamron](https://github.com/matthewdamron)<br />
_This README was generated with by a [readme-generator](https://github.com/matthewdamron/readme-generator)_
