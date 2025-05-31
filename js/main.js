alert('working');

document.querySelector('submit').addEventListener('click', findGator)

async function findGator(){
    const gatorName = document.querySelector('input').value
    try{
        const res = await fetch(`https://arkhamdb.com/api/public/card/01001.json`)
        const data = await res.json()
        console.log(data)
        document.querySelector('h2').innerText = data.real_name
    } catch(err){
        console.log(err)
    }
}