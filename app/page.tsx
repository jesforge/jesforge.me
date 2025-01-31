import Image from "next/image";
import { socialLinks, timeLine } from "./config";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hey and welcome friend! 👋
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm Jesper a Full Stack Developer from Germany. I'm passionate about
          building software that is easy to use and maintain.
        </p>
        <div
          className="flex flex-wrap justify-center items-center rounded-lg space-x-4 border-t border-b border-gray-400 dark:border-gray-600 py-4 my-8 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-500 dark:to-gray-600"
          style={{
            backgroundImage: "url('/caro.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <ul className="flex flex-wrap justify-center items-center space-x-4">
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
                    alt="bash"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"
                    alt="nextjs"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
                    alt="nextjs"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    alt="nextjs"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg"
                    alt="nextjs"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
                    alt="nextjs"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg"
                    alt="nextjs"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="mongodb"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
                    alt="graphql"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="typescript"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                    alt="git"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt="github"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                    alt="npm"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                    alt="yarn"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    alt="yarn"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                    alt="yarn"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                    alt="yarn"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                    alt="yarn"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                    alt="yarn"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg"
                    alt="yarn"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/portainer/portainer-original.svg"
                    alt="yarn"
                    width="40"
                    height="40"
                  />
                </li>{" "}
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt="yarn"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt="yarn"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="flex items-center justify-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                    alt="yarn"
                    width="40"
                    height="40"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1>About me</h1>
          <p className="inline">
            Welcome to my life. I work in my free time on various projects. I
            started 2022 with{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
              className="inline align-middle size-4"
            />{" "}
            and web development in{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              alt="javascript"
              width="40"
              height="40"
              className="inline align-middle size-6"
            />
            ,{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              alt="javascript"
              width="40"
              height="40"
              className="inline align-middle size-6"
            />{" "}
            in the last years i use{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="javascript"
              width="40"
              height="40"
              className="inline align-middle size-6"
            />
            ,{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              alt="javascript"
              width="40"
              height="40"
              className="inline align-middle size-6"
            />
            ,{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="javascript"
              width="40"
              height="40"
              className="inline align-middle size-6"
            />
          </p>{" "}
          in my projects i aslo use{" "}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />
          ,{" "}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />
          ,{" "}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />
          ,{" "}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />{" "}
          (...) and i start with{" "}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />{" "}
          also will learn{" "}
          <i className="devicon-rust-original inline align-middle size-8"></i>{" "}
          and{" "}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-8"
          />{" "}
          in the future. I'm also interested in{" "}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />
          ,{" "}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />
          ,{" "}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/portainer/portainer-original.svg"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />
          ...
          <hr className="my-4" />I also love to learn new things and to share my
          knowledge with others. I Stream on{" "}
          <svg
            className="inline align-middle"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(100, 65, 165, 1)" }}
          >
            <path d="M4.265 3 3 6.236v13.223h4.502V21l2.531.85 2.392-2.391h3.658l4.923-4.924V3H4.265zm15.052 10.691-2.813 2.814h-4.502l-2.391 2.391v-2.391H5.813V4.688h13.504v9.003zm-2.812-5.767v4.923h-1.688V7.924h1.688zm-4.502 0v4.923h-1.688V7.924h1.688z"></path>
          </svg>
          <Link
            href="https://twitch.tv/jesforge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch
          </Link>{" "}
          and{" "}
          <svg
            className="inline align-middle"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 0, 0, 1)" }}
          >
            <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
          </svg>
          <Link
            href="https://youtube.com/@jesforge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </Link>{" "}
          about programming and other stuff. I am training as an IT assistant
          and then training as an IT specialist for application development. And
          i work for projects like{" "}
          <Image
            src="https://cdn.discordapp.com/emojis/1290310710429224994.webp"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />{" "}
          Nexocrew{" "}
          <Image
            src="https://cdn.discordapp.com/emojis/681682145823293447.webp"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />{" "}
          Techscode{" "}
          <Image
            src="https://cdn.discordapp.com/emojis/1297575744578392074.webp"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />{" "}
          Moonlight{" "}
          <Image
            src="https://cdn.discordapp.com/emojis/1246767064320970762.webp"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />{" "}
          DisBot{" "}
          <Image
            src="https://cdn.discordapp.com/emojis/1087744940169232424.webp"
            alt="javascript"
            width="40"
            height="40"
            className="inline align-middle size-6"
          />{" "}
          Crystopia{" "}
        </div>
        <hr className="my-4" />
        <h1>Timeline</h1>

        <div className="flex flex-col items-center py-12">
          <div className="w-full max-w-3xl">
            <div className="border-l-4 border-blue-500">
              {timeLine.map((event, index) => (
                <div
                  key={index}
                  className={`relative mb-8 pl-8 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[-10px] top-1/2 transform -translate-y-1/2" />
                  <div className="flex items-center space-x-4">
                    <span className="text-xl font-semibold">
                      {Date.parse(event.date).toLocaleString("en-US")}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">{event.title}</h3>
                      <p className="text-sm text-gray-600">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
