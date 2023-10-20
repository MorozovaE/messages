import { useEffect, useState } from "react";
import "./App.css";
import { Message } from "./components/Message/Message";
import { messageData } from "./data";
import { IMessage } from "./interfaces";
import { groupData } from "./utils";

function App() {
  const [messages, setMesg] = useState({});

  useEffect(() => {
    const grouppedMsgs = groupData(messageData);

    setMesg(grouppedMsgs);
  }, []);

  return (
    <div className="App">
      {Object.entries<IMessage[]>(messages).map(([date, msgs], i) => {
        return (
          <div key={i}>
            <div className="date">{date}</div>
            {msgs.map((msg, j) => (
              <Message key={j} msg={msg} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default App;
