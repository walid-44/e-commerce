import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../trk/slises/auth";


const ShowLogin = ({ children }) => {
  const select = useSelector(selectIsLoggedIn);

  if (select) {
    return children;
  }
  return null;
};
export const ShowLogout = ({ children }) => {
  const select = useSelector(selectIsLoggedIn);

  if (!select) {
    return children;
  }
  return null;
};

export default ShowLogin;
