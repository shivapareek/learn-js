const form  = document.querySelector('form')

form.addEventListener('submit' , function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')

    if ( height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
    }else if ( weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)
        if (bmi < 18.6){
            result.innerHTML = `Your Body Mass Index is ${bmi} </br> You weight is under weight`
        } else if ( bmi > 18.6 && bmi < 24.9){
             result.innerHTML = `Your Body Mass Index is ${bmi} </br> You weight is normal`
        } else {
            result.innerHTML = `Your Body Mass Index is ${bmi} </br> You are in over weightt`
        }
    }
   
})