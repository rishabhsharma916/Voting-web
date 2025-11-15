const posts = {
  "Chairman": ["Amit", "Rohit", "Suresh"],
  "Vice Chairman": ["Deepak", "Vikas", "Ajay"],
  "Secretary": ["Naman", "Sachin", "Ravi"],
  "Treasurer": ["Karan", "Tarun", "Mohit"],
  "Sports Head": ["Harsh", "Tushar"],
  "Cultural Head": ["Jatin", "Rishi"],
  "Discipline Head": ["Manoj", "Sameer"],
  "Class Representative": ["Nikhil", "Yogesh"]
};

const votes = {};

const section = document.getElementById("post-section");

Object.keys(posts).forEach(post => {
  const box = document.createElement("div");
  box.className = "post-box";

  let html = `<h3>${post}</h3>`;
  posts[post].forEach(c => {
    html += `
      <div class="candidate">
        <input type="radio" name="${post}" value="${c}">
        ${c}
      </div>`;
  });

  box.innerHTML = html;
  section.appendChild(box);
});

function submitVote() {
  Object.keys(posts).forEach(post => {
    const selected = document.querySelector(`input[name="${post}"]:checked`);
    votes[post] = selected ? selected.value : "No Vote";
  });

  alert("Vote Submitted!");
  console.log(votes);
}
