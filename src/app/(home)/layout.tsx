import { HomeLayout } from "@/modules/home/ui/layouts/homelayout";



interface LayoutProps{
    children:React.ReactNode;
};

const Layout = ({children}:LayoutProps)=>{
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    );
};

export default Layout;