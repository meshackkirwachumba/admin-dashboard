import React from "react";

function AddUserPage() {
  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-lg shadow-lg mt-3">
      <form className="flex flex-wrap justify-between">
        <input
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
          type="text"
          placeholder="username"
          name="username"
          required
        />
        <input
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
          type="password"
          name="password"
          placeholder="password"
        />
        <input
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
          type="phone"
          placeholder="phone"
          name="phone"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
        >
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
        >
          <option value={true} selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[100%] bg-[var(--bg)]"
          name="address"
          id="address"
          rows={8}
          placeholder="Address"
        />
        <button className="px-3 py-2 bg-teal-500 max-w-fit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUserPage;
