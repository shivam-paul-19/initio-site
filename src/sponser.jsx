import "./sponser.css";
import { TextAnimate } from "@/components/magicui/text-animate";

function SponserPage() {
    const logoMap = import.meta.glob("@/assets/*", { eager: true, as: "url" });
    const sponsors = [
        { name: "Honda", file: "honda.png" },
        { name: "Ayur Herbals", file: "ayur-herbals.png" },
        { name: "Decathlon", file: "decathlon.png" },
        { name: "RED FM 93.5", file: "red-fm-93-5.png" },
        { name: "Dainik Jagran", file: "dainik-jagran.png" },
        { name: "Realme", file: "realme.png" },
        { name: "Hindustan Times", file: "hindustan-times.png" },
        { name: "Del Monte", file: "del-monte.png" },
        { name: "Punjab & Sind Bank", file: "punjab-and-sind-bank.png" },
        { name: "Fresca", file: "fresca.png" },
        { name: "The Indian Express", file: "indian-express.png" }
    ];
    const resolveLogoUrl = (entry) => entry.url ?? logoMap[`/src/assets/${entry.file}`];
    return (
        <>
            <div style={{height: "60px", backgroundColor: "#2f0353"}}>{/* for spacing only */}</div>
            <div className="sponser-page">
                <div>
                    <h1 className="text-3xl sponser-heading" style={{ textAlign: "center", marginBottom: "20px" }}>
                        <TextAnimate animation="blurInUp" by="character" duration="0.5">
                            Our Sponsors
                        </TextAnimate>
                    </h1>      
                    <div className="sponser-grid">
                        {sponsors.map((s) => (
                            <div key={s.name} className="sponser-card">
                                <img src={resolveLogoUrl(s)} alt={s.name} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SponserPage;