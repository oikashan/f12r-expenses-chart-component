import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <article className="flex flex-col items-center justify-center min-h-screen gap-4 w-full">
      <header className="p-5 md:px-6 bg-primary flex items-center justify-between w-full rounded-lg md:rounded-2xl">
        <h1 className="text-white text-xs flex flex-col gap-1">
          My balance <span className="font-bold text-xl"> $921.48 </span>
        </h1>
        <svg
          width="72"
          height="48"
          viewBox="0 0 72 48"
          className="w-14 h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle r="24" cx="48" cy="24" fill="#382314" />
            <circle r="23" cx="24" cy="24" stroke="#FFF" strokeWidth="2" />
          </g>
        </svg>
      </header>
      <section className="p-5 md:p-6 bg-neutral flex flex-col gap-5 md:gap-6 w-full rounded-lg md:rounded-2xl transition-all duration-500 ease-out">
        <header>
          <h2 className="font-bold text-xl">Spending - Last 7 days</h2>
        </header>
        <App />
        <footer className="border-t border-black/10 pt-5 flex items-end justify-between">
          <p className="flex flex-col gap-1 text-gray-500 text-xs">
            Total this month
            <span className="text-black font-bold text-2xl md:text-4xl">
              $478.33
            </span>
          </p>
          <p className="flex flex-col text-gray-500 text-xs items-end">
            <span className="text-black font-bold text-xs">+2.4%</span> from
            last month
          </p>
        </footer>
      </section>
      <footer className="text-center text-xs">
        Challenge by{" "}
        <a
          target="_blank"
          className="text-primary hover:underline focus:underline text-xs"
          href="https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt/"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-xs font-bold text-secondary relative before:h-1 before:w-full before:scale-x-0 before:bg-primary before:inline-block before:absolute before:bottom-0 before:left-0 before:opacity-40 before:rounded-sm hover:before:scale-x-100 focus:before:scale-x-100 before:transition-all before:duration-300"
          href="https://oikashan.com"
        >
          Kashan
        </a>
        .
      </footer>
    </article>
  </React.StrictMode>
);
