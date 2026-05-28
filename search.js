const item = document.querySelectorAll('.itemHolder');
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input' , function(){

const searchText = searchBar.value.toLowerCase();

item.forEach(function(item){

if(item.textContent.toLowerCase().includes(searchText)){

    item.style.display = "block";


}else{

item.style.display = "none";

}


});

});