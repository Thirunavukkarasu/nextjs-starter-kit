import { FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { range } from "lodash";

export default function Home() {
  const products = [
    {
      title: "Order Landing Page",
      img: "./organic-landing-page.png",
    },
    {
      title: "Payment Landing Page",
      img: "./traffic-landing-page.png",
    },
    {
      title: "Marketing Landing Page",
      img: "./wfh-landing-page.png",
    },
    {
      title: "Sales Landing Page",
      img: "./gallery-page.png",
    },
    {
      title: "Finance Landing Page",
      img: "./pos-dashboard.png",
    },
    {
      title: "Digital Lending Landing Page",
      img: "./organic-landing-page.png",
    },
  ];

  return (
    <div>
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row items-center justify-between py-7 px-10 md:space-y-0 space-y-10">
        <div>
          <h1 className="text-2xl font-semibold loading-relaxed text-gray-800">
            Products
          </h1>
          <p className="text-sm font-medium text-gray-500">
            {`Let's grow to your business! Create your product and upload here`}
          </p>
        </div>
        <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
          <FaPlus size={20} />
          <span className="text-sm font-semibold tracking-wide">
            Create Item
          </span>
        </button>
      </div>
      {/* Page Content */}
      <div className="gap-x-6 gap-y-6 grid grid-cols-1 md:grid-cols-4 border-b border-b-gray-200">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="p-8 bg-white border border-gray-100 shadow hover:shadow-xl space-y-6"
          >
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              className="w-full aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
              src={product.img}
              alt="Product Preview"
            />
            <h1 className="text-xl text-center font-bold text-gray-600">
              {product.title}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-5 py-6">
        <button className="h-8 w-8 hover:text-indigo-500">
          <FaChevronLeft size={28} />
        </button>
        {range(1, 6).map((item: any, idx: any) => (
          <button
            key={idx}
            className="h-8 w-8 font-medium rounded-full text-gray-400 hover:text-indigo-500"
          >
            {item}
          </button>
        ))}
        <button className="h-8 w-8 hover:text-indigo-500">
          <FaChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
