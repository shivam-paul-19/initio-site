import "./home.css";
import "./assets/gradient-initio.png";

import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import NavBar from "./navbar";
import logo from "./assets/logo_enkala.png"

function Home() {
    return (
        <>
            <NavBar active={0}/>
            <div className="home-page">
                <div className="hero-sec">
                    <div className="hero-filter">
                    <div className="hero-sec-inner">
                        {/* <h1 className="text-9xl main-heading"> */}
                            {/* <TextAnimate animation="blurInUp" by="character" duration="1"> */}
                                {/* INITIOxEnकला */}
                            {/* </TextAnimate> */}
                        {/* </h1> */}
                        <img className="logo_enkala" src={logo} alt="" />
                        <h1 className="text-3xl main-tag">
                            <TextAnimate animation="slideUp" by="character" duration="0.5">
                                The Fest You'll Remember Forever
                            </TextAnimate>
                        </h1>
                    <div className="dates">
                    <CalendarTodayRoundedIcon sx={{
                        color: "white",
                        fontSize: "30px"
                    }}/> <AnimatedGradientText speed="1.5" colorTo="#d9ef83ff" colorFrom="#eab308">1ˢᵗ-2ⁿᵈ Feb'26</AnimatedGradientText>
                    </div>
                    <br />
                    <h1 className="text-xl grab">Registrations are live now!</h1>
                    <br />
                    {/* <AlertDialog>
                        <AlertDialogTrigger>
                        <Button className="pass-but"><AnimatedGradientText speed="1.5" colorTo="#2f0353" colorFrom="#c084fc">For VIPS students</AnimatedGradientText></Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="alert-box">
                            <AlertDialogHeader>
                            <AlertDialogTitle>For VIPS students</AlertDialogTitle>
                            <AlertDialogDescription>
                                Kindly pay in <b>cash</b> at the <b>Initio kiosk in VIPS-TC</b> to collect your participation form and pass.
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <a href="https://forms.gle/wdjm8zf6jwfQSKn47" target="_blank"><Button>Paid</Button></a>
                            <AlertDialogCancel className="alert-close">
                                    Close
                                </AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog> */}
                    <br />
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe8wyW9BbhubVLDC0CA5R80HEe_BKrBmkjLMdJw-36XszuSSQ/viewform?usp=dialog" target="_blank"><Button className="pass-but"><AnimatedGradientText speed="1.5" colorTo="#2f0353" colorFrom="#c084fc">Register here!</AnimatedGradientText></Button></a>
                    </div>
                    </div>
                </div>
                <div style={{height: "50px", backgroundColor: "#2f0353"}}>{/* for spacing only */}</div>
            </div>
        </>
    );
}

export default Home;
