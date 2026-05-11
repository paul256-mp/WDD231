const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

const courses = [
  {
    code: "WDD130",
    credits: 3,
    completed: true,
    subject: "WDD"
  },
  {
    code: "CSE111",
    credits: 2,
    completed: false,
    subject: "CSE"
  },
  {
    code: "WDD131",
    credits: 3,
    completed: true,
    subject: "WDD"
  },
  {
    code: "WDD231",
    credits: 3,
    completed: false,
    subject: "WDD"
  }
];

const coursesContainer = document.getElementById("courses");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(courseList) {

  coursesContainer.innerHTML = "";

  let total = 0;

  courseList.forEach(course => {

    const div = document.createElement("div");

    div.textContent =
      `${course.code} - ${course.credits} credits`;

    if (course.completed) {
      div.classList.add("completed");
    }

    coursesContainer.appendChild(div);

    total += course.credits;
  });

  totalCredits.textContent = total;
}

// Display all by default
displayCourses(courses);

// FILTER BUTTONS
document.getElementById("all").addEventListener("click", () => {
  displayCourses(courses);
});

document.getElementById("wdd").addEventListener("click", () => {
  const filtered = courses.filter(course =>
    course.subject === "WDD"
  );

  displayCourses(filtered);
});

document.getElementById("cse").addEventListener("click", () => {
  const filtered = courses.filter(course =>
    course.subject === "CSE"
  );

  displayCourses(filtered);
});
