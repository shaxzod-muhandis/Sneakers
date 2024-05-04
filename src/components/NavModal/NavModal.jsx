import Cross from "../../../public/assets/icons/cross.svg";
import "./navModal.css";
import PropTypes from "prop-types";
const navList = [
  { id: 1, text: "Collections", link: "#!" },
  { id: 2, text: "Men", link: "#!" },
  { id: 3, text: "Women", link: "#!" },
  { id: 4, text: "About", link: "#!" },
  { id: 5, text: "Contact", link: "#!" },
];
export function NavModal({ setIsNavModalActive }) {
  return (
    <div className="nav-modal--wrapper">
      <div className="modalContainer">
        <div className="cross" onClick={() => setIsNavModalActive(false)}>
          <Cross />
        </div>
      <nav className="navList">
        {navList.map((item=>{
            const {id,text,link} =item
            return(
                <li  key={id} ><a href={link}>{text}</a></li>
            )
        }))}
      </nav>
      </div>
    </div>
  );
}
NavModal.propTypes = {
  setIsNavModalActive: PropTypes.func,
};
