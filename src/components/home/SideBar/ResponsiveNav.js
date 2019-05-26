import React from 'react';
import styled from "styled-components";
import {Nav, NavItem, NavItemIcon, NavItemText} from "@zendeskgarden/react-chrome";



const ResponsiveNavWrapper = styled(Nav)`
    width: 100%;
    @media screen and (max-width: 700px) {
       order: ${ props => props.collapseOrder } 
    }  
`;


const ResponsiveNav = ({ expanded, items }) => (
    <ResponsiveNavWrapper expanded={expanded} light>
        {loopNavItems(items)}
    </ResponsiveNavWrapper>
);


const loopNavItems = (items) => items.map(({ icon, text, current }) => {
    return (
        <NavItem current={current}>
            {/*<NavItemIcon>
                {icon}
            </NavItemIcon>*/}
            <NavItemText>{text}</NavItemText>
        </NavItem>
    );
});

export default ResponsiveNav;