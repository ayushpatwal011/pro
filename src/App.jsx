import Navbar from "./components/layout/Navbar";
import GooeyNav from "./components/layout/Navbar";
import Squares from "./components/ui/Backendground";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="min-h-screen bg-background/50 text-foreground transition-colors duration-300 relative">
      <Squares
        speed={0.3}
        squareSize={40}
        direction="diagonal"
        borderColor={"#000"}
        hoverFillColor={"#eee"}
      />
      <div>
        <HomePage />
      </div>
    </div>
  );
}
