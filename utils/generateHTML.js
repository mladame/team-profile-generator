const teamMembers = require("..")

const prepTeamHTML = teamMembers => {

// generate manager card
const createManager = manager => {
    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header my-2">
                <h2>${manager.getName()}</h2>
                <h3>Manager <i class="fa-solid fa-mug-saucer"></i></h3>
            </div>
            <div class="card-body text-dark">
                <h5 class="card-title my-3">${manager.getId()}</h5>
                <h5 class="link card-title my-3"><a href="mailto:${manager.getEmail()}">Send Email</a></h5>
                <h5 class="card-title my-3">${manager.getOfficeNumber()}</h5>
            </div>
        </div>
        
            `
}

// genereate engineer card
const createEngineer = engineer => {

    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header my-2">
            <h2>${engineer.getName()}</h2>
            <h3>Engineer <i class="fa-solid fa-gear"></i></h3>
        </div>
        <div class="card-body text-dark">
            <h5 class="card-title my-3">ID: ${engineer.getId()}</h5>
            <h5 class="card-title my-3"><a href="mailto:${engineer.getEmail()}">Send Email</a></h5>
            <h5 class="card-title my-3"><a href="https://github.com/${engineer.getGithub()}">Github</a></h5>
    </div>
    </div>

        `
}

// generate intern card
const createIntern = intern => {

    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header my-2">
                <h2>${intern.getName()}</h2>
                <h3>Intern <i class="fa-solid fa-graduation-cap"></i></h3>
            </div>
            <div class="card-body text-dark">
                <h5 class="card-title my-3">ID: ${intern.getId()}</h5>
                <h5 class="card-title my-3"><a href="mailto:${intern.getEmail()}">Send Email</a></h5>
                <h5 class="card-title my-3">Education: ${intern.getSchool()}</h5>
            </div>
        </div>
        
            `
}

// get data
    const getTeam = [];

    //push team member info that returns "Manager" from getRole(), creates manager card with corresponding data
    getTeam.push(teamMembers
        .filter(Employee => Employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );

    getTeam.push(teamMembers
        .filter(Employee => Employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
    );

    getTeam.push(teamMembers
        .filter(Employee => Employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
    );

    return getTeam.join("");

}

function generateHTML(teamMembers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Portfolio</title>
        <script src="https://kit.fontawesome.com/3bb8ce0229.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="./stlye-team-profile.css">
    </head>
    <body>
    
        <div class="jumbotron bg-dark text-light p-5 mb-4">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold border-bottom">Meet the Team</h1>
                <p class="col-md-8 fs-4"></p>
            </div>
        </div>
    
        <div class="team-cards-container row my-5">
    
        ${prepTeamHTML(teamMembers)}
    
        </div>
    
    </body>
    
    </html>

    `
}

// 
module.exports = generateHTML;