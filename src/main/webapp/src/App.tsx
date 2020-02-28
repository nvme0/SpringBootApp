import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import "regenerator-runtime/runtime";
import NavigationBar from "./Components/NavigationBar";
import ActionButtons from "./Components/ActionButtons";
import ResponsePayloadTextarea from "./Components/ResponsePayloadTextarea";
import View from "./Components/View";
import { getTopics } from "./actions";

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
      <ResponsePayloadTextarea {...{ responsePayload }} />
      <div style={{ height: "200px", backgroundColor: "#343a40" }} />
    </div>
  );
};

export default hot(App);
