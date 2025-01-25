
let isVisible = false;

function openPopUp()
{
    document.getElementById("pop-up").style.display="block";
    isVisible = true;
}

function closePopUp()
{
    document.getElementById("pop-up").style.display="none";
    isVisible = false;
}

const buttonClick = function ()
{
    isVisible ? closePopUp(): openPopUp();
}

document.getElementById("plant-button").addEventListener("click", buttonClick, false);
