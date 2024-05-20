import { notFound } from 'next/navigation';
import ProgramTabs2 from './programs-tabs';
import { getMajors } from '../lib/utils';

  
export default async function ServerProgramTabs() {
    const bachelor_programs = await getMajors("Bachelor Programs");  
    const master_programs = await getMajors("Master Programs");
    
  
    if (!bachelor_programs) {
        console.log("DEBUG: No bachelor programs data found!");
        notFound();
    }


    if (!master_programs) {
        console.log("DEBUG: No master programs data found!");
        notFound();
    }


    return (
        <div>
            <ProgramTabs2 bachelor_programs={bachelor_programs} master_programs={master_programs}/>
        </div>
    )
  }