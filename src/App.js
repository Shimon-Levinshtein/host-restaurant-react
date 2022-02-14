import styles from "./App.module.scss";
import GuestRoom from "./components/GuestRoom/GuestRoom";
import QueueRestaurant from "./components/QueueRestaurant/QueueRestaurant";
import Host from "./components/Host/Host";
import CompletedOrders from "./components/CompletedOrders/CompletedOrders";


function App() {
  return (
    <div className={styles.continet_app}>
      <div className={styles.header}>
        <Host />
        <div className={styles.titleHeader}>
          <h1>Welcome</h1>
          <h2>To the restaurant</h2>
        </div>
      </div>
      <div className={styles.body}>
        <QueueRestaurant />
        <GuestRoom />
        <CompletedOrders />
      </div>
    </div>
  );
}

export default App;
