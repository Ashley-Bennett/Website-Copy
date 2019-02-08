const keycode = () => {
    let key = event.key;
    let code = event.code;
    let which = event.which;
    console.log(event.key);
    console.log(event.code);
    console.log(event.which);

    document.getElementById("key").innerHTML = key
    document.getElementById("code").innerHTML = code
    document.getElementById("which").innerHTML = which
}


