interface Props {
  productName: string;
  rate: number;
}

const ProductContainer = ({ productName, rate }: Props) => {
  return (
    <div className="bg-[#e1dcdb] rounded-lg px-5 py-3 h-64">
      <div className="bg-stone-300 h-32 border-2 border-stone-400 flex justify-center items-center text-xs text-stone-500 rounded-md mb-4">
        (image)
      </div>
      <p>{productName}</p>
      <p className="text-sm">Environment point: {rate}</p>
    </div>
  );
};

export default ProductContainer;
