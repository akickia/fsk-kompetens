
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const cards = document.querySelectorAll('.card');

//funtion för att ta bort aktiv klass
function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if(currentActive > cards.length) {
        currentActive = cards.length
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1) {
        currentActive = 1
    }
    update()
})

function update() {
    //lägger till och tar bort aktiv klass
    cards.forEach((card, idx) => {  
      if(idx < currentActive) {
        removeActiveClasses()    
        card.classList.add('active')
        }
    })
    //hanterar knapparna
    if(currentActive===1) {
        prev.disabled = true
    }
    else if (currentActive === cards.length) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }
  }
  

