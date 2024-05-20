import { getChildDepartments, getDepartmentMembers } from '@/app/lib/utils';
import DepartmentClient from './clientcomponent';

export default async function DepartmentServer(id: any) {
    var membersData = await getDepartmentMembers(id.toString());
    var childDeptData = await getChildDepartments(id.toString());
    return (
        // <DepartmentClient membersData={membersData} childDeptData={childDeptData}/>
        <div><pre>{JSON.stringify(membersData, null, 4)}</pre></div>
    )
}