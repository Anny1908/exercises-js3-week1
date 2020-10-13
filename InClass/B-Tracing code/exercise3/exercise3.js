const getRepos = function(repoName) {
    return fetch('https://api.github.com/users/' + repoName + '/repos')
        .then(data => data.json())
        .then(function(response) {
            return response.map(function(rep) {
                console.log(rep.name);
                return rep.name;
            });
        });
};
const migracodeRepos = getRepos('migracode-barcelona');
console.log("Loading...");


const myElement = document.querySelector("#main");
const paragraph = document.createElement("p");
paragraph.innerText = migracodeRepos;
myElement.appendChild(paragraph);

getRepos("migracode-barcelona");
const myElement = document.querySelector("#main");

//Task1. Fix the code
//Task2. Create a <p> for each repository