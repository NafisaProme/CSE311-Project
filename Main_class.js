let items = 0;

function plus_one()
{
    items++;
    document.getElementById('demo').innerHTML = items + " in bag";
}

function minus_one()
{
    if(items >= 1)
        items--;

    if(items)
        document.getElementById('demo').innerHTML = items + " in bag";
    else
        document.getElementById('demo').innerHTML = "Add to Cart";

}

function submit_login()
{
    var login_info = {};
    login_info['name'] = document.getElementById('name').value;
    login_info['pass'] = document.getElementById('pass').value;

    console.log(login_info.name);

    document.getElementById('name1').innerHTML = login_info.name
    document.getElementById('pass1').innerHTML = login_info.pass
}
