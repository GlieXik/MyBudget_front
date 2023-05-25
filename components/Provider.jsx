"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

function Providers({ children }) {
  return (
    <CookiesProvider>
      <Provider store={store}>{children}</Provider>
    </CookiesProvider>
  );
}

export default Providers;
