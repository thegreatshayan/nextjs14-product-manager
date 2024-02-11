import {revalidateTag} from "next/cache"

export async function addProduct(e: FormData) {
    "use server";

    const title = e.get("title");
    const price = e.get("price");

    const newProduct = { title, price };

    await fetch("http://localhost:8000/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag("products")
  }