
import TaskTracker from "@/components/TaskTracker"
import Sidebar from "@/components/Sidebar";
import Weather from "@/components/Weather";
import CreatePost from "@/components/CreatePost";
import AccountForm from "@/components/Account";

export default function Home() {

    return (
        <>
            <Sidebar />
            <h3 className="text-2xl text-center">Account</h3>
            <hr className="border-2 border-gray-200 my-4 rounded-full w-1/2 mx-auto" />

            <div className='w-1/2 mx-auto'>
                <AccountForm></AccountForm>
            </div>
            

        </>
    )
}

