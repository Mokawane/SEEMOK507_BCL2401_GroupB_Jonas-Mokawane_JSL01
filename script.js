function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = /^pet_(201[8-9]|202[0-4])[A-Za-z]+$/;

    if (result.test(input)) {
            document.getElementById('result').innerText = "Valid Syntax";
} else {
            document.getElementById("result").innerText = "Invalid Syntax.";
}

}
