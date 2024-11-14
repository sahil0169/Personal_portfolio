window.addEventListener("scroll", function () {
    const skillsSection = document.querySelector(".skills-section");
    const skills = document.querySelectorAll(".skill");
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.5;

    if (sectionTop < triggerPoint) {
        skills.forEach((skill, index) => {
            setTimeout(() => {
                skill.classList.add("active");
            }, index * 100); // Delay each skill's animation
        });
    }
});
