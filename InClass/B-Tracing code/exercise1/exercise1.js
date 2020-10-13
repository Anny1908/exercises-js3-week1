function greetPeople(people) {
    const greeting = "He";
    greeting = greeting + "llo";
    greeting = greeting + " ";
    people.forEach(function(person) {
        greeting = greeting + person;
        console.log(greeting);
    });

    return greeting;
}
/*Let's trace this piece of code - what is the value of result with this input*/
const mentors = ['Irina', 'Ashleigh', 'Etza'];
const result = greetPeople(mentors)

const greetPeople = people => {
    let greeting = "He";
    greeting = greeting + "llo";
    greeting = greeting + " ";

    for (let i = 0; i < people.length; i++) {
        if (i === people.length - 2) {
            greeting = `${greeting} ${people[i]} and `;
        } else if (i === people.length - 1) {
            greeting = `${greeting} ${people[i]}.`;
        } else {
            greeting = `${greeting} ${people[i]}, `;
        }
    }
    console.log(greeting);
    return greeting;
};
/*
  Let's trace this piece of code - what is the value of result with this input
  */
// const mentors = ["Irina", "Ashleigh", "Etza"];
const mentors = ["Irina", "Ashleigh", "Etza", "Alfonso", "Ana", "Daniela", "David"];
const result = greetPeople(mentors);