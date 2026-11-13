export function afficherModal(){
    let btnParametre = document.querySelector('#para')
    let modal = document.querySelector('#modal')
    let frmerModal = document.querySelector('#frmer-modal')

    btnParametre.addEventListener("click",function(){
        modal.classList.remove("hidden")

    })
    frmerModal.addEventListener("click" , function(){
        modal.classList.add("hidden")
    })
}