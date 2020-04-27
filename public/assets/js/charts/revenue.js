var ctx = document.getElementById('revenue-chart').getContext('2d');
var revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sudnay'],
        datasets: [{
            label: 'Odwiedziny w tym tygodniu',
            data: [27, 21, 32, 23, 19, 22, 13],
            backgroundColor: [
                'rgba(255, 206, 86, 1)'
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