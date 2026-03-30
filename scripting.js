function validation() {
    let id1 = document.getElementById('ide');

    if (id1.value === "") {
        alert("Enter the ID first");
        return false;
    }

    let password = document.getElementsByClassName('passed');

    if (password.length === 0) {
        alert("Password field not found");
        return false;
    }

    if (password[0].value.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }

    alert("Login successful");
    return true;
}

function showmsg(){
    alert("Your registration is completed now");
    return false; // prevents page reload
}