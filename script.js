const a = document.getElementsByClassName("btn");
let curr = "";
for (let i of a) {
  i.addEventListener("click", function () {
    if(i.innerText!=='='&&i.innerText!=='DEL')
    appendToDisplay(i.innerText);
  });
}
document.querySelector("#Del").addEventListener("click",function()
{
    curr=curr.substring(0,curr.length-1)
    document.getElementById('display').value =curr ;
})
document.querySelector("#Clear").addEventListener("click",function()
{
    document.getElementById('display').value = "";
    curr=""
})
function appendToDisplay(value) {
    curr = `${curr}${value}`;
  document.querySelector("#display").value = curr;
}
document.querySelector("#equals").addEventListener("click",function()
{
  try {
     const result=eval(curr);
      document.querySelector("#display").value = result;
      curr=""
  } catch (error) {
    alert("please enter a valid expression")
  }
})