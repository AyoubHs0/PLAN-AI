export function loaddemo(){
    fetch('data/sample-plan.json')
    .then(Response =>{
        if(!Response.ok){
            throw new Error("Errour pour chargement")
            
        }
        return Response.json()
    })
    .then(data =>{
        console.log(data)
        return data
    })
    .catch(error=> {
        console.error(error)
        throw error
    })
    
}

