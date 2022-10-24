const outputHtml = document.querySelector('.container')
for(let i=1 ; i<=100;i++){
    if(i % 3 === 0 && i % 5 === 0){
        outputHtml.innerHTML += '<div class="box fizzbuzz">Fizzbuz</div>'
    }
    else if(i % 3 === 0){
        outputHtml.innerHTML += '<div class="box fizz">Fizz</div>'
    }
    else if(i % 5 ===0){
        outputHtml.innerHTML += '<div class="box buzz">Buzz</div>'
    }
    else{
        outputHtml.innerHTML += `<div class="box"> ${i} </div>`
    }
}