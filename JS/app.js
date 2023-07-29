//Wraps the page to force it to load last
document.addEventListener('DOMContentLoaded', () => {

///////////////////////Variables//////////////////////////
//Alert
const alertBanner = document.getElementById('alert');
//Charts
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-users');
//Message
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

//////////////////////////////Banner Alert///////////////////////////////////

//create the html for the banner 
alertBanner.innerHTML = 
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
</div>
`

alertBanner.addEventListener("click", e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});


//////////////////////////////Charts////////////////////////


//First chart (traffic) Line Graph

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };


    let trafficOptions = {
        backgroundColor: 'rgba(112, 104, 201, .5)',
        fill: true,
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
        y: {
        beginAtZero: true
        }
        },
        plugins: {
        legend: {
        display: false
        }
        }
        };



        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
            });


//2nd chart (Daily) Bar graph

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
    };

//Actual chart
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });


// Mobile Users Doughnut chart

//Data

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };

    //options for the legend

    const mobileOptions = {
        aspectRatio: 1.9,
        plugins: {
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
        }
        }
        };


//Chart

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });




/////////////////Messaging Section/////////////////////////

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });

//////////////////////////EXTRA CREDIT/////////////////////////////////////////////////////////

//1. Display at least two notifications at the same time when the user clicks the alerts icon with dropdown menu.

//2. Traffic chart widget - Create a navigation similar to the one in the mockup to display different data when the Hourly,
// Daily, Weekly and Monthly button is selected. Add functionality to the Hourly, Daily, Weekly and Monthly buttons so that 
// a different line chart is displayed on click.

//3. Add an "autocomplete" feature for the "Search for User" box, listing names that match the search term.

//4. Use local storage to save the settings.
// -The settings are saved to local storage when the "Save" button is clicked.
// -The settings are reset when the "Cancel" button is clicked.
// -When page is reloaded the settings are remembered.


//Create dropdown menu for alerts icon notification (click)

//step 1 - make event listener for icon
//step 2 - make dropdown menu
//step 3 - make 2 notifications

































//End of wrap
});