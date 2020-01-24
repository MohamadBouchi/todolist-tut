import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from "react-icons/fa";

export const Sidebar = () => (
  <div className="sidebar" data-test-id="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <FaInbox></FaInbox>
        </span>
        <span>Inbox</span>
      </li>
      <li>
        <span>
          <FaRegCalendar></FaRegCalendar>
        </span>
        <span>Today</span>
      </li>
      <li>
        <span>
          <FaRegCalendarAlt></FaRegCalendarAlt>
        </span>
        <span>Next 7 days</span>
      </li>
    </ul>
    <div className="sidebar__middle">
      <span>
        <FaChevronDown></FaChevronDown>
        <h2>Projects</h2>
      </span>
    </div>
    <ul className="sidebar__projects">Projects</ul>
    Add Project
  </div>
);
