import React from "react";
import { Deck, Slide } from "spectacle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireAlt,
  faWrench,
  faAtom,
  faBacon
} from "@fortawesome/free-solid-svg-icons";

const Feature = ({ title, description, icon }) => (
  <div className="mb-8 flex items-start last:mb-0">
    <div className="rounded bg-yellow-500 p-3 text-yellow-100 mr-5">
      <FontAwesomeIcon height={24} icon={icon} />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  </div>
);

const Link = props => (
  <span className="text-blue-600 font-semibold underline" {...props} />
);

const Emphasize = ({ children, className }) => (
  <span className={`text-purple-500 font-semibold ${className}`}>
    {children}
  </span>
);

const Step = ({ number, label, image }) => (
  <div className="flex items-center justify-center flex-col mb-8 w-full h-full">
    <div className="pr-4 mb-6 text-5xl text-gray-900 mx-20 text-center">
      {label}
    </div>

    <img
      alt=""
      className="max-w-4xl border-2 border-gray-300 rounded-lg h-auto"
      src={image}
    />
  </div>
);

const Label = ({ children, color, size = "xl" }) => (
  <span
    className={`bg-${color}-600 text-white px-2 py-1 rounded font-semibold text-${size} align-middle`}
  >
    {children}
  </span>
);

const FrequentlyAskedQuestion = ({ question, answer }) => (
  <div className="mx-20 h-full flex flex-col justify-center">
    <h4 className="font-normal text-6xl mb-6 text-gray-700">{question}</h4>
    <p className="text-grey-800 text-3xl leading-relaxed">{answer}</p>
  </div>
);

const First = () => (
  <div
    className="bg-purple-600 w-full h-full flex justify-center flex-col items-center text-center absolute"
    style={{ margin: -32 }}
  >
    <h1 className="text-6xl font-bold text-white">auto</h1>

    <p className="text-2xl text-purple-200 font-light">
      Streamline your release workflow and{" "}
      <span className="text-yellow-500 font-semibold">publish constantly!</span>
    </p>
  </div>
);

const Second = () => (
  <div className="mt-10 lg:mb-24 text-center flex items-center justify-center flex-col h-full">
    <h2 className="text-purple-900 text-4xl mb-12 mx-32 font-semibold">
      Adding automated releases shouldn't be hard or require changing your
      workflow
    </h2>

    <p className="max-w-2xl text-2xl text-gray-700">
      <Emphasize>auto</Emphasize> makes automating releases for your project as
      simple adding a <Label color="yellow">label</Label> to a pull request. If
      you're releasing all the time you can be{" "}
      <span className="text-red-500 font-semibold">more confident</span> in your
      releases. And your users might thank you too 😉
    </p>
  </div>
);

const Third = () => (
  <div className="h-full flex justify-around items-center flex-row text-gray-900">
    <div className="flex-1 lg:px-12">
      <Feature
        title="Keep Your Workflow"
        icon={faWrench}
        description={
          <p>
            Other tools require you to change how any contributor commits to you
            project. With <Emphasize>auto</Emphasize> leave that baggage behind!
          </p>
        }
      />

      <Feature
        title="Beautiful Changelogs"
        icon={faBacon}
        description="Link to PRs and Jira stories, include authors, monorepo aware,
      customizable labels section, additional release notes, and even
      more!"
      />

      <Feature
        title="Atomic Functions"
        icon={faAtom}
        description="Each command does one thing and they do it well. Easily use
    them to fit any build process."
      />

      <Feature
        title="Blazingly Fast Releases"
        icon={faFireAlt}
        description="Since all you need to worry about are labels you can work at an incredibly fast pace! This speed to commit also helps with new contributors"
      />
    </div>

    <div className="flex-1 px-12 mb-20 lg:mb-0">
      <img
        src="changelog-example.png"
        alt="Changelog example"
        className="border border-grey-600 rounded-lg p-4 shadow-md"
        style={{ maxHeight: 500 }}
      />
    </div>
  </div>
);

