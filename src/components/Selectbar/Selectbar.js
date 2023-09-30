import React from 'react'
import SliderComponent from '../common/SliderComponent'


const Selectbar = ({ data, setData }) => {
    console.log(data, setData)
    const bank_limit = 10000
    return (
        <>
            <SliderComponent
                min={1000}
                max={bank_limit}
                defaultValue={data.homeValue}
                value={data.homeValue}
                steps={5}
                onChange={(e, value) => 
                    setData({
                        ...data,
                        homeValue: value,
                    })
                }

                label="Home"
                unit="$"
                amount={data.homeValue}
                

            />
            {/* <SliderComponent min={100} max={props.data.homeValue} defaultValue={props.data.downPayment} steps={100}
                onChange={(e, value) => props.setData({
                    ...props.data,
                    downPayment: value,
                })}
                label="Down Payment"
                unit="$"
                amount={props.data.downPayment}
                value = {props.data.downPayment}
            /> */}
            {/* <SliderComponent min={0} max={props.data.homeValue} defaultValue={props.data.loanAmount} steps={5}
                onChange={(e, value) => props.setData({
                    ...props.data,
                    loanAmount: value,
                }) }
                label="Loan Amount"
                unit="$"
                amount={props.data.loanAmount}
                value={props.data.loanAmount}
            /> */}

            {/* <SliderComponent min={2} max={18} defaultValue={props.data.interestRate} steps={1}
                onChange={(e, value) => props.setData({
                    ...props.data,
                    loanTerm: value,
                }) }
                label="Interest rate"
                unit="%"
                amount={props.data.interestRate}
                value={props.data.interestRate}
            /> */}
        </>

    )
}

export default Selectbar