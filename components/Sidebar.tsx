import React, { FC } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

export type Props = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = (props: Props) => {
  return (
    <Wrapper>
      <div
        className={
          props.isSidebarOpen
            ? "sidebar-container show-sidebar"
            : "sidebar-container"
        }
      >
        <section className="content">
          <header className="content-header">
            <button className="btn-close" onClick={props.toggleSidebar}>
              <FaTimes />
            </button>
          </header>
          <ul className="nav-links">
            <li>
              <Link className="link" href="/" onClick={props.toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link" href="">
                Projects
              </Link>
            </li>
            <li>
              <Link className="link" href="/about" onClick={props.toggleSidebar}>
                About
              </Link>
            </li>
            <li>
              <Link className="link" href="">
                Contact
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    /* background: green; */
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    height: 100%;

    .content {
      /* border: 1px solid grey; */
      /* padding: 30px; */

      .content-header {
        display: flex;
        justify-content: end;
      }
      .nav-links {
        width: fit-content;
        flex-direction: column;
        transform: translate(100);

        li {
          margin-bottom: 20px;

          .link {
            margin-bottom: 50px;
            color: #7b8d93;

            :hover {
              color: orange;
            }
          }
        }
      }
    }
  }

  .btn-close {
    background-color: transparent;
    display: flex;
    height: 25px;
    width: 25px;
    align-items: center;
    border-radius: 50%;
    color: #7b8d93;
    cursor: pointer;

    :hover {
      color: orange;
    }
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
`;

export default Sidebar;
