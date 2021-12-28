const status = document.getElementById('status');
const namer = localStorage.getItem("namer");

const arektaBalerMethod = async () => 
{
    let response = await axios({
        url: 'http://localhost:8080/get',
        method: 'get',
    });

    for (let i = 0; i < response.data.length; i++) {
        const element = response.data[i];
        
        if(element.name == namer && element.id == 1)
            status.innerText = status.innerText + "Name : " + element.name + "\n" + "ID : " + element.id + "\n";
    }
}

arektaBalerMethod();