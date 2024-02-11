import NavBar from "../components/NavBar";
import { Overpass } from "next/font/google";
import "./global.css";
import NavMenu from "@/components/NavMenu";
import StateContext from "@/components/useStateContext/StateContext";

export const metadata = {
  title: "army.mil",
  description: "The Official Home Page of the United States Army",
};

const overpass = Overpass({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`h-full ${overpass.className}`}>
      <StateContext>
        <body>
          <NavBar />
          <NavMenu />
          <main className="flex flex-col relative min-h-screen">
            <div className="flex-grow flex-1">{children}</div>
          </main>
        </body>
      </StateContext>
    </html>
  );
};

export default RootLayout;
