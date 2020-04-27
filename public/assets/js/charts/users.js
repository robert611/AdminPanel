var ctx = document.getElementById('users-chart').getContext('2d');
var usersChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sudnay'],
        datasets: [{
            label: 'Odwiedziny w tym tygodniu',
            data: [12, 19, 3, 5, 2, 3, 9],
            backgroundColor: [
                'rgba(1, 87, 155, 0.4)',
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