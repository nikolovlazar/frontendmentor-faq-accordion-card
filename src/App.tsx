import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classnames from 'classnames';

import data from './data';

function App() {
  const [expandedItem, setExpandedItem] = useState<number>();
  const boxAnimation = {
    initial: {
      y: 0,
    },
    float: {
      y: -20,
    },
  };

  const caretAnimation = {
    initial: {
      rotate: 0,
    },
    expanded: {
      rotate: 180,
    },
  };

  return (
    <div className="relative flex justify-center items-center h-screen w-screen bg-gradient-to-b from-soft-violet to-soft-blue">
      <div className="relative mt-48 md:mt-14 mx-6 md:mx-12 mb-32 md:mb-0 flex flex-col md:flex-row rounded-2xl bg-white w-full max-w-md md:max-w-3xl shadow-2xl">
        <div className="flex flex-col justify-center items-center relative w-full">
          <motion.img
            alt="Box"
            src="images/illustration-box-desktop.svg"
            className="absolute hidden md:block left-0 -ml-20 mt-12 z-20 w-40"
            variants={boxAnimation}
            animate="float"
            transition={{
              ease: 'easeInOut',
              repeat: Infinity,
              duration: 2,
              repeatType: 'reverse',
            }}
          />
          <div className="relative md:overflow-hidden pb-16 -mb-16 pt-8 -mt-8">
            <img
              alt="Illustration"
              src="images/illustration-woman-online-desktop.svg"
              className="hidden md:block -ml-12 relative z-10"
            />
            <img
              alt="Illustration"
              src="images/illustration-woman-online-mobile.svg"
              className="md:hidden -mt-28 relative -ml-5 z-10 self-center"
            />
            <img
              alt="Background"
              src="images/bg-pattern-desktop.svg"
              className="hidden md:block -ml-12 -mt-6 absolute inset-y-0 top-6 left-0"
            />
            <img
              alt="Background"
              src="images/bg-pattern-mobile.svg"
              className="md:hidden -ml-1 transform -translate-y-20"
            />
          </div>
        </div>
        <div className="w-full p-8 md:p-16 -mt-20 md:mt-0">
          <h1 className="text-center md:text-left text-very-dark-blue font-body font-bold text-4xl">
            FAQ
          </h1>
          <div className="mt-4 flex flex-col">
            {data.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setExpandedItem(item.id)}
                className="group flex flex-col cursor-pointer"
              >
                <div className="flex justify-between items-center py-3">
                  <p
                    className={classnames(
                      'text-xs transition-color duration-150 text-desaturated-dark-blue group-hover:text-soft-red font-body',
                      { 'font-bold': expandedItem === item.id }
                    )}
                  >
                    {item.title}
                  </p>
                  <motion.img
                    alt="Caret"
                    src="images/icon-arrow-down.svg"
                    className="h-1.5"
                    variants={caretAnimation}
                    animate={expandedItem === item.id ? 'expanded' : 'initial'}
                  />
                </div>
                <AnimatePresence>
                  {expandedItem === item.id && (
                    <motion.p
                      className="font-body text-dark-blue text-xs mb-3"
                      key={item.id}
                      initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginBottom: 12 }}
                      exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                      transition={{ type: 'tween' }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
                <hr className="border-light-blue" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 text-xs md:text-sm inset-x-0 flex justify-center items-center text-white">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="ml-1 text-soft-red"
          target="_blank"
        >
          {' '}
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://twitter.com/NikolovLazar"
          className="ml-1 text-soft-red"
        >
          Lazar Nikolov
        </a>
        .
      </div>
    </div>
  );
}

export default App;
