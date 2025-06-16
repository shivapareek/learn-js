const buttons = document.querySelectorAll('button')
const body = document.querySelector('body')

buttons.forEach( function (button) {
    console.log(button);
    button.addEventListener('click' , function (e){
      console.log(e.target.id);

      switch (e.target.id) {
        case 'red':
              body.style.backgroundColor = ' var(--color-red-400)'
            break;
        case 'blue':
              body.style.backgroundColor = 'var(--color-blue-400)'
            break;
        case 'green':
              body.style.backgroundColor = 'var(--color-green-400)'
            break;
        case 'yellow':
              body.style.backgroundColor = 'var(--color-yellow-400)'
            break;
        case 'purple':
              body.style.backgroundColor = 'var(--color-purple-400)'
            break;
      
        default:
            alert('invalid color')
            break;
      }
      
    })
})