let pri = document.querySelector('.list')
let show = document.querySelector('.dis')
let clear = document.getElementById('#all')
let other= document.querySelector('.new')

let click = document.querySelector('.pri')
click.addEventListener('click', () => {
   show.style.visibility = 'visible'

   setTimeout(() => {
       show.remove()
   }, 4000);
   
})

let doe = document.querySelector('.doe')
doe.addEventListener('click', () => {
    other.style.visibility = 'visible'
})

