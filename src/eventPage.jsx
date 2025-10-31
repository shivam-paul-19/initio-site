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
import brand from "./assets/events/brandMania.png";
import spin from "./assets/events/spin.png";
import ctrl from "./assets/events/ctrl.png";
import shaam from "./assets/events/shaam.png";
import delph from "./assets/events/delph.png";
import eph from "./assets/events/eph.png";
import prak from "./assets/events/prak.png";
import mind from "./assets/events/mind.png";

function EventPage() {
    let events = [{
            name: "CTRL+Z: The Crisis Fix",
            link: "https://forms.gle/9iyoeCtNKpHN9ZP17",
            image: ctrl
        },
        {
            name: "Brand o Mania",
            link: "https://forms.gle/Dju4Na6ke6tE9KvK6",
            image: brand
        },
        {
            name: "Spinfluencer",
            link: "https://docs.google.com/forms/d/1V-QTdcPfGK2IDjxni8AzVoPoz9qj3nPfzBtwKTiHSUA/edit",
            image: spin
        },
        {
            name: "The Bidding Bunker",
            link: "https://forms.gle/RFZGoyky4itx7mBw6",
            image: bidingImg
        },
        {
            name: "FinVault",
            link: "https://forms.gle/dJQk4v1uzhSyWx9w6",
            image: finvault
        },
        {
            name: "Shark Tank: A Business Plan Competition",
            link: "https://forms.gle/3GYxesgmbngXdnv88",
            image: shark
        },
        {
            name: "Human Hour",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSd34pvQyCaKVGIgtGaILduSpj0ynhdgBRt_VFfw3I0UIB4vcA/viewform?usp=sharing&ouid=108258842091744500482",
            image: human
        },
        {
            name: "Shaam-e-Nazm 2.0",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScpft48NbLBKAiDH5GwD_vDDgV-Fh0Va-NaFsktmJ1lz83eZw/viewform?usp=dialog",
            image: shaam
        },
        {
            name: "Shutterbugs Photography Competition",
            link: "https://forms.gle/b1w6MoNkqeVfSPAFA",
            image: shuttter
        },
        {
            name: "Delphino Group Dance",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeYSNdHNIEqkpKpl5Irv2P5LpHyleNY0wdX0teuzoEFJY3Buw/viewform?usp=header",
            image: delph
        },
        {
            name: "Battle of Bands",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdXWoOOxKEVck0u9hD1p4TAS8Aqa1XE_1WuqZrPKTlW7mpuuw/viewform?usp=header",
            image: bands
        },
        {
            name: "Ephemera Fashion",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScKiFPn3j0_USXxBf9KtG2HOBk2CJ96fZc-DkMEvGn1hePEPQ/viewform?usp=dialog",
            image: eph
        },
        {
            name: "Beatdown Battle",
            link: "https://docs.google.com/forms/d/1a9VUvkI5ralyKsus7u_O6DLLAkuqHegOZ-1lnwKR95Q/viewform?pli=1&ts=68fd12c9&pli=1&edit_requested=true",
            image: beat
        },
        {
            name: "Street Hustle",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeOA7C9DwQ9HCDw-faDQITcMf-hzjDvEda3xHXBNPy4cfashg/viewform?usp=header",
            image: street
        },
        {
            name: "Vocalscape",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSczm_TX-UaX4aB1aJysbd8VMhnqgrT4q4BSRXZWP-A0HrY8qg/viewform?usp=header",
            image: vocal
        },
        {
            name: "Prism-The Spectrum of Diwali Colors",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScOqGyQ8ZsG8noEWVz6yQL9Z47eTn_2kdd4XyOg7hxnqZoXmQ/viewform?usp=header",
            image: prism
        },
        {
            name: "Prakaran",
            link: "https://forms.gle/wsuv2uWm7FP76a8R6",
            image: prak
        },
        {
            name: "Ray-S: a film fest",
            link: "https://forms.gle/cWKqL472jrayTWGP8",
            image: ray
        },
        {
            name: "Mind your biz",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfFuz10GRELgJfDIb6l1sp67uJZIvQKZT4DV00_NX3QAS6htA/viewform?usp=header",
            image: mind
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