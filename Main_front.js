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
const status = document.getElementById('status');
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

const get_data = async () =>
{
    let response = await axios(
    {
        url: 'http://localhost:8080/get',
        method: 'get',
        data:
        {
            'username': username.value,
            'password': password.value,
        }
    })
    
    // for(let i = 0; i < response.data.length; i++)
    // {
    //     const element = response.data[i];
    //     status.innerHTML = status.innerHTML + element.username;
    // }
    console.log(response.data);
    // localStorage.setItem("username", ans);
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
        // localStorage.setItem("username", "Prome");
        // get_data();
        let url = "/afterlogin.html";
        window.location.assign(url);
    }
}