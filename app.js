let firstName = "Hafeeza";

let lastName = "Shahid";
let fullName = "Hafeeza " + "Shahid";
let careerField = "Developer in Training";
let description =
  "I'm from Mobile, AL and couldn't eat seafood growing up.";
let fullNameCaps = fullName.toUpperCase();

displayPosition(
  fullNameCaps,
  " Developer in Training",
  " I'm from Mobile, AL and couldn't eat seafood growing up."
);

function displayPosition(myName, myCareerField, myDescription) {
  console.log("Name: " + myName);
  console.log("Career:" + myCareerField);
  console.log("Description:" + myDescription);
}

console.log(" ");

console.log("My Interests:");

displayInterests("Anime");
displayInterests("Movies");
displayInterests("Traveling");
displayInterests("Twitter");

function displayInterests(myInterests) {
  console.log("*" + myInterests);
}

console.log(" ");

console.log("My Past Experience:");

displayExperience(
  "Worked for ADOL in Birmingham, AL for 15 years. My last position was UC Supervisor. Managed teams' performance, assisted with adjudication, evaluated team members."
);
displayExperience(
  "Worked for ADOL in Birmingham, AL as a Claims Examiner. Adjudicated unemployment claims in a timely manner."
);
displayExperience(
  "Worked for Target in Daphne, AL as a GS Team Leader. Supervised cashiers, stocked cash registers, managed guest services."
);

function displayExperience(myPastExperience) {
  console.log("* " + myPastExperience);
}
console.log(' ')

function displaySkill(mySkill, isCool) {
  if (isCool == true) {
    console.log("* BAM: " + mySkill);
  } else if (isCool == false) {
    console.log("* " + mySkill);
  }
}

console.log("My Skills:");
displaySkill("Ice Skating", false);
displaySkill("Speeding", true);
displaySkill("Makeup Artistry", true);
displaySkill("Gardening", false);
displaySkill("Cooking", true);
