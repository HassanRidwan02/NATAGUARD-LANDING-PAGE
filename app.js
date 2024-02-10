const menu = document.getElementById('menu')
let mobileLinks = document.getElementById('mobile-links')
let closeBtn = document.getElementById('close-btn')

mobileLinks.style.display = 'none'

menu.addEventListener('click', ()=>{
    // mobileLinks.style.display = 'block'

    if (mobileLinks.style.display === 'none'){
        mobileLinks.style.display = 'block'
    }

    else {
        mobileLinks.style.display = 'none'
    }
})


closeBtn.addEventListener('click', ()=>{
    mobileLinks.style.display = 'none'
})