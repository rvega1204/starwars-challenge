export const SidebarHeader = () => {
  return (
    <div className="flex items-center justify-between gap-2 rounded border p-4">
      <div className="avatar h-8 w-8 rounded-full bg-emerald-500"></div>
      <div className="">
        <p className="text-[16px] font-bold">Star Wars Challenge</p>
        <p>Interviews</p>
      </div>
    </div>
  );
};
