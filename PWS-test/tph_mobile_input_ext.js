// Create a hidden input that triggers the mobile keyboard
var mobileInput = document.createElement("input");
mobileInput.type = "text";
mobileInput.id = "gms_mobile_input";
mobileInput.style.position = "absolute";
mobileInput.style.opacity = 0.05;
mobileInput.style.width = "1px";
mobileInput.style.height = "1px";
mobileInput.style.fontSize = "16px"; // Required for iOS
document.body.appendChild(mobileInput);

// Getter function so GML can retrieve typed text
function getMobileInputValue() {
    return document.getElementById("gms_mobile_input").value;
}