import BarContainer from "./BarContainer";

const Navbar = () => {
  return (
    <nav className="px-8 py-4 flex items-center justify-between gap-x-6 gap-y-3 flex-wrap sm:flex-nowrap">
      <Title />
      <BarContainer />
    </nav>
  );
};

const Title = () => (
  <div className="min-w-fit flex items-center w-full sm:w-auto">
    <a href="/">
      <h3 className="font-bold text-4xl">
        green<span className="font-normal text-xl"> mkt</span>
      </h3>
    </a>
  </div>
);

export default Navbar;
