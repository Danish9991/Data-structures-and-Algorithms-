// WAP to return first recurring/repeating character from array

const firstRecurringCharacter = (input) => {
   for(let i = 0; i < input.length; i++) {
    for(let j = 1; j < input.length; j++) {
        if(input[i] === input[j]){
            return input[i]
        }
    }
   }
   return undefined;
}

firstRecurringCharacter([2,5,1,1,2,4,9,6])