function handleLogin(){
    // var a = document.getElementById("fq_email").value;
    var b = document.getElementById("fq_password").value;

    if(b === 'pass'){
        console.log('Passed -- Logging in');
        // same window
        window.location ="./home.html";
        // different window 
        // window.open('./home.html');
        event.preventDefault();
    }
    else{
        window.alert('Wrong Password');
        event.preventDefault();
    }
}