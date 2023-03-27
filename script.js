
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
 * copy email to clipboard onclick
 */
 document.querySelector(".meet-strangers").onclick = function(){
    copyStringToClipboard(
        ".meet-strangers", "gauriatiq@gmail.com", 
        "Yay! you have my email in clipboard.", 2000
    );
};


/**
 * copy text to clipboard
 * @param {string} class or id of target element with . & # 
 * @param {string} string which needs to be copied 
 */
function copyStringToClipboard(element, str, copyHtml=null, sleepTime=null) {
    var originalString = document.querySelector(element).innerHTML;
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if(copyHtml == null){
        copyHtml = "copied&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
    }
    document.querySelector(element).innerHTML = copyHtml;
    if(sleepTime == null){
        sleepTime = 500
    }
    sleep(sleepTime).then(() => {
        document.querySelector(element).innerHTML = originalString;
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