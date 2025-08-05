let collection = undefined;

document.querySelector('button').addEventListener('click', findGator)

async function getCards(req, res){

        fetch('cards')
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => {
   collection = data;
   console.log(collection)
});
}
getCards();

/*async function testSearch(){
    await(getCards);
console.log(collection.find((obj) => obj.real_name == "Knife"));
}*/

async function findGator(){
    await(getCards);
    const gatorName = document.querySelector('input').value.toLowerCase();
    let cardDesc = collection.find((obj) => obj.real_name.toLowerCase() == `${gatorName}`);
   
    document.querySelector('h3').innerText = cardDesc.real_name;
    document.querySelector('img').src = 'https://arkhamDB.com' + cardDesc.imagesrc;
    document.querySelector('h4').innerText = cardDesc.type_name;    
    document.querySelector('h5').innerText = cardDesc.real_traits;
    document.querySelector('h6').innerText = cardDesc.real_text;
    } 
