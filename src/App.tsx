import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  // let items = ["A", "B", "C", "D", "E"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={"Letters"}
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button color="secondary" onCLick={() => setAlertVisibility(true)}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
