import React from "react";
import { Deck, Slide } from "spectacle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireAlt,
  faBook,
  faAtom,
  faBacon,
  faShip,
  faCheck
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
  <a {...props}><span className="text-blue-600 font-semibold underline" {...props} /></a>
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
    className="bg-indigo-600 w-full h-full flex justify-center flex-col items-center text-center absolute"
    style={{ margin: -32 }}
  >
    <h1 className="text-6xl font-bold text-white">Kotlin</h1>

    <p className="text-2xl text-purple-200 font-light">
      We know the language is awesome, but what about{" "}
      <span className="text-yellow-500 font-semibold">tooling?</span>
    </p>
  </div>
);

const Second = () => (
  <div className="mt-10 lg:mb-24 text-center flex items-center justify-center flex-col h-full">
    <h2 className="text-purple-900 text-4xl mb-12 mx-32 font-semibold">
      Using a cool language shouldn't come at the expense of quality tools
    </h2>


    <p className="max-w-2xl text-2xl text-gray-700">
      Thankfully, the <Emphasize>Kotlin</Emphasize> community considers tooling
      to be an integral part of the language ecosystem. Let's take a look at
      some of the tooling I discovered and was able to use for the{" "}
      <Link href="https://intuit.github.io/hooks">Hooks</Link> project.
    </p>
  </div>
);

const Third = () => (
  <div className="h-full flex justify-around items-center flex-row text-gray-900">
    <div className="flex-1 lg:px-12">
      <Feature
        title="Documentation"
        icon={faBook}
        description="For libraries that are consumed and expose an API, usage docs and API
            docs are important to ensure your code can be used easily!"
            // Dokka for API docs
            // Orchid for usage docs
            // Testing documentation knit
      />

      <Feature
        title="Quality & Stable Releases"
        icon={faShip}
        description="Protect your consumers from errant releases and ensure release follow
            strict versioning patterns." 
            // Auto
            // binary compatibility
      />

      <Feature
        title="Maintainability & OpenSource Readiness"
        icon={faCheck}
        description="Set the project up for success by defining & enforcing standards to
            follow when making a contribution. This includes formatting, testing, documentation..."
            // ktlint
            // detekt
            // license check on PR
      />
    </div>

    <div className="flex-1 px-12 mb-20 lg:mb-0">
      <img
        src="documentation.png"
        alt="documentation example"
        className="border border-grey-600 rounded-lg p-4 shadow-md"
        style={{ maxHeight: 500 }}
      />
    </div>
  </div>
);

function App() {
  // title
  // setup
  // requirements
  // 1. documentation
  // 1a. dokka - api docs
  // 1b. orchid - usage docs (markdown)
  // 1c. knit - testing your usage docs
  // 2. publishing
  // 2a. auto (not really kotlin, but...)
  // 2b. binary compatibility
  // 2c. deprecation
  // 3. OSS
  // 3a. ktlint
  // 3b. detekt
  // 3c. fossa
  // 4. intuit OSS process?
  // 5. questions? 
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
