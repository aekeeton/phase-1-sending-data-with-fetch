// Add your code here
function submitData(firstName, email) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
    }
    return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(object => document.body.innerHTML = object.id)
    .catch(error => document.write(error.message))
}
console.log(error)


function addNewContact (newID) {
    document.getElementsByTagName("body")[0].innerHTML = newID
    document.body.append(message)
}
submitData("name", "name@name.com")