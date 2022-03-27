class User {
    constructor(firstName, lastName, email, password, age, cardNumber,address, phone, color) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.cardNumber = cardNumber;
        this.address = address;
        this.contactPhone = phone;
        this.color = color;
    }
}
function isValid(user){
    let valid=true;
    $("input").removeClass("input-error");
    if(user.email.length==0){
        valid=false;
        $(`#txtEmail`).addClass("input-error");
    }
    $("input").removeClass("input-error");
    if(user.password==0){
        valid=false;
        $(`#txtPassword`).addClass("input-error");
    }

    return valid;
}

function register(){
    let inputFirstName = $(`#txtFirstName`).val();
    let inputLastName = $(`#txtLastName`).val();
    let inputEmail = $(`#txtEmail`).val();
    let inputPassword = $(`#txtPassword`).val();
    let inputAge = $(`#txtAge`).val();
    let inputCardNumber = $(`#txtCardNumber`).val();
    let inputAddress = $(`#txtAddress`).val();
    let inputPhone = $(`#txtPhone`).val();
    let inputColor = $(`#txtColor`).val();
    
    
    let theUser = new User(inputFirstName,inputLastName,inputEmail,inputPassword,inputAge,inputCardNumber,inputAddress,inputPhone,inputColor);
    if(isValid(theUser)){
        console.log(theUser);
        $("input").val("");
    }
}
function init(){
    console.log("Registration")
}
window.onload=init;