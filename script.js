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


/**
 * function to toggle dark theme
 */
function toggle_dark_theme() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var containDarkMode =  element.classList.contains("dark-mode");
    if(containDarkMode){
        localStorage.setItem("globalTheme", "dark-mode");
    }else{
        localStorage.setItem("globalTheme", "light-mode");
    }
}


/**
 * function to launch a url in new tab
 * @param {string} url to be opened
 */
function launch_url(url) {
    var win = window.open(url, '_blank');
    win.focus();
}


/**
 * copy email to clipboard onclick
 */
document.querySelector(".email").onclick = function(){
    copyStringToClipboard(".email", "gauriatiq@gmail.com");
};


/**
 * copy text to clipboard
 * @param {string} class or id of target element with . & # 
 * @param {string} string which needs to be copied 
 */
function copyStringToClipboard(element, str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    document.querySelector(element).innerHTML = "copied&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;";
    sleep(500).then(() => {
        document.querySelector(element).innerHTML = str;
    })
    console.log("done");
}

/**
 * delay execution of statement for some milliseconds
 * @param {number} milliseconds 
 */
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}