import React from "react";

// Formatear numero como moneda local
export const formatCurrency = (value: number): string => {
  return `L ${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

interface Column {
  header: string;
  accessor: string;
}

interface ProjectionTableProps {
  columns: Column[];
  data: Record<string, number>[];
  title: string;
  emptyMessage?: string;
}

export const ProjectionTable: React.FC<ProjectionTableProps> = ({
  columns,
  data,
  title,
  emptyMessage = "No hay datos disponibles, ve al formulario para calcular",
}) => {
  if (data.length === 0) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-8">
        <div className="text-center bg-[#201d2a]/80 border border-white/10 rounded-2xl p-10 backdrop-blur-xl shadow-2xl">
          <p className="text-4xl mb-4">📭</p>
          <p className="text-slate-400 text-lg">{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
        {title}
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-xl">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#1c1626]/80">
              {columns.map((col) => (
                <th
                  key={col.accessor}
                  className="px-6 py-4 text-sm font-semibold text-fuchsia-400 uppercase tracking-wider"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="border-t border-white/5 hover:bg-white/5 transition-colors duration-200"
              >
                {columns.map((col) => (
                  <td
                    key={col.accessor}
                    className="px-6 py-3.5 text-sm text-slate-300"
                  >
                    {col.accessor === "month" || col.accessor === "year"
                      ? row[col.accessor]
                      : formatCurrency(row[col.accessor])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
