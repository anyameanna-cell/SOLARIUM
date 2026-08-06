const openModal = document.querySelector('.view-drops-btn')
const blured = document.querySelector('.blur')
const overlay = document.querySelector('.modal-window')
const modalClose = document.querySelector('.modal-window-close')
const scrollSystem = document.querySelector('body')
const copyText = document.querySelector('.modal-window-copy-code')
const textToCopy = "GoITeens-code#00000000"
openModal.addEventListener('click',function(){
    overlay.style.display = 'block'
    blured.style.display = 'flex'
    scrollSystem.style.overflow = 'hidden'
})
modalClose.addEventListener('click',function(){
    overlay.style.display = 'none'
    blured.style.display = 'none'
    scrollSystem.style.overflow = 'auto'
})
copyText.addEventListener('click',function(){

    navigator.clipboard.writeText(textToCopy)

})

