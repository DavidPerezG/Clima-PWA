import React from "react";
import addNotification from "react-push-notification";

const ButtonPush = () => {
  const notificacion = () => {
    addNotification({
      title: 'David P',
      message: 'Notificacion push',
      duration: 4000,
      native: true,
    });
  }
  return (
    <div className="col-12">
      <button onClick={notificacion} style={styles.container}>PUSH</button>
    </div>
  );
};

const styles = {
  container: {
    height: '40px',
    width: '160px',

  }
};

export default ButtonPush;