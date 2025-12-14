// Function to ask for input with validation
function ask(question, validate) {
    let answer;
    do {
        answer = prompt(question);
        if (answer === null) {
            alert("Registration cancelled.");
            throw "User cancelled";
        }
        answer = answer.trim();
    } while (!validate(answer));
    return answer;
}

// Validate full name (at least 2 words)
const fullName = ask("Enter your full name (at least 2 words):", input => {
    const wordCount = input.split(/\s+/).filter(Boolean).length;
    if (wordCount < 2) alert("Please enter at least two words.");
    return wordCount >= 2;
});

// Validate email
const email = ask("Enter your email address:", input => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(input)) alert("Invalid email address.");
    return pattern.test(input);
});

// Validate password
const password = ask("Enter a password (8+ chars, 1 uppercase, 1 number, 1 special):", input => {
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (!pattern.test(input)) alert("Password must meet the requirements.");
    return pattern.test(input);
});

// Confirm password
ask("Confirm your password:", input => {
    if (input !== password) alert("Passwords not the same.");
    return input === password;
});

// Validate age (integer 18+)
const age = ask("Enter your age (18+):", input => {
    const num = Number(input);
    if (!Number.isInteger(num) || num < 18) alert("You must be at least 18 years old.");
    return Number.isInteger(num) && num >= 18;
});

alert("Registration successful!");
console.log({ fullName, email, age });
