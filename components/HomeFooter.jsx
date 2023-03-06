export const HomeFooter = () => {
  return (
    <footer className="home-footer items-1">
      <div className="links flex col">
        <b>UNI-STORE</b>
        <div className="space-1"></div>
        <p className="text-left">
          There are many variations of passages of Lorem Ipsum means available,
          but the majority have suffered alteration in some form, by inject
          humour, or randomised words which don't look even slightly from the
          end of believable.
        </p>
        <div className="space-1"></div>

        <p>&copy; 2023 UNI-STORE</p>
      </div>
      <div className="links flex col ">
        <b>Explore</b>
        <div className="space-1"></div>
        <div className="text-left">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Store</a>
          <a href="#">Contact</a>
          <a href="#">Cart</a>
          
        </div>
      </div>
      <div className="links flex col">
        <b>Socials</b>
        <div className="space-1"></div>

        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Tiktok</a>
      </div>
    </footer>
  );
};
