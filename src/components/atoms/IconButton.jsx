export default function IconButton({ icon, onTap }) {
  return (
    <button
      onClick={onTap}
      className="px-2 py-2 bg-red-100 rounded-xl text-xs font-bold text-red-700 hover:bg-red-200 active:bg-red-300 active:transform active:scale-75"
    >
      {icon}
    </button>
  );
}
