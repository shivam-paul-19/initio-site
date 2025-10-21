import './eventPage.css';
import { TextAnimate } from "@/components/magicui/text-animate";
import NavBar from './navbar';
import logo from "./assets/logo.jpg";
import bidingImg from  "./assets/events/biding.png";
import finvault from "./assets/events/finvault.png";
import shark from "./assets/events/shark.png";
import beat from "./assets/events/beat.png";
import street from "./assets/events/street.png";
import ray from "./assets/events/ray.png";
import prism from "./assets/events/prism.png";
import bands from "./assets/events/bands.png";
import shuttter from "./assets/events/shutter.png";
import vocal from "./assets/events/vocal.png";
import human from "./assets/events/Hut.png";

function EventPage() {
    let events = [{
            name: "CTRL+Z: The Crisis Fix",
            link: "https://forms.gle/9iyoeCtNKpHN9ZP17",
            bg: "linear-gradient(162deg,rgba(128, 0, 0, 1) 0%, rgba(214, 235, 59, 1) 100%)"
        },
        {
            name: "Brand o Mania",
            link: "https://forms.gle/Dju4Na6ke6tE9KvK6",
            bg: "linear-gradient(90deg,rgba(237, 151, 12, 1) 1%, rgba(181, 164, 9, 1) 26%, rgba(240, 86, 72, 1) 62%, rgba(224, 37, 0, 1) 100%)"
        },
        {
            name: "Spinfluencer",
            link: "https://docs.google.com/forms/d/1V-QTdcPfGK2IDjxni8AzVoPoz9qj3nPfzBtwKTiHSUA/edit",
            bg: "linear-gradient(90deg,rgba(252, 214, 151, 1) 1%, rgba(255, 245, 158, 1) 38%, rgba(240, 181, 72, 1) 62%, rgba(224, 37, 0, 1) 100%)"
        },
        {
            name: "The Bidding Bunker",
            link: "https://forms.gle/RFZGoyky4itx7mBw6",
            bg: "linear-gradient(162deg,rgba(128, 0, 0, 1) 0%, rgba(214, 235, 59, 1) 100%)",
            image: bidingImg
        },
        {
            name: "FinVault",
            link: "https://forms.gle/dJQk4v1uzhSyWx9w6",
            bg: "linear-gradient(90deg,rgba(252, 214, 151, 1) 1%, rgba(255, 245, 158, 1) 38%, rgba(240, 181, 72, 1) 62%, rgba(224, 37, 0, 1) 100%)",
            image: finvault
        },
        {
            name: "Shark Tank: A Business Plan Competition",
            link: "https://forms.gle/3GYxesgmbngXdnv88",
            bg: "linear-gradient(33deg,rgba(6, 128, 0, 1) 0%, rgba(214, 235, 59, 1) 83%)",
            image: shark
        },
        {
            name: "Human Hour",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSd34pvQyCaKVGIgtGaILduSpj0ynhdgBRt_VFfw3I0UIB4vcA/viewform?usp=sharing&ouid=108258842091744500482",
            bg: "linear-gradient(90deg,rgba(146, 97, 233, 1) 0%, rgba(59, 229, 235, 1) 100%)",
            image: human
        },
        {
            name: "Shaam-e-Nazm 2.0",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScpft48NbLBKAiDH5GwD_vDDgV-Fh0Va-NaFsktmJ1lz83eZw/viewform?usp=dialog",
            bg: "linear-gradient(33deg,rgba(6, 128, 0, 1) 0%, rgba(214, 235, 59, 1) 83%)"
        },
        {
            name: "Shutterbugs Photography Competition",
            link: "https://forms.gle/b1w6MoNkqeVfSPAFA",
            bg: "linear-gradient(33deg,rgba(6, 128, 0, 1) 0%, rgba(214, 235, 59, 1) 83%)",
            image: shuttter
        },
        {
            name: "Delphino Group Dance",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeYSNdHNIEqkpKpl5Irv2P5LpHyleNY0wdX0teuzoEFJY3Buw/viewform?usp=header",
            bg: "linear-gradient(90deg,rgba(146, 97, 233, 1) 0%, rgba(59, 229, 235, 1) 100%)"
        },
        {
            name: "Battle of Bands",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdXWoOOxKEVck0u9hD1p4TAS8Aqa1XE_1WuqZrPKTlW7mpuuw/viewform?usp=header",
            bg: "linear-gradient(90deg,rgba(146, 97, 233, 1) 0%, rgba(59, 229, 235, 1) 100%)",
            image: bands
        },
        {
            name: "Ephemera Fashion",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScKiFPn3j0_USXxBf9KtG2HOBk2CJ96fZc-DkMEvGn1hePEPQ/viewform?usp=dialog",
            bg: "linear-gradient(162deg,rgba(128, 0, 0, 1) 0%, rgba(214, 235, 59, 1) 100%)"
        },
        {
            name: "Beatdown Battle",
            link: "https://docs.google.com/forms/d/1j4X7CnWtqO9HLO27YBIyPBuTRW6SETZvRhbGeMrHXyI/edit?usp=sharing_eip_se_dm&ts=68e812d0",
            bg: "linear-gradient(90deg,rgba(146, 97, 233, 1) 0%, rgba(59, 229, 235, 1) 100%)",
            image: beat
        },
        {
            name: "Street Hustle",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeOA7C9DwQ9HCDw-faDQITcMf-hzjDvEda3xHXBNPy4cfashg/viewform?usp=header",
            bg: "linear-gradient(33deg,rgba(6, 128, 0, 1) 0%, rgba(214, 235, 59, 1) 83%)",
            image: street
        },
        {
            name: "Vocalscape",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSczm_TX-UaX4aB1aJysbd8VMhnqgrT4q4BSRXZWP-A0HrY8qg/viewform?usp=header",
            bg: "linear-gradient(90deg,rgba(252, 214, 151, 1) 1%, rgba(255, 245, 158, 1) 38%, rgba(240, 181, 72, 1) 62%, rgba(224, 37, 0, 1) 100%)",
            image: vocal
        },
        {
            name: "Prism-The Spectrum of Diwali Colors",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScOqGyQ8ZsG8noEWVz6yQL9Z47eTn_2kdd4XyOg7hxnqZoXmQ/viewform?usp=header",
            bg: "linear-gradient(33deg,rgba(6, 128, 0, 1) 0%, rgba(214, 235, 59, 1) 83%)",
            image: prism
        },
        {
            name: "Prakaran",
            link: "https://forms.gle/wsuv2uWm7FP76a8R6",
            bg: "linear-gradient(162deg,rgba(128, 0, 0, 1) 0%, rgba(214, 235, 59, 1) 100%)"
        },
        {
            name: "Ray-S: a film fest",
            link: "https://forms.gle/cWKqL472jrayTWGP8",
            bg: "linear-gradient(33deg,rgba(6, 128, 0, 1) 0%, rgba(214, 235, 59, 1) 83%)",
            image: ray
        }
    ]
  return (
    <>
        <NavBar active={1}/>
        <div style={{height: "60px", backgroundColor: "#2f0353"}}>for spacing only</div>
        <div className='event-page'>
            <div>
                <h1 className="text-6xl sponser-heading" style={{ textAlign: "center", marginBottom: "20px" }}>
                    <TextAnimate animation="blurInUp" by="character" duration="0.5">
                        All Events
                    </TextAnimate>
                </h1>      
                <div className="sponser-grid">
                    {events.map((s) => (
                        <a href={s.link} target='_blank'>
                            <div key={s.name} className="event-card" style={{
                                background: s.bg || "#ffffff",
                                backgroundImage: `url(${s.image || logo})`,
                                backgroundSize: "cover"
                            }}>
                                <div className="filter">
                                    <div className="event-card-title" >{s.name}
                                    <div className="register"><br />click to register</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default EventPage;