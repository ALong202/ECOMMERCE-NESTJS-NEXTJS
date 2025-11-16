"use server";

import { revalidateTag } from "next/cache";
import { getHeaders, post } from "../../common/util/fetch";
import { API_URL } from "../../common/constraints/api";

export default async function createProduct(formData: FormData) {
  const response = await post("products", formData);
  const productImage = formData.get("image");

  if (productImage && typeof productImage === "object" && "arrayBuffer" in productImage) {
    await uploadProductImage(response.data.id, productImage);
  }

  revalidateTag("products");
  return response;
}

async function uploadProductImage(productID: number, file: File) {
  const formData = new FormData();
  formData.append("image", file);
  await fetch(`${API_URL}/products/${productID}/image`, {
    method: "POST",
    body: formData,
    headers: await getHeaders(),
  });
}
