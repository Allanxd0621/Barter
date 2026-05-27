const searchBar = document.getElementById("searchBar");
const recentSearches = document.querySelector(".recentSearches");

searchBar.addEventListener("focus" , function(){

recentSearches.classList.add("recentSearchesVisible");

});

//exit sa recent searches


const exitBtn = document.getElementById("exitRecent");

exitBtn.addEventListener("click" , function(){

recentSearches.classList.remove("recentSearchesVisible");

});
