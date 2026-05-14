import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// CATEGORÍAS
import Topos from "./pages/categories/Topos";
import Aretes from "./pages/categories/Aretes";
import Dijes from "./pages/categories/Dijes";
import Sets from "./pages/categories/Sets";
import Anillos from "./pages/categories/Anillos";
import Cadenas from "./pages/categories/Cadenas";
import Pulseras from "./pages/categories/Pulseras";
import Earcuff from "./pages/categories/Earcuff";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Index />} />

          {/* CATEGORÍAS */}
          {/* CATEGORÍAS */}
          <Route path="/topos" element={<Topos />} />
          <Route path="/aretes" element={<Aretes />} />
          <Route path="/dijes" element={<Dijes />} />
          <Route path="/sets" element={<Sets />} />
          <Route path="/anillos" element={<Anillos />} />
          <Route path="/cadenas" element={<Cadenas />} />
          <Route path="/pulseras" element={<Pulseras />} />
          <Route path="/earcuff" element={<Earcuff />} />


          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;