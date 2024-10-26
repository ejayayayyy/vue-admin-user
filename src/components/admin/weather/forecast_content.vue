<template>
    <div class="p-6 lg:p-8 dark:bg-gray-800 dark:text-white text-base">
        <h2 class="text-xl md:text-2xl">Weather Content</h2>
        <p class="text-gray-400">This is the main content for the weather.</p>

        <div class="container  bg-red-500 my-8">
            <div class="dark:bg-gray-800 bg-white border rounded-lg p-6">
                <h2 class="text-xl md:text-2xl mb-4">Weather Forecast (Static Data)</h2>
                <LineChart v-if="chartData && chartData.labels.length > 0 && chartData.datasets.length > 0"
                    :chart-data="chartData" :chart-options="chartOptions" />
                <p v-else>Loading chart data...</p>
            </div>
        </div>
    </div>


</template>

<script>
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default {
    name: 'weather_chart',
    components: {
        'LineChart': Line,
    },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        backgroundColor: '#4B9CD3',
                        borderColor: '#4B9CD3',
                        data: [12, 15, 13, 16, 18, 20, 22],
                        fill: false,
                        tension: 0.4,
                    },
                    {
                        label: 'Humidity (%)',
                        backgroundColor: '#72A0C1',
                        borderColor: '#72A0C1',
                        data: [80, 85, 83, 88, 90, 92, 85],
                        fill: false,
                        tension: 0.4,
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Static Weather Conditions Over the Week',
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        };
    },
    // mounted() {
    //     // You can update chartData here if necessary (after fetching data or other logic)
    //     this.chartData = {
    //         labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    //         datasets: [
    //             {
    //                 label: 'Temperature (°C)',
    //                 backgroundColor: '#4B9CD3',
    //                 borderColor: '#4B9CD3',
    //                 data: [12, 15, 13, 16, 18, 20, 22],
    //                 fill: false,
    //                 tension: 0.4,
    //             },
    //             {
    //                 label: 'Humidity (%)',
    //                 backgroundColor: '#72A0C1',
    //                 borderColor: '#72A0C1',
    //                 data: [80, 85, 83, 88, 90, 92, 85],
    //                 fill: false,
    //                 tension: 0.4,
    //             },
    //         ],
    //     };
    // },
};
</script>