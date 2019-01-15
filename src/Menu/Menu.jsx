import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {

    state = {
        menu: [
            {name: "Blog", id: "1", url: ''},
            {name: "Add post", id: "2", url: 'add-post'},
        ]
    }

    render() {
    return (
        <div>
             <div className="menu__wrapper">
                {this.state.menu.map(el => 
                    <NavLink exact to={`/${el.url}`} key={el.id}>
                        <div className="menu__item">{el.name}</div>
                    </NavLink>
                    )}
             </div>
        </div>
    );
}
}

export default Menu;