import React from 'react';

type SelectCurrencyPropsType = {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    currencyData: string[],
}

export const SelectCurrency: React.FC<SelectCurrencyPropsType> = React.memo(({
   onChange,
   currencyData,
}) => (
        <select
            onChange={onChange}>
            {currencyData.map((currencyElement) => (
                <option
                    key={currencyElement}
                    value={currencyElement}
                >
                    {currencyElement}
                </option>
            ))}
        </select>
    )
)
