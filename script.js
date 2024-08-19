let content = document.getElementById('txtArea');

if(localStorage.getItem("textArea")) {
    content.value = localStorage.getItem("textArea");
}

content.addEventListener('input',()=>{
    console.log(content.value);
    localStorage.setItem("textArea",content.value)
})


