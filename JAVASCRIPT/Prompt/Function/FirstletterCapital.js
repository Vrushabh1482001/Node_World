/* Write a iS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */

/*** Named Function ***/

/* function FirstLetterCapital(string) {

    let Arr = [];

    for (let i = 0; i < string.length; i++) {
        Arr.push(string[i]);
    }

    //console.log(Arr.length);

    for (i = 0; i < Arr.length; i++) {
        let temp = Arr[i];
        if (i == 0 || Arr[i - 1] == " ") {
            Arr[i] = temp.toUpperCase();
        }

    }
    console.log(Arr.join(''));

}

FirstLetterCapital("the quick brown fox."); */


/*** Anonymous Function ***/

/* FirstLetterCapital = (string) => {

    let Arr = [];

    for (let i = 0; i < string.length; i++) {
        Arr.push(string[i]);
    }

    //console.log(Arr.length);

    for (i = 0; i < Arr.length; i++) {
        let temp = Arr[i];
        if (i == 0 || Arr[i - 1] == " ") {
            Arr[i] = temp.toUpperCase();
        }

    }
    console.log(Arr.join(''));

}

FirstLetterCapital("the quick brown fox."); */




/* function FirstLetterCapital(string) {

    let Arr = [];
    let temp = "";

    for (let i = 0; i < string.length; i++) {


        if (string[i] != " ") {
            temp += string[i];
        }
        else {
            Arr.push(temp);
            temp = "";
        }
    }
    console.log(Arr);
    console.log(Arr.length);

    for (i = 0; i < Arr.length; i++) {
        let temp = Arr[i];
        console.log(temp.toUpperCase(temp[0]));

    }

} */

