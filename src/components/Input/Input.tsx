import React from 'react';

type InputPropsType = {
  callBack: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
};

export const Input = React.memo(({ callBack, value }: InputPropsType) => {
  return <input type="number" min={0} onChange={callBack} value={value} />;
});
