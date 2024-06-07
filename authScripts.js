function login(){
    var email = document.getElementById('email').value;
    var password= document.getElementById('password').value;

    fetch('https://cloudhotelapi.azurewebsites.net/Auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(response=> response.json()).then(data=> {
            const token = 'Bearer '+data.data;
            document.cookie = `token=${token}; path=/; max-age=3600`; 
        }).catch((error) => console.error('Error:', error));
};

function register(){
    var email = document.getElementById('email').value;
    var password= document.getElementById('password').value;
    var firstname = document.getElementById('firstname').value;
    var lastname= document.getElementById('lastname').value;

    fetch('https://cloudhotelapi.azurewebsites.net/Auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password,
                name: firstname,
                surname: lastname
            })
        }).then(response=> console.log('Status Code:', response.status)).catch(error => {
            console.error('Error:', error)
        });
}

