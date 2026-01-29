import Account from "./account";
import Notification from "./notification";
import Searchbar from "./searchbar";

export default function Navbar() {
    return (
        <div className="h-16 bg-white shadow-md shadow-neutral-300/20 p-4 flex items-center justify-between">
            <h2>Hi Alex, Good Morning!</h2>
            <div className="flex items-center gap-x-8">
                <Searchbar />
                <div className="gap-x-3 flex items-center">
                    <Notification />
                    <Account />
                </div>
            </div>
        </div>
    )
}
