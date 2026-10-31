interface Star {
  id: string;
  isHalf: boolean;
}

// TODO: JSDoc
const toStars = (rating: number): Star[] => {
  const fullStars = Math.floor(rating);
  const stars: Star[] = Array.from({ length: fullStars }, (_, i) => ({
    id: `full-${i}`,
    isHalf: false
  }));
  if (rating % 1 !== 0) {
    stars.push({ id: 'half', isHalf: true });
  }
  return stars;
};

export default toStars;
