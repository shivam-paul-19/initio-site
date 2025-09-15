import "./sponser.css";
import { TextAnimate } from "@/components/magicui/text-animate";

function SponserPage() {
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
                    <div className="sponser-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                        gap: "16px",
                        width: "980px"
                    }}>
                        {Array.from({ length: 12 }).map((_, idx) => (
                            <div key={idx} style={{
                                height: "110px",
                                borderRadius: "12px",
                                background: "rgba(255,255,255,0.08)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>Logo</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SponserPage;