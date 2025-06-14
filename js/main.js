alert('working');

document.querySelector('button').addEventListener('click', findGator)

async function getCards(){
let collection = await fetch(`/cards`)
console.log(collection)
};

getCards();

async function findGator(){
    const gatorName = document.querySelector('input').values
   
        document.querySelector('h2').innerText = collection.real_name
    } 
