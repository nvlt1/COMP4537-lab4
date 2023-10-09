
// input checker, checks if input not empty and doesn't contain numbers
function validSearch(input){
    if (input && !/\d/.test(input)){
        return true
    }
    return false
}

// search function, takes the input and checks for valid word first
function searchForDef() {
    const word = document.getElementById('searchForInput').value

    if (validSearch(word)) {
        const xhr = new XMLHttpRequest();
        // url end-point: /search?word=${word}
        // before 
        xhr.open('GET', `/search?word=${word}`, true)

        // event listener for completed request
        xhr.onload = function() {
            // readystate 4 is req finished and response ready
            if (xhr.readyState === 4){
                if (xhr.status === 200) {
                    console.log("client: 200")
                    // parse json response from the server
                    const response = JSON.parse(xhr.responseText)
                    if (response.defintion) {
                        document.getElementById('results').textContent = `Definition of ${word}: ${response.defintion}`
                    } else {
                        document.getElementById('results').textContent = `Sorry, couldn't find a definition for the word ${word}`
                    }
                } else {
                    document.getElementById('results').textContent = 'Client request error: ' + xhr.status
                }
            }
        }

        xhr.onerror = function() {
            document.getElementById('results').textContent = 'Error occurance during request'
        }
        xhr.send()
    } else {
        // else case for if the search word was not valid
        document.getElementById('results').textContent = 'Search cannot contain numbers! Please enter a valid search word'
    }
}