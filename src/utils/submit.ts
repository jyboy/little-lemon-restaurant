import wait from './wait';

export interface SubmitData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

export type SubmitResponse =
  | { type: 'success'; message: string; data: SubmitData }
  | { type: 'error'; message: string };

const submit = async (
  _url: string,
  data: SubmitData
): Promise<SubmitResponse> => {
  try {
    await wait(500);
    return {
      type: 'success',
      message: `Thanks for your submission!`,
      data
    };
  } catch {
    return {
      type: 'error',
      message: 'Something went wrong!'
    };
  }
};

export default submit;
