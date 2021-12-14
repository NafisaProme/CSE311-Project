let user_id = 1;
class User
{
    // the constructor to set the values 
    constructor(first_name, last_name)
    {
        // variables are decalred and set here 
       this.first_name = first_name;
       this.last_name = last_name;
       this.user_id = user_id;
       user_id++;
    }

    // method declaration 
    login()
    {
        console.log(this.name + ' has logged in\n');
    }
}