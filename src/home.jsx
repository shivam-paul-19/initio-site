import "./home.css";
import "./assets/gradient-initio.png";
import Events from "./events";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TextAnimate } from "@/components/magicui/text-animate";

function Home() {
    return (
        <>
            <div className="home-page">
                <div style={{height: "50px"}}>{/* for spacing only */}</div>
                <div className="hero-sec">
                    <h1 className="text-9xl main-heading">
                        <TextAnimate animation="blurInUp" by="character" duration="1">Initio'25</TextAnimate>
                    </h1>
                    <h1 className="text-3xl main-tag">
                        <TextAnimate animation="slideUp" by="character" duration="0.5">
                        The Fest You'll Remember Forever</TextAnimate>
                    </h1>
                    <br />
                    <AlertDialog>
                        <AlertDialogTrigger>
                        <Button>Get your passes <ArrowForwardIcon /></Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="alert-box">
                            <AlertDialogHeader>
                            <AlertDialogTitle>For VIPS students</AlertDialogTitle>
                            <AlertDialogDescription>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, ipsam. Excepturi ullam quis cupiditate, cumque suscipit tempora recusandae corrupti reiciendis accusamus omnis quibusdam ea numquam doloremque, maxime iusto quisquam. Ipsam.
                            </AlertDialogDescription>
                            <br />
                            <AlertDialogTitle>For non-VIPS students</AlertDialogTitle>
                            <AlertDialogDescription>
                                Go to this link to get your passes: <a href="https://example.com/" target="blank">Click!</a>
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                            <AlertDialogCancel className="alert-close">Close</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    
                </div>
                <div style={{height: "50px", backgroundColor: "#2f0353"}}>{/* for spacing only */}</div>

                {/* This element you need to make 👇🏻 */}
                <Events />
            </div>
        </>
    );
}

export default Home;