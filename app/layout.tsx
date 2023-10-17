"use client";
import React from "react"
import './index.css'
import GlobalFonts from "./../pages/Components/Types/_fonts/_fonts";
import { Wrapper } from "./../pages/Layout/Global";
import { Provider } from "react-redux";
import Store from "./../pages/Redux/store";
import StyledComponentsRegistry from "../pages/libs/registry";
import SideMenu from "../pages/Layout/SideMenu";

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactElement
  }) {

    return (
      <html lang="en">
        <body>
        <React.StrictMode>
          <Provider store={Store}>
              <StyledComponentsRegistry>
                <Wrapper>
                  <GlobalFonts/>
                  <SideMenu>
                    {children}
                  </SideMenu>
                </Wrapper>
              </StyledComponentsRegistry>
          </Provider>
        </React.StrictMode>
        </body>
      </html>
    )
  }