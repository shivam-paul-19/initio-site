import "./sponser.css";

function SponserPage() {
    return (
        <>
            <div style={{height: "50px"}}>{/* for spacing only */}</div>
            <div className="sponser-page">
                <div>
                    <h1 className="text-2xl" style={{ textAlign: "center", marginBottom: "20px" }}>Our Sponsors</h1>      
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