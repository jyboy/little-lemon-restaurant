import DishCard from '../../components/DishCard';

const specials = [
  {
    id: 1,
    dish: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous Greek salad of crisp lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: new URL('../../assets/greek-salad.jpg', import.meta.url).href
  },
  {
    id: 2,
    dish: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: new URL('../../assets/bruschetta.jpg', import.meta.url).href
  },
  {
    id: 3,
    dish: 'Lemon Dessert',
    price: '$4.99',
    description:
      "This comes straight from grandma's recipe book; every last ingredient has been sourced and is as authentic as can be imagined.",
    image: new URL('../../assets/lemon-dessert.jpg', import.meta.url).href
  }
];

const Specials = () => {
  return (
    <section className="flex justify-center">
      <div className="w-256">
        <div className="flex h-32 items-center">
          <h2 className="font-serif text-4.5xl text-olive">
            This week specials!
          </h2>
        </div>
        <div className="flex justify-between">
          {specials.map(({ id, dish, price, description, image }) => (
            <DishCard
              key={id}
              name={dish}
              price={price}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
