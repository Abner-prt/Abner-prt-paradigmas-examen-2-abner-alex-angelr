import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { FormPage } from "./pages/FormPage";
import { MonthlyProjectionPage } from "./pages/MonthlyProjectionPage";
import { AnnualProjectionPage } from "./pages/AnnualProjectionPage";
import type { CalculationResult, SavingsFormData } from "./types";

function App() {
  const [formData, setFormData] = useState<SavingsFormData | null>(null);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = (data: SavingsFormData, calcResult: CalculationResult) => {
    setFormData(data);
    setResult(calcResult);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#130f1c] text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<FormPage onCalculate={handleCalculate} />} />
            <Route
              path="/mensual"
              element={<MonthlyProjectionPage result={result} formData={formData} />}
            />
            <Route
              path="/anual"
              element={<AnnualProjectionPage result={result} formData={formData} />}
            />
          </Routes>
        </div>
        
        {/* Footer simple para dar cierre al diseño */}
        <footer className="py-6 text-center border-t border-white/5 mt-auto">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Proyecto de Examen • <span className="text-slate-400">Abner, Alex & Ángel</span>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
