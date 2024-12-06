const pincode = document.getElementById('pincode');
const message = document.getElementById('message');
const filter = document.getElementById('filter');
const results = document.getElementById('results');


let data = JSON.parse(localStorage.getItem("postal"))

pincode.innerHTML = `
    <strong>Pincode: ${data[0].PostOffice[0].Pincode}</strong>
`;
message.innerHTML = `<strong>Message: </strong>${data[0].Message}`;


data[0].PostOffice.map(item => {
    const res = document.createElement('div');
    res.classList.add = "res"
    res.innerHTML = `
        <p>Name: ${item.Name}</p>
        <p>Branch Type: ${item.BranchType}</p>
        <p>Delivery Status: ${item.DeliveryStatus}</p>
        <p>District: ${item.District}</p>
        <p>Division: ${item.Division}</p>
        <p>State: ${item.State}</p>
    `;
    results.append(res)
})


function filterDisplay() {
    let searchValue = filter.value;
    results.innerHTML = ""
    data[0].PostOffice.map(item => {
        if (item.Name.toLowerCase().includes(searchValue.trim().toLowerCase())) {
            console.log(item);
            const res = document.createElement('div');
            res.classList.add = "res"
            res.innerHTML = `
                <p>Name: ${item.Name}</p>
                <p>Branch Type: ${item.BranchType}</p>
                <p>Delivery Status: ${item.DeliveryStatus}</p>
                <p>District: ${item.District}</p>
                <p>Division: ${item.Division}</p>
                <p>State: ${item.State}</p>
                    `;
        results.append(res)
        }
    })
}

filter.addEventListener("input", filterDisplay)