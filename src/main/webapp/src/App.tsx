import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import "regenerator-runtime/runtime";
import NavigationBar from "./Components/NavigationBar";
import ActionButtons from "./Components/ActionButtons";
import View from "./Components/View";
import { getTopics } from "./actions";
import { Container, Row, FormControl } from "react-bootstrap";

export type Topic = { id: string; name: string; description: string };

export interface State {
  view: "listAll" | "create";
  apiUrl: string;
  topics: Topic[];
  responsePayload?: string;
}

const App = () => {
  const [state, setState] = useState<State>({
    view: "listAll",
    apiUrl: "http://localhost:9001/api/topics",
    topics: []
  });
  const [hasInitialized, setHasInitialized] = useState(false);

  const { responsePayload } = state;

  if (!hasInitialized) {
    (async () => {
      const { apiUrl } = state;
      const topics = await getTopics(apiUrl);
      setState({
        ...state,
        view: "listAll",
        topics,
        responsePayload: JSON.stringify(topics, undefined, 2)
      });
      setHasInitialized(true);
    })();
  }

  return (
    <div className="App">
      <NavigationBar />
      <ActionButtons {...{ state, setState }} />
      <View {...{ state, setState }} />
      <Container>
        <Row>
          <h5>Response Payload</h5>
        </Row>
        <Row>
          <FormControl
            as={"textarea"}
            value={responsePayload}
            style={{ width: "100%", height: "400px", resize: "none" }}
          />
        </Row>
      </Container>
    </div>
  );
};

export default hot(App);
