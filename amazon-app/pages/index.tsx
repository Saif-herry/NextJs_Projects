import Layout from '../components/Layout';
import data from '../Utils/data';
import ProductItem from '../components/ProductItem';
export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-10  md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.title}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
