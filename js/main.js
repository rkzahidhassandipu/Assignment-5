
function bgChange(){
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.backgroundColor = `#${hexVal}`
}

// button click to disabled
let disableBtns = document.querySelectorAll('#complete-btn');

disableBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        alert('Board updated Successfully');

        // complete button decrement
        const decrement = document.getElementById('decrement').innerText;
        const convertDecrement = parseInt(decrement);
        const decre = convertDecrement - 1;
        document.getElementById('decrement').innerText = decre;

        // Check if decre is 0
        if (decre === 0) {
            alert("congrates!!! You have completed all the current task");
        }

        // complete button increment
        const increment = document.getElementById('increment').innerText;
        const convertIncrement = parseInt(increment);
        const increments = convertIncrement + 1;
        document.getElementById('increment').innerText = increments;

        //task add to history
        const task = document.getElementById('task');
        const card = btn.parentElement.parentElement.parentElement;
        const taskHeader = card.querySelector('.task-header').innerText;
        
        // created history 
        const p = document.createElement('p');
        const getTime = new Date();
        const convertTime = getTime.toLocaleString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        p.append(`
                You have completed the task ${taskHeader} at ${convertTime}
            `);

        p.classList.add('bg-blue-50', 'rounded-2xl', 'py-3', 'px-2', 'my-2');
        task.appendChild(p);

        

        // If I click the button, then disable the button
        btn.setAttribute('disabled', true);
        if (btn.disabled) {
            btn.classList.add('bg-gray-300','cursor-not-allowed'); 
        }
    });
});

document.getElementById('clear-history').addEventListener('click', function(){
    const history = document.getElementById('task');
    history.innerHTML = "";
})


// date 

let now = new Date()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayName = days[now.getDay()];
const day = now.getDate();
const monthName = months[now.getMonth()];
const year = now.getFullYear();

document.getElementById('dayName').innerText = dayName;
document.getElementById('years').innerText = `${monthName} ${day} ${year}`;



