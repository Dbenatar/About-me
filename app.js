let user = prompt("Hello, what is your name?");
alert("Hello " + user + ", welcome");

let first = true;
let second = false;
let third = true;
let fourth = true;
let fifth = false;

//if (first && third && fourth) {
//console.log("Correct, first, third and fourth are all true!");
//} else if (second || fifth) {
//console.log("second and fifth were false");
//}

function quizzical() {
  let score = 0;
  let coffee = prompt("Do I like to drink coffee?").toLowerCase().trim();

  while (coffee !== "yes" && coffee !== "no") {
    coffee = prompt("Yes or no?").toLowerCase().trim();
  }
  if (coffee === "yes" || coffee === "y") {
    alert("Correct!");
    //console.log("Correct!");
    score++;
  } else {
    alert("Sorry my friend, my blood is mostly caffeine");
    //console.log("Sorry my friend, you are incorrect");
    console.log(score);
  }
  //console.log(coffee);
  //console.log(coffee.toLowerCase());

  let chef = prompt("Am I a classically trained chef?").toLowerCase().trim();

  while (chef !== "yes" && chef !== "no") {
    coffee = prompt("Yes or no?").toLowerCase().trim();
  }

  if (chef === "no" || chef === "n") {
    alert("Correct!");
    //console.log("Correct!");
    score++;
  } else {
    alert("YES CHEF! I mean no, im not classically trained.");
    //console.log("Not classically, I learnt on the job");
  }
  //console.log(chef);
  //console.log(chef.toLowerCase());

  let jurassic = prompt("Do I like Jurassic Park?").toLowerCase().trim();

  while (jurassic !== "yes" && jurassic !== "no") {
    coffee = prompt("Yes or no?").toLowerCase().trim();
  }

  if (jurassic === "yes" || jurassic === "y") {
    alert("Like life, you found a way!");
    //console.log("Like life, you found a way!");
    score++;
  } else {
    alert("Try again");
    //console.log("Try again");
  }

  //console.log(jurassic);
  //console.log(jurassic.toLowerCase());

  let coding = prompt("Do I have any previous coding experience?")
    .toLowerCase()
    .trim();

  while (coding !== "yes" && coding !== "no") {
    coffee = prompt("Yes or no?").toLowerCase().trim();
  }

  if (coding === "yes" || coding === "y") {
    alert("I have a little bit of experience.");
    //console.log("I have a little bit of experience.");
    score++;
  } else {
    alert("I dont have much but I do have some experience");
    //console.log("I dont have much but I do have some experience");
  }

  //console.log(coding)
  //console.log(coding.toLowerCase());

  let pineapple = prompt("Should pineapple go on pizza?").toLowerCase().trim();

  while (pineapple !== "yes" && pineapple !== "no") {
    coffee = prompt("Yes or no?").toLowerCase().trim();
  }

  if (pineapple === "no" || pineapple === "n") {
    alert("Pizza with pineapple should get in the bin!");
    //console.log("Get in the bin!");
    score++;
  } else {
    alert("If you think yes, then im sorry. Get in the bin");
    //console.log("If you think yes, then im sorry. Get in the bin");
    //console.log(pineapple);
    //console.log(pineapple.toLowerCase());
  }

  alert("Congratulations, you got " + score + " /5");
  confirm("Thank you for taking my little quiz " + user);

  let answer = 37;
  let number = prompt("Can you guess my age?");
  let attempts = 4;

  while (attempts > 1) {
    attempts--;
    if (number > answer) {
      alert("Ouch! Im not that old yet");
      number = prompt("Try again. You have " + attempts + " left");
    } else if (number < answer) {
      alert("I appreciate the ego boost but no.");
      number = prompt("Try again. You have " + attempts + " left");
    } else if (parseInt(number) === answer) {
      alert("That's right, downhill to 40");
      break;
    }
  }

  if (parseInt(number) !== answer) {
    alert("My sense of humour may suggest that I am younger, I am 37");
  }

  let continents = [
    "Asia",
    "Oceania",
    "Africa",
    "South America",
    "North America",
  ];

  let arrAns = "South America";
  let attempts6 = 6;

  let contGuess = prompt("Which continent have I not visited?");

  if (continents.indexOf(contGuess) !== -1) {
    alert("Thats right! I havent been to " + contGuess);
  }
}
