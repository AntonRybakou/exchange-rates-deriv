import React from 'react';

export type TablePropsType = {
  exchangeRates: ExchangeRatesType;
  value: number;
};

export type InputPropsType = {
  callBack: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
};

export type ExchangeRatesType = {
  [key: string]: number;
};
