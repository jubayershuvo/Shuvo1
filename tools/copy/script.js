const open = document.getElementById('btn');
const input = document.getElementById("input");
const p = document.getElementById("p");
const copyText = document.getElementById("myInput");
const copy = document.getElementById("copy");


function cng(){
  copy.innerText = "Copy text";
}
open.addEventListener('click', () => {
    let count = document.getElementById("count");
    let countV = count.value;
    let text = "";
    for (let i = 1; i <= countV; i++) {
        const inputV = input.value;
        text += `${i}. ${inputV}
`;
      }
      copyText.value = text;
      
    })


function myFunction() {
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    var copy = document.getElementById("copy");
    copy.innerText = "Coped";
  }