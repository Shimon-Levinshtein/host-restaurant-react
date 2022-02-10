import styles from "./App.module.scss";
import GuestRoom from "./components/GuestRoom/GuestRoom";
import QueueRestaurant from "./components/QueueRestaurant/QueueRestaurant";
import Host from "./components/Host/Host";
import CompletedOrders from "./components/CompletedOrders/CompletedOrders";


function App() {
  return (
    <div className={styles.continet_app}>
      <div className={styles.left}>
        <Host />
        <QueueRestaurant />
      </div>
      <GuestRoom />
      <CompletedOrders />
    </div>
  );
}

export default App;
