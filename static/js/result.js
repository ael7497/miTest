const intellectCard = document.getElementsByClassName("card intellect")[0]
const personalityCard = document.getElementsByClassName("card personality")[0]

console.log(intellectCard,personalityCard)

const summarizable = [...document.querySelectorAll(".hoverable")];
summarizable.forEach((element)=>{
    if (element.classList.contains("intellect")) {
        element.addEventListener("click",(target)=>{
            intellectCard.innerText = summaries[target.target.innerText];

        });}
    else{
        element.addEventListener("click",(target)=>{
                personalityCard.innerText = summaries[target.target.innerText];
    
            });
    }
}
)
intellectCard.innerText = summaries[summarizable.find((el)=>{return el.classList.contains("intellect")}).innerText];
personalityCard.innerText = summaries[summarizable.find((el)=>{return el.classList.contains("personality")}).innerText];