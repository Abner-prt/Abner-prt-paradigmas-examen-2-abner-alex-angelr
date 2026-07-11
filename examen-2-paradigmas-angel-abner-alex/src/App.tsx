import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { FormPage } from "./pages/FormPage";
import { MonthlyProjectionPage } from "./pages/MonthlyProjectionPage";
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
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<FormPage onCalculate={handleCalculate} />} />
          <Route
            path="/mensual"
            element={<MonthlyProjectionPage result={result} formData={formData} />}
          />
          <Route
            path="/anual"
            element={
              <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-4xl mb-4">📈</p>
                  <h2 className="text-xl font-semibold text-slate-300">Proyeccion anual</h2>
                  <p className="text-slate-500 mt-2">Proximamente — angel la implementara</p>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
