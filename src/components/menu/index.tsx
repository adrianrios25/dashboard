import React, { memo } from "react";
import {
  useMenuState,
  Menu as ReakitMenu,
  MenuDisclosure,
  MenuItem
} from "reakit/Menu";

import Icon from "components/icon";

const Menu: React.FC<Props> = memo(({ items, title, icon }) => {
  const menu = useMenuState();
  return (
    <>
      <MenuDisclosure
        {...menu}
        aria-label={title}
        className="btn btn-unstyled btn-small"
      >
        <Icon name={icon} />
      </MenuDisclosure>
      <ReakitMenu
        {...menu}
        className="z-10 min-w-250 bg-color-panel border outline-none"
      >
        {items.map(item => {
          if (item === "separator")
            return <hr className="border-0 border-top m-0" />;
          return (
            <MenuItem
              {...menu}
              key={item.text}
              className="block w-full flex p-4 text-left text-2 text-color-default bg-color-panel border-0 no-focus outline-none hover event:bg-color-dim cursor-pointer"
              onClick={() => {
                item.onClick();
                menu.hide();
              }}
            >
              <Icon name={item.icon} position="left" />
              <span>{item.text}</span>
            </MenuItem>
          );
        })}
      </ReakitMenu>
    </>
  );
});

export interface MenuItemProps {
  text: string;
  icon: string;
  onClick: () => void;
}

export interface Props {
  icon: string;
  title: string;
  items: (MenuItemProps | "separator")[];
}

export default Menu;