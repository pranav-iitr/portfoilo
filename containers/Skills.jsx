import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";
import "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 4000,
      offset: 70,
      mirror: true,
      anchorPlacement: "top-center",
    });
    window.addEventListener(
      "touchmove",
      () => {
        AOS.refresh();
      },
      false
    );
  }, []);
  return (
    skillsSection && (
      <Container className="text-center my-5 section section-lg">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        {skillsSection.data.map((section, index) => {
          return (
            <Row className="my-5" key={index}>
              <Col
                data-aos={"animationLeft"}
                data-aos-easing="linear"
                data-aos-duration="1500"
                lg="6"
                className="order-2 order-lg-1"
              >
                <div>
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </div>
              </Col>
              <Col
                data-aos={"animationRight"}
                data-aos-easing="linear"
                data-aos-duration="1500"
                lg="6"
                className="order-1 order-lg-2"
              >
                <h3 className="h3 mb-2">{section.title}</h3>
                <div className="d-flex justify-content-center flex-wrap mb-2">
                  {section.softwareSkills.map((skill, i) => {
                    return (
                      <Fragment key={i}>
                        <div
                          className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                          id={skill.skillName.replace(/\s/g, "")}
                        >
                          <Icon
                            icon={skill.fontAwesomeClassname}
                            data-inline="false"
                          ></Icon>
                        </div>
                        <UncontrolledTooltip
                          delay={0}
                          placement="bottom"
                          target={skill.skillName.replace(/\s/g, "")}
                        >
                          {skill.skillName}
                        </UncontrolledTooltip>
                      </Fragment>
                    );
                  })}
                </div>
                <div>
                  {section.skills.map((skill, i) => {
                    return <p key={i}>{skill}</p>;
                  })}
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    )
  );
};

export default Skills;
