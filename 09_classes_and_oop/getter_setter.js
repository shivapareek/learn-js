class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value
    }

    get password(){
             return `${this._password}shiva`
    }

    set password(value){
        this._password = value
    }
}

const shiva = new User ("s@shiva.ai" ,"abc")
console.log(shiva.password);
