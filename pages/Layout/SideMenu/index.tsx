import React from "react";
import {
  SideBar,
  Title,
  SideBarSearch,
  Button,
  MenuItem,
  SideBarSearchContainer,
  SideBarContent,
  Content,   
  LayoutWrapper,
  LinkMenu
} from "./styles";

import { usePathname } from "next/navigation";

type SideMenuProps = {
  children?: React.ReactElement
}

export default function SideMenu({children}: SideMenuProps) {
  const pathname = usePathname()

  return (
    <LayoutWrapper>
      {/* Side Bar */}
      <SideBar id="sidebar">
        <Title >Gaming Kingdom</Title>
        <SideBarSearchContainer>
          <SideBarSearch
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <Button>Go</Button>
        </SideBarSearchContainer>
        <SideBarContent>
          <MenuItem >
            <LinkMenu isactive={pathname === '/' ? 1 : 0} href={'/'}>Home</LinkMenu>
          </MenuItem>
          <MenuItem >
            <LinkMenu isactive={pathname === '/dashboard' ? 1 : 0} href={'/dashboard'}>Dashboard</LinkMenu>
          </MenuItem>
        </SideBarContent>
      </SideBar>
      {/* Content of page */}
      <Content>
        {children}
      </Content>
    </LayoutWrapper>
  );
}
