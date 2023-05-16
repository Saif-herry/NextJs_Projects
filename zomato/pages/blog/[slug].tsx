const BlogItem = () => {
  return (
    <>
      <div>
        <h1 className="text-white">Blog Page</h1>
      </div>
    </>
  );
};
export default BlogItem;

const className = {
  hero: "relative py-10 md:py-20 bg-[url('/image/trending.png')]",
  heroOverlay:
    'absolute inset-0 bg-gradient-to-b from-primary-dark to-transparent opacity-80',
  heroContent:
    'relative max-w-screen-xl mx-auto px-4 py-8 md:py-12 lg:px-8 lg:py-20',
  title:
    'text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white',
  subtitle: 'mt-2 md:mt-4 max-w-3xl text-sm md:text-xl text-gray-300',
  author: 'mt-4 md:mt-6 flex items-center',
  authorAvatar:
    'flex-shrink-0 object-cover h-8 md:h-10 w-8 md:w-10 rounded-full',
  authorName: 'ml-2 md:ml-3 text-sm md:text-xl font-medium text-white',
  blogContentWrapper:
    'flex flex-col justify-between max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:flex-row lg:px-8',
  blogImageWrapper: 'w-full lg:w-1/3',
  blogImage:
    'w-full h-full object-cover rounded-lg hover:translate-y-2 transition-all duration-500',
  blogMainContent: 'w-full lg:w-2/3 mt-6 lg:mt-0 lg:pl-8',
  blogTitle: 'text-3xl font-bold text-gray-300',
  blogDate: 'mt-2 text-gray-200 text-sm',
  blogText: 'mt-4 text-gray-200 leading-7'
};
