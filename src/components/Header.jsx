import { NavLink } from "react-router-dom";

const Header = () => {
  let menus = [
    { path: "/", menuName: "Home" },
    { path: "/login", menuName: "Login" },
    { path: "/register", menuName: "Register" },
  ];
  return (
    <div className="my-10 text-center">
      {menus.map((menu, idx) => (
        <NavLink
          className={"mr-6 bg-yellow-200 text-black py-2 px-4 rounded-md "}
          key={idx}
          to={menu.path}
        >
          {menu.menuName}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
