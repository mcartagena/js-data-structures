var framework = 'Angular';
var framework = 'React';
console.log(framework);

let language = 'JavaScript!'; // {1} 
// let language = 'Ruby!'; // {2} - throws error 
console.log(language);

const PI = 3.141593;
// PI = 3.0; //throws error 
console.log(PI);

const jsFramework = {
    name: 'Angular'
};

console.log(jsFramework.name);

jsFramework.name = 'React';  // work 

console.log(jsFramework.name);  // allows the properties of the object to be reassigned or updated

// error, cannot reassign object reference 
/* jsFramework = {
    name: 'Vue'
}; */

/* Variable Scope */

let movie = 'Lord of the Rings'; // {1} 
// var movie = 'Batman v Superman'; // error movie already declared 

function starWarsFan() {
    const movie = 'Star Wars'; // {2} 
    return movie;
}

function marvelFan() {
    movie = 'The Avengers'; // {3} 
    return movie;
}

function blizzardFan() {
    const isFan = true;
    let phrase = 'Warcraft'; // {4} 
    console.log('Before if: ' + phrase);
    if (isFan) {
        let phrase = 'initial text'; // {5} 
        phrase = 'For the Horde!';   // {6} 
        console.log('Inside if: ' + phrase);
    }
    phrase = 'For the Alliance!'; // {7} 
    console.log('After if: ' + phrase);
}

console.log(movie); // {8} 
console.log(starWarsFan()); // {9} 
console.log(marvelFan()); // {10} 
console.log(movie); // {11} 
blizzardFan(); // {12} 

// Template literals

console.log('Template literals');

const book = {
    name: 'Learning JavaScript DataStructures and Algorithms'
};

console.log('You are reading ' + book.name + '.,\n and this is a new line\n   and so is this.');

console.log(`You are reading ${book.name}., 
   and this is a new line 
   and so is this.`); 

