import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {

  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data
  const totalmonths = loanTerm * 12
  const interestpermonth = interestRate / 100 / 12

  const monthlypayment = (loanAmount * interestpermonth * (1 + interestpermonth) ** totalmonths / ((1 + interestpermonth) ** totalmonths - 1))
  const totalinterestgenerated = monthlypayment * totalmonths - loanAmount

  const pieChartdata = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        label: 'Ratio of Principal and interest',
        data: [homeValue, totalinterestgenerated],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <Stack>
      <Typography textAlign={"center"} variant='h5'>Monthly Payment : ${monthlypayment.toFixed(2)}</Typography>
      <Stack direction={"row"} justifyContent={"center"}>
        <div>
        <Pie data={pieChartdata} />
        </div>
      </Stack>

    </Stack>
  )
}

export default Result
