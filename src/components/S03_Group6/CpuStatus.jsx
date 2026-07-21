export default function CpuStatus({throttle=false, executionTime=0, power=0, efficiency=0, effectiveClock=0, energyScore=0}) {    const safeMsg = "Running efficiently within thermal limits.";
    const badMsg = "CPU is overheating! Clock speeds reduced to stay within thermal limits.";
    const status = throttle ? badMsg : safeMsg;

    const messageStyle = {
        ...styles.message,
        ...(throttle ? styles.messageThrottled : styles.messageSafe)
    };

    return (
        <div style={styles.container}>
            <style>{keyframes}</style>

            <div style={styles.metricsGrid}>
                <div style={styles.metricBox}>
                    <div style={styles.metricLabel}>Effective Clock</div>
                    <div style={styles.metricValue}>{effectiveClock} GHz</div>
                </div>
                <div style={styles.metricBox}>
                    <div style={styles.metricLabel}>Efficiency</div>
                    <div style={styles.metricValue}>{efficiency}%</div>
                </div>
                <div style={styles.metricBox}>
                    <div style={styles.metricLabel}>Execution Time</div>
                    <div style={styles.metricValue}>{executionTime.toFixed(1)} s</div>
                </div>
                <div style={styles.metricBox}>
                    <div style={styles.metricLabel}>Actual Power</div>
                    <div style={styles.metricValue}>{power.toFixed(1)} W</div>
                </div>
                <div style={styles.metricBox}>
                    <div style={styles.metricLabel}>Energy Score</div>
                    <div style={styles.metricValue}>{energyScore} J</div>
                </div>
            </div>

            <div style={messageStyle} className={throttle ? "status-text-blink" : undefined}>
                {status}
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    metricsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "10px",
        width: "100%",
    },
    metricBox: {
        background: "linear-gradient(135deg, #373c43 0%, #22262a 100%)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        borderRadius: "12px",
        padding: "12px 8px",
        textAlign: "center",
        boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 6px rgba(0,0,0,0.3)",
    },
    metricLabel: {
        fontSize: "0.75rem",
        color: "#a0a5aa",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        marginBottom: "4px",
        fontWeight: "600",
    },
    metricValue: {
        fontSize: "1.1rem",
        color: "#ffffff",
        fontWeight: "800",
        fontFamily: "monospace",
    },
    message: {
        width: "100%",
        padding: "12px 24px",
        borderRadius: "12px",
        textAlign: "center",
        fontFamily: "monospace",
        fontSize: "0.95rem",
        border: "1px solid rgba(0, 0, 0, 0.4)",
        transition: "all 0.3s ease",
        boxSizing: "border-box",
    },
    messageSafe: {
        background: "#16191b",
        color: "#3cd66a",
        textShadow: "0 0 6px rgba(60, 214, 106, 0.4)",
        boxShadow: "inset 0 3px 6px rgba(0,0,0,0.8), 0 1px 1px rgba(255,255,255,0.05)",
    },
    messageThrottled: {
        background: "#2a0d0d",
        color: "#ff4d4d",
        textShadow: "0 0 8px rgba(255, 77, 77, 0.6)",
        boxShadow: "inset 0 3px 6px rgba(0,0,0,0.9), 0 0 15px rgba(214, 48, 48, 0.3)",
    }
};

const keyframes = `
@keyframes critical-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}
.status-text-blink {
    animation: critical-blink 1.5s ease-in-out infinite;
}
`;