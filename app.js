let boxes = document.querySelectorAll(".Box");
let resetbtn = document.querySelector(".reset");
let winner = document.querySelector(".winner");

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let text = "X";

boxes.forEach((boxes) => {
    boxes.addEventListener("click",() => {
        if (text === "X") {
            boxes.innerText = text;
            text = "O";
            boxes.disabled = true;
            
        } else {
            boxes.innerText = text;
            text = "X";
            boxes.disabled = true;
            
        }
        winCheck();
        
    })
});


let disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


let eneble =() => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    winner.innerText = "";
}



const winCheck = () => {
    for (let pattern of win) {
        let b1 = boxes[pattern[0]].innerText;
        let b2 = boxes[pattern[1]].innerText;
        let b3 = boxes[pattern[2]].innerText;

        if (b1 != "" && b2 != "" && b3 != "") {
            if(b1 === b2 && b2 === b3) {
                winner.innerText = `Winner is ${b1} 🥳`;
                disable();
                boxes[pattern[0]].style.backgroundColor = "#2E5077";
                boxes[pattern[1]].style.backgroundColor = "#2E5077";
                boxes[pattern[2]].style.backgroundColor = "#2E5077";
            }
        }
    }

    
};

resetbtn.addEventListener("click", ()=> {
    boxes.forEach(box =>{
    box.style.backgroundColor = "#F6F4F0";
    })
    eneble();
})
