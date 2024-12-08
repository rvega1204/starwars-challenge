export const SidebarHeader = () => {
  return (
    <div className="flex flex-col items-center gap-2 rounded border p-4 sm:flex-row">
      <div className="avatar flex h-8 w-8 items-center justify-center rounded-full">
        <img src="/vader.png" alt="avatar" className="w-full" />
      </div>
      <div className="text-center sm:text-left">
        <p className="text-[16px] font-bold">Star Wars Challenge</p>
        <p>Interviews</p>
      </div>
    </div>
  );
};
