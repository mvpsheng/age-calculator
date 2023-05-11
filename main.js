const resultYear = document.getElementById('years')
const resultMonth = document.getElementById('months')
const resultDay = document.getElementById('days')

const day = document.getElementById('Day')
const month = document.getElementById('Month')
const year = document.getElementById('Year')

const startButton = document.getElementById('start')

const canvas = document.createElement('canvas');

const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(5, 35);
ctx.lineTo(85, 35);
ctx.lineTo(45, 60);

ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();
startButton.style.backgroundImage = `url(${canvas.toDataURL()})`;

function handleEvent() {
    const yearnum = year.value
    const monthnum = month.value.replace(/^0+/, "")
    const daynum = day.value.replace(/^0+/, "")
    console.log(daynum, '点击事件触发');
    const inputDate = new Date(yearnum, monthnum - 1, daynum); // Note: month is zero-indexed in the Date object
    console.log(inputDate, 'inputDate')
    const today = new Date()

    const timeDiff = Math.abs(today.getTime() - inputDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) // Convert milliseconds to days
    const diffYears = Math.floor(diffDays / 365);
    const diffMonths = Math.floor((diffDays % 365) / 30)

    const realday = diffDays % 30
    console.log(diffYears, 'diffYear')
    console.log(diffMonths, 'diffMonth');
    console.log(realday, 'diffDay');

    resultYear.textContent = diffYears + ' years'

    resultMonth.textContent = diffMonths + ' months'

    resultDay.textContent = realday + ' days'
}

year.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleEvent();
    }
})
month.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleEvent();
    }
})
day.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleEvent();
    }
})
startButton.addEventListener('click', handleEvent)
