function validInput(input) {
    if (input && !/\d/.test(input)){
        return true
    }
    return false
}

function addDefinition() {
    const word = document.getElementById('wordToInput').value;
    const definition = document.getElementById('defintionToInput').value;

    if (validInput(word) && validInput(definition)) {
        const xhr = new XMLHttpRequest();
        
        // Start the POST request
        xhr.open('POST', 'http://localhost:8888/store', true);
        
        // Set request header to let it know we're using JSON data
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Event listener for POST request
        xhr.onload = function() {
            // readyState 4 is request finished and response ready
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    document.getElementById('storeMyResult').textContent = 'Stored definition!';
                } else {
                    document.getElementById('storeMyResult').textContent = 'Error: ' + xhr.status;
                }
            }
        };

        // xhr.onerror = function() {
        //     document.getElementById('storeMyResult').textContent = xhr.responseText;
        // }

        // Convert word + definition data to JSON so we can send the request
        const myData = JSON.stringify({ word, definition });
        console.log(myData);
        xhr.send(myData);
    } else {
        document.getElementById('storeMyResult').textContent = 'Input was invalid, please enter a valid word and/or definition';
    }
}

// function addDefinition() {
//     const word = document.getElementById('wordToInput').value
//     const definition = document.getElementById('defintionToInput').value



//         const xhr = new XMLHttpRequest()
//         // start the post req
//         xhr.open('POST', 'http://localhost:8888/store', true)
//         // request header to let it know we're using JSON data
//         xhr.setRequestHeader('Content-Type', 'application/json')

//         // event listener for POST request
//         xhr.onload = function() {
//             // readystate 4 is req finished and response ready
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     document.getElementById('storeMyResult').textContent = 'Stored defintion!'
//                 } else {
//                     document.getElementById('storeMyResult').textContent = 'Error: ' + xhr.status
//                 }
//             }
//         }

//         // for error handling:
//         // xhr.onerror = function() {
//         //     document.getElementById('storeMyResult').textContent = xhr.responseText
//         // }

//         // convert word + def data to JSON so we can send the request
//         const myData = JSON.stringify({word, definition})
//         console.log(myData)
//         xhr.send(myData)
//     //  else {
//     //     document.getElementById('storeMyResult').textContent = 'Input was invalid, please enter a valid word and/or definition'
//     }
// // }