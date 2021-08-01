import React from "react";
import redux from "../assets/redux.svg";
import express from "../assets/express.svg";
import npm from "../assets/npm.svg";
import mongo from "../assets/mongo.svg";
import Bootstrap from "../assets/bootstrap.svg";
import Dart from "../assets/icons8-dart.svg";
import Flutter from "../assets/icons8-flutter.svg";
import Java from "../assets/icons8-java.svg";
import JavaScript from "../assets/icons8-javascript.svg";
import html from "../assets/icons8-html-5.svg";
import css from "../assets/icons8-css3.svg";
import Python from "../assets/icons8-python.svg";

export default function Skills() {
  const skills = [
    {
      key: 1,
      language: "JavaScript",
      icon: JavaScript,
    },
    {
      key: 2,
      language: "Java",
      icon: Java,
    },
    {
      key: 3,
      language: "Dart",
      icon: Dart,
    },
    {
      key: 4,
      language: "Python",
      icon: Python,
    },
  ];

  return (
    <>
      <section className="p-6 my-6" id="skills">
        <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl py-12">
          <h3 className="text-4xl font-extrabold leading-none sm:text-4xl">
            Languages
          </h3>
        </div>
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-2">
          {skills.map((skill) => {
            return (
              <div
                className="customNeuStyle flex p-2 space-x-5 rounded-lg md:space-x-6"
                key={skill.key}
              >
                <div className="flex justify-center align-middle rounded-lg sm:p-4 ">
                  <img src={skill.icon} alt="" />
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <p className="text-2xl font-semibold leading-none">
                    {skill.language}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* FRAMEWORKS AND TECHS */}
      <section>
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <h2 className="text-4xl font-extrabold">Libraries / Frameworks</h2>
          <div className="flex flex-wrap justify-center lg:justify-between">
            <img
              src={html}
              alt=""
              className=" mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 "
            />
            <img
              src={css}
              className=" mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 "
              alt=""
            />
            <i className="fab fa-react fa-3x text-language-react mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 " />
            <i className="fab fa-node-js fa-3x text-language-node mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 " />
            <img
              src={mongo}
              className=" mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 "
              alt=""
            />
            <img
              src={npm}
              className=" mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 "
              alt=""
            />
            <img
              src={express}
              className=" mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 "
              alt=""
            /><img
              src={redux}
              className=" mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 "
              alt=""
            />
            <img
              src={Bootstrap}
              className=" mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 "
              alt=""
            />
           
            <img
              src={Flutter}
              className=" mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 "
              alt=""
            />
            <i className="fab fa-git-alt fa-3x text-language-git mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 " />{" "}
          </div>
        </div>
      </section>
    </>
  );
}
