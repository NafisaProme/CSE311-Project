const status = document.getElementById('status');
// const name = document.getElementById('name');
// const address = document.getElementById('address');

// const balerMethod = async () => {
//     let response = await axios({
//         url: 'http://localhost:3000/insert',
//         method: 'post',
//         data: {
//             'name': name.value,
//             'address': address.value,
//         }
//     });

//     status.innerText = response.data;
// }

const arektaBalerMethod = async () => {
    let response = await axios({
        url: 'http://localhost:3000/get',
        method: 'get',
    });

    for (let i = 0; i < response.data.length; i++) {
        const element = response.data[i];
        status.innerText = status.innerText + element.name + "  " + element.address + "\n";

        // status.innerHTML += `<br> ${element.name} <br> ${element.address} <br>`
    }
}

arektaBalerMethod();

const user_login = async () =>
{
    let response = await axios(
        {
            url: 'http://localhost:3000/login',
            method: 'post',
            data: 
            {
                'name': name.value,
                'address' : address.value,
            }
        }
    )
    status.innerText = response.data.name;
}