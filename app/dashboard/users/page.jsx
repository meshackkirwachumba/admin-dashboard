import SearchInput from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";

async function UsersPage({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

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
          {users.map((user) => (
            <tr key={user._id}>
              <td className="p-2.5">
                <div className="flex items-center gap-3 ">
                  <div className="relative h-8 w-8">
                    <Image
                      src={user.img || "/noavatar.png"}
                      alt=""
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  {user.username}
                </div>
              </td>
              <td className="p-2.5">{user.email}</td>
              <td className="p-2.5">
                {user.createdAt?.toString().slice(4, 16)}
              </td>
              <td className="p-2.5">{user.isAdmin ? "Admin" : "User"}</td>
              <td className="p-2.5">{user.isActive ? "Active" : "Inactive"}</td>
              <td className="p-2.5">
                <div className="flex items-center gap-3">
                  <Link href={`/dashboard/users/${user._id}`}>
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

export default UsersPage;
