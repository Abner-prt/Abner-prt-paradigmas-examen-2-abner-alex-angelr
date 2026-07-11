// No need to import useState
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { FormPage } from "./pages/FormPage";
import type { CalculationResult, SavingsFormData } from "./types";

function App() {
  const handleCalculate = (formData: SavingsFormData, calcResult: CalculationResult) => {
    console.log("Calculando...", formData, calcResult);
  };
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<FormPage onCalculate={handleCalculate} />} />
          <Route
            path="/mensual"
            element={
              <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-4xl mb-4">📊</p>
                  <h2 className="text-xl font-semibold text-slate-300">Proyección Mensual</h2>
                  <p className="text-slate-500 mt-2">Próximamente — Ángel la implementará</p>
                </div>
              </div>
            }
          />
          <Route
            path="/anual"
            element={
              <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-4xl mb-4">📈</p>
                  <h2 className="text-xl font-semibold text-slate-300">Proyección Anual</h2>
                  <p className="text-slate-500 mt-2">Próximamente — Ángel la implementará</p>
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
