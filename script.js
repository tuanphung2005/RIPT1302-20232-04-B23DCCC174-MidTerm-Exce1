a = document.getElementById('a');
b = document.getElementById('b');
resultText = document.getElementById('resultText');

function update() {
    a = document.getElementById('a');
    b = document.getElementById('b');
    console.log(a);
    console.log(b);
}

function checkNumber() {
    if (a.value == '' || b.value == '') {
        alert('Vui lòng nhập số');
        return false;
    }
    if (!isNaN(a.value) && !isNaN(b.value)) {
        a = parseInt(a.value);
        b = parseInt(b.value);
        return true;
    } else {
        alert('Vui lòng nhập số');
        return false
    }
}


function sum() {
    update();
    if (checkNumber()) {
        resultText.innerHTML = "Kết quả: " + (a + b);
    }
}

function sub() {
    update();
    if (checkNumber()) {
        resultText.innerHTML = "Kết quả: " + (a - b);
    }
}

function mul() {
    update();
    if (checkNumber()) {
        resultText.innerHTML = "Kết quả: " + (a * b);
    }
}

function div() {
    update();
    if (checkNumber()) {
        if (b == 0) {
            alert('Không thể chia cho 0');
            return;
        }
        resultText.innerHTML = "Kết quả: " + (a / b);
    }
    console.log('div');
}

function reset() {
    a.value = '';
    b.value = '';
    resultText.innerHTML ="Kết quả: " + '';
    console.log('reset');
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
}