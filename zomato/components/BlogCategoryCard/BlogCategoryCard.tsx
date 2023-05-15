import Image from 'next/image';
import { FC } from 'react';

interface BlogCategoryCardProps {
  image: string;
  name: string;
  slug: string;
  description: string;
}

const BlogCategoryCard: FC<BlogCategoryCardProps> = (props) => {
  const { image, name, slug, description } = props;

  return (
    <link href={`/blog/${slug}`}>
      <div className={blogCategoryCardClassName.categoryCard}>
        <Image width={200} height={200} className={blogCategoryCardClassName.categoryImage} src={image} alt={name}/>
      </div>
    </link>
  );
};

const blogCategoryCardClassName = {
  categoryCard: 'w-full overflow-hidden bg-white p-6 rounded-lg shadow-md',
  categoryImage:
    'h-48 w-full object-cover rounded-lg mb-6 hover:scale-125 transition-all duration-500',
  categoryName: 'text-xl font-bold mb-2',
  categoryDescription: 'text-gray-500'
};
