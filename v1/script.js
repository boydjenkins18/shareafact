const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM elements: Render facts in list
factsList.innerHTML = "";

//load data from supabase

loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://hevztjcebvppkrlnqvpc.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhldnp0amNlYnZwcGtybG5xdnBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0NzY1MzAsImV4cCI6MjAyNzA1MjUzMH0.TZnks7NRB_S4eCgWCoEv8nFKHywMauT7o4ppkk09dHA",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhldnp0amNlYnZwcGtybG5xdnBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0NzY1MzAsImV4cCI6MjAyNzA1MjUzMH0.TZnks7NRB_S4eCgWCoEv8nFKHywMauT7o4ppkk09dHA",
      },
    }
  );
  const data = await res.json();
  // const filteredData = data.filter((fact) => fact.category === "society");
  createFactList(data);
}

function createFactList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact"> 
                <p>
                  ${fact.text}
                  <a
                    class="source"
                    href="${fact.source}"
                    target="_blank"
                    >(Source)</a
                  >
                </p>
  
                <span class="tag" style="background-color: ${
                  CATEGORIES.find((cat) => cat.name === fact.category).color
                }"
                  >${fact.category}</span
                >
    
              </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

////////////////////////

/*
function calcYear(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return "Not born yet";
}

const age1 = calcYear(1996);

console.log(age1);
console.log(calcYear(2020));
console.log(calcYear(1990));
console.log(calcYear(2037));

let votesInteresting = 20;
let votesMindblowing = 20;
*/
// if (votesInteresting === votesMindblowing) {
//   alert("Interesting and Mindblowing votes are equal");
// } else if (votesInteresting > votesMindblowing) {
//   console.log("Interesting votes are more than Mindblowing votes");
// } else if (votesInteresting < votesMindblowing) {
//   console.log("Mindblowing votes are more than Interesting votes");
// }

/*
if (votesMindblowing) {
  console.log("VotesMindblowing is truthy");
} else {
  console.log("not so special....");
}

const message =
  votesInteresting > votesMindblowing
    ? "Interesting votes are more than Mindblowing votes"
    : "Mindblowing votes are more than Interesting votes";

*/

/*
const calcYear2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : "Not born yet";

console.log(calcYear2(1996));

// const facts = ["Fact", 2021, true];
// const [text, createdIn, isCorrect] = facts;

// console.log(text);

const factObj = {
  text: "Fact",
  category: "General",
  createdIn: 2021,
  isCorrect: true,
  createSummary: function () {
    return `${this.text} was created in ${
      this.createdIn
    } with the category of ${this.category.toUpperCase()}`;
  },
};

const { category, isCorrect } = factObj;

console.log(factObj.createSummary());

[2, 4, 6, 8].forEach(function (num) {
  console.log(num);
});

const times2 = [2, 4, 6, 8].map((num) => num * 2);

console.log(times2);



const allCategories = CATEGORIES.map((category) => category.name);

console.log(allCategories);



const factAges = initialFacts.map((fact) => calcYear(fact.createdIn));

console.log(factAges);
console.log(factAges.join(", "));
*/
