// const arektaBalerMethod = async () => 
// {
//     let response = await axios({
//         url: 'http://localhost:8080/get',
//         method: 'get',
//     });

//     for (let i = 0; i < response.data.length; i++) {
//         const element = response.data[i];
        
//         if(element.name == namer && element.id == 1)
//             status.innerText = status.innerText + "Name : " + element.name + "\n" + "ID : " + element.id + "\n";
//     }
// }

// change element id to username for using the login page 
const username = document.getElementById('fname');
const password = document.getElementById('password');

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
        }
    });
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
        let url = "/afterlogin.html";
        window.location.href = url;
    }
}