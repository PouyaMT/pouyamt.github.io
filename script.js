function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openNav() {
    document.getElementById("sidenav").style.width = "175px";
    document.getElementById("home").style.marginLeft = "175px";
    document.getElementById("skills").style.marginLeft = "175px";
    document.getElementById("works").style.marginLeft = "175px";
    document.getElementById("contact").style.marginLeft = "175px";
    document.getElementById("nav-button").style.display = "none";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("home").style.marginLeft = "0";
    document.getElementById("skills").style.marginLeft = "0";
    document.getElementById("works").style.marginLeft = "0";
    document.getElementById("contact").style.marginLeft = "0";
    sleep(275).then(() => { document.getElementById("nav-button").style.display = "block"; });
}

document.querySelectorAll('.sidenav a').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
            });
        }
    });
});
