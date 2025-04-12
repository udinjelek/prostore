
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms)); 
import ProductList from "@/components/shared/product/product-list";
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata ={
  title: 'Home', 
};

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return ( <>
            <ProductList 
              data={latestProducts} 
              title={'Newest Arrivals'} 
              limit={4} 
            />
      </> 
  );
};

// sample using loading 2 detik
// const Homepage = async() => {
//   await delay(2000)
//   return ( <>Prostore</> );
// };
 
export default Homepage;