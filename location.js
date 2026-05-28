const locationInput = document.getElementById('locationInput');
const itemHolder = document.querySelectorAll('.itemHolder');

locationInput.addEventListener('input' , function(){

const locationText = locationInput.value.toLowerCase();

itemHolder.forEach(function(itemHolder){

if(itemHolder.textContent.toLocaleLowerCase().includes(locationText)){

    itemHolder.style.display = "block";

}else{

    itemHolder.style.display = "none";

}

});

});

