//todo: function that generates engineer card
function renderEngineerCard(){
// fix template literals
    for (const member of teamMembers) {
        if (member.role === "Engineer"){
            return `

            <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header my-2">
                <h2>${member.name}</h2>
                <h3>Engineer <i class="fa-solid fa-gear"></i></h3>
            </div>
            <div class="card-body text-dark">
                <h5 class="card-title my-3">ID: ${member.id}</h5>
                <h5 class="card-title my-3"><a href="mailto:${member.email}">Send Email</a></h5>
                <h5 class="card-title my-3"><a href="https://github.com/${member.github}">Github</a></h5>
        </div>
        </div>
        
            `
        }
    }
}


//todo: function that generates intern card
function renderInternCard(){
    // fix template literals
    for (const member of teamMembers) {
        if (member.role === "Intern"){
            return `

            <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header my-2">
                <h2>${data.name}</h2>
                <h3>Intern <i class="fa-solid fa-graduation-cap"></i></h3>
            </div>
            <div class="card-body text-dark">
                <h5 class="card-title my-3">ID: ${member.id}</h5>
                <h5 class="card-title my-3"><a href="mailto:${member.email}">Send Email</a></h5>
                <h5 class="card-title my-3">Education: ${member.school}</h5>
            </div>
        </div>
        
            `
        }
    }
}


//todo: function that generates html
function generateHTML(){
    return ``
}


module.exports = generateHTML;