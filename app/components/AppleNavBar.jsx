function AppleNavBar() {
    return (
        <nav className="fixed left-0 right-0 top-0">
            <div className="text-neutral-400 mx-auto flex w-full max-w-7xl justify-between px-20 py-12 text-lg">
                <ul className="flex space-x-10">
                    <li className="cursor-pointer hover:text-white">Work</li>
                    <li className="cursor-pointer hover:text-white">About</li>
                    <li className="cursor-pointer hover:text-white">Resume</li>
                </ul>
                <ul className="flex space-x-6">
                    <li>Thursday, Aug 22</li>
                    <li>10:15 PM</li>
                </ul>
            </div>
        </nav>
    )
}

export default AppleNavBar
