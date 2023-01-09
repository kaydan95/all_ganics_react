import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProduct, setIsProduct] = useState(false);

  const openSideNav = (openValue, navValue) => {
    setIsOpen(openValue);
    setIsProduct(navValue);
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SideNav navState={isOpen} onOpen={openSideNav} navKind={isProduct} />
      <AuthContextProvider>
        <div className={`${isOpen && "bg-white opacity-60"}`}>
          <Header onOpen={openSideNav} navState={isOpen} navKind={isProduct} />
          <Outlet navState={isOpen} />
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
