import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { Anime } from "./pages/anime/Anime";
import { Friends } from "./pages/friends/friends";
import { CanvasLayout } from "./pages/_layouts/canvas";
import { Canvas } from "./pages/canvas/canvas";
import { CounterWithCreatorAtom } from "./pages/counter-with-creator/counter";
import { CounterAsyncPage } from "./pages/async-counter/counter";
import { CounterWriteAsyncPage } from "./pages/async-counter/async-write-counter/counter";
import { AtomWithUtilsPage } from "./pages/atoms-with-utils/atom-with-utils";
import { ImmerIntegrationPage } from "./pages/integrations/integrations";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Anime /> },
      { path: "friends", element: <Friends /> },
      { path: "counter-with-creator", element: <CounterWithCreatorAtom /> },
      { path: "/async-counter", element: <CounterAsyncPage /> },
      { path: "/write-async-counter", element: <CounterWriteAsyncPage /> }, 
      { path: "/atom-with-utils", element: <AtomWithUtilsPage />},
      { path: "/integrations", element: <ImmerIntegrationPage />},
    ]
  },
  {
    path: "/canvas",
    element: <CanvasLayout />,
    children: [
      { path: "/canvas", element: <Canvas />}] 
  },
])