"use client";
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
          backgroundColor: "white",
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
          {/* Menu Icon for Drawer on Left */}
          <div className="hamburger-menu">
            <MenuOutlined onClick={showDrawer} />
          </div>

          <h1
            style={{
              marginLeft: 10,
              fontSize: 25,
              fontWeight: 900,
              fontFamily: "raleway-v20-deprecated, sans-serif",
              fontStyle: "normal",
            }}
          >
            Zay.co
          </h1>

          {/* Drawer for Mobile Menu */}
          <Drawer
            title="Menu"
            placement="left"
            onClose={closeDrawer}
            open={drawerVisible}
          >
            <p>Shop</p>
            <p>On Sale</p>
            <p>New Arrivals</p>
            <p>Brand</p>
          </Drawer>

          {/* Full Menu for Larger Screens */}
          <div
            className="menu"
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              marginLeft: 9,
              marginRight: 8,
              width: "auto",
              fontSize: 13,
            }}
          >
            <p className="shop-item" style={{ marginRight: 7 }}>
              Shop
            </p>
            <p className="onsale-item" style={{ marginRight: 7 }}>
              On Sale
            </p>
            <p className="new-arrivals-item" style={{ marginRight: 7 }}>
              New Arrivals
            </p>
            <p className="brand-item" style={{ marginRight: 7 }}>
              Brand
            </p>
          </div>

          {/* Search Bar */}
          <div
            className="search-bar"
            style={{ width: 490, alignContent: "center" }}
          >
            <Input
              placeholder="Search product here"
              prefix={<SearchOutlined />}
              style={{
                borderRadius: 50,
                width: "100%",
                backgroundColor: "whitesmoke",
              }}
            />
          </div>

          {/* Cart, User, and Search Icons */}
          <div
            style={{
              display: "flex",
              width: 90,
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: 3,
            }}
          >
            <SearchOutlined onClick={toggleSearchInput} className="serchco" />
            <ShoppingCartOutlined />
            <UserOutlined />
          </div>
        </div>

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
          @media (max-width: 641px) {
            .menu,
            .search-bar,
            .shop-item,
            .new-arrivals-item,
            .brand-item,
            .onsale-item {
              display: none; /* Hide all menu items */
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
              display: flex;
            }
            .hamburger-menu {
              display: none;
            }
          }
        `}</style>
      </nav>
    </>
  );
};

export default NavBar;
