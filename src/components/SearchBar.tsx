import { ChangeEvent, useEffect, useState } from "react";
import useSearchParams from "../hooks/useSearchParams";
import useDebounce from "../hooks/useDebounce";

const SearchBar = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const nameParam = searchParams.get("name");
    if (nameParam && nameParam.length > 0) {
      setText(nameParam);
    }
  }, []);

  useEffect(() => {
    if (debouncedText.length > 0) {
      searchParams.set("name", debouncedText);
      setSearchParams(searchParams);
    } else if (searchParams.has("name")) {
      searchParams.delete("name");
      setSearchParams(searchParams);
    }
  }, [debouncedText]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <input
      className="bg-transparent px-5 grow outline-none placeholder:text-neutral-500 w-full h-full"
      type="text"
      placeholder="Type product name"
      value={text}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
