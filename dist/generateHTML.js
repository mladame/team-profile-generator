//todo: make function that creates email link


//todo: make function that creates github link
function renderGithubLink(){


}

//todo: make function that generates manager card
function renderManagerCard(){

    for (const member of teamMembers) {
        if (member.role === "Manager"){
            return `

            <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header my-2">
                <h2>${member.name}</h2>
                <h3>Manager <i class="fa-solid fa-mug-saucer"></i></h3>
            </div>
            <div class="card-body text-dark">
                <h5 class="card-title my-3">ID: ${member.id}</h5>
                <h5 class="card-title my-3"><a href="mailto:${member.email}">Send Email</a></h5>
                <h5 class="card-title my-3">Office Number: ${member.office}</h5>
            </div>
        </div>
        
            `
        }
    }
}


//todo: function that generates engineer card
function renderEngineerCard(){

}


//todo: function that generates intern card
function renderInternCard(){}


//todo: function that generates html
function generateHTML(){
    return ``
}


module.exports = generateHTML;