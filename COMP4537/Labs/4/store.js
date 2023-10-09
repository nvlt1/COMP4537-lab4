function validInput(input) {
    if (input && !/\d/.test(input)){
        return true
    }
    return false
}

function addDefinition() {
    const word = document.getElementById('wordToInput').value
    const definition = document.getElementById('definitionToInput').value

    if (validInput(word) && validInput(definition)){

        const xhr = new XMLHttpRequest()
        // start the post req
        xhr.open('POST', '/store', true)
        // request header to let it know we're using JSON data
        xhr.setRequestHeader('Content-Type', 'application/json')

        // event listener for POST request
        xhr.onload = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    document.getElementById('storeMyResult').textContent = 'Stored defintion!'
                } else {
                    document.getElementById('storeMyResult').textContent = 'Error: ' + xhr.status
                }
            }
        }

        // for error handling:
        xhr.onerror = function() {
            document.getElementById('storeMyResult').textContent = 'Error occured during req process'
        }

        // convert word + def data to JSON so we can send the request
        const myData = JSON.stringify({word: word, definition: definition})
        xhr.send(myData)
    } else {
        document.getElementById('storeMyResult').textContent = 'Input was invalid, please enter a valid word and/or definition'
    }
}