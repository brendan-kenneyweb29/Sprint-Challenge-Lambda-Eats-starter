import React, {useState} from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Dropdown () {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
  
    return (
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>

        <DropdownToggle caret>
          Choose a size:
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem>Small</DropdownItem>
          <DropdownItem>Medium</DropdownItem>
          <DropdownItem>Large</DropdownItem>
        </DropdownMenu>

      </ButtonDropdown>
    );
  }