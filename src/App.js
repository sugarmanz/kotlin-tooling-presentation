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
  <a {...props}><span className={`text-${props.color ?? "blue"}-600 font-semibold underline`} {...props} /></a>
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

const Title = () => (
  <div
    className="bg-indigo-600 w-full h-full flex justify-center flex-col items-center text-center absolute"
    style={{ margin: -32 }}
  >
    <h1 className="text-6xl font-bold text-white">Publishing a Kotlin Library</h1>

    <p className="text-2xl text-purple-200 font-light">
      We know the language is awesome, but what about{" "}
      <span className="text-yellow-500 font-semibold">publication tooling?</span>
    </p>
  </div>
);

const Setup = () => (
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

const Requirements = () => (
  <div className="mt-10 lg:mb-24 flex items-center justify-center flex-col h-full">
    <h2 className="text-purple-900 text-4xl mb-12 mx-32 font-semibold">
      What are we looking for?
    </h2>
    <div className="h-full flex justify-around items-center flex-row text-gray-900">
      <div className="flex-1 lg:px-12">
        <Feature
          title="Quality Documentation"
          icon={faBook}
          description="For libraries that are consumed and expose an API, usage docs and API
            docs are important to ensure your code can be used easily!"
        // Dokka for API docs
        // Orchid for usage docs
        // Testing documentation knit
        />

        <Feature
          title="Stable Releases"
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
  </div>
);

const Documentation = () => (
  <div
    className="bg-indigo-600 w-full h-full flex justify-center flex-col items-center absolute"
    style={{ margin: -32 }}
  >
    <h1 className="text-6xl font-bold text-white">Documentation</h1>

    <p className="text-2xl text-yellow-500 font-semibold">
      <ul>
        <li>API Docs</li>
        <li>Usage Docs</li>
        <li>Doc Verification</li>
      </ul>
    </p>
  </div>
);

const Questions = () => (
  <div
    className="bg-indigo-600 w-full h-full flex justify-center flex-col items-center text-center absolute"
    style={{ margin: -32 }}
  >
    <h1 className="text-6xl font-bold text-white">Questions?</h1>

    <p className="text-2xl text-purple-200 font-light">
      Slides are posted to <Link href="https://sugarmanz.github.io/kotlin-tooling-presentation" color="yellow">https://sugarmanz.github.io/kotlin-tooling-presentation</Link>
    </p>
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
  // maybe brief sonatype preview?
  // 4. intuit OSS process?
  // 5. questions? 
  return (
    <Deck>
      <Slide>
        <Title />
      </Slide>

      <Slide backgroundColor="white">
        <Setup />
      </Slide>

      <Slide backgroundColor="white">
        <Requirements />
      </Slide>

      <Slide backgroundColor="white">
        <Documentation />
      </Slide>

      <Slide backgroundColor="white">
        {/* https://kotlinlang.org/docs/kotlin-doc.html */}
        <Step number={1} label="Dokka" image="dokka.png" />
        {/* links? */}
      </Slide>

      <Slide backgroundColor="white">
        {/* https://orchid.run/ */}
        <Step number={2} label="Orchid" image="orchid.png" />
        {/* links? */}
      </Slide>


      <Slide backgroundColor="white">
        {/* https://github.com/Kotlin/kotlinx-knit */}
        <Step number={2} label="Kotlinx Knit" image="knit.png" />
        {/* links? */}
      </Slide>

      {/* <Slide backgroundColor="white"> */}
      {/* <Releases /> */}
      {/* </Slide> */}

      {/* <Slide backgroundColor="white"> */}
      {/* <Maintainability /> */}
      {/* </Slide> */}

      {/* <Sonatype /> */}

      {/* <IntuitOpenSource /> */}

      <Slide>
        <Questions />
      </Slide>
    </Deck>
  );
}

export default App;
