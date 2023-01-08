// External JS Files
// ● Include an external JS script on the page.
// ● The script should contain a function that uses console.log to print something.
// ● Trigger that function.

function sayHello() {
    console.log("Hello World");
}
  
// fully loaded page
document.addEventListener("load", sayHello());
  
// BOM (Window object)
// window.navigator
// Create a function that prints out in the console the following information
// ● the platform on which the browser is running
// ● the information about the browser version
// ● the company that created that browser
// Each piece of information should be printed out in a new row.
// Create new “isOnline” function that checks if the browser is online.
// It should print out “online” when the browser is online and “offline” when there is no Internet connection.
  
function getPlatform() {
    console.log("platform " + window.navigator.platform);
}  
getPlatform();
function browser() {
    console.log("browser " + window.navigator.appVersion);
}
browser();
  
function company() {
    console.log("company " + window.navigator.userAgent);
}
company();
function isOnline() {
    if (window.navigator.onLine === true) {
      console.log("online");
    } else {
      console.log("offline");
    }
}
isOnline();
  
// window.screen
// Create a function that prints out the following information in the console:
// ● current browser width and height
// ● max possible browser height
  
function printScreenInfo() {
    console.log(`Current browser width: ${window.innerWidth}`);
    console.log(`Current browser height: ${window.innerHeight}`);
    console.log(`Max possible browser height: ${window.screen.availHeight}`);
}
printScreenInfo();
  
// window.location
// Write a function that prints out website’s url information in the console:
// ● full url address
// ● domain name
// ● used protocol
// ● parameters which are part of URL.
function printUrl() {
    console.log("Full URL adress " + window.location.href);
    console.log("Domain name " + window.location.hostname);
    console.log("Protocol " + window.location.protocol);
    console.log("parametri " + window.location.search);
}
printUrl();
function reloadPage() {
    return window.location.reload();
}
  
// reloadPage();
  
window.stop();
  
// function redirect(){
//     return window.location.href("https://www.google.com");
// }
  
// redirect();
  
// window.localStorage
// Create a function that stores passed data in the browser local storage.
// Create a function that reads the stored data, and print it out in console.
// If there is no data, print "There is no data" in the console.
// Create a function that removes data from the local storage.
// Use the previously created functions to store/read/remove some data.
// Then add some data in storage and close the browser.
// Open the browser again on the same page and use the function to read the stored value.
// Modify functions to work with sessionStorage instead of localStorage.
// Try same scenario as with localStorage to examine data livecycle.
  
function setLocalStorage(key, value) {
    return window.localStorage.setItem(key, value);
}
  
//  setLocalStorage("name",'Dusan');
  
function getLocalStorage() {
    if (!window.localStorage.getItem("laptop")) {
      console.log("There is no data");
    } else {
      console.log(window.localStorage.getItem("laptop"));
    }
} 
// getLocalStorage();
  function deleteData() {
    window.localStorage.removeItem("name");
}
// deleteData()
  
setLocalStorage("name", "Tihana");
setLocalStorage("pas", "Aleks");
setLocalStorage("laptop", "HP");
getLocalStorage();
  
// window.history
// Play around with the browser forward/back navigation. Implement a function that navigates two pages back.
  function back() {
    return window.history.back(-2);
}
back();