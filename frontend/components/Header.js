import { useState } from "react";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import NProgress from "nprogress";
// Do not import "Router" as <--Import {Router} from 'next/router--> !!!
import Router from "next/router";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Search from "./blog/Search";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink className="font-weight-bold text-dark">{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        {/* <Search /> */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <>
              <NavItem>
                <Link href="/blogs">
                  <NavLink>Blogs</NavLink>
                </Link>
              </NavItem>
            </>

            {!isAuth() && (
              <>
                <NavItem>
                  <Link href="/signin">
                    <NavLink>SignIn</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink>SignUp</NavLink>
                  </Link>
                </NavItem>
              </>
            )}
            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink>{`${isAuth().name}'s DashBoard`}</NavLink>
                </Link>
              </NavItem>
            )}
            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink>{`${isAuth().name}'s DashBoard`}</NavLink>
                </Link>
              </NavItem>
            )}
            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  SignOut
                </NavLink>
              </NavItem>
            )}
            <NavItem>
              <Link href="/user/crud/blog">
                <NavLink className="btn btn-primary text-light">
                  Write a blog
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Search />
    </>
  );
};

export default Header;
