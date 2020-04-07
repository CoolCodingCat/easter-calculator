const A = prompt('De quelle année voulez-vous connaître la date de Pâques ? (max 2099)');
const answer = document.querySelector('.answer');

let R = A%4;
let S = A%7;
let T = A%19;

let B = (19*T)+24;
let M = B%30;

let C = (2*R)+(4*S)+(6*M)+5

let N = C%7;

let P = M+N;

console.log(P);

if (P<10){
    let paques = P + 22;
    //console.log(paques + 'mars');
    const date = document.querySelector(".message-body");
    const visible = document.querySelector(".answer")
    date.innerText = `Pâques tombe le ${paques} mars en ${A}`;
    visible.classList.remove("is-hidden");
} else {
    let paques = P - 9;
    //console.log(paques + 'avril');
    const date = document.querySelector(".message-body");
    const visible = document.querySelector(".answer")
    date.innerText = `Pâques tombe le ${paques} avril en ${A}`;
    visible.classList.remove("is-hidden");  
}