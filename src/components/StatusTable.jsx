export default function StatusTable({throttle=false, effectiveClock=0, energyScore=0, ...rest}) {
    const safeMsg = "Optimal";
    const badMsg = "THERMAL THROTTLING";
    const status = throttle? badMsg : safeMsg;

    return (
        <div style={styles.container}>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Status</th>
                        <th style={styles.th}>Effective Clock</th>
                        <th style={styles.th}>Total Energy Score (J)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}>{status}</td>
                        <td style={styles.td}>{effectiveClock} Ghz</td>
                        <td style={styles.td}>{energyScore}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    container: {
        borderTop: "2px solid black",
        borderBottom: "2px solid black",
        padding: "16px 0",
        width: "100%",
        boxSizing: "border-box", 
        margin: "10px 0",
        contain: "inline-size",   
        overflow: "hidden",       
    },
    table: {
        width: "100%",
        minWidth: 0,
        borderCollapse: "collapse", 
        textAlign: "center",    
        tableLayout: "fixed",    
    },
    th: {
        padding: "6px",
        fontSize: "1rem",
        width: "33.33%",
    },
    td: {
        padding: "6px 12px",
        fontSize: "1rem",
        wordWrap: "break-word",
        overflowWrap: "break-word", 
    }
};