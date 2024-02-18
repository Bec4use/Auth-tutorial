import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
    const session = await auth();

    return ( 
        <div>
            {JSON.stringify(session)}
            <form action={async () => {
                "use server";
                await signOut();
            }}>
                <Button type="submit" className="mt-8 ml-2" variant="destructive">
                    Sign out
                </Button>
            </form>
        </div>
     );
}
 
export default SettingsPage;