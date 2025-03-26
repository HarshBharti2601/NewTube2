import { Sidebar,SidebarContent } from "@/components/ui/sidebar"
import { MainSection } from "./main-section"
import { Separator } from "@/components/ui/separator";
import { PersonalSection } from "./personal-section";


export const HomeSidebar = ()=>{
    return(
        <Sidebar className="fixed left-0 top-16 h-full z-40 border-none" collapsible="icon">
        <SidebarContent className="bg-background">
         <MainSection/>
         <Separator/>
         <PersonalSection/>
        </SidebarContent>
        </Sidebar>
    );
};