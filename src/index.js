import "./styles.css";

let h1_text = document.getElementById("text")
let text_button = document.getElementById("my-button")
let add_li_button = document.getElementById("add-data")
let ulist = document.getElementById("ulist")
let text_area = document.getElementById("textarea")
text_button.addEventListener("click", function(){
  console.log("hello world")
  h1_text.innerHTML = "My notebook"
})
add_li_button.addEventListener("click", function(){
  let list_item = document.createElement("li")
  list_item.innerHTML = text_area.value
  ulist.appendChild(list_item)
})