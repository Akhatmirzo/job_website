import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import useDebounce from "../hook/useDebounce";

export default function NavbarItems() {
  const [search, setSearch] = useState()
  const denounceValue = useDebounce(search, 300)

  useEffect(() => {
    
  }, [])

  return (
    <div className="container">
      <Navbar fluid rounded>
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Jobs
          </span>
        </NavbarBrand>
        <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink>
            <Link to={"/"}>Home</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to={"/companies"}>Companies</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to={"/add/company"}>Add Company</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to={"/add/job"}>Add Jobs</Link>
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
