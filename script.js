const text = document.getElementById('text')
const total = document.getElementById('total')
const space = document.getElementById('space')


function wordcount(char){
    const word =  char.split(" ");
    return word.length;
}

total.addEventListener('click',()=>{
    const char = text.value 
    const wordcount = wordcount(char)
    space.textContent = wordcount;
})
