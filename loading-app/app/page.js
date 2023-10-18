import Produto from "./components/Produto";
import ProdutoLoading from "./components/ProdutoLoading";
import Review from "./components/Review";

import { Suspense } from "react";
import ReviewingLoading from "./components/ReviewLoading";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve,2000))
  return (
    <>
      <Suspense fallback={<ProdutoLoading />}>
        <Produto />
      </Suspense>
      <br />
      <Suspense fallback={<ReviewingLoading />}>
        <Review />
      </Suspense>
    </>
  );
}
