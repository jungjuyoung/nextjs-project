import React from 'react';
import { Post } from '../utils/posts';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
type Props = {
  post: Post;
  type: 'prev' | 'next';
};
const AdjacentPostCard = ({ post: { path, title, description }, type }: Props) => {
  console.log('path', path);
  return (
    <Link href={`/posts/${path}`}>
      <Image src={`/images/posts/${path}.png`} alt={title} width={150} height={100} />
      <div>
        {type === 'prev' && <FaArrowLeft />}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {type === 'next' && <FaArrowRight />}
      </div>
    </Link>
  );
};

export default AdjacentPostCard;
