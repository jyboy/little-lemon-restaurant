import { useState } from 'react';
import wait from '../utils/wait';

export interface SubmitData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

export type SubmitResponse =
  | { type: 'success'; message: string; data: SubmitData }
  | { type: 'error'; message: string };

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<SubmitResponse | null>(null);

  const submit = async (_url: string, data: SubmitData) => {
    setLoading(true);
    try {
      await wait(500);
      setResponse({
        type: 'success',
        message: `Thanks for your submission!`,
        data
      });
    } catch {
      setResponse({
        type: 'error',
        message: 'Something went wrong!'
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
