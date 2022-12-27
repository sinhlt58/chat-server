import './App.css';
import { Chat } from './Chat';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

function App() {
  return (
    <div className="realative w-full max-h-screen relative">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-2">
        </div>
        <div className="col-span-1 lg:col-span-8 p-2">
          <Chat />
        </div>
        <div className="lg:col-span-2 "></div>
      </div>
    </div>
  );
}

export default App;