function App() {
  return (
    <Deck>
      <Slide>
        <First />
      </Slide>

      <Slide backgroundColor="white">
        <Second />
      </Slide>

      <Slide backgroundColor="white">
        <Third />
      </Slide>

      <Slide backgroundColor="white">
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-center text-5xl text-gray-900 mx-20 font-semibold">
            What does the workflow look like?
          </h2>

          <Emphasize className="text-center text-6xl text-gray-900 mx-20">
            How easy is it really?
          </Emphasize>
        </div>
      </Slide>

      <Slide backgroundColor="white">
        <Step number={1} label="Open a Pull Request" image="open-pr.png" />
      </Slide>

      <Slide backgroundColor="white">
        <Step
          number={2}
          image="add-label.png"
          label={
            <>
              Add a{" "}
              <Label color="blue" size="xl">
                label
              </Label>
            </>
          }
        />
      </Slide>

      <Slide backgroundColor="white">
        <Step number={3} label="Hit that merge button" image="merge.png" />
      </Slide>

      <Slide backgroundColor="white">
        <Step
          number={4}
          image="release.png"
          label="Wait for you continuous integration to make the release for you!"
        />
      </Slide>

      <Slide backgroundColor="white">
        <FrequentlyAskedQuestion
          question={
            <>
              Do you really release{" "}
              <span className="font-extrabold italic">every</span> pull
              request?!
            </>
          }
          answer={
            <>
              <Link href="https://github.com/intuit/auto/releases">Yup!</Link>{" "}
              But if you don't want to do that it's up to you. The tools{" "}
              <Emphasize>auto</Emphasize> ships with can be used to{" "}
              <span className="font-semibold text-red-600">
                fit any workflow
              </span>
              ! You can also use <Label color="purple">skip-release</Label>{" "}
              labels or configure <Emphasize>auto</Emphasize> to only release
              with a <Label color="blue">release</Label> label.
            </>
          }
        />
      </Slide>

      <Slide backgroundColor="white">
        <FrequentlyAskedQuestion
          question={
            <>
              Is there a way to hook into <Emphasize>auto</Emphasize> and
              customize my release process?
            </>
          }
          answer={
            <>
              Many of <Emphasize>auto</Emphasize>'s features are{" "}
              <Link href="https://intuit.github.io/auto/pages/plugins.html">
                built into plugins
              </Link>
              . You can also use this plugin system to do{" "}
              <span className="font-semibold text-red-600">
                almost anything
              </span>{" "}
              during your release!
            </>
          }
        />
      </Slide>

      <Slide backgroundColor="white">
        <div className="h-full flex justify-center items-center">
          <img
            className="max-h-full w-auto"
            style={{ height: 600 }}
            src="logos.png"
            alt="Supported package platforms"
          />
        </div>
      </Slide>

      <Slide backgroundColor="white">
        <FrequentlyAskedQuestion
          question={
            <>
              Does <Emphasize>auto</Emphasize> support any other types of
              releases?
            </>
          }
          answer={
            <>
              <p className="mb-3">
                Yes! <Emphasize>auto</Emphasize> has commands for any situation!
              </p>

              <p className="mb-2">
                Want a test version? Try a{" "}
                <Link href="https://intuit.github.io/auto/pages/generated/canary.html">
                  canary
                </Link>
              </p>

              <p className="mb-2">
                Want a prerelease? Try creating a pre-release branch and using{" "}
                <Link href="https://intuit.github.io/auto/pages/generated/next.html">
                  next
                </Link>
              </p>

              <p className="mb-2">
                Need to patch an old major release? <Emphasize>auto</Emphasize>{" "}
                can automatically make branches for{" "}
                <Link href="https://intuit.github.io/auto/pages/generated/shipit.html#managing-old-major-versions">
                  old major versions
                </Link>
                !
              </p>

              <p>
                Or if you don't want to worry about what command to you need,
                just use{" "}
                <Link href="https://intuit.github.io/auto/pages/generated/shipit.html">
                  shipit
                </Link>
                ! This command determines what type of release to make based on
                the context it's run in.
              </p>
            </>
          }
        />
      </Slide>

      <Slide backgroundColor="white">
        <div className="h-full flex flex-col justify-center">
          <h3 className="text-center text-6xl text-gray-900 mx-20 mb-10">
            Stop worrying about your release and{" "}
            <Emphasize className="block">hit that merge button!</Emphasize>
          </h3>
          <div className="text-gray-800 text-3xl text-center">
            Visit <Link>https://github.com/intuit/auto</Link> to get started 🎉
          </div>
        </div>
      </Slide>

      <Slide backgroundColor="white">
        <div className="h-full flex flex-col justify-center">
          <Emphasize className="text-center text-6xl text-gray-900 mx-20">
            One more thing...
          </Emphasize>
        </div>
      </Slide>

      <Slide backgroundColor="white">
        <div className="h-full flex justify-center items-center flex-col">
          <Emphasize className="text-center text-6xl text-gray-900 mx-20 mb-8">
            Hand-craft release notes for any PR
          </Emphasize>
          <img
            className="max-h-full w-auto"
            src="release-notes.png"
            alt="Supported package platforms"
          />
        </div>
      </Slide>
    </Deck>
  );
}

export default App;
