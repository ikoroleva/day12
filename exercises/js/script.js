/////////////////Conditions//////////////////////////

//////////////////Beginner level//////////////////////////////////


//Triangle//

const triangle = () => {

    const angle1 = Number(document.getElementById('angle1').value);
    const angle2 = Number(document.getElementById('angle2').value);
    const angle3 = Number(document.getElementById('angle3').value);

    console.log(angle1);
    console.log(angle2);
    console.log(angle3);


    if ((angle1 + angle2 + angle3) === 180) {
        document.getElementById("valueInputTriangle").innerHTML = 'It is a triangle';
    } else {
        document.getElementById("valueInputTriangle").innerHTML = 'It is\'t a triangle';
    }

}

//Days in a month//

const daysCounter = () => {
    const monthNum = Number(document.getElementById('month_number').value);

    switch (monthNum) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("valueInputDaysCounter").innerHTML = 'Month has 31 day';
            break;
        case 2:
            document.getElementById("valueInputDaysCounter").innerHTML = '28';
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("valueInputDaysCounter").innerHTML = '30';
            break;

        default:
            document.getElementById("valueInputDaysCounter").innerHTML = 'Error! Please enter number of month 1 - 12';
            break;
    }


}

//Login//

const loginCheck = () => {

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (password === 'sore-thumb-218') {
        document.getElementById("valueInputLoginCheck").innerHTML = 'Access granted';
    } else {
        document.getElementById("valueInputLoginCheck").innerHTML = 'Nice try';
    }

}

const passwordCheck = () => {

    const pass1 = String(document.getElementById('pass1').value);
    const pass2 = String(document.getElementById('pass2').value);

    console.log(pass1);
    console.log(pass2);

    if (pass1.length < 8) {
        document.getElementById("valueInputPasswordCheck").innerHTML = 'Your password is not secure.';
    }
    else if (pass1 === pass2) {
        document.getElementById("valueInputPasswordCheck").innerHTML = 'Great!';
    } else {
        document.getElementById("valueInputPasswordCheck").innerHTML = 'Your passwords do not match.';
    }

}


////////////////////////Intermediate level////////////////////////////

//Bus tickets//

const priceCalculator = () => {

    const age = Number(document.getElementById('age').value);
    const regularPrice = 12;

    if (age < 6) {
        document.getElementById("valueInputPriceCalculator").innerHTML = 'Price is 0 euro';
    } else if (age >= 6 && age < 16) {
        document.getElementById("valueInputPriceCalculator").innerHTML = 'Price is ' + (regularPrice * 0.35).toFixed(2) + ' euros';
    } else if (age >= 16 && age < 27) {
        document.getElementById("valueInputPriceCalculator").innerHTML = 'Price is ' + (regularPrice * 0.65).toFixed(2) + ' euros';
    }
    else if (age >= 27 && age < 64) {
        document.getElementById("valueInputPriceCalculator").innerHTML = 'Price is ' + regularPrice.toFixed(2) + ' euros';
    } else if (age > 64) {
        document.getElementById("valueInputPriceCalculator").innerHTML = 'Price is ' + (regularPrice * 0.5).toFixed(2) + ' euros';
    } else {
        document.getElementById("valueInputPriceCalculator").innerHTML = 'Please, enter your age!';
    }


}

//Temperatures//

const getMaxIndex = (array) => {

    let i = 0;
    let max = -100;
    let index = 0;

    while (i < array.length) {

        if (array[i] > max) {
            max = array[i];
            index = i;
        }
        i++;

    }
    return index;

}


