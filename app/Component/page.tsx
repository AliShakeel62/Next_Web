import React, { useState } from "react";
import {
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Drawer } from "antd";

const NavBar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <>
      <nav
        style={{
          height: 50,
          backgroundColor: "bisque",
          alignContent: "center",
          padding: "0 20px",
        }}
      >
        
        <div
          className="center-content"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          <h1 style={{ fontSize: 30, fontWeight: "bolder" }}>Zay.co</h1>

          <div className="hamburger-menu" style={{ display: "none" }}>
          <MenuOutlined onClick={showDrawer} />
        </div>

        {/* Drawer for Mobile Menu */}
        <Drawer title="Menu" placement="left" onClose={closeDrawer} open={drawerVisible}>
          <p>Shop</p>
          <p>On Sale</p>
          <p>New Arrivals</p>
          <p>Brand</p>
        </Drawer>3xe3de3er554
          {/* Full Menu for Larger Screens */}
          <div
            className="menu"
            style={{
              backgroundColor: "blue",
              width: 280,
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <p>Shop</p>
            <p>On Sale</p>
            <p>New Arrivals</p>
            <p>Brand</p>
          </div>

          {/* Search Bar */}
          <div className="search-bar" style={{ width: 490, alignContent: "center" }}>
            <Input
              placeholder="Search product here"
              prefix={<SearchOutlined />}
              style={{ borderRadius: 50, width: "100%" }}
            />
          </div>

          {/* Cart, User, and Search Icons */}
          <div
            style={{
              display: "flex",
              backgroundColor: "brown",
              width: 90,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SearchOutlined onClick={toggleSearchInput} className="serchco" />
            <ShoppingCartOutlined />
            <UserOutlined />
          </div>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
      

        {/* Conditionally Render Search Input on Mobile */}
        {showSearchInput && (
          <div className="mobile-search-input">
            <Input
              placeholder="Search product here"
              style={{ width: "100%", borderRadius: 50, marginTop: 10 }}
            />
          </div>
        )}

        <style jsx>{`
          /* On mobile, hide the full menu, search bar, and center content */
          @media (max-width: 768px) {
            .menu,
            .search-bar,
            .center-content {
              display: none;
            }
            .serchco {
              display: block; /* Corrected this line */
              width: 20px; /* Corrected this line */
            }
            .hamburger-menu {
              display: block;
            }

            h1 {
              font-size: 24px;
            }
          }

          /* For screens wider than 768px, keep everything visible */
          @media (min-width: 769px) {
            .menu {
              display: flex; /* Apply display:flex here for larger screens */
            }
            .hamburger-menu {
              display: none;
            }
            .serchco {
              display: none;
            }
          }
        `}</style>
      </nav>
    </>
  );
};

export default NavBar;
