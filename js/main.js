alert('working');

document.querySelector('button').addEventListener('click', findGator)

let collection = await fetch('/server.js/cards')

console.log(collection)

async function findGator(){
    const gatorName = document.querySelector('input').value
   
        document.querySelector('h2').innerText = collection.real_name
    } 
