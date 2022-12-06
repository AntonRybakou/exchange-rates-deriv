import React, { ReactElement } from 'react';

import { TablePropsType } from 'types';

export const Table = React.memo((props: TablePropsType): ReactElement => {
  const DIGIT_FRACTION = 2;

  return (
    <table style={{ border: '1px solid black' }}>
      <tbody>
        {Object.keys(props.exchangeRates).map(exchangeRateKey => {
          return (
            <tr key={exchangeRateKey}>
              <td
                style={{
                  border: '1px solid black',
                  padding: '5px',
                }}
              >
                {exchangeRateKey}
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '5px',
                }}
              >
                {(props.exchangeRates[exchangeRateKey] * props.value).toFixed(
                  DIGIT_FRACTION,
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});
