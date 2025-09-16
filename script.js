const e2 = document.getElementById('e2');
const e3 = document.getElementById('e3');
const e4 = document.getElementById('e4');

console.log(e2,e3,e4)
e2.addEventListener('click',()=>{
    e3.classList.toggle('focus')
    e4.classList.toggle('focus')
})
e3.addEventListener('click',()=>{
    if(e3.classList.contains('focus')){
        e3.classList.remove('focus');
        e4.classList.remove('focus');
        e2.classList.remove('white-pawn');
        e3.classList.add('white-pawn');
    }
})
e4.addEventListener('click',()=>{
    if(e4.classList.contains('focus')){
        e3.classList.remove('focus');
        e4.classList.remove('focus');
        e2.classList.remove('white-pawn');
        e4.classList.add('white-pawn');
    }
})