# Dev Team Profile Generator

[![GitHub github:](https://img.shields.io/badge/license-MIT-blue.svg)](https://choosealicense.com/licenses/mit)
## Description   
<p>This application will that automatically generate a professional README.md markdown file for a project, based on information provided by the user. The application presents a series of prompts to the user to fill in sections in the README. The application supports input both from the command line with node.js or via a web interface

<b>User Story</b>
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

<b>Acceptance Criteria</b>
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

</p>   

<details>
<summary>Watch Video</summary>
<video controls autoplay>
  <source src="./assets/images/Professional Readme Generator 640x480.mp4" type="video/mp4" width="640" height="480">
</video> 
</details>
<a href="./assets/images/Professional Readme Generator.mp4">Download Video</a>

## Table of contents

  * [Description](#description)
  * [Installation](#🛠️installation)
  * [Usage](#💻usage)
  * [Dependencies](#🧩dependencies)
  * [License](#📛license)
  * [Contributing](#🤝contributing)
  * [Tests](#📃tests)
  * [Questions](#❓questions)
  * [Website](#🌐website)
  * [Programming Languages](#👨‍💻programming-languages)

## 🛠️Installation    
<p>To install the application clone the repository https://github.com/danielfloresd/professional-readme-generator and run node package manager with the following command: node i    
</p>      

## 💻Usage    
<p>After installing all dependencies run $node.js index.js. The application can also be using aby opening index.html with your favorite web browser
</p>
<img src="./assets/images/nodejs.PNG"><img>  

## 🧩Dependencies   
* [Inquirer.js](https://www.npmjs.com/package/inquirer)
* [Foundation.js](https://www.npmjs.com/package/foundation)

## 📛License    
Project license: [MIT](https://choosealicense.com/licenses/mit).     

<details><summary><b>View License</b></summary>MIT License

Copyright (c) 2022 Daniel Flores D

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</details></br>   
       
## 🤝Contributing    
If you would like to contribute, please follow the [GitHub contribution guidelines](https://github.com/github/docs/blob/main/CONTRIBUTING.md)   
      
## 📃Tests    
For testing, you can use the GitHub node.js CI workflow.Please visit: ["The guide to building and testing with node.js"](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)   
      
## ❓Questions   
<p> Question 1: Does the application support images? Currently, there is no support for embedding images to the readme file    
You can contact me with the information below:
</p>

* [![GitHub github:](https://img.shields.io/badge/github:-danielfloresd-black.svg)](https://github.com/danielfloresd)   
* [![email](https://img.shields.io/badge/email:-daniel.flor3s.d@gmail.com-blue.svg)](mailto:daniel.flor3s.d@gmail.com)    
        
## 🌐Website    
To use the web app, please visit the [Professional README.md Generator](https://danielfloresd.github.io/professional-readme-generator/)  

## 👨‍💻Programming Languages    
This project was created with: HTML, CSS, and JavaScript   
      
