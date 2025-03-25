import React, { Suspense, lazy } from "react";

const ReactCodeBlock = lazy(() =>
  import("ui").then((mod) => ({ default: mod.ReactCodeBlock }))
);

const App = () => (
  <Suspense fallback={<p>Loading React IDE ...</p>}>
    <ReactCodeBlock />
  </Suspense>
);

export default App;
