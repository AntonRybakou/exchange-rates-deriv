import React, { ReactElement } from 'react';

import { Table, Input, SelectCurrency } from 'components';
import { useCurrencyData } from 'hooks/useCurrencyData';

export const App = (): ReactElement => {
  const { setValue, setSelectedCurrency, value, currencyData, exchangeRates } =
    useCurrencyData();

  const inputSetHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(Number(e.currentTarget.value));
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <>
      <div>
        <Input callBack={inputSetHandler} value={value} />
        <SelectCurrency onChange={onChangeHandler} currencyData={currencyData} />
      </div>

      <Table exchangeRates={exchangeRates} value={value} />
    </>
  );
};
