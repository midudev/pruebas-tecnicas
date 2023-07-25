import SideBar from "./SideBar";

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-14">
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[16rem] h-full bg-base-200 overflow-auto">
                    <SideBar />
                </ul>
            </div>
        </div>
    );
}
