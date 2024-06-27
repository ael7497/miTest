answerButtons = [...document.getElementsByClassName("answer")]
answerButtons.forEach(button => {
    button.addEventListener("click",(event)=>{
        window.location.href= `/answer?value=${event.target.value}`
    })
    
});
