// const arektaBalerMethod = async () => 
// {
    // let response = await axios({
    //     url: 'http://localhost:8080/get',
    //     method: 'get',
    // });

//     for (let i = 0; i < response.data.length; i++) {
//         const element = response.data[i];
        
//         if(element.name == namer && element.id == 1)
//             status.innerText = status.innerText + "Name : " + element.name + "\n" + "ID : " + element.id + "\n";
//     }
// }

// change element id to username for using the login page 
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const viewer = document.getElementById('viewer');

const create = async () =>
{
    let response = await axios(
    {
        url: 'http://localhost:8080/create',
        method: 'post',
        data:
        {
            'username': username.value,
            'password': password.value,
            'email' : email.value
        }
    });
}

const all_info = async () =>
{
    let response = await axios(
    {
        url: 'http://localhost:8080/get_data',
        method: 'get'
    })
    
    for (let i = 0; i < response.data.length; i++) 
    {
        const display = document.getElementById(`display${i + 1}`);
        const element = response.data[i];
        display.innerHTML += `<br> Doctor's ID: ${element.id} <br> Doctor's Name: ${element.name} <br>`
    }
}


const get_data = async () =>
{
    let response = await axios(
    {
        url: 'http://localhost:8080/get_data',
        method: 'get'
    })

    localStorage.clear();
    const name = document.getElementById('username');

    for(let i = 0; i < response.data.length; i++)
    {
        const element = response.data[i];
        
        if(name.value == element.name && password.value == element.password)
        {
            localStorage.setItem("name", element.name);
            localStorage.setItem("id", element.id);
        }
    }
}

const login = async () =>
{
    let response = await axios(
    {
        url: 'http://localhost:8080/login',
        method: 'post',
        data:
        {
            'username' : username.value,
            'password' : password.value,
        }
    });

    if (response.data == "Wrong Username or password!!")
    {
        document.getElementById('viewer').innerHTML = response.data;
    }
    else
    {
        get_data();
        let url = "/afterlogin.html";
        window.location.assign(url);
    }
}

function submitForm(e)
{
    e.preventDefault();
    let name = 'Zia';
    let message = 'Hello, Rifat';
    let email = document.getElementById('mail');

    sendEmail(name, email.value, message);
}

function sendEmail(name, email, message)
{
    Email.send(
    {
        Host: "smtp.gmail.com",
        Username: 'cooperhospitalbd@gmail.com',
        Password: 'ZiaProme',
        To: 'zia.chowdhury@northsouth.edu',
        From: 'cooperhospitalbd@gmail.com',
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
    }).then((message) => windows.alert("Mail has been sent"))
}