console.log("script.js is connected");

const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();

function daysUntil(eventDate, today) {
    const msPerDay = 1000 * 60 * 60 * 24;
    const diff = eventDate - today;
    return Math.ceil(diff / msPerDay);
}

const eventTime = document.querySelector("#intro time").dateTime;
const eventDate = new Date(eventTime);

const days = daysUntil(eventDate, new Date());

let message;
if (days > 1) {
  message = `${days} days to go.`;
} else if (days === 1) {
  message = "Tomorrow!";
} else if (days === 0) {
  message = "It's today. Come and have some tea.";
} else {
  message = "This year's meetup has happened. See you in 2027.";
}

document.querySelector(".countdown").textContent = `${message}`;

/*
const tea = ["masala", "ginger"];
tea.push("lemon");
console.log(tea);

const more = [...tea, "mint"];
console.log(more);
*/

const sessions = [
  { time: "09:30", title: "Welcome and tea", speaker: "Organisers", type: "break", minutes: 30 },
  { time: "10:00", title: "Forms people actually finish", speaker: "Anjali Shrestha", type: "talk", minutes: 20 },
  { time: "10:30", title: "Colour, contrast and your brand", speaker: "Priya Karki", type: "talk", minutes: 20 },
  { time: "11:00", title: "Workshop: deploy a site before lunch", speaker: "Bikash Tamang", type: "workshop", minutes: 90 },
  { time: "12:30", title: "Lunch", speaker: "Everyone", type: "break", minutes: 60 },
  { time: "13:30", title: "Testing with a keyboard and a screen reader", speaker: "Suman Rai", type: "talk", minutes: 20 },
  { time: "14:00", title: "Shipping a static site for free", speaker: "Bikash Tamang", type: "talk", minutes: 20 },
  { time: "14:30", title: "Closing tea and certificates", speaker: "Organisers", type: "break", minutes: 30 },
];

const scheduleBody = document.querySelector(".schedule-body");

const toRow = ({ time, title, speaker }) => `
    <tr>
        <td><time datetime="${time}">${time}</time></td>
        <td>${title}</td>
        <td>${speaker}</td>
    </tr>
`;

function renderSchedule(list) {
    const val = list.map(toRow).join("");
    scheduleBody.innerHTML = val;
}

renderSchedule(sessions);

const totalMinutes = sessions.reduce((total, session) => total + session.minutes, 0);
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

const summary = document.querySelector(".schedule-summary");
summary.textContent = `${sessions.length} sessions, ${hours}h ${minutes}min from first tea to last.`;

document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});