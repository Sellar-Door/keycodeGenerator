// function with three variables - keycode, key and code - displays in id "demo" with onkeypress 

const myFunction = (event) =>{
    let key = event.keyCode;
    let x = event.key
    let y = event.code
    document.getElementById("demo").innerHTML = x + " " + " " + y + " " + key ;
    
    }
    