/////// creat header
const heder = document.createElement('div');
heder.classList = "heder"
document.body.appendChild(heder);
/////////creat h2 text
const head = document.createElement('h2');
heder.appendChild(head);
head.textContent = "Etch-A-Sketch";
///////////creat menu div
const menu = document.createElement('div');
menu.classList = "menu"
heder.appendChild(menu);
/////////// creat buttons/
const btn1 = document.createElement('button');
menu.appendChild(btn1);
btn1.textContent = "Clear";
///////////creat div Etch-A-Sketch
const container = document.createElement('div');
container.classList = "contaner"
document.body.appendChild(container);
//////////
createGrid(16);
////////// btn event
btn1.addEventListener("click", function() {
    distroy();
    let input = prompt('Enter Size Of boxes');
    createGrid(input);
});




function createGrid(num) {
    container.style.cssText = `grid-template-columns: repeat(${num}, 1fr);`;
    //////////////// make grid view 
    num *= num;
    let grid = [];
    for (let i = 0; i < num; i++) {
        grid[i] = document.createElement('div');
        container.appendChild(grid[i]);
        grid[i].classList = "grid";
        grid[i].addEventListener('mouseover', function() {
            (this.style.opacity) ? this.style.opacity = parseFloat(this.style.opacity) - 0.1: this.style.opacity = .6;
        })
    }
}

function distroy() {
    let grids = document.querySelectorAll(".grid");
    grids.forEach(function(element) {
        container.removeChild(element);
    });
}

const color = document.querySelectorAll('.menu-a > li');
color.forEach(function(element) {
    element.addEventListener("click", function() {
        colorfull(element.textContent);
        console.log(element.textContent);
    })
})

function colorfull(name) {
    name = name.substring(1);
    container.style.backgroundColor = name;
}