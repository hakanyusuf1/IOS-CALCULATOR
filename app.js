console.log(`!guess the number!`);
let toplam  = document.querySelector(`.container-fluid`)
const result = document.querySelector(`.result`)
const result2 = document.querySelector(`.result2`)
result2.style.display =`none`

toplam.addEventListener(`click`, (e)=> {    
     
                                       
    if (e.target.classList.contains(`button-ac`)){
        result.innerText = ``
        result2.innerText = ``
    }else if (e.target.classList.contains(`button-7`)){
        result.innerText += 7 
        result2.innerText += 7 
    }else if (e.target.classList.contains(`button-8`)){
        result.innerText += 8
        result2.innerText += 8
    }else if (e.target.classList.contains(`button-9`)){
        result.innerText += 9
        result2.innerText += 9
    }else if (e.target.classList.contains(`button-4`)){
        result.innerText += 4
        result2.innerText += 4
    }else if (e.target.classList.contains(`button-5`)){
        result.innerText += 5
        result2.innerText += 5
    }else if (e.target.classList.contains(`button-6`)){
        result.innerText += 6
        result2.innerText += 6
    }else if (e.target.classList.contains(`button-1`)){
        result.innerText += 1
        result2.innerText += 1
    }else if (e.target.classList.contains(`button-2`)){
        result.innerText += 2
        result2.innerText += 2
    }else if (e.target.classList.contains(`button-3`)){
        result.innerText += 3
        result2.innerText += 3
    }else if (e.target.classList.contains(`button-0`)){
       result.innerText += 0
       result2.innerText += 0
    }else if (e.target.classList.contains(`button-point`)){
        if (!result.innerText.includes(`.`)){
            result.innerText += `.`
            result2.innerText += `.`
        }  
     }else if (e.target.classList.contains(`button-plus`)){
            result.innerText = ``;
            result2.innerText += `+`;
     }else if (e.target.classList.contains(`button-minus`)){
        result.innerText = ``;
        result2.innerText += `-`;
    }else if (e.target.classList.contains(`button-divide`)){
        result.innerText = ``;
        result2.innerText += `/`;
    }else if (e.target.classList.contains(`button-multiply`)){
        result.innerText = ``;
        result2.innerText += `*`;
    }   
    else if (e.target.classList.contains(`button-equal`)){
        let final = eval(result2.innerText)
        result2.innerText =  final;
        result.style.display = "none";
        result2.style.display = "block";
        // result2.innerText =  "";
    }
} )

