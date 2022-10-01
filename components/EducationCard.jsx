import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const EducationCard = ({ education }) => {
	useEffect(() => {
    Aos.init({
		 duration: 1000, 
		 offset: 70,
		 mirror: true,
    });
	window.addEventListener('touchmove', () => {
		AOS.refresh()
	  }, false)
  
  }, []);

	return (
		// <Fade left duration={2000} >
			<Card data-aos={"fade-right"} className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">
								{education.schoolName}
							</h5>
								<h6>{education.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{education.duration}
							</Badge>
							{ education.grade && (
								<Badge color="primary" className="mr-1">
									{education.grade}
								</Badge>
							)}
							<p className="description mt-3">{education.desc}</p>
							<ul>
								{education.descBullets
									? education.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</div>
					</div>
				</CardBody>
			</Card>
		// </Fade>
	);
};

export default EducationCard;
