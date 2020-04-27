var ctx = document.getElementById('notifications-chart').getContext('2d');
var revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sudnay'],
        datasets: [{
            label: 'Odwiedziny w tym tygodniu',
            data: [27, 41, 32, 33, 36, 34, 29],
            backgroundColor: [
                '(255, 99, 132, 1)'
            ],
            borderColor: [
                '#0288d1'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false
        },
        scales:{
            xAxes: [{
                display: false //this will remove all the x-axis grid lines
            }],
            yAxes: [{
                display: false //this will remove all the x-axis grid lines
            }]
        }
      
    }
});