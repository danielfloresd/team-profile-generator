

// Impoirt Manager class from lib folde

import Manager from "../../lib/Manager.js"
import Engineer from "../../lib/Engineer.js"
import Intern from "../../lib/Intern.js"


let team = [];
// Function to create manager card using jquery
const creteListItem = (employee) => {
    // Create a div with class card
    const iconName = employee.getRole() === "Manager" ? "users" :
        employee.getRole() === "Engineer" ? "laptop" :
            "graduation cap";
    const item = $("<div>").addClass("item");
    const logo = $("<i>").addClass(iconName + " big icon");
    const content = $("<div>").addClass("content")
    const header = $("<div>").addClass("header").text(employee.getRole());
    const description = $("<div>").addClass("description").text(employee.getName());
    item.append(logo);
    item.append(content);
    content.append(header);
    content.append(description);

    return item;
}

function generateDocument(data) {

    var html = generateHTML(data);

    $("#html-preview").html(html);
    $("#preview-modal").modal("show");
}


// Add document ready listener
$(document).ready(function () {

    // Add manager-add button listener
    $('#manager-add').on('click', function () {
        // Get values from form
        console.log("Manager button clicked");
        const name = $('#manager').val();
        const id = parseInt($('#manager-id').val());
        const email = $('#manager-email').val();
        const officeNumber = parseInt($('#manager-office').val());

        console.log("Manager", name, id, email, officeNumber);
        // Create new manager object
        try {
            const manager = new Manager(name, id, email, officeNumber);
            // Add manager to team array
            team.push(manager);
            // Clear form
            $('#manager').val('');
            $('#manager-id').val('');
            $('#manager-email').val('');
            $('#manager-office').val('');
            // Add manager to team list
            $('#team-list').append(creteListItem(manager));
        } catch (err) {
            alert(err);
        }
    });

    $('#engineer-add').on('click', function () {
        // Get values from form
        const name = $('#engineer').val();
        const id = parseInt($('#engineer-id').val());
        const email = $('#engineer-email').val();
        const github = $('#engineer-github').val();

        console.log("Engineer", name, id, email, github);
        // Create new manager object
        try {
            const engineer = new Engineer(name, id, email, github);
            // Add manager to team array
            team.push(engineer);
            // Clear form
            $('#engineer').val('');
            $('#engineer-id').val('');
            $('#engineer-email').val('');
            $('#engineer-github').val('');
            // Add manager to team list
            $('#team-list').append(creteListItem(engineer));
        } catch (err) {
            alert(err);
        }
    });

    $('#intern-add').on('click', function () {
        // Get values from form
        const name = $('#intern').val();
        const id = parseInt($('#intern-id').val());
        const email = $('#intern-email').val();
        const school = $('#intern-school').val();

        console.log("Intern", name, id, email, school);
        // Create new manager object
        try {
            const intern = new Intern(name, id, email, school);
            // Add manager to team array
            team.push(intern);
            // Clear form
            $('#intern').val('');
            $('#intern-id').val('');
            $('#intern-email').val('');
            $('#intern-school').val('');
            // Add manager to team list
            $('#team-list').append(creteListItem(intern));
        } catch (err) {
            alert(err);
        }
    });


    $("#generate").on("click", function () {
        // Add download markdown as a file
        var element = document.createElement("a");
        let html = generateHTML(team);
        // Open a new window with the generated HTML
        var win = window.open();
        win.document.write(html);
        win.document.close();
    });

    
    $("#download").on("click", function () {
        // Add download markdown as a file
        var element = document.createElement("a");
        let html = generateHTML(team);
        // Download generated html as a file
        // Open window to download file to local machine
        var file = new Blob([html], { type: 'text/html' });
        element.href = URL.createObjectURL(file);
        element.download = "team.html";
        element.click();
    });
});