const highestValue = () => {
    const temp1 = Number(document.getElementById('temp1').value);
    const temp2 = Number(document.getElementById('temp2').value);
    const temp3 = Number(document.getElementById('temp3').value);

    const arrTemp = [temp1, temp2, temp3];

    const maxValueIndex = getMaxIndex(arrTemp);

    if (maxValueIndex == 0) {
        document.getElementById("valueInputHighestValue").innerHTML = 'Temperature at 8 a.m was ' + temp1 + ' It is the highest value';
    } else if (maxValueIndex == 1) {
        document.getElementById("valueInputHighestValue").innerHTML = 'Temperature at 4 p.m was ' + temp2 + ' It is the highest value';
    } else if (maxValueIndex == 2) {
        document.getElementById("valueInputHighestValue").innerHTML = 'Temperature at midnight was ' + temp3 + ' It is the highest value';
    }




    // if ((temp1 > temp2) && (temp1 > temp3)) {

    //     document.getElementById("valueInputHighestValue").innerHTML = 'Temperature at 8 a.m was ' + temp1 + ' It is the highest value';
    // } else if ((temp2 > temp1) && (temp2 > temp3)) {

    //     document.getElementById("valueInputHighestValue").innerHTML = 'Temperature at 4 p.m was ' + temp2 + ' It is the highest value';
    // }

    // else if ((temp3 > temp1) && (temp3 > temp2)) {
    //     document.getElementById("valueInputHighestValue").innerHTML = 'Temperature at midnight was ' + temp3 + ' It is the highest value';
    // }
    // else if (temp1 === temp2) {

    //     if (temp1 > temp3) {
    //         document.getElementById("valueInputHighestValue").innerHTML = 'Temperatures at 8 a.m and at 4 p.m were ' + temp1 + ' They are the highest';
    //     } else {
    //         document.getElementById("valueInputHighestValue").innerHTML = 'They are similar!';
    //     }


    // } else if (temp2 === temp3) {

    //     if (temp2 > temp1) {
    //         document.getElementById("valueInputHighestValue").innerHTML = 'Temperatures at 4 p.m and at midnight were ' + temp2 + ' They are the highest';
    //     }
    //     else {
    //         document.getElementById("valueInputHighestValue").innerHTML = 'They are similar!';
    //     }

    // }

    // else if (temp1 === temp3) {

    //     if (temp3 > temp2) {
    //         document.getElementById("valueInputHighestValue").innerHTML = 'Temperatures at 4 p.m and at midnight were ' + temp3 + ' They are the highest';

    //     }
    //     else {
    //         document.getElementById("valueInputHighestValue").innerHTML = 'They are similar!';
    //     }

    // }

    // else {
    //     document.getElementById("valueInputHighestValue").innerHTML = 'Error!';
    // }


}

//Swimming simulation//

//Bubble sort implementation in javascript//

const sortArrayByValues = (arr) => {

    //Length of the array
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            //Swap the numbers
            if (arr[j][1] < arr[j + 1][1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

const whoWon = () => {

    const name1 = String(document.getElementById('name1').value);
    const name2 = String(document.getElementById('name2').value);
    const name3 = String(document.getElementById('name3').value);

    const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let arrWithResults = [[name1, getRandom(45, 60)], [name2, getRandom(45, 60)], [name3, getRandom(45, 60)]]
    console.log(arrWithResults);
    const arrSorted = sortArrayByValues(arrWithResults);

    document.getElementById("valueInputWhoWon").innerHTML = arrSorted[0][0] + ' won the gold medal, ' + arrSorted[1][0] + ' won the silver medal and ' + arrSorted[2][0] + ' won the bronze medal!';


}

// a leap year //

const isLeapYear = () => {

    const year = Number(document.getElementById('year').value);

    if ((year % 4) === 0) {
        if (year % 100 === 0 && year % 400 === 0) {
            document.getElementById("valueInputIsLeapYear").innerHTML = 'Year ' + year + ' is a leap year';
        } else {
            document.getElementById("valueInputIsLeapYear").innerHTML = 'Year ' + year + ' isn\'t a leap year';

        }
    } else {
        document.getElementById("valueInputIsLeapYear").innerHTML = 'Year ' + year + ' isn\'t a leap year';
    }

}


/////////////////////////User defined functions//////////////////

////////////////////////Beginner level//////////////////

//Math functions//

// const square = () => {

//     const num = Number(document.getElementById('number').value);

//     document.getElementById("valueInputSquare").innerHTML = num * num;

// }



const square = (number) => number * number;


console.log(square(3));

// const hypotenuse = () => {

//     const size1 = Number(document.getElementById('a-side').value);
//     const size2 = Number(document.getElementById('b-side').value);

//     document.getElementById("valueInputHypotenuse").innerHTML = Math.sqrt(size1.square() + size2.square());

// }


const hypotenuse = (a, b) => Math.sqrt(square(a) + square(b));
const a = 7;
const b = 2;

const h = hypotenuse(a, b).toFixed(2);
console.log(h);


const abs = (num) => {

    if (num < 0) {
        return -num;
    }
    return num;

};

console.log(abs(-30));

////Generating emails//////

const emailFromLogin = (login) => login += '@covidconspiracy.il';

const loginFromName = (firstName, lastName) => {

    const login = lastName.substring(0, 4).toLowerCase() + firstName.substring(0, 3).toLowerCase();
    return login;

}

const emailFromName = () => {

    const firstName = String(document.getElementById('first_name').value);
    const lastName = String(document.getElementById('last_name').value);


    document.getElementById("valueInputEmailFromName").innerHTML = 'Your login is: ' + loginFromName(firstName, lastName) + '. Your email is: ' + emailFromLogin(loginFromName(firstName, lastName));

}

















