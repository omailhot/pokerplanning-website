const Card = (props: { title?: string | null; description?: any; isSelected?: boolean }) => {
  return (
    <div className={`p-5 m-3 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900 
      ${props.isSelected ? "bg-gray-300 dark:bg-gray-900" : "bg-slate-50 dark:bg-gray-800"}`}>
      {props.title && <h5 className="text-gray-900 dark:text-slate-50">{props.title}</h5>}
      {props.description && <div className="mt-2 text-gray-700 dark:text-gray-400">{props.description}</div>}
    </div>
  );
};

export default Card;