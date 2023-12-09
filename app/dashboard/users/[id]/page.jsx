import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className="flex gap-10 mt-5">
      {/* info container */}
      <div className="flex-[1] bg-[var(--bgSoft)] p-5 rounded-lg font-bold text-[var(--text)] h-max">
        {/* image wrapper */}
        <div className="h-[300px] w-full relative rounded-lg overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>

      {/* form container */}
      <div className="flex-[3] bg-[var(--bgSoft)] p-5 rounded-lg">
        <form
          action=""
          className="
           flex
           flex-col
         "
        >
          <label className="text-[12px]">Username</label>
          <input
            className="custom-class"
            type="text"
            name="username"
            placeholder="John Doe"
          />
          <label className="text-[12px]">Email</label>
          <input
            className="custom-class"
            type="email"
            name="email"
            placeholder="JohnDoe@gmail.com"
          />
          <label className="text-[12px]">Password</label>
          <input className="custom-class" type="password" name="password" />
          <label className="text-[12px]">Phone</label>
          <input
            className="custom-class"
            type="text"
            name="phone"
            placeholder="+25471234567"
          />
          <label className="text-[12px]">Address</label>
          <textarea
            className="custom-class"
            type="text"
            name="address"
            placeholder="Nairobi"
          />
          <label className="text-[12px]">Is Admin?</label>
          <select className="custom-class" name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label className="text-[12px]">Is Active?</label>
          <select className="custom-class" name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button
            className="
             w-full
            bg-teal-500
             p-5
             text-[var(--text)]
             border-none
             rounded-lg
             mt-5
           "
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
