
window.onload = function () {
  alert("Welcome to Gian Montesines Alborida's Portfolio!");
  type();
};

const text = "Gian Montesines Alborida | IT Student";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    
    navLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});


const skillsSection = document.querySelector(".skills");

window.addEventListener("scroll", () => {
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    skillsSection.classList.add("fade-in");
  }
});
