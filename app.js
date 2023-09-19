let first = true;
let second = false;
let third = true;
let fourth = true;
let fifth = false;

if (first && third && fourth) {
  console.log("Correct, first, third and fourth are all true!");
} else if (second || fifth) {
  console.log("second and fifth were false");
}

let coffee = prompt("Do I like to drink coffee?");

if (coffee === "yes" || coffee === "y") {
  alert("Correct!");
  //console.log("Correct!");
} else {
  alert("Sorry my friend, my blood is mostly caffeine");
  //console.log("Sorry my friend, you are incorrect");
}
//console.log(coffee);
//console.log(coffee.toLowerCase());

let chef = prompt("Am I a classically trained chef?");

if (chef === "no" || chef === "n") {
  alert("Correct!");
  //console.log("Correct!");
} else {
  alert("YES CHEF! I mean no, im not classically trained.");
  //console.log("Not classically, I learnt on the job");
}
//console.log(chef);
//console.log(chef.toLowerCase());

let jurassic = prompt("Do I like Jurassic Park?");

if (jurassic === "yes" || jurassic === "y") {
  alert("Like life, you found a way!");
  //console.log("Like life, you found a way!");
} else {
  alert("Try again");
  //console.log("Try again");
}

//console.log(jurassic);
//console.log(jurassic.toLowerCase());

let coding = prompt("Do I have any previous coding experience?");

if (coding === "yes" || coding === "y") {
  alert("I have a little bit of experience.");
  //console.log("I have a little bit of experience.");
} else {
  alert("I dont have much but I do have some experience");
  //console.log("I dont have much but I do have some experience");
}

//console.log(coding)
//console.log(coding.toLowerCase());

let pineapple = prompt("Should pineapple go on pizza?");

if (pineapple === "no" || pineapple === "n") {
  alert("Get in the bin!");
  //console.log("Get in the bin!");
} else {
  alert("If you think yes, then im sorry. Get in the bin");
  //console.log("If you think yes, then im sorry. Get in the bin");
}

//console.log(pineapple);
//console.log(pineapple.toLowerCase());
