const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');
const a7 = document.getElementById('a7');
const a8 = document.getElementById('a8');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');
const d5 = document.getElementById('d5');
const d6 = document.getElementById('d6');
const d7 = document.getElementById('d7');
const d8 = document.getElementById('d8');
const e1 = document.getElementById('e1');
const e2 = document.getElementById('e2');
const e3 = document.getElementById('e3');
const e4 = document.getElementById('e4');
const e5 = document.getElementById('e5');
const e6 = document.getElementById('e6');
const e7 = document.getElementById('e7');
const e8 = document.getElementById('e8');
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');
const f6 = document.getElementById('f6');
const f7 = document.getElementById('f7');
const f8 = document.getElementById('f8');
const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');
const g3 = document.getElementById('g3');
const g4 = document.getElementById('g4');
const g5 = document.getElementById('g5');
const g6 = document.getElementById('g6');
const g7 = document.getElementById('g7');
const g8 = document.getElementById('g8');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');
const h5 = document.getElementById('h5');
const h6 = document.getElementById('h6');
const h7 = document.getElementById('h7');
const h8 = document.getElementById('h8');
const blackSqrs = document.getElementsByClassName('white');
const whiteSqrs = document.getElementsByClassName('black');
const sqrs = Array.from(whiteSqrs).concat(Array.from(blackSqrs))

let piecesList = ['black-king', 'white-king', 'black-queen', 'white-queen', 'black-rook', 'white-rook', 'black-bishop', 'white-bishop', 'black-knight', 'white knight', 'black-pawn', 'white-pawn'];


function removeFocus(){
    for(const sqr of sqrs){
        
        sqr.classList.remove('focus')
    }
}
console.log(sqrs)


// // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // //

e2.addEventListener('click',()=>{
    e3.classList.toggle('focus')
    e4.classList.toggle('focus')
})
e3.addEventListener('click',()=>{
    if(e3.classList.contains('focus')){
        removeFocus();
        e2.classList.remove('white-pawn');
        e3.classList.add('white-pawn');
    }
})
e4.addEventListener('click',()=>{
    if(e4.classList.contains('focus')){
        removeFocus();
        e2.classList.remove('white-pawn');
        e4.classList.add('white-pawn');
    }
})