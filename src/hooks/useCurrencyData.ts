import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { ExchangeRatesType } from 'types';

const ws = new WebSocket(`wss://ws.binaryws.com/websockets/v3?app_id=1089`);

type UseCurrencyDataType = {
  setValue: Dispatch<SetStateAction<number>>;
  setSelectedCurrency: Dispatch<SetStateAction<string | null>>;
  value: number;
  currencyData: string[];
  exchangeRates: ExchangeRatesType;
};

export const useCurrencyData = (): UseCurrencyDataType => {
  const [currencyData, setCurrencyData] = useState<string[]>([]);
  const [value, setValue] = useState<number>(1);
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRatesType>({});

  useEffect(() => {
    ws.onopen = function () {
      ws.send(JSON.stringify({ payout_currencies: 1 }));
    };
    ws.onmessage = function (msg) {
      const data = JSON.parse(msg.data)['payout_currencies'];

      setCurrencyData(data);
      setSelectedCurrency(data[0]);
    };
  }, []);

  useEffect(() => {
    if (ws.readyState === WebSocket.OPEN && selectedCurrency) {
      ws.send(
        JSON.stringify({
          exchange_rates: 1,
          base_currency: selectedCurrency,
        }),
      );
      ws.onmessage = function (msg) {
        const data = JSON.parse(msg.data);

        setExchangeRates(data['exchange_rates']['rates']);
      };
    }
  }, [selectedCurrency]);

  return {
    setValue,
    setSelectedCurrency,
    value,
    currencyData,
    exchangeRates,
  };
};
