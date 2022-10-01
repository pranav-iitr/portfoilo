import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";
import "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const ProjectsCard = ({ data }) => {
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
    <Col lg="6">
      
        <Card data-aos={"animationTop"}
                data-aos-easing="linear"
                data-aos-duration="1500" className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{data.name}</h3>
                <p className="description mt-3">{data.desc}</p>
                {data.github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={data.github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
                {data.link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={data.link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
  
    </Col>
  );
};

export default ProjectsCard;
