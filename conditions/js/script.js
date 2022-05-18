// const input = prompt('Write something');

// if (input && input != '0') {
//     alert('Condition 1 was truthy');
// } else if (input == '0') {
//     alert('Do not enter 0, please');
// }
// else {
//     alert('Condition 1 was falsy');
// }


const weather = 'snowy';

// if (weather === 'sunny') {
//     console.log('Use sunscreen');
// }
// else if (weather === 'windy') {
//     console.log('Wear a coat');
// }
// else if (weather === 'rainy') {
//     console.log('Bring an umbrella');
// }
// else {
//     console.log('Dress accordingly');
// }



switch (weather) {
    case 'sunny':
        console.log('Use sunscreen');
        break;
    case 'windy':
        console.log('Wear a coat');
        break;
    case 'rainy':
        console.log('Bring an umbrella');
        break;

    default:
        console.log('Dress accordingly');
        break;
}
