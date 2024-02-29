export function ForumInputBox({ label, placeholder, onChange,value}) {
  return (
    <div>
      <div className="flex justify-center ">
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="w-[550px] h-16 px-4 py-1 rounded-2xl border-slate-200 bg-inputbox2 my-[15px] text-text text-xl"
        value={value}
      />
      </div>
      
    </div>
  );
}
