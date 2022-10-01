
//#######################################--welcome sentence--###############################################

const Welcome = ["Welcome to our site", "مرحبا بكم في موقعنا"];
const pWelcome = document.getElementById("pWelcome");
setInterval(statementDynamically, 3000);

var i = 0;
function statementDynamically() {
    pWelcome.innerHTML = Welcome[(i = (i + 1) % Welcome.length)];
}



//######################################--button UpPage and counters --###############################################

let Up = document.getElementById("UpPage");

Up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
window.onscroll = function () {
    //button UpPage
    if (this.scrollY >= 200) {
        Up.classList.add("show");
    } else {
        Up.classList.remove("show");
    }
    //-----------------------------------------
    //counters
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            counters.forEach((counter) => startCount(counter));
        }
        started = true;

    }
};

//__________________________##--counters--##________________________________



const counters = document.querySelectorAll('.counter');
const section = document.getElementById('counts');//Jordan
let started = false; // Function Started ? No



function startCount(e1) {
    let goal = e1.dataset.goal;
    let count = setInterval(() => {

        const c = +e1.innerText;
        const increment = goal / 250;

        if (c < goal) {
            e1.innerText = Math.ceil(c + increment);
        } else {
            e1.innerText = goal;
        }

    }, 10);
}



//#####################################--hovers on the place cards  title the font size will increase--#################################################
function increase_fontSize(element) {
    element.style.fontSize = "35px";
    element.style.transition = "0.5s";
    element.style.color = "#ffc107";
}
function decrease_fontSize(element) {
    element.style.fontSize = "22px";
    element.style.transition = "0.5s";
}
//########################################--cards: change image  --##############################################
function changeimage(id_img, element, nameImg) {

    if (element.classList.contains("bi-check2")) {

        element.classList.remove("btn-outline-warning");
        element.classList.add("btn-warning");
        element.classList.remove("bi-check2");
        element.classList.add("bi-check2-all");


        document.getElementById(id_img).src = "assets/img/check.jfif";
    } else {
        element.classList.remove("btn-warning");
        element.classList.add("btn-outline-warning");
        element.classList.remove("bi-check2-all");
        element.classList.add("bi-check2");

        document.getElementById(id_img).src = "assets/img/" + nameImg;
    }
}