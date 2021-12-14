let user_id = 1;

class Patient
{
    constructor(name, gender, phone, email, birth, address, occupation)
    {
       this.name = name;
       this.gender = gender;
       this.phone = phone;
       this.email = email;
       this.phone = phone;
       this.birth = birth;
       this.address = address;
       this.occupation = occupation;
    }

    // method declaration 
    login()
    {
        console.log(this.name + ' has logged in\n');
    }
}