import SearchInput from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/lib/data";

async function ProductsPage({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, products } = await fetchProducts(q, page);
  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-lg mt-3">
      {/* search functionality */}
      <div className="flex items-center justify-between">
        <SearchInput placeholder="search for a product..." />
        <Link href="/dashboard/products/add">
          <button className="p-2 text-xs bg-purple-500 text-white rounded-xl">
            Add New
          </button>
        </Link>
      </div>
      {/* table */}
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-2.5">Title</td>
            <td className="p-2.5">Description</td>
            <td className="p-2.5">Price</td>
            <td className="p-2.5">CreatedAt</td>
            <td className="p-2.5">Stock</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="p-2.5">
                <div className="flex items-center gap-3">
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    width={40}
                    height={40}
                    alt="product"
                    className="object-cover rounded-lg"
                  />
                  {product.title}
                </div>
              </td>
              <td className="p-2.5">{product.desc?.slice(0, 20)}...</td>
              <td className="p-2.5">Kes{product.price}</td>
              <td className="p-2.5">
                {product.createdAt?.toString().slice(4, 16)}
              </td>
              <td className="p-2.5">{product.stock}</td>
              <td className="p-2.5">
                <div className="flex items-center gap-3">
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className="px-3 py-1.5 rounded-lg bg-teal-500 text-[var(--text)] text-xs">
                      View
                    </button>
                  </Link>
                  <button className="px-3 py-1.5 rounded-lg bg-rose-500 text-[var(--text)] text-xs">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination component */}
      <Pagination count={count} />
    </div>
  );
}

export default ProductsPage;
