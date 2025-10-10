import StaggeredMenu from "@/components/StaggeredMenu/StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/lerkooow" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/valeriia-akh/" },
];

export const Menu = () => {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      openMenuButtonColor="#000"
      changeMenuColorOnOpen={true}
      colors={["#5c0a5c", "#900090"]}
      logoUrl="/logo.svg"
      accentColor="#900090"
      onMenuOpen={() => console.log("Menu opened")}
      onMenuClose={() => console.log("Menu closed")}
      isFixed={true}
    />
  );
};
