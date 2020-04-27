var ctx = document.getElementById('pageview-chart').getContext('2d');
var pageviewChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sudnay'],
        datasets: [{
            label: 'Odwiedziny w tym tygodniu',
            data: [12, 19, 12, 23, 7, 22, 9],
            backgroundColor: [
                'rgba(153, 102, 255, 1)',
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