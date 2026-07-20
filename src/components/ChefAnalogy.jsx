// src/components/ChefAnalogy.jsx
import { useState, useEffect } from "react";

export default function ChefAnalogy() {
    const [tick, setTick] = useState(0);

    // Auto-increment orders for animation
    useEffect(() => {
        const interval = setInterval(() => {
            setTick((prev) => (prev + 1) % 17); 
        }, 220);
        return () => clearInterval(interval);
    }, []);

    const singleCoreOrders = tick;
    const multiCoreOrders = Math.min(tick, 4);

    return (
        <div style={styles.container}>
            {/* Single Core / Single Chef */}
            <div style={styles.kitchen}>
                <div style={styles.header}>
                    <h4 style={{color: "#ff4d4d", fontFamily: "monospace", fontSize: "1.3rem", paddingBottom: "1rem"}}>Single-Core (1 Fast Chef)</h4>
                    <p style={styles.desc}>High Speed, Overheating, Bottlenecked</p>
                </div>
                <div style={styles.chefContainer}>
                    <div style={{...styles.chef, ...styles.sweatingChef}}>
                        👨‍🍳
                        <div style={styles.speedLine}>⚡⚡⚡</div>
                    </div>
                </div>
                <div style={styles.orderQueue}>
                    {Array(16).fill('🥪').map((burger, i) => (
                        <span key={i} style={{ opacity: i < singleCoreOrders ? 1 : 0.2, transition: "0.2s" }}>{burger}</span>
                    ))}
                </div>
            </div>

            <div style={styles.divider} />

            {/* Multi Core / Multiple Chefs */}
            <div style={styles.kitchen}>
                <div style={styles.header}>
                    <h4 style={{color: "#3cd66a", fontFamily: "monospace", fontSize: "1.1rem", paddingBottom: "1.6rem"}}>Multi-Core (4 Efficient Chefs)</h4>
                    <p style={styles.desc}>Moderate Speed, Cool, Parallel Execution</p>
                </div>
                <div style={styles.multiChefContainer}>
                    {[1, 2, 3, 4,].map((i) => (
                        <div key={i} style={styles.chef}>👨‍🍳</div>
                    ))}
                </div>
                <div style={styles.queuesWrapper}>
                    <div style={styles.multiOrderQueue}>
                        {Array(4).fill('🥪').map((burger, i) => (
                            <span key={i} style={{ opacity: i < multiCoreOrders * 1 ? 1 : 0.2, transition: "0.2s" }}>{burger}</span>
                        ))}
                    </div>
                    <div style={styles.multiOrderQueue}>
                        {Array(4).fill('🥪').map((burger, i) => (
                            <span key={i} style={{ opacity: i < multiCoreOrders * 1 ? 1 : 0.2, transition: "0.2s" }}>{burger}</span>
                        ))}
                    </div>
                    <div style={styles.multiOrderQueue}>
                        {Array(4).fill('🥪').map((burger, i) => (
                            <span key={i} style={{ opacity: i < multiCoreOrders * 1 ? 1 : 0.2, transition: "0.2s" }}>{burger}</span>
                        ))}
                    </div>
                    <div style={styles.multiOrderQueue}>
                        {Array(4).fill('🥪').map((burger, i) => (
                            <span key={i} style={{ opacity: i < multiCoreOrders * 1 ? 1 : 0.2, transition: "0.2s" }}>{burger}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        gap: "2rem",
        background: "#16191b",
        padding: "1rem 2rem",
        borderRadius: "16px",
        border: "1px solid var(--borderS)",
        margin: "2rem 0",
        flexWrap: "wrap",
    },
    kitchen: {
        flex: "1 1 300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
    },
    header: {
        textAlign: "center",
        fontFamily: "monospace"
    },
    desc: {
        fontSize: "0.85rem",
        color: "var(--mutedS)",
        margin: 0,
    },
    chefContainer: {
        height: "100px",
        display: "flex",
        alignItems: "center",
    },
    multiChefContainer: {
        height: "100px",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
    },
    chef: {
        fontSize: "3rem",
        position: "relative",
        background: "rgba(255,255,255,0.05)",
        padding: "10px",
        borderRadius: "10%",
        border: "1px solid rgba(255,255,255,0.1)",
    },
    sweatingChef: {
        background: "rgba(255, 77, 77, 0.2)",
        border: "1px solid #ff4d4d",
        boxShadow: "0 0 15px rgba(255, 77, 77, 0.4)",
        animation: "shake 0.5s infinite",
    },
    speedLine: {
        position: "absolute",
        top: "-15px",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "1rem",
    },
    orderQueue: {
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        gap: "5px",
        fontSize: "1.5rem",
        background: "#0a0a0a",
        padding: "10px",
        borderRadius: "8px",
    },
    queuesWrapper: {
        display: "flex",
        gap: "1rem",
        width: "100%",
        justifyContent: "center",
    },
    multiOrderQueue: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 2fr)",
        gap: "5px",
        fontSize: "1.5rem",
        background: "#0a0a0a",
        padding: "10px",
        borderRadius: "8px",
    },
    divider: {
        width: "2px",
        background: "var(--borderS)",
    }
};