let points = 0;


let answer1 = prompt(`in which country is the legendary Everest?`);
if (answer1=== "Nepal"){
  points = points +5
};




let answer2 = prompt(`What year did the first world war start?`);
if (answer2=== "1914") {
   points = points + 5
};



let answer3 = prompt(`What year did the First World War end?`);
if (answer3=== "1918") {
  points = points + 5
};


let answer4 = prompt(`Aboute how old is the Pyramid of Cheops?`);
if (answer4=== "4500"){
  points = points + 5
};

let answer5 = prompt(`How many recognized countries are there in the world?`);
if (answer5=== "197"){
  points = points + 5
};

let answer6 = prompt (`Structural and functional elementary unit of the structure and life of all organisms?`);
if (answer6=== "cell"){
  points = points + 5
};


alert(`You've earned ` + points + " points");