const user = {
    username: "Ashish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, ${this.price} , welcome to website`);
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
user.price = 9999
