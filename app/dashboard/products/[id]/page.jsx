import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className="flex gap-10 mt-5">
      {/* info container */}
      <div className="flex-[1] bg-[var(--bgSoft)] p-5 rounded-lg font-bold text-[var(--text)] h-max">
        {/* image wrapper */}
        <div className="h-[300px] w-full relative rounded-lg overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Tecno Phantom
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
          <label className="text-[12px]">Title</label>
          <input
            className="custom-class"
            type="text"
            name="title"
            placeholder="iphone 13"
          />
          <label className="text-[12px]">Price</label>
          <input
            className="custom-class"
            type="number"
            name="price"
            placeholder={99930}
          />
          <label className="text-[12px]">Stock</label>
          <input
            className="custom-class"
            type="number"
            name="stock"
            placeholder="23"
          />
          <label className="text-[12px]">Color</label>
          <input
            className="custom-class"
            type="text"
            name="color"
            placeholder="blue"
          />
          <label className="text-[12px]">Size</label>
          <input
            className="custom-class"
            type="text"
            name="size"
            placeholder="medium"
          />
          <label className="text-[12px]">Category</label>
          <select className="custom-class" name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label className="text-[12px]">Description</label>
          <textarea
            className="custom-class"
            type="text"
            name="desc"
            id="desc"
            rows={10}
            placeholder="Description"
          />

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

export default SingleProductPage;
