
'use client'
import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Avatar, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import SearchIcon from '@mui/icons-material/Search';
import { useUser } from "@supabase/auth-helpers-react";
import { get } from "http";
import { getSupportedArchTriples } from "next/dist/build/swc";
import { type } from "os";

// signout post request
function signout() {
  fetch("/auth/signout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200) {
        window.location.href = "/";
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  var [email, setEmail] = React.useState("pranavv1@umbc.edu");
  const name = "User";

  useEffect(() => {
    fetch("/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {

        if (res.status === 200) {
          res.json().then((data) => {
            setEmail(data.email);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  const menuItems = [
    "Profile",
    "Feed",
    "Dashboard",
    "Activity",
  ];

  const menuItemsHref = [
    "/profile",
    "/feed",
    "/dashboard",
    "/",
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} height="60px">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=""
          />
          <NavbarBrand>
            <img src="/Drift.svg" alt="logo" className="h-5 " />
            {/* <p className="font-bold text-inherit">ACME</p> */}
          </NavbarBrand>

          <NavbarMenu
            aria-label="Main navigation"
            className=" sm:flex sm:ml-auto"
          >
            {menuItems.map((item) => (
              <NavbarMenuItem key={item} >
                <Link href={menuItemsHref[menuItems.indexOf(item)]}>
                  {item}
                </Link>
                </NavbarMenuItem>
            ))}
          </NavbarMenu>

        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[15rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={
              <SearchIcon />}
            type="search"
          />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />


            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">

              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{email}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              {/* <DropdownItem key="team_settings">Team Settings</DropdownItem> */}
              {/* <DropdownItem key="analytics">Analytics</DropdownItem> */}
              {/* <DropdownItem key="system">System</DropdownItem> */}
              {/* <DropdownItem key="configurations">Configurations</DropdownItem> */}
              {/* <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
              <DropdownItem key="logout" color="danger" onClick={signout}>
                <p className="font-semibold">Log Out</p>
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

      </Navbar>


    </>


  );
}
