alert('working');

document.querySelector('button').addEventListener('click', findGator)

fetch('/server.js/collection')
.then(response => response.json)
.then(console.log(collection))

async function findGator(){
    const gatorName = document.querySelector('input').value
   
        document.querySelector('h2').innerText = collection.real_name
    } 
