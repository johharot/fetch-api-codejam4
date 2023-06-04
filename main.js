
//Three States of a promise
//Pending
//Fulfilled
//Rejected

//Two methods
//.then
//.catch

// //Get 
// fetch('https://swapi.dev/api/people/1/')
// .then(response => response.json())
// .then(data => console.log('Character:', data.name))
// .catch(error => console.log("Error:", error));

//Post
// let CharacterData = {
//     name: 'Spock',
//     height: '100'
// };

// let requestOptions = {
//     method: 'POST',
//     headers: {'content-Type': 'application/json'},
//     body: JSON.stringify(characterData)
// };

//Put
// let updatedCharacterData = {
//     name: 'Spongebob',
//     height: '200'
// };

//     let requestOptions = {
//         method: 'PUT',
//         headers: {'content-Type': 'application/json'},
//         body: JSON.stringify(updatedCharacterData)
// };

// fetch('https://swapi.dev/api/people/1/', requestOptions)
// .then(response => response.json())
// .then(data => console.log('Put response:', data))
// .catch(error => console.log("Error:", error))

//Delete
let requestOptions = {
    method: 'DELETE',
};

fetch('https://swapi.dev/api/people/1/', requestOptions)
    .then(response => response.status)
    .then(status => console.log('Delete response', status))
    .catch(error => console.log('Error:', error));