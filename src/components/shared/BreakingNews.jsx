import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    _id: "1",
    title: "Breaking News: Major event unfolds in the city",
  },
  {
    _id: "2",
    title: "Technology Update: New AI tool changes how people work",
  },
  {
    _id: "3",
    title: "Sports Highlight: Local team wins championship final",
  }
];

const BreakingNews = () => {
  return (
    <div  className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto'>
      <button className='btn bg-red-500 text-white'>Latest News</button>
      <Marquee pauseOnHover={true} speed={100}>
        {news.map((n)=>(
          <span key={n._id} className='mx-10'>{n.title}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;