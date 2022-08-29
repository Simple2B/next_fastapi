import { IError } from './Error';

const base: IError = {
  message: 'Something went wrong)',
  subText: 'Oops!',
};

export const mockErrorProps = {
  base,
};
