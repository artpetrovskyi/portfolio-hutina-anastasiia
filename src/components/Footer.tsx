export default function Footer() {
  return (
    <footer className="relative container pt-20 pb-12">
      <div className="ibg hidden pb-[22%] md:block">
        <img
          src="./images/footer_desktop.png"
          alt="footer"
          className="pointer-events-none object-contain"
          width={1408}
          height={310}
        />
      </div>
      <div className="ibg pb-[52%] md:hidden">
        <img
          src="./images/footer_mobile.png"
          alt="footer"
          className="pointer-events-none object-contain"
          width={724}
          height={376}
        />
      </div>
    </footer>
  );
}
