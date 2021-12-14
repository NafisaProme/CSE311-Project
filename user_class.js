class User
{
    // the constructor to set the values 
    constructor(mail, name)
    {
        // variables are decalred and set here 
        this.mail = mail;
        this.name = name;
    }
    
    // method declaration 
    login()
    {
        console.log(this.name + ' has logged in\n');
    }
}

let user = new User('Zia@gmail.com', 'Zia');

console.log(user.mail);
user.login();
