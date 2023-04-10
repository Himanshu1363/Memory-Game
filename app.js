const cardArray = [
{
    name:'fries',
    img: 'fries.png',
},
{
    name: 'cheeseburger',
    img: 'cheeseburger.png'
},
{
    name: 'hotdog',
    img: 'hotdog.png'
},
{
    name: 'ice-cream',
    img:  'ice-cream.png'
},
{
    name:  'milkshake',
    img:   'milkshake.png'
},
{
    name:  'pizza',
    img:   'pizza.png'
},
{
    name:'fries',
    img: 'fries.png',
},
{
    name: 'cheeseburger',
    img: 'cheeseburger.png'
},
{
    name: 'hotdog',
    img: 'hotdog.png'
},
{
    name: 'ice-cream',
    img:  'ice-cream.png'
},
{
    name:  'milkshake',
    img:   'milkshake.png'
},
{
    name:  'pizza',
    img:   'pizza.png'
}

]

cardArray.sort(() => 0.5 - Math.random())
let gridDisplay = document.querySelector('#grid')
let result = document.querySelector('#result')
let cardsChoosen = []
let cardsChoosenId = []
let cardsWon = []
function createBoard() {
    for(let i=0; i<cardArray.length;i++){
     let card =  document.createElement('img')
     card.setAttribute('src','blank.png')
     card.setAttribute('data-id',i)
     card.addEventListener('click', flipCard)
     gridDisplay.appendChild(card)
    }
}
createBoard()


function checkMatch() {
    let cards = document.querySelectorAll('#grid img')
    let   optionOneId = cardsChoosenId[0]
    let optionTwoId = cardsChoosenId[1]
    if (optionOneId==optionTwoId)
    {
        cards[optionOneId].setAttribute('src','blank.png')
        cards[optionTwoId].setAttribute('src','blank.png')
        alert('You have clicked the same image')
    }
    
    
    if (cardsChoosen[0] === cardsChoosen[1]) {
        alert ('You found a Match')
        cards[optionOneId].setAttribute('src','white.png')
        cards[optionTwoId].setAttribute('src','white.png')
        cards[optionOneId].removeEventListener ('click',flipCard)
        cards[optionTwoId].removeEventListener ('click',flipCard)
        cardsWon.push(cardsChoosen)   
    }
    else {
        cards[optionOneId].setAttribute('src','blank.png')
        cards[optionTwoId].setAttribute('src','blank.png')
        alert ('Sorry try again!')
    }
    result.textContent = cardsWon.length
    cardsChoosen=[]
    cardsChoosenId=[]
    if (cardsWon.length == cardArray.length/2){
        result.textContent= "Congratulations you found them all"

    }
}

function flipCard() {
let cardId = this.getAttribute('data-id')
cardsChoosen.push(cardArray[cardId].name)
cardsChoosenId.push(cardId)
this.setAttribute('src',cardArray[cardId].img)
if (cardsChoosen.length ===2){
    setTimeout (checkMatch, 500)
}

}