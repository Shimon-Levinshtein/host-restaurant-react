import styles from "./App.module.scss";
import GuestRoom from "./components/GuestRoom/GuestRoom";


function App() {
  return (
    <div className={styles.continet_app}>
      <GuestRoom />
    </div>
  );
}

export default App;
