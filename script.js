function toggleDarkMode() {
            const body = document.body;
            const isDarkMode = body.classList.contains('dark-mode');

            if (isDarkMode) {
                body.classList.remove('dark-mode');
                document.querySelector("body").style.background= (body).background
                document.querySelector("body").style.color= "#333"

            } else {
                body.classList.add('dark-mode');
                document.querySelector("body").style.color = "white";
                document.querySelector("body").style.background = "black";
            }
        }

function contactValidation() {
    const cntfm = document.contactForm;
    let errors = [];

    if (cntfm.text.value.trim() === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
            return false;
        } else {
            document.getElementById("nameError").innerHTML = "";
        }
    
        const emailField = cntfm.email;

    if (emailField.type === "email" && !emailField.value.match(/^\S+@\S+\.\S+$/)) {
        errors.push("Invalid email address");
    }
    
        const message = "Thank you for subscribing to GrandLine Fruits!";
        alert(message);
    
        return false;
}
        
