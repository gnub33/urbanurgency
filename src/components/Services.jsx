import "../styles/services.css";

export default function Services(){
    return(
        <section className="services" id="services">
            <h2>Actionable Solutions</h2>

            <div className="service-grid">
                <div className="service-card">
                    <h3>Raise Your Voice</h3>
                    <p>Become Active In Local City Council</p>
                </div>
                <div className="service-card">
                    <h3>Reduce, Reuse</h3>
                    <p>Consider Buying Used A Vehicle.</p>
                </div>
                <div className="service-card">
                    <h3>Get Outside</h3>
                    <p>Invest in your local business and create third spaces.</p>
                </div>
            </div>
        </section>
    )
}