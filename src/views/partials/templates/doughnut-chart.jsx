import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutChart extends Component {
    state = {
        dataChart: {

        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'rgb(255, 255, 255)',
                        font: {
                            size: 20
                        }
                    }
                }
            }
        }
    }

    updateDataUser = () => {
        this.setState({
            dataChart: {
                labels: ['Repositories', 'Contributions'],
                datasets: [
                    {
                        label: 'GitHub',
                        data: [this.props.totalRepositories, this.props.totalContributions],
                        backgroundColor: [
                            'rgba(40, 167, 69, 0.7)',
                            'rgba(0, 123, 255, 0.7)'
                        ],
                        borderColor: [
                            'rgba(40, 167, 69, 1)',
                            'rgba(0, 123, 255, 1)'
                        ],
                        borderWidth: 1,
                    },
                ],
            }
        })
    }

    componentDidMount() {
        this.updateDataUser();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.totalRepositories !== this.props.totalRepositories) {
            this.updateDataUser();
        }
    }

    render() {
        return (
            <Doughnut data={this.state.dataChart} options={this.state.options} />
        )
    }
}

export default DoughnutChart;