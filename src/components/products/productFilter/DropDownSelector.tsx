import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import { Categorie } from "../../../interfaces";

//Bootstrap component
type CustomToggleProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {};
};

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(
  (props: CustomToggleProps, ref: React.Ref<HTMLAnchorElement>) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        if (props.onClick) props.onClick(e);
      }}
    >
      {props.children}
      <span style={{ paddingLeft: "5px" }}>&#x25bc;</span>
    </a>
  )
);

type CustomMenuProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  labeledBy?: string;
};

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  (props: CustomMenuProps, ref: React.Ref<HTMLDivElement>) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={props.style}
        className={props.className}
        aria-labelledby={props.labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Find categorie..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(props.children).filter(
            (child: any) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

type Props = { categorieList: Categorie[] };
export const DropdownSelector = ({ categorieList }: Props) => {
  const [selectedCategorie, setSelectedCategorie] = useState("");

  const theChosenCategorie = () => {
    const chosenCategorie: Categorie | undefined = categorieList.find(
      (f) => f.name === selectedCategorie
    );
    return chosenCategorie ? chosenCategorie.name : "Select Categorie";
  };

  return (
    <Dropdown
      onSelect={(e: string | null) => setSelectedCategorie(e ? String(e) : "")}
    >
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {theChosenCategorie()}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item key="default" eventKey="default">
          All
        </Dropdown.Item>
        {categorieList.map((categorie) => {
          return (
            <Dropdown.Item
              key={categorie.name}
              eventKey={categorie.name.toString()}
            >
              {categorie.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
