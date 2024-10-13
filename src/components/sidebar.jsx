import { FaHome, FaUsers, FaBox, FaSignInAlt } from 'react-icons/fa';
import '../style/sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <br/><br/><br/>
        <li><FaHome /> Dashboard</li>
        <li><FaUsers /> Users</li>
        <li><FaBox /> Products</li>
        <li><FaSignInAlt /> Sign In</li>
        <li><FaSignInAlt /> Sign Up</li>
      </ul>
    </div>
  );
}

export default Sidebar;
