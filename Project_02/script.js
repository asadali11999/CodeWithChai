const form =document.querySelector("form")

form.addEventListener ( 'submit' , function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight  = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const bmiCategory = document.querySelector("#bmiCategory")
     if (height === "" || height < 0  || isNaN(height)) {
        // results.innerHTML(`height is not ${height}`)
        const ali = document.createTextNode(`height is not ${height}`)
        results.appendChild(ali)
     } else if (weight === "" || weight < 0  || isNaN(weight)) {
        const ali = document.createTextNode(`weight is not ${weight}`)
        results.appendChild(ali)

     } else {
        
           const bmi =  (weight/((height*height)/10000)).toFixed(2)
                // results.innerHTML = `<span> ${bmi} </span>`
                const ali = document.createTextNode(`your BMI is ${bmi}`)
        results.appendChild(ali)
        if (bmi <= 18 ) {
            const cat = document.createTextNode("you are under weight")
            bmiCategory.appendChild(cat)
            
        } else if (bmi > 18 && bmi <= 24 ) {
            const cat = document.createTextNode("you are in Healthy Weight")
            bmiCategory.appendChild(cat)
            
        }else if (bmi > 25 && bmi <= 30 ) {
            const cat = document.createTextNode("you are in Over Weight")
            bmiCategory.appendChild(cat)
            
        }else   {
            const cat = document.createTextNode("Obesity")
            bmiCategory.appendChild(cat)
            
        }



     }
     console.log(results.innerHTML)
    
        
});