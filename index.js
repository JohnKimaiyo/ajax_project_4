// text file data
let textButton = document.querrySelector('#text-btn');
textButton.addEventListener('click', function () {

    // create an ajax request
    let xhr = new XMLHttpRequest();

    // prepare the request
    XMLHttpRequest.open('GET', 'message.text', true);

    // send request the request
    xhr.send();

    // process the request
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText
            displayTextData(data);
        }
    }
});

// display textdata
let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querrySelector('#text-card').innerHTML = HTMLtEMPLATE;
}

// json button
let jsonButton = document.querySelector("json-btn");
jsonButton.addEventListener('click', function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './mobile.json', true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.reposnseText;
            let mobile = Json.parser(data);
            console.log(mobile);
        }
    }
});

// display JSON Data
let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click', function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.reposnseText;
            let users = JSON.parse(data);
            console.log(users)
        }
    }
});

// display users
let displayUsers = (users) => {
    let htmlTemplate = '';
    for (let user of users) {
        htmlTemplate += `<ul class="list-group">
        <li class ="list-group-item">ID ${user.id}</li>
        <li class ="list-group-item">ID ${user.name}</li>
        <li class ="list-group-item">ID ${user.email}</li>
        <li class ="list-group-item">ID ${user.address.street}</li>
        <li class ="list-group-item">ID ${user.address.city}</li>
        </ul>`;
    }
    document.querySelector('#api-card').innerHTML = htmlTemplate;
}
