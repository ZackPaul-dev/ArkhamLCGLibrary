
alert('working');

document.querySelector('button').addEventListener('click', findGator)

async function getCards(req, res){

        fetch('cards')
        .then(res => res.json())
        .then(data => console.log(data))
};

getCards();

async function findGator(){
    const gatorName = document.querySelector('input').values
   
        document.querySelector('h2').innerText = collection.real_name
    } 
