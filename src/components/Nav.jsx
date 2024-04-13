import { MdMenu } from "react-icons/md";

export default function Nav({ title }) {
  return (
    <div className="px-2 py-2 text-2xl flex space-x-4">
      <button className="px-2 py-2 bg-red-100 rounded-xl text-xs font-bold text-red-700 hover:bg-red-300">
        <MdMenu color="red" size={18}></MdMenu>
      </button>
      <h1>{title}</h1>
    </div>
  );
}
