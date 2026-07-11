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
            element={<AnnualProjectionPage result={result} formData={formData} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
