import DashboardHeader from "./_components/DashboardHeader";
import DashboardSidebar from "./_components/DashboardSidebar";

export default function UserDashboardLayout({ children }) {
  return (
    <div className="bg-userDashboardBG bg-no-repeat bg-cover bg-center h-dvh w-full grid grid-cols-12 px-5 lg:px-7.5 2xl:px-10 gap-5 lg:gap-7.5 2xl:gap-10">
      <div className="col-span-4 md:col-span-3 2xl:col-span-2 py-5 lg:py-7.5 2xl:py-10">
        <DashboardSidebar />
      </div>
      <div className="col-span-8 flex h-dvh flex-col md:col-span-9 2xl:col-span-10 py-5 lg:py-7.5 2xl:py-10">
        <DashboardHeader />
        <div className="mt-5 flex flex-grow overflow-auto">{children}</div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
}
