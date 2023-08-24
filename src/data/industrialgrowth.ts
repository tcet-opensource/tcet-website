// import type { chart } from "../env"

export const getChartData = (chartNo: number) => {
    return chart.find((chart) => chart.chartNo === chartNo);
}

const chart = [
    {
        chartNo: 1,
        title: 'Value',
        data: {
            labels: ['01-03', '03-06', '06-07', '07-08', '08-11', '11-12', '12-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23'],
            datasets: [
                {
                    data: [180, 260, 290, 300, 310, 380, 500, 600, 400, 700, 800, 850, 900, 950, 1000, 1100, 1200],
                    label: 'No of Students',
                    backgroundColor: '#194185',
                    borderRadius: 4,
                },
            ],
        },
    },
    {
        chartNo: 2,
        title: 'Value',
        data: {
            labels: ['01-03', '03-06', '06-07', '07-08', '08-11', '11-12', '12-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23'],
            datasets: [
                {
                    data: [180, 260, 290, 300, 310, 380, 500, 600, 400, 700, 800, 850, 900, 950, 1000, 1100, 1200],
                    label: 'No of Students',
                    backgroundColor: '#054F31',
                    borderRadius: 4,
                },
            ],
        },
    },
    {
        chartNo: 3,
        title: 'No of Employees',
        data: {
            labels: ['01-03', '03-06', '06-07', '07-08', '08-11', '11-12', '12-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23'],
            datasets: [
                {
                    data: [318, 142, 55, 313, 12, 134, 309, 374, 396, 206, 134, 253, 378, 52, 92, 180, 171],
                    label: 'No of Teaching Staff',
                    backgroundColor: '#7A2E0E',
                    borderRadius: 4,
                },
                {
                    data: [273, 298, 89, 289, 251, 246, 74, 83, 193, 243, 325, 107, 290, 366, 312, 80, 237],
                    label: 'No of Non-Teaching Staff',
                    backgroundColor: '#F79009',
                    borderRadius: 4,
                },
                {
                    data: [226, 255, 243, 159, 377, 399, 203, 388, 274, 307, 369, 126, 52, 156, 388, 361, 14],
                    label: 'Total No of Staff',
                    backgroundColor: '#FEDF89',
                    borderRadius: 4,
                },
            ],
        },
    },
    {
        chartNo: 4,
        title: 'Value',
        data: {
            labels: ['01-03', '03-06', '06-07', '07-08', '08-11', '11-12', '12-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23'],
            datasets: [
                {
                    data: [180, 260, 290, 300, 310, 380, 500, 600, 400, 700, 800, 850, 900, 950, 1000, 1100, 1200],
                    label: 'No of Students',
                    backgroundColor: '#DC6803',
                    borderRadius: 4,
                },
            ]
        },
    },
    {
        chartNo: 5,
        title: 'No of Computers',
        data: {
            labels: ['01-03', '03-06', '06-07', '07-08', '08-11', '11-12', '12-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23'],
            datasets: [
                {
                    type: 'bar',
                    data: [180, 260, 290, 300, 310, 380, 500, 600, 400, 700, 800, 850, 900, 950, 1000, 1100, 1200],
                    label: 'No of Computers',
                    backgroundColor: '#6938EF',
                    borderRadius: 4,
                    order: 1,
                },
                {
                    type: 'line',
                    data: [140, 220, 250, 260, 250, 340, 460, 560, 530, 680, 680, 590, 400, 500, 700, 770, 800],
                    label: 'Internet Bandwidth in Mbps',
                    borderColor: '#000',
                    backgroundColor: '#000',
                    order: 0,
                },
            ],
        },
    },
    {
        chartNo: 6,
        title: 'Value',
        data: {
            labels: ['01-03', '03-06', '06-07', '07-08', '08-11', '11-12', '12-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23'],
            datasets: [
                {
                    data: [318, 142, 55, 313, 12, 134, 309, 374, 396, 206, 134, 253, 378, 52, 92, 180, 171],
                    label: 'Graduation Rate',
                    backgroundColor: '#FCE7F6',
                    borderRadius: 4,
                },
                {
                    data: [273, 298, 89, 289, 251, 246, 74, 83, 193, 243, 325, 107, 290, 366, 312, 80, 237],
                    label: 'Success Rate',
                    backgroundColor: '#DD2590',
                    borderRadius: 4,
                },
            ]
        },
    },
]