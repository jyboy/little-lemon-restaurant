import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toStars from '../../utils/toStars';

interface TestimonialCardProps {
  author: string;
  avatar: string;
  rating: number;
  text: string;
}

const TestimonialCard = ({
  author,
  avatar,
  rating,
  text
}: TestimonialCardProps) => {
  return (
    <div className="h-96 w-60 rounded-2xl bg-olive-light">
      <div className="flex h-40 items-center justify-center">
        <img src={avatar} alt={author} className="h-32 rounded-full" />
      </div>
      <div className="flex h-10 justify-center">
        <h3 className="text-lg font-bold text-olive">{author}</h3>
      </div>
      <div
        className="flex h-8 items-center px-4"
        role="img"
        aria-label={`Rating: ${rating} out of 5`}
      >
        {toStars(rating).map((star) => (
          <FontAwesomeIcon
            key={star.id}
            icon={star.isHalf ? faStarHalfStroke : faStar}
            className="text-yellow"
            data-testid="star"
          />
        ))}
      </div>
      <div className="px-4">
        <q className="text-justify">{text}</q>
      </div>
    </div>
  );
};

export default TestimonialCard;
