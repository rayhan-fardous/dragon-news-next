import { getNewsDetailsById } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

export const generateMetadata = async({params}) => {
  const {id} = await params;
  const news = await getNewsDetailsById(id);
  return {
    title: news.title,
    description: news.details,
  }
}

const NewsDetailsPage = async ({params}) => {
  const {id} = await params;
  const news = await getNewsDetailsById(id);
  return (
    <div className='max-w-5xl mx-auto my-8'>
      <div className="card bg-base-100 w-full shadow-sm">
            <div className="card-body">
              {/* Author info */}
              <div className="flex justify-between items-center bg-slate-200 p-4">
                <div className="flex gap-1 items-center">
                  <Image
                    src={news.author?.img}
                    alt={news.author?.name}
                    height={40}
                    width={40}
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="font-semibold">{news.author?.name}</h2>
                    <p className="text-xs">{news.author?.published_date}</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-between items-center">
                  <CiShare2 className="text-xl"/>
                  <CiBookmark className="text-xl"/>
                </div>
              </div>
              <h2 className="card-title">{news.title}</h2>
              <figure>
              <Image
                src={news.image_url}
                alt={news.title}
                height={300}
                width={300}
                className="w-full"
              />
            </figure>
            <p className="">{news.details}</p>
            <div>
              <div>
                <h2>{news.rating.number}</h2>
                <h2>{news.total_view}</h2>
              </div>
              <Link href={`/category/${news.category_id}`}>
              <button className="btn bg-purple-500 text-white">See other news for this category <BsArrowRight/></button>
              </Link>
            </div>
            </div>
          </div>
    </div>
  );
};

export default NewsDetailsPage;