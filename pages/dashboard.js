import React, { useEffect } from 'react'
import Head from "next/head"
import Template from "../components/template/template"
import Card from 'react-bootstrap/Card'
import Chart from 'chart.js/auto'


const Dashboard = () => {

    useEffect(() => {

        const ctx = document.getElementById('myChart').getContext('2d')
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const DATA_COUNT = 7;
        const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

        const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
        const datax = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: 1,
                    // borderColor: Utils.CHART_COLORS.red,
                    backgroundColor: 'rgba(255, 99, 132, 1)', // Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
                    stack: 'combined',
                    type: 'bar'
                },
                {
                    label: 'Dataset 2',
                    data: 2,
                    // borderColor: Utils.CHART_COLORS.blue,
                    backgroundColor:  'rgba(255, 99, 132, 1)', // Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
                    stack: 'combined'
                }
            ]
        };

        const klChart = new Chart(ctx, {
            type: 'line',
            data: datax,
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Chart.js Stacked Line/Bar Chart'
                    }
                },
                scales: {
                    y: {
                        stacked: true
                    }
                }
            },
        });
        return () => {
            myChart.destroy()
            klChart.destroy()

        }
    });

    return (<Template container={

        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <>
                <div className="row">
                    <div className="col-md-6">
                        <canvas id="myChart" width="auto" height="155"></canvas>

                    </div>
                    <div className="col-md-6">
                        <canvas id="klChart" width="auto" height="155"></canvas>

                    </div>
                    {[
                        'Primary',
                        'Secondary',
                        'Success',
                        'Danger',
                        'Warning',
                        'Info',

                    ].map((variant) => (
                        <div className="col-md-4">
                            <Card
                                bg={variant.toLowerCase()}
                                key={variant}
                                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                style={{ width: '18rem' }}
                                className="mb-3"
                            >
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>{variant} Card Title </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </>
        </>

    } />)
}

export default Dashboard