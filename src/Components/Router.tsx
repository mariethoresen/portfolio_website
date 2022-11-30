import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FrontPage } from "../Pages/Index";
import PageWrapper from "./PageWrapper";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <FrontPage />
            </PageWrapper>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
