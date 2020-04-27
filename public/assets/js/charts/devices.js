var ctx = document.getElementById('devices-chart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'Phone',
            'Tablet',
            'Laptop',
            'Desktop'
        ],
        datasets: [{
            data: [10, 20, 30, 45],
            backgroundColor: [
                'red',
                'Yellow',
                'Blue',
            ],
        }]
    },
    options: {}
});