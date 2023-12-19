import "./App.css";

import AuthProvider from "./Providers/AuthProvider";
import MyRouter from "./router/MyRouter";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <MyRouter />
      </div>
    </AuthProvider>
  );
};

export default App;
