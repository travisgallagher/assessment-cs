// 1

function zeroSum(arr, S) {
    var sums = [];
    for (var i = 0; i < arr.length; i++) { 
    
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === S) {
            sums.push([arr[i], arr[j]]);
            }
        }
    }

    if (sums.length === 0) {
        return false
    } else {
        return true
    }
}
console.log(zeroSum([3, 5, 2, -4, 8, 11], 0));       

// runtime complexity:  O(n^2)
// space complexity:  O(n^2)


//2

function uniqueChar(str) {
    let chars = {};
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (chars[ch]) {
            return false
        } else {
            chars[ch] = true;
        }
    }
    return true;
}
console.log(uniqueChar("Monday"));
console.log(uniqueChar("Moonday")); 

// runtime complexity: O(1)
// space complexity: O(1)

//3

function isPangram(str) {
    str = str.toLowerCase();

    const { length } = str;
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabets.split('');

    for(let i = 0; i < length; i++){
        const el = str[i];
        const index = alphaArr.indexOf(el);
        
        if(index !== -1){
        alphaArr.splice(index, 1);
        };
    };
    return !alphaArr.length;
};
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice")); 
    
// runtime complexity: O(n)?
// space complexity:  O(n)?


//4

function findLongestWord(arr) {
    let wordLength = []

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].length
        wordLength.push(word)
    }
    let longestWord = (Math.max(...wordLength))
    return longestWord
}
console.log(findLongestWord(["hi", "hello"])); 

// runtime complexity: O(n)
// space complexity: O(n)