import BlogCategoryCard from '@/components/BlogCategoryCard/BlogCategoryCard';
import Image from 'next/image';
import BlogCard from '../../components/BlogCard/BlogCard';
import { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import { motion } from 'framer-motion';
import Blog from '@/models/blog';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vh'
  },
  visible: {
    opacity: 1,
    x: 0,
    // transition: {
    //   type: 'spring',
    //   delay: 0.6
    // }
  }
};

const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
};

interface BlogPageProps{
  blogContent:Blog[]
}


const Blog:NextPage<BlogPageProps> = (props) => {
  // const [blogData,setBlogData] = useState([])

  const { blogContent } = props;
  console.log(props);

  // useEffect(()=>{
  // async function fetchBlogData(){
  //   const res = await fetch("/api/blog");
  //   const data = await res.json();
  //   setBlogData(data)
  //   // console.log(data)
  // }
  // fetchBlogData();
  // },[])

  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{type:"spring",delay:0.6}}
        className={blogSectionClasses.container}
      >
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", delay: 0.6 }} className={blogSectionClasses.heading}>Blog</motion.h2>
        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", delay: 0.6 }} className={blogSectionClasses.subheading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </motion.p>
        <div
           className={blogSectionClasses.categoriesContainer}>
          {blogCategories.map((blogCategory: any) => (
            <BlogCategoryCard
              key={blogCategory.name}
              description={blogCategory.description}
              image={blogCategory.image}
              name={blogCategory.name}
              slug={blogCategory.name}
            />
          ))}
        </div>
      </motion.section>

      <motion.div
        className={featuredPostSectionClasses.container}
        variants={nextVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={featuredPostSectionClasses.imageContainer}>
          <Image
            width={200}
            height={100}
            className={featuredPostSectionClasses.image}
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Blog Post"
          />
        </div>
        <div className={featuredPostSectionClasses.contentContainer}>
          <h2 className={featuredPostSectionClasses.title}>
            Featured Post Title
          </h2>
          <p className={featuredPostSectionClasses.description}>
            Lorem ipsum sit amit, consecteture adipising elit. sed id felsi vel
            justo ornaro feugiato. Aenean et elified justo.
          </p>
          <div className={featuredPostSectionClasses.featuresContainer}>
            <span className={featuredPostSectionClasses.featureTick}>
              &#10003;
            </span>
            <span className={featuredPostSectionClasses.feature}>
              Featured 1
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {blogContent?.map((blog: Blog) => (
          <BlogCard
            key={blog.title}
            author={blog.author}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            title={blog.title}
            
          />
        ))}
      </div>
    </>
  );
};
export default Blog;

export async function getStaticProps(context: NextPageContext) {
  const blogContent = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Mens Cotton Jacket',
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
      author: 'Jhon Doe',
      date: '25 April 2021'
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Mens Casual Slim Fit',
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      author: 'Lorin Salla',
      date: '2 January 2012'
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: "John Hardy Women's Legends",
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
      author: 'Semon Haidmire',
      date: '13 May 2020'
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Solid Gold Petite',
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      author: 'Lara Siamol',
      date: '11 March 2019'
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'White Gold Plated Princess',
      description:
        'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.',
      author: 'Dellien Rocher',
      date: '21 June 2018'
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Pierced Owl Rose Gold',
      description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings.',
      author: 'Kristen Henry',
      date: '29 July 2017'
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'WD 2TB Elements Portable',
      description:
        'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity.',
      author: 'Sarona Thalia',
      date: '24 November 2016'
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'SanDisk SSD PLUS 1TB',
      description: 'Easy upgrade for faster boot up, shutdown.',
      author: 'Riki Pointine',
      date: '27 December 2020'
    }
  ];

  return {
    props: {
      blogContent,
    },
    revalidate:3600,
  };
}

const blogSectionClasses = {
  container: 'pb-8 pt-40 text-primary-dark px-4 lg:px-36',
  heading: 'text-4xl font-bold mb-6 text-amber-800',
  subheading: 'text-gray-200 text-lg mb-12',
  categoriesContainer:
    'flex flex-col lg:flex-row gap-8 justify-between items-center'
};

const featuredPostSectionClasses = {
  container:
    'py-20 text-white px-6 lg:px-36 flex flex-col lg:flex-row items-center justify-center gap-4',
  imageContainer: 'w-full lg:w-2/3 order-2 lg:order-1 ',
  image: 'w-full h-full object-cover rounded-lg shadow-md',
  contentContainer: 'w-full lg:w-1/3 lg:p1-12 order-1 lg:order-2',
  title: 'text-4xl font-bold mb-6',
  description: 'text-gray-500 text-lg mb-8',
  featuresContainer: 'flex items-center mb-2',
  featureTick: 'text-green-500 mr-2',
  feature: 'text-gray-500'
};

const blogCategories = [
  {
    name: 'Telighes',
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    description:
      'Explain the latest advancements in technology and discover how they impact our lives.'
  },
  {
    name: 'jriveal',
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    description:
      'Explain new cultures, discover hidden games, and plan your next adventure with our travel guides.'
  },
  {
    name: 'Laravel',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    description:
      'Find inspiration for your next meal,learn new recipes, and explore different cuisines from around the world'
  }
];
