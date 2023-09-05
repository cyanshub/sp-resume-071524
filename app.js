// darkmode function
// target the element
const darkModeToggle = document.querySelector("#nav-darkmode-toggle");

// design the handler
const darkModeToggleHandler = event => {
  // change 事件可以重複使用
  if(event.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
  } else {
    document.documentElement.setAttribute('data-theme','light');
  }
}

// bind the event
darkModeToggle.addEventListener("change", darkModeToggleHandler);