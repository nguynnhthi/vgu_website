
import Header from '@/app/components/header';
import { getChildDepartments, getDepartmentMembers } from '@/app/lib/utils';
import Footer from '@/app/components/footer';
import DepartmentClient from './clientcomponent';


export default async function Page({params}: any) {
    var pageID = params.id;
    var membersData = await getDepartmentMembers(pageID);
    var childDeptData = await getChildDepartments(pageID);
    return (
        <main>
            <Header/>
            <DepartmentClient membersData={membersData} childDeptData={childDeptData}/>
            <Footer/>
        </main>

    )

    
}