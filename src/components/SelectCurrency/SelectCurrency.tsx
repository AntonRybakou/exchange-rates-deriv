import React, { ReactElement } from 'react';

type SelectCurrencyPropsType = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currencyData: string[];
};

export const SelectCurrency = React.memo(
  ({ onChange, currencyData }: SelectCurrencyPropsType): ReactElement => (
    <select onChange={onChange}>
      {currencyData.map(currencyElement => (
        <option key={currencyElement} value={currencyElement}>
          {currencyElement}
        </option>
      ))}
    </select>
  ),
);
