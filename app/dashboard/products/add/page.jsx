import React from "react";

function AddProductPage() {
  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-lg shadow-lg mt-3">
      <form className="flex flex-wrap justify-between">
        <input
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
          type="text"
          placeholder="title"
          name="title"
          required
        />
        <select
          name="cat"
          id="cat"
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
        >
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
          type="number"
          name="price"
          placeholder="price"
        />
        <input
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
          type="number"
          name="stock"
          placeholder="stock"
        />
        <input
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
          type="text"
          placeholder="color"
          name="color"
          required
        />
        <input
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[45%] bg-[var(--bg)]"
          type="text"
          placeholder="size"
          name="size"
          required
        />
        <textarea
          className="p-5 rounded-lg mb-6 outline-none focus:border-2 transition border w-[100%] bg-[var(--bg)]"
          name="desc"
          id="desc"
          rows={8}
          placeholder="Description"
        />
        <button className="px-3 py-2 bg-teal-500 max-w-fit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProductPage;
