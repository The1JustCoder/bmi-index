const s1 = document.getElementById('Save1');
const s2 = document.getElementById('Save2');
const wt = document.getElementById('weight');

const inWt = document.getElementById('input-wt');
const inHt = document.getElementById('input-height');
let clicked = false;

function clickAction(ele, input)
{
    ele.addEventListener('click', () => {
        if(!input.value.trim())
        {
            alert("Data not complete!")
            return;
        }
        ele.innerText = "Saved!";
        ele.style.backgroundColor = "blue";
        ele.style.color = "white";
    })
}

clickAction(s1, inWt);
clickAction(s2, inHt);


function BMICalc()
{
    if(clicked)
    {
        alert("You have aready calculated.");
        return;
        // window.location.reload();te
    }
    const htUnit = document.getElementById("HTselect").value;
    const wtUnit = document.getElementById("weight-select").value;
    // console.log(htUnit);//
    if(!inWt.value || !inHt.value || !htUnit || !wtUnit)
    {
        alert("Data missing, renter please!");
        return;
    }

    let weight = parseFloat(inWt.value);
    let height = parseFloat(inHt.value);
    
    if(htUnit == "cm")
    {
        height = height/100;
    }
    else if(htUnit == "inch")
    {
        height = height * 0.0254;
    }
    else if(htUnit == "feet")
    {
        height = height * 0.3048;
    }

    if(wtUnit == 'g')
    {
        weight /= 1000;
    }
    else if(wtUnit == 'pound')
    {
        weight *= 0.45
    }
    const bmi = weight/(height*height);
    const h3 = document.createElement('h3');
    if(bmi < 18.5)
    {
        h3.innerText = "Underweight....."
        h3.style.color = "blue";
    }
    else if(bmi < 25)
    {
        h3.innerText = "Normal......";
        h3.style.color = "green";
    }
    else if(bmi < 30)
    {
        h3.innerText = "Overweight......";
        h3.style.color = "orange";
    }
    else
    {
        h3.innerText = "Obese......";
        h3.style.color = "red";
    }
    const res = document.getElementById('result');
    res.appendChild(h3);

    const refresh = document.getElementById('refresh');
    refresh.style.visibility = 'visible';
    clicked = true;
}

const refresh = document.getElementById('refresh');
    refresh.addEventListener('click', () => {
        window.location.reload();
    })