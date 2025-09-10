import "./home.css";
import "./assets/gradient-initio.png";
import Events from "./events";

function Home() {
    return (
        <>
            <div className="home-page">
                <div style={{height: "50px"}}>{/* for spacing only */}</div>
                <div className="hero-sec">
                    <h1 className="text-9xl">Initio'25</h1>
                    <h1 className="text-3xl">The Fest You'll Remember Forever</h1>
                </div>
                <div style={{height: "50px", backgroundColor: "#2f0353"}}>{/* for spacing only */}</div>
                <Events />
            </div>
        </>
    );
}

export default Home;