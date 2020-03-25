//select a button waiting for click
//document.querySelector('.get-jokes').addEventListener('click', getJokes);
document.addEventListener("DOMContentLoaded", getJokes);

function getJokes(event){



    //const numberOfJokes = document.querySelector('input[type="number"]').value;
    //fetch(`http://api.icndb.com/jokes/random/${numberOfJokes}`)
    const key = 'a79504603c77682c08a6d1db58ade754';
    const latitude = '59.433250';
    const longitude = '24.747133';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `${proxyUrl}https://api.darksky.net/forecast/${key}/${latitude},${longitude}`;
    //const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiUrl)
    .then(response => {
        //console.log(response);
        return response.json();        
    }).then(function (data){
        console.log(data);
        //alert(data.timezone);
        let temp = Math.floor((data.currently.temperature-32)*5/9);
        console.log(temp);
        let html = `
        <ul>
            <li>City: ${data.timezone}</li>
            <li>Temp: ${temp}</li>
            <li>Description: ${data.currently.summary}</li>
            

        </ul>
        `;

    document.body.innerHTML = html;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });


    event.preventDefault();
}
