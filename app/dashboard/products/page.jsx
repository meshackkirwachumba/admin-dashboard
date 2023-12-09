import SearchInput from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

function ProductsPage() {
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
          <tr>
            <td className="p-2.5">
              <div className="flex items-center gap-3">
                <Image
                  src="/noproduct.jpg"
                  width={40}
                  height={40}
                  alt="product"
                  className="object-cover rounded-lg"
                />
                Tecno
              </div>
            </td>
            <td className="p-2.5">Desc</td>
            <td className="p-2.5">kes 899</td>
            <td className="p-2.5">23.11.2023</td>
            <td className="p-2.5">79</td>
            <td className="p-2.5">
              <div className="flex items-center gap-3">
                <Link href="/dashboard/products/1">
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
        </tbody>
      </table>

      {/* pagination component */}
      <Pagination />
    </div>
  );
}

export default ProductsPage;
