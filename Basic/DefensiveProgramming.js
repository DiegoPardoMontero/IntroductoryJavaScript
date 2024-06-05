function letterFinder(word, match) {
    try {
        if(word.length < 2){
            throw new Error("The word has to be longer than 1 character")
        }
        
        if(match.length != 1){
            throw new Error("The match length has to be 1")
        }

        if(typeof(word) != 'string' || typeof(match) != 'string'){
            throw new Error("The word or the match is not a String!")
        }
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    catch (error) {
        console.log("Error found!")
        console.log(error)
    }
}

letterFinder('CARRO', 'A')