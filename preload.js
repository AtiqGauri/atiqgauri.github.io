let darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
var storedTheme = localStorage.getItem("globalTheme");

if(!storedTheme){
    var element = document.body;
    var containDarkMode =  element.classList.contains("dark-mode");

    if(darkModeEnabled){
        if(!containDarkMode){
            element.classList.add("dark-mode");
        }
    }else{
        if(containDarkMode){
            element.classList.remove("dark-mode");
        }
    }
}else{
    var element = document.body;
    var containDarkMode =  element.classList.contains("dark-mode");
    
    if(storedTheme == 'dark-mode'){
        if(!containDarkMode){
            element.classList.add("dark-mode");
        }
    }else{
        if(containDarkMode){
            element.classList.remove("dark-mode");
        }
    }
}