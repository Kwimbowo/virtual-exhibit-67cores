// src/components/TrendGraph.jsx
import { useState } from "react";

export default function TrendGraph() {
    const [activeLine, setActiveLine] = useState(null);

    // Simplified, normalized dataset approximating the 40-year trend (1970-2020)
    // Values are normalized between 0 and 100 for SVG plotting
    const data = [
        { year: 1970, transistors: 1, frequency: 1, power: 1, cores: 1 },
        { year: 1980, transistors: 5, frequency: 10, power: 5, cores: 1 },
        { year: 1990, transistors: 20, frequency: 30, power: 20, cores: 1 },
        { year: 2000, transistors: 40, frequency: 70, power: 60, cores: 1 },
        { year: 2005, transistors: 55, frequency: 90, power: 95, cores: 5 }, // The Power Wall
        { year: 2010, transistors: 70, frequency: 92, power: 97, cores: 20 },
        { year: 2020, transistors: 95, frequency: 95, power: 100, cores: 60 },
    ];

    const lines = [
        { id: "transistors", label: "Transistors", color: "#f97316" },
        { id: "frequency", label: "Frequency (MHz)", color: "#22c55e" },
        { id: "power", label: "Typical Power (W)", color: "#ef4444" },
        { id: "cores", label: "Logical Cores", color: "#eab308" },
    ];

    // SVG dimensions
    const width = 600;
    const height = 300;
    const padding = 40;

    const getPoints = (key) => {
        return data
            .map((d, i) => {
                const x = padding + (i / (data.length - 1)) * (width - padding * 2);
                const y = height - padding - (d[key] / 100) * (height - padding * 2);
                return `${x},${y}`;
            })
            .join(" ");
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>40 Years of Microprocessor Trend Data</h3>
            <div style={styles.chartArea}>
                <svg viewBox={`0 0 ${width} ${height}`} style={styles.svg}>
                    {/* Grid lines */}
                    {[0, 25, 50, 75, 100].map((val) => (
                        <line
                            key={val}
                            x1={padding}
                            y1={height - padding - (val / 100) * (height - padding * 2)}
                            x2={width - padding}
                            y2={height - padding - (val / 100) * (height - padding * 2)}
                            stroke="rgba(255,255,255,0.1)"
                            strokeDasharray="4 4"
                        />
                    ))}

                    {/* Data Lines */}
                    {lines.map((line) => (
                        <polyline
                            key={line.id}
                            points={getPoints(line.id)}
                            fill="none"
                            stroke={line.color}
                            strokeWidth={activeLine === line.id || !activeLine ? 4 : 1}
                            style={{
                                transition: "all 0.3s ease",
                                opacity: activeLine === line.id || !activeLine ? 1 : 0.3,
                                cursor: "pointer",
                            }}
                            onMouseEnter={() => setActiveLine(line.id)}
                            onMouseLeave={() => setActiveLine(null)}
                        />
                    ))}

                    {/* Power Wall Annotation */}
                    <circle cx="373" cy="40" r="6" fill="#ef4444" className="pulse-dot" />
                    <text x="360" y="25" fill="#ef4444" fontSize="12" fontFamily="monospace">
                        The Power Wall (c. 2005)
                    </text>
                </svg>

                {/* Legend */}
                <div style={styles.legend}>
                    {lines.map((line) => (
                        <div
                            key={line.id}
                            style={{
                                ...styles.legendItem,
                                opacity: activeLine === line.id || !activeLine ? 1 : 0.4,
                            }}
                            onMouseEnter={() => setActiveLine(line.id)}
                            onMouseLeave={() => setActiveLine(null)}
                        >
                            <span style={{ ...styles.colorBox, backgroundColor: line.color }} />
                            {line.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        background: "var(--bg1S)",
        padding: "2rem",
        borderRadius: "12px",
        border: "1px solid var(--borderS)",
        fontFamily: "monospace",
        margin: "2rem 0",
    },
    title: {
        textAlign: "center",
        color: "var(--textS)",
        marginBottom: "1rem",
    },
    svg: {
        width: "100%",
        height: "auto",
        overflow: "visible",
    },
    legend: {
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
        marginTop: "1rem",
    },
    legendItem: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        color: "var(--textS)",
        fontSize: "0.9rem",
        cursor: "pointer",
        transition: "opacity 0.2s",
    },
    colorBox: {
        width: "12px",
        height: "12px",
        borderRadius: "2px",
    },
};