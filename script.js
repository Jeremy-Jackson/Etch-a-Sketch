const wrapper = document.getElementById('wrapper');
const resetBtn = document.getElementById('resetBtn');
const createBtn = document.getElementById('createBtn');
const colorBtn = document.getElementById('colorBtn')


let size = prompt('Enter grid size: ');
while (size > 100) {
    console.log(size);
    size = prompt('Enter grid size: ');
}

createGrid(size);

function createGrid(size) {
    let totalSquares = size * size;
    wrapper.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    wrapper.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < totalSquares; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('newSquare');
        wrapper.appendChild(newSquare);
        newSquare.addEventListener('mouseover', function (e) {
            newSquare.style.backgroundColor = 'black';
        });
    }
}

function clearGrid() {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
}

createBtn.addEventListener('click', function (e) {
    clearGrid();
    size = prompt('Enter grid size: ');
    while (size > 100) {
        console.log(size);
        size = prompt('Enter grid size: ');
    }
    createGrid(size);
    console.log('Create size: ' + size);
});

resetBtn.addEventListener('click', function (e) {
    clearGrid();
    createGrid(size);
});

colorBtn.addEventListener('click', function (e) {
    clearGrid();
    console.log('Color mode size: ' + size);
    let totalSquares = size * size;
    wrapper.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    wrapper.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < totalSquares; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('newSquare');
        wrapper.appendChild(newSquare);
        newSquare.addEventListener('mouseover', function (e) {
            newSquare.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        });
    }


})


// // const gridContainer = document.getElementById('gridContainer');


// //     function createGrid(size){
// //         let totalSquares = size * size;
// //         for (let i = 0; i < totalSquares; i++){
// //             const newSquare = document.createElement('div');
// //             newSquare.classList.add('newSquare');
// //             gridContainer.appendChild(newSquare);
// //             newSquare.addEventListener('mouseover', function(e){
// //             newSquare.style.backgroundColor = 'black';
// //             });    

// //         }
// //         document.documentElement.style.setProperty("--rowNum", size);
// //         document.documentElement.style.setProperty("--colNum", size);
// //     }

// //     function pencilGrid(size){
// //         let totalSquares = size * size;
// //         for (let i = 0; i < totalSquares; i++){
// //             const newSquare = document.createElement('div');
// //             newSquare.classList.add('newSquare');
// //             gridContainer.appendChild(newSquare);
// //             newSquare.addEventListener('mouseover', function(e){
// //                 newSquare.style.backgroundColor = 'black';
// //                 newSquare.style.opacity -= '-0.1';
// //             });    

// //         }
// //         document.documentElement.style.setProperty("--rowNum", size);
// //         document.documentElement.style.setProperty("--colNum", size);
// //     }

// //     function colorfulGrid(size){
// //         let totalSquares = size * size;
// //         let randomColor = Math.floor(Math.random()*16777215).toString(16);
// //         for (let i = 0; i < totalSquares; i++){
// //             const newSquare = document.createElement('div');
// //             newSquare.classList.add('newSquare');
// //             gridContainer.appendChild(newSquare);
// //             newSquare.addEventListener('mouseover', function(e){
// //                 newSquare.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
// //                 newSquare.style.border = '0px';
// //             });    

// //         }
// //         document.documentElement.style.setProperty("--rowNum", size);
// //         document.documentElement.style.setProperty("--colNum", size);
// //     }

// //     function clearGrid(){
// //         while (gridContainer.firstChild){
// //             gridContainer.removeChild(gridContainer.firstChild);
// //         }
// //     }


// //     createGrid(16);




// //     const newGridButton = document.getElementById('newGridButton');
// //     newGridButton.addEventListener('click', function(e){
// //         clearGrid();
// //         let newSize = prompt('New Grid Size:');
// //         createGrid(newSize);

// //     });

// //     const pencilButton = document.getElementById('pencilButton');
// //     pencilButton.addEventListener('click', function(e){
// //         clearGrid();
// //         let newSize = prompt('New Grid Size')
// //         pencilGrid(newSize);
// //     });

// //     const colorfulButton = document.getElementById('colorfulButton');
// //     colorfulButton.addEventListener('click', function(e){
// //         clearGrid();
// //         let newSize = prompt('New Grid Size')
// //         colorfulGrid(newSize);
// //     });