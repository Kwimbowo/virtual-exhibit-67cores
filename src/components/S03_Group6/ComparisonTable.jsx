import "../../styles/S03_Group6_ComparisonTable.css";

export default function ComparisonTable() {
  return (
    <div className="table">
      <div className="panel">
        <div className="singlecoreheader">
          Singlecore Processor
        </div>

        <ul className="list">
          <li>
            A <span className="bold">singular</span> core executes instructions
          </li>
          <li>
            <span className="bold">Lacks multicore efficiency</span>, leaving
            tasks to be done sequentially
          </li>
          <li>Simulates multitasking by time-sharing</li>
        </ul>
      </div>

      <div className="panel">
        <div className="multicoreheader">
          Multicore Processor
        </div>

        <ul className="list">
          <li>
            Allows multiple cores to execute multiple instructions{" "}
            <span className="bold">simultaneously</span>
          </li>
          <li>
            Allows tasks to be{" "}
            <span className="bold">distributed across multiple cores</span>
          </li>
          <li>
            Handles multitasking more efficiently by running multiple
            applications or processes at the same time
          </li>
        </ul>
      </div>
    </div>
  );
}