"use client"

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";


const SettingsPage =  () => {
    const session = useSession();
    const onClick = () => {
        logout();
    };

    return ( 
        <div>
            {JSON.stringify(session.data?.user)}
                <Button onClick={onClick} type="submit" className="mt-8 ml-2" variant="destructive">
                    Sign out
                </Button>
        </div>
     );
}
 
export default SettingsPage;