import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TodoPage, ListPage } from "./pages";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./core/query/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const App = () => {
  return (
    <>
      {/* Ponemos el provider de React Query para que wrapee la aplicación completa */}
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
        </HashRouter>
        {/* Decimos que vamos a usar las dev tools, por defecto en producción no se ve*/}
        {/* Es un paquete externo, mirar package.json */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};
