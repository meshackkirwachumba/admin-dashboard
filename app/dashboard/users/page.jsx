import SearchInput from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

function UsersPage({ placeholder }) {
  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-lg mt-3">
      {/* search functionality */}
      <div className="flex items-center justify-between">
        <SearchInput placeholder="search for user..." />
        <Link href="/dashboard/users/add">
          <button className="p-2 text-xs bg-purple-500 text-white rounded-xl">
            Add New
          </button>
        </Link>
      </div>
      {/* table */}
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-2.5">Name</td>
            <td className="p-2.5">Email</td>
            <td className="p-2.5">CreatedAt</td>
            <td className="p-2.5">Role</td>
            <td className="p-2.5">Status</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2.5">
              <div className="flex items-center gap-3">
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-2.5">john@gmail.com</td>
            <td className="p-2.5">13.01.2022</td>
            <td className="p-2.5">Admin</td>
            <td className="p-2.5">Active</td>
            <td className="p-2.5">
              <div className="flex items-center gap-3">
                <Link href="/dashboard/users/123">
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

export default UsersPage;
