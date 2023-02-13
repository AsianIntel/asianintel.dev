import Profile from "../../public/profile.jpg";
import RoWifi from "../../public/rowifi.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col py-24 gap-y-12 w-2/3 mx-auto">
      <div className="grid grid-cols-2 justify-items-center">
        <Image
          src={Profile}
          alt="Profile"
          className="rounded-full"
          width={200}
          height={200}
        />
        <div className="flex flex-col gap-y-4 whitespace-nowrap">
          <span className="text-5xl text-neutral-200">Gautam Abhyankar</span>
          <span className="text-neutral-700 font-bold">@AsianIntel</span>
          <span className="text-neutral-200">
            Your Local Discord Bot Developer
          </span>
        </div>
      </div>

      <div className="flex flex-col px-24">
        <span className="text-xs text-neutral-400 font-semibold uppercase tracking-widest">
          What do I know?
        </span>
        <div className="flex mt-2 gap-x-2">
          <div className="border-2 rounded-md border-neutral-600 text-neutral-200 px-4 py-1 flex items-center  gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-11.5 -10.23174 23 20.46348"
              className="h-6 w-6"
            >
              <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
              <g stroke="#61dafb" stroke-width="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
            React
          </div>
          <div className="border-2 rounded-md border-neutral-600 text-neutral-200 px-4 py-1 flex items-center  gap-x-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
              className="bg-white h-6 w-6 rounded-full"
            />
            Rust
          </div>
          <div className="border-2 rounded-md border-neutral-600 text-neutral-200 px-4 py-1 flex items-center  gap-x-2">
            <svg viewBox="0 0 128 128" className="h-6 w-6">
              <path
                d="M87 70v-5h5v-4h-5v-5h-5v5h-5v4h5v5zm18-14h-4v5h-6v4h6v5h4v-5h5v-4h-5zm11.5-23.7c-.6-1.1-1.4-2.1-2.3-2.6L66.1 1.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7L11.4 29.7c-1.7 1-3.4 3.5-3.4 5.4v55.7c0 1.1.7 2.3 1.4 3.4l.1.1c.5.8 1.3 1.5 2 1.9l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 2.4-3.5 2.4-5.4V35.1c0-.8.4-1.8 0-2.6l.5-.2zm-4.2 2.1c0 .3-.3.5-.3.7v55.7c0 .8-.2 1.7-.4 2L64 120.6c-.1.1-.5.2-1.1.2-.6 0-1-.1-1.1-.2L13.6 92.8s-.1-.1-.2-.1l-.6-.6c-.4-.7.2-1.1-.8-1.2V35.2c1-.5.9-1.7 1.4-1.9L61.7 5.4c.1 0 .6-.2 1.2-.2s1 .1 1.1.2l48 27.7.4.9c.1.1-.1.3-.1.4zM63 87.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6C80.1 82.5 72.1 87.5 63 87.5z"
                fill="#fff"
              ></path>
            </svg>
            C++
          </div>
          <div className="border-2 rounded-md border-neutral-600 text-neutral-200 px-4 py-1 flex items-center  gap-x-2">
            <svg viewBox="0 0 128 128" className="h-6 w-6">
              <path
                fill="#ea4535"
                d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2 5.2-3.4 11.4-5.4 17.9-5.4 2.2 0 4.3.2 6.4.6.1-.1.2-.1.3-.1 9-9.9 24.2-11.1 34.6-2.6h-.1z"
              ></path>
              <path
                fill="#557ebf"
                d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1 4.3-13.8-1-28.8-13-36.9z"
              ></path>
              <path
                fill="#36a852"
                d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"
              ></path>
              <path
                fill="#f9bc15"
                d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8 6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"
              ></path>
            </svg>
            Google Cloud
          </div>
        </div>
      </div>

      <div className="flex flex-col px-24">
        <span className="text-xs text-neutral-400 font-semibold uppercase tracking-widest">
          What have I done?
        </span>
        <div className="grid grid-cols-3 mt-8">
          <Image
            src={RoWifi}
            alt="RoWifi Icon"
            className="rounded-full col-span-1"
            width={150}
            height={150}
          />
          <div className="col-span-2 px-4 flex flex-col gap-y-2">
            <span className="text-xl font-semibold">RoWifi</span>
            <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">
              June 2019 - Present
            </span>
            <span className="text-neutral-200">
              A Discord Bot offering integrations to & from Roblox with the
              usage of binds between Discord Roles & Roblox Ranks allowing for
              seamless server management. Currently serving 60k+ servers and 2M+
              members.
            </span>
            <span className="text-neutral-200">
              Codebase - 5 repositories spanning 44k+ LOC
            </span>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-wide text-neutral-400">
                Tech Stack:{" "}
              </span>
              <span>
                Rust, Astro, TailwindCSS, React, RadixUI, Typescript, Axum,
                PostgreSQL, Google Cloud, Promethrus, Grafana, Nomad, Consul,
                Cloudflare, Redis
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-wide text-neutral-400">
                Components:{" "}
              </span>
              <ul className="list-disc">
                <li>
                  Bot - The core of the project that serves all requests and
                  commands from Discord. It is written in Rust and has over 60
                  slash commands. It is hooked up to PostgreSQL for storing
                  persistent data (e.g. Server Settings) and to Redis for
                  storing non-persistent data (Discord Info). It is hosted on
                  Google Cloud.
                </li>
                <li>
                  Website - The landing site and the central hub that links to
                  all other components. It is written with Astro with a few
                  React components. It also hosts the docs which are written
                  using MDX.
                </li>
                <li>
                  Dashboard - The visual element to configuring the bot. It is
                  written in React and uses React Router. Elements are wrapped
                  over by Framer Motion to deliver a smooth experience. It is
                  hosted on Cloudflare Pages.
                </li>
                <li>
                  API - The backend component that serves the Dashboard as well
                  as acts as a public endpoint for consumers. It is written in
                  Rust and uses Axum as its routing framework. It is also hosted
                  on Google Cloud.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-24">
        <span className="text-xs text-neutral-400 font-semibold uppercase tracking-widest">
          What have I studied?
        </span>
        <div className="grid grid-cols-6 mt-8">
          <div className="flex flex-col items-center col-span-1">
            <div className="border border-neutral-500 rounded-full h-4 w-4" />
            <div className="h-full w-[1px] bg-neutral-700" />
          </div>

          <div className="flex flex-col gap-y-4 col-span-5 pb-12">
            <span className="text-xl font-semibold">
              University of Southern California
            </span>
            <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">
              August 2022 - Present
            </span>
            <span className="text-neutral-200">
              Masters - Computer Science
              <br />
              Current GPA - 4.00/4.00
            </span>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-wide text-neutral-500">
                Courses:{" "}
              </span>
              <ul className="list-disc list-inside">
                <li>CS570 Analysis of Algorithms</li>
                <li>CS420 Computer Graphics</li>
                <li>CS561 Foundations of AI (Currently studying)</li>
                <li>CS522 Game Engine Development (Currently studying)</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center col-span-1">
            <div className="border border-neutral-500 rounded-full h-4 w-4" />
          </div>

          <div className="flex flex-col gap-y-4 col-span-5">
            <span className="text-xl font-semibold">
              MIT World Peace University
            </span>
            <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">
              July 2018 - June 2022
            </span>
            <span className="text-neutral-200">
              Bachelors - Computer Science & Engineering
              <br />
              GPA - 9.66/10
            </span>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-wide text-neutral-500">
                Notable Courses:{" "}
              </span>
              <ul className="list-disc list-inside">
                <li>CS312 Database Management System</li>
                <li>CS331 System Software and Compilers</li>
                <li>CS324 High Performance Computing</li>
                <li>CSP42C Cloud Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <span className="text-neutral-300 text-center mt-12">
        @ 2023 Gautam.A<br/>
        All images and logos are trademarks or copyrights of their respective
        owners
      </span>
    </main>
  );
}
