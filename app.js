const button = document.querySelector("#btn");

const img = document.querySelector('img');

function bulbONOFF()
{
    if(button.innerText =="BulbON")
    {

        img.src = "./bulbON.png";
        button.innerText = "BulbOFF"
    }
    else{
        img.src = "./bulbOF.png";
         button.innerText = "BulbON"
    }
}

button.addEventListener('click',()=>{
    bulbONOFF();
});