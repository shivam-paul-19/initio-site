import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "./events.css";

function Events() {
    const navigator = useNavigate();

    return (
        <>
            <div className="event-section">
                <h1 className="text-3xl event-heading">
                    <TextAnimate animation="slideUp" by="word" duration="0.5">
                        Your Epic Journey Awaits
                    </TextAnimate>
                </h1>
                <div className="event-grid">
                    <div className="event-card gradient-a">
                        <div>
                            <div className="event-title">Music Concerts</div>
                            <div className="event-subtitle">Feel the bass drop, lose yourself in rhythm</div>
                        </div>
                    {/* <a href="" target="_blank">
                        <Button>Know more</Button>
                    </a> */}
                    </div>
                    <div className="event-card gradient-b">
                        <div>
                            <div className="event-title">Dance Competitions</div>
                            <div className="event-subtitle">Where movement becomes magic</div>
                        </div>
                        {/* <a href="" target="_blank">
                            <Button>Know more</Button>
                        </a> */}
                    </div>
                    <div className="event-card gradient-c">
                        <div>
                            <div className="event-title">Drama & Theater</div>
                            <div className="event-subtitle">Stories that touch the soul</div>
                        </div>
                        {/* <a href="" target="_blank">
                            <Button>Know more</Button>
                        </a> */}
                    </div>
                    <div className="event-card gradient-d">
                        <div>
                            <div className="event-title">Fashion Shows</div>
                            <div className="event-subtitle">Style meets substance on the runway</div>
                        </div>
                        {/* <a href="" target="_blank">
                            <Button>Know more</Button>
                        </a> */}
                    </div>
                    <div className="event-card gradient-e">
                        <div>
                            <div className="event-title">Star Night</div>
                            <div className="event-subtitle">The culmination of all dreams</div>
                        </div>
                        {/* <a href="" target="_blank">
                            <Button>Know more</Button>
                        </a> */}
                    </div>
                </div>
                <div className="cta-wrap">
                    <button className="px-6 py-3 rounded-full text-white"
                        style={{
                            background: "linear-gradient(90deg,#22a6f2,#ff63c3)",
                            boxShadow: "0 8px 24px rgba(77, 171, 245, 0.35)",
                        }}
                        onClick={() => {
                            navigator('/events');
                        }}
                    >Explore All Events</button>
                </div>
            </div>
        </>
    )
}

export default Events;