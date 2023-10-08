import React from 'react'
import SliderComponent from '../common/SliderComponent'


const Selectbar = ({ data, setData }) => {
    console.log(data)
    const bank_limit = 10000
    return (
        <>
            <SliderComponent
                min={1000}
                max={bank_limit}
                defaultValue={data.homeValue}
                value={data.homeValue}
                steps={100}
                onChange={(e, value) => setData({
                    ...data,
                    homeValue: value
                })}

                label="Home"
                unit="$"
                amount={data.homeValue}


            />
            <SliderComponent min={0} max={data.homeValue} defaultValue={data.downPayment} steps={100}
                onChange={(e, value) => setData({
                    ...data,
                    downPayment: value,
                })}
                label="Down Payment"
                unit="$"
                amount={data.downPayment}
                value={data.downPayment}
            />
            <SliderComponent min={0} max={data.homeValue} defaultValue={data.loanAmount} steps={100}
                onChange={(e, value) => setData({
                    ...data,
                    loanAmount: value,
                })}
                label="Loan Amount"
                unit="$"
                amount={data.loanAmount}
                value={data.loanAmount}
            />

            <SliderComponent min={2} max={18} defaultValue={data.interestRate} steps={1}
                onChange={(e, value) => setData({
                    ...data,
                    interestRate: value,
                })}
                label="Interest rate"
                unit="%"
                amount={data.interestRate}
                value={data.interestRate}
            />
        </>

    )
}

export default Selectbar