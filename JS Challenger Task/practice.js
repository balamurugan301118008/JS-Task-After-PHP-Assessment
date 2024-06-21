//  below the code for Mouse hover task

const listItems = document.querySelectorAll("#list li");
const handleHover = (event) => {
  return event.target.innerText = 'ON';
};
if(listItems.length > 1) {
  listItems.forEach(item => item.addEventListener('mouseover', handleHover));
}

// when click the below button then store the hello world text into the input box


const button = document.getElementById('button');
const input = document.getElementById('input');

const handleClick = () => {
  input.value = 'Hello World';
};

button.addEventListener('click', handleClick);

// ************************************************************************************

const element = document.getElementById('element');
  
const changeText = () => {
  element.innerText = 'Thanks!';
};

element.addEventListener("mouseover", changeText);


