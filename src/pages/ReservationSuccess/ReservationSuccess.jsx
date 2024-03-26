import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReservationSuccess = () => {
  return (
    <div>
      <div className="flex flex-col items-center pt-28 text-olive">
        <FontAwesomeIcon icon={faCircleCheck} size="4x" />
        <h1 className="mt-8 font-serif text-4.5xl">
          Your reservation has been confirmed.
        </h1>
      </div>
    </div>
  );
};

export default ReservationSuccess;
