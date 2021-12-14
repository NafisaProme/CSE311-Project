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
