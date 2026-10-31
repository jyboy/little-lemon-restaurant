import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

const ReservationSuccess = () => {
  const location = useLocation();
  const { date, time } = location.state as { date: string; time: string };

  return (
    <div>
      <div className="flex flex-col items-center pt-24 text-olive">
        <FontAwesomeIcon icon={faCircleCheck} size="4x" />
        <h1
          className="mt-8 font-serif text-4.5xl"
          data-testid="success-message"
        >
          Your reservation for {date} at {time}{' '}
          has been confirmed.
        </h1>
      </div>
    </div>
  );
};

export default ReservationSuccess;
