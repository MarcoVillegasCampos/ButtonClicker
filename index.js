
function message() {
    alert("Ninja was liked!");
}

function Login(element) {
    if(element.innerText =="Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(el) {
    el.remove();
}