import React from 'react';
import {TablePropsType} from "types";

export const Table: React.FC<TablePropsType> = React.memo((props) => {
    return (
        <table style={{border: '1px solid black'}}>
            <tbody>
            {Object.keys(props.exchangeRates).map((exchangeRateKey) => {
                return <tr key={exchangeRateKey}>
                    <td style={{
                        border: '1px solid black', padding: '5px'
                    }}>{exchangeRateKey}</td>
                    <td style={{
                        border: '1px solid black', padding: '5px'
                    }}>
                        {(props.exchangeRates[exchangeRateKey] * props.value).toFixed(2)}
                    </td>
                </tr>
            })}
            </tbody>
        </table>
    );
})
