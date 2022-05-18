
const convertToSeat = (rowNum, columnNum) => {

    const rowConverted = String.fromCharCode(rowNum + 65);

    alert('Your seat is ' + rowConverted + columnNum);

}

//Optional challenge

const rowAmmount = prompt('Enter number of rows:');
const columnAmount = prompt('Enter number of columns:');


const oldSeatNum = prompt('Enter your seat number:');


const rowNum = Math.floor(oldSeatNum / columnAmount);


const columnNum = oldSeatNum % columnAmount;

if (rowAmmount > rowNum && columnAmount > columnNum) {
    convertToSeat(rowNum, columnNum);
}
else alert('Seat is undefined');
