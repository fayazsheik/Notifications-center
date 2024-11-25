
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client';
import './NotificationCenter.css';

const socket = io('http://localhost:4000');

function NotificationCenter() {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    socket.on('notification', (notification) => {
      setNotifications((prev) => [notification, ...prev]);
      setUnreadCount((count) => count + 1);
      showToast(notification);
    });
  }, []);

  const showToast = (notification) => {
    toast[notification.type === 'alert' ? 'error' : 'info'](notification.message, {
      icon: notification.type === 'alert' ? '⚠️' : 'ℹ️',
    });
  };

  const markAllAsRead = () => setUnreadCount(0);

  return (
    <div className="notification-center">
      <nav className="navbar">
        <div className="navbar-brand">Notifications</div>
        <button className="notification-bell" onClick={() => setDropdownOpen(!dropdownOpen)}>
          🔔
          {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
        </button>
      </nav>

      <div className='notification-container'>
      {dropdownOpen && (
        <div className="notification-dropdown">
          <button onClick={markAllAsRead} className='mark-as-read'>Mark All as Read</button>
          <ul>
            {notifications.map((notif, index) => (
              <li key={index} className={notif.type}>
                <span>{notif.message}</span>
                <span className="timestamp">{notif.timestamp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
      

      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}

export default NotificationCenter;











// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import io from 'socket.io-client';
// import './NotificationCenter.css';

// const socket = io('http://localhost:4000');

// function NotificationCenter() {
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     socket.on('notification', (notification) => {
//       setNotifications((prev) => [notification, ...prev]);
//       setUnreadCount((count) => count + 1);
//       showToast(notification);
//     });
//   }, []);

//   const showToast = (notification) => {
//     toast[notification.type === 'alert' ? 'error' : 'info'](notification.message, {
//       icon: notification.type === 'alert' ? '⚠️' : 'ℹ️',
//     });
//   };

//   const markAllAsRead = () => setUnreadCount(0);

//   return (
//     <div className="notification-center">
//       <button className="notification-bell" onClick={() => setDropdownOpen(!dropdownOpen)}>
//         🔔
//         {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
//       </button>

//       {dropdownOpen && (
//         <div className="notification-dropdown">
//           <button onClick={markAllAsRead}>Mark All as Read</button>
//           <ul>
//             {notifications.map((notif, index) => (
//               <li key={index} className={notif.type}>
//                 <span>{notif.message}</span>
//                 <span className="timestamp">{notif.timestamp}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <ToastContainer position="top-left" autoClose={5000} />
//     </div>
//   );
// }

// export default NotificationCenter;
