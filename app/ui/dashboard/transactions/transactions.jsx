import Image from "next/image";

function Transactions() {
  const statusInfo = "pending";
  return (
    <div className="p-5 bg-[var(--bgSoft)] rounded-xl shadow-lg">
      <h2 className="font-light text-[var(--textSoft)] mb-5">
        Latest Transactions
      </h2>
      <table className="w-full ">
        <thead>
          <tr>
            <td className="p-2.5">Name</td>
            <td className="p-2.5">Status</td>
            <td className="p-2.5">Date</td>
            <td className="p-2.5">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2.5">
              <div className="flex items-center gap-1">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="40"
                  height="40"
                  className="rounded-full object-cover"
                />
                John Doe
              </div>
            </td>
            <td className="p-2.5">
              <span
                className={`px-2 py-1.5 rounded-xl text-white  text-[14px] bg-red-500`}
              >
                Pending
              </span>
            </td>
            <td className="p-2.5">21/11/2023</td>
            <td className="p-2.5">KES100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
