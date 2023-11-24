import SearchBar from "./SearchBar";
import SortButton from "./SortButton";

const BarContainer = () => {
  return (
    <div className="max-w-4xl w-full rounded-full h-12 bg-stone-300 flex items-center cursor-text overflow-hidden">
      <SearchBar />
      <div className="bg-stone-400 w-px h-6" />
      <SortButton />
    </div>
  );
};

export default BarContainer;
