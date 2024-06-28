const intellectCard = document.getElementsByClassName("card intellect")[0]
const personalityCard = document.getElementsByClassName("card personality")[0]

function setCard(card,element) {
    const map = {"personality":"личности","intellect":"интеллекта"}
    console.log(card,element)
    card.innerHTML=`<h1>Тип ${map[[...element.classList].find((el)=>{return el != "hoverable"})]}: <span>${element.innerText}</span></h1>
        <p>${summaries[element.innerText]}</p>
    `;
}

const summarizable = [...document.querySelectorAll(".hoverable")];
summarizable.forEach((element)=>{
    console.log(element)
    let card = element.classList.contains("intellect") ? intellectCard : personalityCard;
    console.log(element.classList.contains("intellect") ? intellectCard : personalityCard)
    console.log(card)
    element.addEventListener("click",()=>{
        setCard(card,element);

        });
    }
)
setCard(intellectCard,summarizable.find((el)=>{return el.classList.contains("intellect")}));
setCard(personalityCard,summarizable.find((el)=>{return el.classList.contains("personality")}));