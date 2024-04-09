import React from "react";
import "./App.css";

const CARD_CLASS =
  "bg-white dark:bg-zinc-700 rounded-lg shadow-md p-4 transform transition-all hover:scale-105";
const DESC_CLASS = "text-zinc-600 dark:text-zinc-400";

function App() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start p-6 bg-zinc-800 text-white pt-6">
      <aside className="w-full lg:w-1/4 text-center lg:text-left">
        <img
          src="/static/headshot.jpg"
          alt="Profile Picture"
          className="rounded-full w-48 h-48 mx-auto lg:mx-0 mb-4"
        ></img>
        <h1 className="text-2xl font-semibold">Matt Gilbert</h1>
        <p className="text-zinc-400">SENIOR TEST ENGINEER II</p>
      </aside>
      <div className="w-full lg:w-3/4 mt-6 lg:mt-0">
        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <h3 className="text-xl mb-2">WHO AM I?</h3>
          <p>
            I have been in the Software Testing field for 10+ years now. I've
            had the opportunity to take on many different roles in varying
            industries like Insurance, Startups, SaaS, and Healthcare, as well
            as contract work. Across these different industries, I also gained
            experience with several different testing techniques. These include
            API testing, Integration, Performance, Accessibility, UI, Usability,
            Mobile, and Contract, as well as Test Automation Framework
            development in Java, C#, Typescript, and Python. You can find me on{" "}
            <a href="https://linkedin.com/in/mattgilbert90" target="_blank">
              LinkedIn.
            </a>{" "}
            Let's connect!
          </p>
        </section>
        <section>
          <a
            href="https://beardedtester.substack.com/"
            className="bg-blue-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mb-8"
            target="_blank"
          >
            <span className="">View my blog</span>
          </a>
        </section>
        <section className="mb-6">
          <a
            href="static/Resume-Matt-Gilbert.pdf"
            className="bg-blue-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mb-8"
            target="_blank"
          >
            <span className="">View my resume</span>
          </a>
        </section>
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">My Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
            <div className={CARD_CLASS}>
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 2v2h1v14a4 4 0 0 0 4 4a4 4 0 0 0 4-4V4h1V2zm4 14c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m2-4c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m1-5h-4V4h4z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Test Automation</h3>
              <p className={DESC_CLASS}>
                Seamlessly fit a Test automation solution at the necessary
                layers that work within your current workflows and processes.
              </p>
            </div>
            <div className={CARD_CLASS}>
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Process Improvement</h3>
              <p className={DESC_CLASS}>
                Diagnosing problems in the existing workflows and/or lack of
                processes.
              </p>
            </div>
            <div className={CARD_CLASS}>
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Coaching</h3>
              <p className={DESC_CLASS}>
                Training and guidance to upskill your existing testing team.
              </p>
            </div>
            <div className={CARD_CLASS}>
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Framework Development</h3>
              <p className={DESC_CLASS}>
                Framework research, design & development tailored to the
                organization's needs.
              </p>
            </div>
            <div className={CARD_CLASS}>
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                    clipRule="evenodd"
                  />
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Documentation</h3>
              <p className={DESC_CLASS}>
                Creating documentation around the processes and test design as
                well as best practices for the consumption of the Test team.
              </p>
            </div>
            <div className={CARD_CLASS}>
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Modernization</h3>
              <p className={DESC_CLASS}>
                All of these combined will help your organization ship faster,
                more confidently, and deliver constant value to your end-users.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
          <div className="mb-2">
            <div className={CARD_CLASS}>
              <h3 className="text-lg font-semibold text-left">
                Senior Test Engineer II
              </h3>
              <div className="text-zinc-600 dark:text-zinc-400 text-left mb-4">
                2023-present
              </div>
              <p className={DESC_CLASS}>
                Still leading a small team working on a client-facing web app
                with data-driven analytics, which our clients rely on to make
                business decisions. I've been working on modernizing our test
                practice by introducing new tools and techniques to the team.
              </p>
            </div>
          </div>
          <div className="mb-2">
            <div className={CARD_CLASS}>
              <h3 className="text-lg font-semibold text-left">
                Senior Test Engineer I
              </h3>
              <div className="text-zinc-600 dark:text-zinc-400 text-left mb-4">
                2021-2023
              </div>
              <p className={DESC_CLASS}>
                Led a small team working on a modern web app while contributing
                to our testing framework that used Pytest for our APIs and
                Testim for our Frontend repositories, and integrated the tests
                into our build pipelines. Collaborated with other Test Engineers
                to modernize our Test Practice. Building tests for our ETL
                process.
              </p>
            </div>
          </div>
          <div className="mb-2">
            <div className={CARD_CLASS}>
              <h3 className="text-lg font-semibold text-left">
                Senior Quality Engineer
              </h3>
              <div className="text-zinc-600 dark:text-zinc-400 text-left mb-4">
                2020-2021
              </div>
              <p className={DESC_CLASS}>
                Built out automated test suites, trained teams on best
                practices, led PoCs on new tools & helped design a modernized
                test strategy approach for a global organization.
              </p>
            </div>
          </div>
          <div className="mb-2">
            <div className={CARD_CLASS}>
              <h3 className="text-lg font-semibold text-left">
                Quality Engineer
              </h3>
              <div className="text-zinc-600 dark:text-zinc-400 text-left mb-4">
                2019-2020
              </div>
              <p className={DESC_CLASS}>
                Designed and developed automated tests for new and existing
                features. Evaluated and worked up API tests using Pact.io and
                ReadyAPI. Transitioned manual tests from a checklist to the Test
                Management suite which improved visibility.
              </p>
            </div>
          </div>
          <div className="mb-2">
            <div className={CARD_CLASS}>
              <h3 className="text-lg font-semibold text-left">Test Engineer</h3>
              <div className="text-zinc-600 dark:text-zinc-400 text-left mb-4">
                2019-2019
              </div>
              <p className={DESC_CLASS}>
                Wrote Automated scripts and added functionality to the test
                Framework written in Javascript & built out a new suite of tests
                created with Cucumber Mobile app testing across iOS and Android
              </p>
            </div>
          </div>
          <div className="mb-2">
            <div className={CARD_CLASS}>
              <h3 className="text-lg font-semibold text-left">
                Software QA Engineer
              </h3>
              <div className="text-zinc-600 dark:text-zinc-400 text-left mb-4">
                2013-2019
              </div>
              <p className={DESC_CLASS}>
                Worked on 2 sprint teams in an Agile environment testing both
                software and hardware solutions. Researched and proposed a new
                Test Management tool to utilize for both our local and offshore
                teams, which improved quality, and led to more timely releases.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
