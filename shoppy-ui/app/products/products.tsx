import Grid from '@mui/material/Grid';
import getProducts from "./actions/get-products";
import Product from "./product";
import { redirect } from "next/navigation";


export default async function Products() {
  const products = await getProducts();
  
    if (!Array.isArray(products)) {
    redirect("/auth/login");
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid
          key={product.id}
          size={{ xs: 12, sm: 6, lg: 4 }}
        >
          <Product product={product}/>
        </Grid>

      ))}
    </Grid>
  );
}
