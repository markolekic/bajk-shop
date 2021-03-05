//Accordion
const accordionBtns = document.querySelectorAll(".accordion");

//go through each accordion button one by one
accordionBtns.forEach((accordion) => {
  accordion.addEventListener('click', (e) => {
    //Use the classlist dom method in combination with the toggle method
    e.target.classList.toggle("is-open");
    //it allows us to work with the div that has the content that we want to display
    let content = e.target.nextElementSibling;
    //set the max-height based on whether the current value of the max-height css property
    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is closed we set the max-height of the currently hidden text inside the accordion from 0 to the scroll height of the content inside the accordion
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  })
});