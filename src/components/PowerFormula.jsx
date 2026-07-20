// src/components/PowerFormula.jsx
import { useState } from "react";

export default function PowerFormula() {
  const [voltage, setVoltage] = useState(1.2);
  const [frequency, setFrequency] = useState(3.0);

  const power = (voltage ** 2 * frequency).toFixed(2);
  const maxPower = 1.5 ** 2 * 5.0;
  const powerPercent = (Number(power) / maxPower) * 100;

  return (
    <div style={styles.container}>
      <div style={styles.formulaBox}>
        <span style={{ color:"#a0a5aa"}}>Total Power = </span>
        <span style={{ color:"white"}}>C × </span>
        <span style={{color:"#ff4d4d",fontWeight:"bold",textShadow:"0 0 8px rgba(255,77,77,.6)"}}>V²</span>
        <span style={{color:"white"}}> × </span>
        <span style={{color:"#3cd66a",textShadow:"0 0 6px rgba(60,214,106,.4)"}}>f</span>
      </div>

      <div style={styles.controls}>
        <div style={styles.controlGroup}>
          <label style={styles.label}>Voltage: <span style={{color:"#ff4d4d"}}>{voltage.toFixed(2)}V</span></label>
          <Slider min={0.8} max={1.5} step={0.01} value={voltage}
            onChange={e=>setVoltage(Number(e.target.value))}
            display={`${voltage.toFixed(2)}V`} accentColor="#ff4d4d"/>
        </div>

        <div style={styles.controlGroup}>
          <label style={styles.label}>Frequency: <span style={{color:"#3cd66a"}}>{frequency.toFixed(2)}GHz</span></label>
          <Slider min={1} max={5} step={0.01} value={frequency}
            onChange={e=>setFrequency(Number(e.target.value))}
            display={`${frequency.toFixed(2)} GHz`} accentColor="#3cd66a"/>
        </div>
      </div>

      <div style={styles.resultBox}>
		<h4>Resulting Power Output</h4>
		<div style={styles.barRow}>
			<div style={styles.barBackground}>
			<div style={{
				...styles.barFill,
				width: `${powerPercent}%`,
				background: powerPercent > 75 ? "#ff4d4d" : powerPercent > 40 ? "#eab308" : "#3cd66a",
				boxShadow: powerPercent > 75 ? "0 0 20px rgba(255,77,77,.6)" : "none",
			}} />
			</div>
			<span style={styles.barValue}>{power}W</span>
		</div>
		</div>
    </div>
  );
}

function Slider({min,max,step,value,onChange,display,accentColor="#3cafd6"}){
	const p=((value-min)/(max-min))*100;
	return <div style={styles.sliderGroup}>
			<input type="range" min={min} max={max} step={step} value={value} onChange={onChange}
			style={{...styles.slider,accentColor,
			background:`linear-gradient(90deg,${accentColor}40 0%,${accentColor}20 ${p}%,#16191b ${p}%,#16191b 100%)`}}/>
			<span style={styles.valueTag}>{display}</span>
		</div>;
}

const styles={
container:{
	display:"flex",
	flexDirection:"column",
	gap:28,
	fontFamily:"Noto Sans Variable,sans-serif",
	fontWeight:600,
	background:"linear-gradient(135deg,#373c43,#22262a)",
	padding:32,
	borderRadius:24,
	border:"1px solid rgba(255,255,255,.05)",
	boxShadow:"0 20px 40px rgba(0,0,0,.5), inset 0 1px 1px rgba(255,255,255,.1)"
},
formulaBox:
{
	fontSize:"2rem",
	textAlign:"center",
	fontFamily:"monospace",
	padding:"1rem",
	background:"#16191b",
	borderRadius:8,
	border:"1px solid var(--borderS)"
},
controls:
{
	display:"flex",
	gap:"2rem",
	flexWrap:"wrap"
},
controlGroup:
{
	flex:"1 1 250px",
	display:"flex",
	flexDirection:"column",
	gap:12
},
label:
{
	fontWeight:600,
	fontSize:"1.05rem",
	color:"#a0a5aa"
},
sliderGroup:
{
	display:"flex",
	alignItems:"center",
	gap:16
},
valueTag:
{
	minWidth:60,
	textAlign:"center",
	background:"linear-gradient(180deg,#4a5056,#2d3238)",
	border:"1px solid rgba(0,0,0,.4)",
	borderRadius:14,
	padding:"6px 14px",
	color:"#fff",
	boxShadow:"inset 0 1px 1px rgba(255,255,255,.15),0 4px 6px rgba(0,0,0,.3)"
},
slider:{
	flex:1,
	height:8,
	appearance:"none",
	borderRadius:999,
	cursor:"pointer",
	boxShadow:"inset 0 2px 4px rgba(0,0,0,.6),0 1px 1px rgba(255,255,255,.05)"
},
resultBox:{
	marginTop:16
},
barBackground:{
	width:"100%",
	height:30,
	background:"#16191b",
	borderRadius:15,
	overflow:"hidden",
	border:"1px solid rgba(255,255,255,.1)"
},
barFill: {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  color: "#fff",
  transition: "all .3s cubic-bezier(.4,0,.2,1)",
  textShadow: "0 1px 4px rgba(0,0,0,0.6)",
  whiteSpace: "nowrap",
  padding: "0 8px",
  boxSizing: "border-box",
},
barRow: {
  display: "flex",
  alignItems: "center",
  gap: 12,
},
barValue: {
  minWidth: 60,
  textAlign: "center",
  background: "linear-gradient(180deg, #4a5056, #2d3238)",
  border: "1px solid rgba(0, 0, 0, .4)",
  borderRadius: 14,
  padding: "6px 14px",
  color: "#fff",
  boxShadow: "inset 0 1px 1px rgba(255,255,255,.15), 0 4px 6px rgba(0,0,0,.3)",
  fontWeight: "bold",
  fontSize: "1rem",
}}