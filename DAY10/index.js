const cardEl = document.querySelectorAll(".card");
cardEl.forEach((card) =>
    card.addEventListener("click", () => {
        card.classList.toggle("clicked");
    })
)
back[1].suffle()

document.body.style.backgroundImage[1] = "url('')";
function suffle() {
    var imgCount = 6;
    // var dir = './images/';
    // I changed your random generator
    //floor: helps getting a random integer
    var randomCount = (Math.floor(Math.random() * imgCount));
    // I changed your array to the literal notation. The literal notation is preferred.
    var images = ['./images/1.png', './images/2.png', './images/3.png','./images/4.png','./images/5.png','./images/6.png'];
    // I changed this section to just define the style attribute the best way I know how.
    document.getElementById('back').setAttribute("style", "background-image: url(" + images[randomCount] + "); background-position: center; background-size:cover; width: 100%;  height: 100%;")
}

