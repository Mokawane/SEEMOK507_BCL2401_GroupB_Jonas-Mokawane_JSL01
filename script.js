function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = /^pet_\d{4}[A-Za-z]+$/; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
    if (result.test(input)) {
            document.getElementById('result').innerText = "Valid Syntax";
} else {
            document.getElementById("result").innerText = "Invalid Syntax.";
}

}
