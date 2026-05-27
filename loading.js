const loadingScreen = document.querySelector(".loadingScreen");


//made a loading screen by putting event listener on window(the web) to erase the loading page after it loads

  window.addEventListener("load" , function(){

setTimeout(function(){

  

        loadingScreen.classList.add('loadingScreenHidden');
},2000);


});


