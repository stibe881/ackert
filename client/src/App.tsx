import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Gartengestaltung from "./pages/services/Gartengestaltung";
import Landschaftsbau from "./pages/services/Landschaftsbau";
import Pflanzenpflege from "./pages/services/Pflanzenpflege";
import Baumschnitt from "./pages/services/Baumschnitt";
import Terrassenbau from "./pages/services/Terrassenbau";
import Rollrasen from "./pages/services/Rollrasen";
import ProjectGallery from "./pages/projects/ProjectGallery";
import QualityDetail from "./pages/projects/QualityDetail";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/projekte/:projectId"} component={ProjectGallery} />
      <Route path={"/qualitaet-im-detail"} component={QualityDetail} />
      <Route path={"/about"} component={About} />
      <Route path={"/career"} component={Career} />
      <Route path={"/imprint"} component={Imprint} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/services/gartengestaltung"} component={Gartengestaltung} />
      <Route path={"/services/landschaftsbau"} component={Landschaftsbau} />
      <Route path={"/services/pflanzenpflege"} component={Pflanzenpflege} />
      <Route path={"/services/baumschnitt"} component={Baumschnitt} />
      <Route path={"/services/terrassenbau"} component={Terrassenbau} />
      <Route path={"/services/rollrasen"} component={Rollrasen} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      // switchable
      >
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <CookieBanner />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
