// console.log("LKS")
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const ones = document.querySelectorAll('.one');
// const two = document.querySelector('.two');
// const three = document.querySelector('.three');
// const four = document.querySelector('.four');
// const five = document.querySelector('.five');


let currentactive = 1;

//Event Listener

next.addEventListener('click', () => {
    currentactive++;

    if (currentactive > circles.length) {
        currentactive = circles.length;


    }
    update();
    update1();







    // console.log(currentactive);
});

prev.addEventListener('click', () => {
    currentactive--;

    if (currentactive < 1) {
        currentactive = 1;
    }
    update();
    update1();

    // console.log(currentactive);
});


function update() {
    circles.forEach((circle, index) => {
        if (index < currentactive) {
            circle.classList.add('active');

        } else {
            circle.classList.remove('active')
        }

        if (currentactive === 1) {
            prev.disabled = true;
        } else if (currentactive === circles.length) {
            next.disabled = true;

        } else {
            prev.disabled = false;
            next.disabled = false;
        }
        const actives = document.querySelectorAll('.active');

        let act = actives.length - 1;
        let cls = circles.length - 1;

        progress.style.width = (act) / (cls) * 100 + '%';

    });
}

function update1() {
    ones.forEach((one, index) => {
        if (index < currentactive) {
            one.classList.add('dis');

        } else {
            one.classList.remove('dis')
        }

        if (currentactive === 1) {
            prev.disabled = true;
        } else if (currentactive === ones.length) {
            next.disabled = true;

        } else {
            prev.disabled = false;
            next.disabled = false;
        }
        // const actives = document.querySelectorAll('.dis');

        // let dis = actives.length - 1;
        // let ones = ones.length - 1;

        // progress.style.width = (dis) / (ones) * 100 + '%';

    });
}