/**
 * generateHTML.js
 *
 *
 * @license The Unlicense, http://unlicense.org/
 * @version 1.0
 * @author  Daniel Flores, https://github.com/danielfloresd/
 * @updated 2022-11-16
 * @link    url goes here
 *
 *
 */
const managerCard = ({ name, id, email, officeNumber }) => {
    return `
        <div class="cell flex-container">
            <div class="card">
                <div class="card-divider align-center grid-y">
                    <h2>${name}</h2>
                    <h3><i class="fa-solid fa-people-roof"></i> Manager</h3>
                    </div>
                <div class="card-section text-left">
                    <p>ID: <b>${id}</b></p>
                    <p>email: <a href="mailto: ${email}"><b>${email}</b></a></p>
                    <p>Office Number: <b>${officeNumber}</b></p>
                </div>
            </div>
        </div>
    `;
};

const engineerCard = ({ name, id, email, github }) => {

    return `
        <div class="cell flex-container">
            <div class="card">
                <div class="card-divider align-center grid-y">
                    <h2>${name}</h2>
                    <h3><i class="fa-solid fa-laptop-code"></i> Engineer</h3>
                    </div>
                <div class="card-section text-left">
                    <p>ID: <b>${id}</b></p>
                    <p>email: <a href="mailto: ${email}"><b>${email}</b></a></p>
                    <p>GitHub: <a href="https://github.com/${github}" target="_blank"><b>${github}</b></a></p>
                </div>
            </div>
        </div>
    `;

};

const internCard = ({ name, id, email, school }) => {
    return `
        <div class="cell flex-container">
            <div class="card">
                <div class="card-divider align-center grid-y">
                    <h2>${name}</h2>
                    <h3><i class="fa-solid fa-user-graduate"></i> Intern</h3>
                    </div>
                <div class="card-section text-left">
                    <p>ID: <b>${id}</b></p>
                    <p>email: <a href="mailto: ${email}"><b>${email}</b></a></p>
                    <p>School: <a href="https://${school}.edu" target="_blank"><b>${school}</b></a></p>
                </div>
            </div>
        </div>
    `;

};

const selectCard = (teamArray) => {
    // variable containing returned HTML cards code
    let cards = '';
    // sequentially adds cards of the correct role to cards variable
    teamArray.forEach(employee => {

        const employeeRole = employee.getRole();

        switch (employeeRole) {
            case 'Manager':
                cards += managerCard(employee); 
                break;

            case 'Engineer':
                cards += engineerCard(employee);
                break;

            case 'Intern':
                cards += internCard(employee);
                break;
        
            default:
                console.error('Unknown employee role');
                break;
        };

    });

    // returns all of the code for the cards to the generateHTML function
    return cards;

};

const generateHTML = (teamArray) => {

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/css/foundation.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
   
    <div class="grid-y grid-frame">
        <div class="cell shrink header medium-cell-block-container text-center ">
          <h1>My Team</h1>
        </div>

        <div class="cell cell-block body auto">
          <div class="grid-x grid-padding-x text-center small-up-1 medium-up-2 large-up-3 container">

          ${selectCard(teamArray)}  

          </div>
        </div>
        
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/js/foundation.min.js" crossorigin="anonymous"></script>
</body>
</html>
`;
};

module.exports = generateHTML;
