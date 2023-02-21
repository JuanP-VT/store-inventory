import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import { Category } from "../../../interfaces";

//Bootstrap component
type CustomToggleProps = {
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {};
};

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
// eslint-disable-next-line react/display-name
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
// eslint-disable-next-line react/display-name
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
          placeholder="Find category..."
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

type Props = { categoryList: Category[] };
export const DropdownSelector = ({ categoryList: categoryList }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const theChosenCategory = () => {
    const chosenCategory: Category | undefined = categoryList.find(
      (f) => f.name === selectedCategory
    );
    return chosenCategory ? chosenCategory.name : "Select Category";
  };

  return (
    <Dropdown
      onSelect={(e: string | null) => setSelectedCategory(e ? String(e) : "")}
    >
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {theChosenCategory()}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item key="default" eventKey="default">
          All
        </Dropdown.Item>
        {categoryList.map((category) => {
          return (
            <Dropdown.Item
              key={category.name}
              eventKey={category.name.toString()}
            >
              {category.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
