import { HashLink } from "react-router-hash-link";
type INavbarItem = {
  link: string;
  text: string;
  padding?: string;
};

const NavbarItem = (props: INavbarItem) => {
  return (
    <>
      <HashLink
        smooth
        to={props.link}
        className={`hover:text-violet-400 duration-500 text-center ${props.padding}`}
      >
        {props.text}
      </HashLink>
    </>
  );
};

export default NavbarItem;
