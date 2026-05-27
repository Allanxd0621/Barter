const searchBar = document.getElementById("searchBar");
const recentSearches = document.querySelector(".recentSearches");

searchBar.addEventListener("click" , function(){

recentSearches.classList.add("recentSearchesVisible");

});