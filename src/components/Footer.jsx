import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export function Bottom() {
  return (
    <Footer container className="bg-[#fdf8f3]">
      <div className="w-full rounded-2xl bg-yellow-700 text-center md:mx-28 md:px-4 md:py-3">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-bold tracking-wide whitespace-nowrap text-white">
            BAKERY
          </span>
          <FooterLinkGroup className="text-white">
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">Menu</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright
          href="#"
          by="BAKERY™"
          year={2025}
          className="text-white"
        />
      </div>
    </Footer>
  );
}
