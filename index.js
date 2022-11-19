const inquirer = require('inquirer');
const fs = require('fs');
const Logger = require("./src/logger");

const log = new Logger();
// classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// helper code
const generateHTML = require('./src/generateHTML');
let takenIDs = [];

const introQuestion = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter a name for your document.',
        default: "index.html",
        validate: input => {
            if (!input) {
                log.yellow('No Input detected. Please enter a file name.');
                return false;
            } else {
                return true;
            }
        }
    }

]

const managerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: "What is the team manager's name?",
        validate: input => {
            if (!input) {
                log.yellow('No Input detected. Please enter a name.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the team manager's ID number?",
        validate: input => {
            let dupeID = false;
            takenIDs.forEach(id => {

                if (input === id) {
                    dupeID = true;
                }
            })

            if (!input) {
                log.yellow('No Input detected. Please enter a number.');
                return false;
            } else if (isNaN(input)) {
                log.yellow('\tPlease enter a number.');
                return false;
            } else if (input < 0) {
                log.yellow('\tPlease enter a non-negative number.');
                return false;
            } else if (dupeID) {
                log.yellow('\tAnother team member already has that ID. Please enter a different ID.');
                return false;
            } else {
                takenIDs.push(input);
                return true;
            }
        }
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the team manager's email address?",
        validate: email => {

            const validEmail = String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );

            if (!validEmail) {
                log.yellow('\tPlease enter a valid email address in the proper format.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: "What is the team manager's office number?",
        validate: input => {
            if (!input) {
                log.yellow('No Input detected. Please enter a number.');
                return false;
            } else if (isNaN(input)) {
                log.yellow('\tPlease enter a number.');
                return false;
            } else if (input < 0) {
                log.yellow('\tPlease enter a non-negative number.');
                return false;
            } else {
                return true;
            }
        }
    }
];

const engineerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: "What is the engineer's name?",
        validate: input => {
            if (!input) {
                log.yellow('No Input detected. Please enter a name.');
                return false;
            } else {
                return true;
            }
        }
    },

    {
        name: 'id',
        type: 'input',
        message: "What is the engineer's ID number?",
        validate: input => {

            let dupeID = false;

            takenIDs.forEach(id => {

                if (input === id) {
                    dupeID = true;
                }
            })
            if (!input) {
                log.yellow('No Input detected. Please enter a number.');
                return false;
            } else if (isNaN(input)) {
                log.yellow('\tPlease enter a number.');
                return false;
            } else if (input < 0) {
                log.yellow('\tPlease enter a non-negative number.');
                return false;
            } else if (dupeID) {
                log.yellow('\tAnother team member already has that ID. Please enter a different ID.');
                return false;
            } else {
                takenIDs.push(input);
                return true;
            }
        }
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the engineer's email address?",
        validate: email => {

            const validEmail = String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );

            if (!validEmail) {
                log.yellow('\tPlease enter a valid email address in the proper format.');
                return false;
            } else {
                return true;
            }
        }
    },

    {
        name: 'github',
        type: 'input',
        message: "What is the engineer's github username?",
        validate: input => {
            if (!input) {
                log.yellow('No Input detected. Please enter a username.');
                return false;
            } else {
                return true;
            }
        }
    },

];

const internQuestions = [

    {
        name: 'name',
        type: 'input',
        message: "What is the intern's name?",
        validate: input => {
            if (!input) {
                log.yellow('No Input detected. Please enter a name.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the intern's ID number?",
        validate: input => {

            let dupeID = false;

            takenIDs.forEach(id => {

                if (input === id) {
                    dupeID = true;
                }
            })

            if (!input) {
                log.yellow('No Input detected. Please enter a number.');
                return false;
            } else if (isNaN(input)) {
                log.yellow('\tPlease enter a number.');
                return false;
            } else if (input < 0) {
                log.yellow('\tPlease enter a non-negative number.');
                return false;
            } else if (dupeID) {
                log.yellow('\tAnother team member already has that ID. Please enter a different ID.');
                return false;
            } else {
                takenIDs.push(input);
                return true;
            }
        }
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the intern's email address?",
        validate: email => {

            const validEmail = String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );

            if (!validEmail) {
                log.yellow('\tPlease enter a valid email address in the proper format.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        name: 'school',
        type: 'input',
        message: "What is the intern's school?",
        validate: input => {
            if (!input) {
                log.yellow('No Input detected. Please enter a school.');
                return false;
            } else {
                return true;
            }
        }
    },

];

const menuQuestion = [
    {
        name: 'menuOption',
        type: 'list',
        message: 'Please select one of the following options:',
        choices: [
            'Add an engineer',
            'Add an intern',
            'Finish building team',
        ],
        default: 'Add an engineer'
    },

];

// variables to hold created objects and document name
let teamArray = [];
let documentName = '';

const writeToFile = (documentName, documentBody) => {
    let fileName = "./dist/" + documentName;
    fs.writeFile(fileName, documentBody, (err) =>
        err ? console.error(err) : console.log("HTML document successfully created at " + fileName));

}


const intro = () => {
    log.cyan("     Team Profile Generator     ");
    inquirer
        .prompt(introQuestion)
        .then(({ name }) => {

            documentName = name;
            managerQuery();

        });
};


const managerQuery = () => {
    log.red("     Manager Information      ");
    inquirer
        .prompt(managerQuestions)
        .then(({ name, id, email, officeNumber }) => {

            officeNumber = parseInt(officeNumber);
            id = parseInt(id);

            const managerObject = new Manager(name, id, email, officeNumber);
            teamArray.push(managerObject);
            menu();

        });

};


const engineerQuery = () => {
    log.blue("     Engineer Information      ");

    inquirer
        .prompt(engineerQuestions)
        .then(({ name, id, email, github }) => {

            id = parseInt(id);

            const engineerObject = new Engineer(name, id, email, github);
            teamArray.push(engineerObject);
            menu();

        });

};

const internQuery = () => {
    log.magenta("      Intern Information      ");

    inquirer
        .prompt(internQuestions)
        .then(({ name, id, email, school }) => {

            id = parseInt(id);

            const internObject = new Intern(name, id, email, school);
            teamArray.push(internObject);
            menu();

        });

};


const menu = () => {
    log.cyan("      Team Profile Generator      ");

    inquirer
        .prompt(menuQuestion)
        .then(({ menuOption }) => {

            switch (menuOption) {

                case 'Add an engineer':
                    engineerQuery();
                    break;

                case 'Add an intern':
                    internQuery();
                    break;

                case 'Finish building team':
                    const documentBody = generateHTML(teamArray);
                    writeToFile(documentName, documentBody);
                    break;

                default:
                    console.error('Something went wrong with the menu');
                    break;

            };

        });

};


const init = () => {

    log.cyan("Welcome to the team profile generator application. You will be presented with a series of questions about your team members' information. Once completed an HTML document will be generated in the 'dist' directory. Style provided using Foundation's CSS, additional style.css document also in the 'dist' directory.");

    intro();

};


init();