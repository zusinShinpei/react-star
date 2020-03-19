import * as React from "react";
import StarRate from "./StarRate";

function App() {
  const [value, setValue] = React.useState<number>(0);

  const onChange = React.useCallback((rate: number) => {
    setValue(rate);
  }, []);

  return <StarRate {...{ onChange, value }} />;
}

export default App;
