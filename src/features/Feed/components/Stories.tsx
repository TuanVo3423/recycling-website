import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(10)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
  };
  return (
    <Slider {...settings} className="flex space-x-6 h-[150px] -mb-5 w-[660px] -ml-[80px] items-center justify-center p-6 bg-transparent mt-2 border-none rounded-sm ">
      {suggestions.map((profile, idx) => (
        <Story key={idx} img={profile.avatar} username={profile.username}/>
      ))}
    </Slider>
  );
};

export const Story = function Story({ img, username }) {
  return (
    <div className=''>
      
        <img
        className="h-14 w-14 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-[2px] rounded-full cursor-pointer"
        src={img}
        alt=""
      />
      
      
      <p className="text-md w-14 truncate text-center ">{username}</p>
    </div>
  );
};
export default Stories;
