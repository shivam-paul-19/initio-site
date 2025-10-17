import "./about.css";
import { TextAnimate } from "@/components/magicui/text-animate";
import NavBar from "./navbar";


function AboutUs() {
  return (
    <>
        <NavBar active={3} />
        <div style={{height: "60px", backgroundColor: "#2f0353"}}>{/* for spacing only */}</div>
        <div className="about-page">
            <h1 className="text-6xl about-heading">
                <TextAnimate animation="blurInUp" by="character" duration="0.5">
                    About us
                </TextAnimate>
            </h1> <br />
            <div className="about-img"></div>
            <div className="about-content">
                <p><TextAnimate animation="slideUp" by="word" duration="0.2">Initio is the 2-day annual management fest of VIPS-TC consisting of multiple academic, sports, and cultural events which would bring out the students' competitive spirit and make this practical learning a fun-filled experience.
                    </TextAnimate></p>
                    <br />
                <p><TextAnimate animation="slideUp" by="word" duration="0.2">These two days will be packed with the energy of the youth as more than 12,000 students will be arriving at the venue. These activities will invigorate the students to brainstorm and keep their vigour on activities which will be used as a tool for invigorating and energising.
                    </TextAnimate></p>
            </div>
        </div>
    </>
  );
}

export default AboutUs;