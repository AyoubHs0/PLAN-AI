import { loaddemo } from "./api.js"

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
    let btnDemo = document.querySelector('#btn-demo')
    btnDemo.addEventListener("click" , function(){
        modal.classList.add("hidden")
    loaddemo().then(data =>{
    let containerPj = document.querySelector('#container-pj')
        let div = document.createElement('div')
        div.className = "bg-white p-4 rounded-lg flex flex-col items-center justify-center gap-4"
        let h2 = document.createElement('h2')
        h2.textContent = `${data.projectName}`
        let p = document.createElement('p')
        p.textContent = `${data.tasks.length} tâches`
        let temps=document.createElement('p')
        temps.textContent = `temps estimé : ${data.totalEstimatedHours} heures`
        let btnvoir = document.createElement('a')
        btnvoir.textContent = "Voir le projet"
        btnvoir.href = `project.html`
        btnvoir.className = "bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600"
        let msgAucun = document.querySelector('#msg-aucun')
        msgAucun.classList.add('hidden')
        

        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(temps)
        div.appendChild(btnvoir)
        containerPj.appendChild(div)

    }).catch(error=>{
        console.error(error)
    }
    )
    })

}
