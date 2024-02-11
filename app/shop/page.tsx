import { addProduct } from "@/actions/addProduct";

interface Product {
  id: number;
  title: string;
  price: number;
}

async function Shop() {
  const response = await fetch("http://localhost:8000/products", {
    cache: "no-cache",
    next: {
      tags: ["products"]
    }
  });

  const data: Product[] = await response.json();

  return (
    <div>
      <form
        action={addProduct}
        className="flex flex-col gap-5 max-w-xl p-8 mx-auto bg-slate-800 rounded-md"
      >
        <input
          type="text"
          name="title"
          placeholder="نام محصول"
          className="p-3 bg-slate-600 outline-none rounded-md"
          autoFocus
        />
        <input
          type="text"
          name="price"
          placeholder="قیمت"
          className="p-3 bg-slate-600 outline-none rounded-md"
        />
        <button className="p-3 bg-slate-900 text-slate-100 rounded-md hover:bg-slate-950">
          افزودن محصول
        </button>
      </form>
      <div className="flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-5 bg-slate-800 rounded-md text-center"
          >
            <p className="mb-2">{item.title}</p>
            <p>{item.price} تومان</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
