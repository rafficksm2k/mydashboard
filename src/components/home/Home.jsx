import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import "react-vertical-timeline-component/style.min.css";
import "@/styles/home.scss";
import Login from "../login/login";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import WorkExperience from "./WorkExperience";
import Title from "./Title";
import Intro from "./Intro";
import title from "../../assets/title.json";

export default function Home() {
  const API = import.meta.env.VITE_NODE_API_HOST;
  const [titles, setTitles] = useState(title);
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    getTitle();
  }, []);

  async function getTitle() {
    await axios
      .get(`${API}/title`)
      .then((result) => {
        setTitles(result.data);
      })
      .catch((err) => {
        console.error("error while getting title", err);
      });
  }
  function handleLoginSuccess() {
    console.log(" handleLoginSuccess====");
    setLoggedin(true);
  }
  return (
    <>
      {!loggedin ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Intro />
          <Container>
            {titles && titles.skillset ? (
              <Title
                title1={titles.skillset.title1}
                title2={titles.skillset.title2}
              />
            ) : null}
            <Techstack />
            {titles && titles.tools ? (
              <Title
                title1={titles.tools.title1}
                title2={titles.tools.title2}
              />
            ) : null}
            <Toolstack />
            {titles && titles.experience ? (
              <Title
                title1={titles.experience.title1}
                title2={titles.experience.title2}
              />
            ) : null}
            <WorkExperience />
          </Container>
        </>
      )}
    </>
  );
}
