// src/components/PowerFormula.jsx
import { useState } from "react";

export default function PowerFormula() {
    const [voltage, setVoltage] = useState(1.2);
    const [frequency, setFrequency] = useState(3.0);

    // P = C * V^2 * f (Capacitance is treated as a constant 1 for this visualization)
    const power = (Math.pow(voltage, 2) * frequency).toFixed(2);

    // Calculate percentage of max possible power for the visualization bar
    const maxPower = Math.pow(1.5, 2) * 5.0;
    const powerPercent = (power / maxPower) * 100;

    return (
        <div style={styles.container}>
            <div style={styles.formulaBox}>
                <span style={{ color: "#a0a5aa" }}>Total Power = </span>
                <span style={{ color: "white" }}>C &times; </span>
                <span style={{ color: "#ff4d4d", fontWeight: "bold" }}>V&sup2;</span>
                <span style={{ color: "white" }}> &times; </span>
                <span style={{ color: "#3cd66a" }}>f</span>
            </div>

            <div style={styles.controls}>
                {/* Voltage Control */}
                <div style={styles.controlGroup}>
                    <label style={styles.label}>Voltage (V): <span style={{color: "#ff4d4d"}}>{voltage}v</span></label>
                    <input
                        type="range" min="0.8" max="1.5" step="0.05"
                        value={voltage} onChange={(e) => setVoltage(e.target.value)}
                        style={{...styles.slider, accentColor: "#ff4d4d"}}
                    />
                    <small style={styles.helperText}>Notice how small changes cause massive power spikes (Quadratic scaling)</small>
                </div>

                {/* Frequency Control */}
                <div style={styles.controlGroup}>
                    <label style={styles.label}>Frequency (f): <span style={{color: "#3cd66a"}}>{frequency}GHz</span></label>
                    <input
                        type="range" min="1.0" max="5.0" step="0.1"
                        value={frequency} onChange={(e) => setFrequency(e.target.value)}
                        style={{...styles.slider, accentColor: "#3cd66a"}}
                    />
                    <small style={styles.helperText}>Increases power predictably (Linear scaling)</small>
                </div>
            </div>

            <div style={styles.resultBox}>
                <h4>Resulting Power Output</h4>
                <div style={styles.barBackground}>
                    <div style={{
                        ...styles.barFill,
                        width: `${powerPercent}%`,
                        background: powerPercent > 75 ? "#ff4d4d" : powerPercent > 40 ? "#eab308" : "#3cd66a",
                        boxShadow: powerPercent > 75 ? "0 0 20px rgba(255, 77, 77, 0.6)" : "none"
                    }}>
                        {power}W
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        background: "linear-gradient(135deg, #373c43 0%, #22262a 100%)",
        padding: "2rem",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        margin: "2rem 0",
        color: "var(--textS)",
        fontFamily: "var(--font-sans)",
    },
    formulaBox: {
        fontSize: "2rem",
        textAlign: "center",
        fontFamily: "monospace",
        padding: "1rem",
        background: "#16191b",
        borderRadius: "8px",
        marginBottom: "2rem",
        border: "1px solid var(--borderS)"
    },
    controls: {
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
    },
    controlGroup: {
        flex: "1 1 250px",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    label: {
        fontWeight: "600",
        fontSize: "1.1rem",
    },
    slider: {
        width: "100%",
        height: "8px",
        cursor: "pointer",
    },
    helperText: {
        color: "var(--mutedS)",
        fontSize: "0.8rem",
        fontStyle: "italic",
    },
    resultBox: {
        marginTop: "2rem",
    },
    barBackground: {
        width: "100%",
        height: "30px",
        background: "#16191b",
        borderRadius: "15px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
    },
    barFill: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: "10px",
        fontWeight: "bold",
        color: "#fff",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    }
};