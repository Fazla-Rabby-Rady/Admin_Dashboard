import { NavLink } from "react-router-dom"
import "./menu.scss"
import {menu} from '../../data';

const Menu = () => {
  return (
    <>
      <div className="menu">
        {menu.map((item) => (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => (
              <NavLink
                to={listItem.url}
                className="listItem"
                key={listItem.id}

                style={({ isActive}) => {
                  return {
                    backgroundColor:isActive?"#181818":" ",
                  };
                }}
              >
                <img src={listItem.icons} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
              </NavLink>
            ))}
          </div>
        ))}

        
      </div>
    </>
  );
}

export default Menu