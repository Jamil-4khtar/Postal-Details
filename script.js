const form = document.getElementById('form');
const input = document.getElementById('input');
const btn = document.getElementById('button');
const errorMsg = document.getElementById('error');

form.addEventListener("submit", fetchPostalDetails);

function fetchPostalDetails(e) {
    e.preventDefault();
    
    let value = input.value;
    if (value.length == 6) {
        fetch(`https://api.postalpincode.in/pincode/${value}`)
            .then(res => res.json())
            .then(res => {
                if (res[0].Status == "Success") {
                    window.location.href = "display.html";
                    localStorage.setItem("postal", JSON.stringify(res))
                } else {
                    errorMsg.style.display = "block";
                    errorMsg.textContent = res[0].Message
                }
            })
            .catch(err => `Error: ${err.status}`)
    } else {
        console.log("invalid");
        errorMsg.style.display = "block";
        errorMsg.textContent = "Invalid pincode"
    }
}
input.addEventListener("input", () => {
    errorMsg.style.display = "block" ? errorMsg.style.display = "none": "";
})

