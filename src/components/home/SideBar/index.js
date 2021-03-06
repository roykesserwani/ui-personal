import {Sidebar} from "@zendeskgarden/react-chrome";
import React from "react";
import styled from "styled-components";


const ResponsiveSideBarWrapper = styled(Sidebar)`
    @media screen and (max-width: 700px) {
       width: 100%;
       height: auto;
       padding: 0px;
    }
    display: flex;
    flex-direction: column;
    padding: 28px;
    width: 400px;
`;


const ResponsiveSideBar = ({ children }) => (
    <ResponsiveSideBarWrapper>
        {children}
    </ResponsiveSideBarWrapper>
);


export default ResponsiveSideBar;




