import Layout from "@/navigation/Layout";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <Layout pageTitle={"Home"}>
      <ProductList/>
    </Layout>
  );
}
