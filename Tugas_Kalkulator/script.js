let total = document.getElementById('hasil');

function display(num) {
    total.value += num
}

function Samadgn() {
    try{
        total.value = eval(total.value);
    }
    catch(err){
        alert('invalid');
    }
}

function Clear() {
    total.value = "";
}

function del(num) {
    total.value = total.value.slice(0,-1);
}