import React from 'react';

const MenuLink = (props) => {
    return (
        <a style={{color: 'gray'}} href={props.link.url}>{props.link.name}</a>
    );
}

const MenuList = (props) => {
    return (
        <div>
            <ul>
                {
                    props.links.map(element => {
                        return (
                            <li key={element.id}>
                                <MenuLink link={element} />
                            </li>
                        )
                    })

                }
            </ul>
        </div>
    );
};

export default MenuList;