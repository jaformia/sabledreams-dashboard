type TableProps = {
  columns: ReadonlyArray<React.ReactNode>;
  rows: ReadonlyArray<ReadonlyArray<React.ReactNode>>;
};

export function Table({ columns, rows }: TableProps) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={`column-${index}`}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`row-${index}`}>
              {row.map((cell, cellIndex) => (
                <td key={`cell-${index}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
