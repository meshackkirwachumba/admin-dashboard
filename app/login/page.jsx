import React from "react";

function LoginPage() {
  return (
    <div className="bg-pink-500 w-full h-screen flex justify-center items-center">
      <form
        action=""
        className="
         bg-[var(--bgSoft)]
         flex
         flex-col
         justify-center
         items-center
         gap-7
         p-12
         rounded-lg
         shadow-lg
         w-[500px]
         h-[500px]
        "
      >
        <h1 className="text-3xl font-medium">Login</h1>
        <input
          type="text"
          placeholder="username"
          className="
           p-5
           rounded-lg
           bg-[var(--bg)]
           border
           border-[#2e374a]
           text-[var(--text)]
           outline-none
           focus:border-2
           transition
           w-full
          "
        />
        <input
          type="password"
          placeholder="password"
          className="
           p-6
           rounded-lg
           bg-[var(--bg)]
           border-[#2e374a]
           text-[var(--text)]
           outline-none
           focus:border-2
           transition
           w-full
          "
        />
        <button
          className="
           p-6
           rounded-lg
           bg-teal-500
           border-none
           color-[var(--text)]
           w-full
           text-[var(--text)]
          "
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
