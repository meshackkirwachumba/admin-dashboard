import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

function Rightbar() {
  return (
    <div className="fixed ">
      {/* item card*/}
      <div className="relative py-5 px-2 bg-[var(--bgSoft)] rounded-xl shadow-lg mb-3">
        {/* bacgroundImage wrapper */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
          <Image
            src="/astronaut.png"
            alt=""
            fill
            className="object-contain opacity-20"
          />
        </div>
        {/* texts wrapper */}
        <div className="flex flex-col gap-3">
          <span className="font-medium ">Available Now</span>
          <h3 className="text-[14px] font-medium line-clamp-2">
            How to use the new version of Nextjs14 Admin Dashboard!
          </h3>
          <span className="text-xs font-light">Take 4 minutes to learn</span>
          <p className="line-clamp-2 text-xs font-light text-[var(--textSoft)]">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua....
          </p>
          <button className="flex items-center gap-2 px-3 py-2 text-white bg-purple-500 max-w-fit rounded-lg">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
