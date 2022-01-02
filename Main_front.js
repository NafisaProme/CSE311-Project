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

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const blood = document.getElementById('blood');
const birth_date = document.getElementById('birth_date');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const password = document.getElementById('password');
const occupation = document.getElementById('occupation');

const user = document.getElementById('user');
const pass = document.getElementById('pass');

const create_patient = async () =>
{

    let response = await axios(
    {
        url: 'http://localhost:8080/create_patient',
        method: 'post',
        data:
        {
            'fname': fname.value,
            'lname': lname.value,
            'username': username.value,
            'email': email.value,
            'gender': gender.value,
            'blood': blood.value,
            'birth_date': birth_date.value,
            'phone': phone.value,
            'occupation': occupation.value,
            'address': address.value,
            'password': password.value
        }
    });
}

const appoint = async () =>
{
    const app_user_id = document.getElementById('app_user_id');
    const app_doc_id = document.getElementById('app_doc_id');
    const app_username = document.getElementById('app_username');
    const app_date = document.getElementById('app_date');
    
    let response = await axios(
    {
        url: 'http://localhost:8080/appoint',
        method: 'post',
        data:
        {
            'app_user_id': app_user_id.value,
            'app_doc_id': app_doc_id.value,
            'app_username': app_username.value,
            'app_date': app_date.value
        }
    })
}

const create_doctor = async () =>
{
    const spec = document.getElementById('spec');

    let response = await axios(
    {
        url: 'http://localhost:8080/create_doctor',
        method: 'post',
        data:
        {
            'fname': fname.value,
            'lname': lname.value,
            'username': username.value,
            'email': email.value,
            'gender': gender.value,
            'blood': blood.value,
            'birth_date': birth_date.value,
            'phone': phone.value,
            'spec': spec.value,
            'address': address.value,
            'password': password.value
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
        display.innerHTML += `<br> Doctor's ID: ${element.id} <br> Doctor's Name: ${element.fname} ${element.lname} <br> 
                                Email: ${element.email} <br> Phone: ${element.phone} <br> Specialization: ${element.specialization} <br> 
                                Address: ${element.address}`;
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

    for(let i = 0; i < response.data.length; i++)
    {
        const element = response.data[i];
        
        if(user.value == element.username && pass.value == element.pass)
        {
            localStorage.setItem("id", element.id);
            localStorage.setItem("fname", element.fname);
            localStorage.setItem("lname", element.lname);
            localStorage.setItem("phone", element.phone);
            localStorage.setItem("email", element.email);
            localStorage.setItem("gender", element.gender);
            localStorage.setItem("blood", element.blood_group);
            localStorage.setItem("birth_date", element.birth_date);
            localStorage.setItem("occupation", element.occupation);
            localStorage.setItem("address", element.address);
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
            'username' : user.value,
            'password' : pass.value,
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