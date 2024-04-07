

export function SignInForm() {
    return ( 
        <form className="text-white flex flex-col justify-center items-center gap-2 border border-[#C5722D] w-11/12 h-[60vh] py-10 mx-auto backdrop-blur rounded-md">
            <div className="flex gap-4">
                {/* <label htmlFor="email">email</label> */}
                <input type="email" id="LEmail" className="rounded-md p-1" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-4">
                {/* <label htmlFor="cPass">Password</label> */}
                <input type="password" id="LPass" className="rounded-md p-1" placeholder="Password" />
            </div>
            <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Sign In
            </button>
        </form>
    );
}


export function SignUpForm() {
    return (
        <form className="text-white flex flex-col justify-center items-center gap-2 border border-[#C5722D] w-11/12 h-[60vh] py-6 mx-auto backdrop-blur rounded-md">
            <div className="flex gap-4">
                {/* <label htmlFor="name">username</label> */}
                <input type="text" id="name" className="rounded-md p-1" placeholder="Name" />
            </div>
            <div className="flex gap-4">
                {/* <label htmlFor="email">email</label> */}
                <input type="email" id="email" className="rounded-md p-1" placeholder="Email" />
            </div>
            <div className="flex gap-4">
                {/* <label htmlFor="mobile">phone number</label> */}
                <input type="text" id="mobile" pattern="[0-9]{10}" className="rounded-md p-1" placeholder="Mobile Number" />
            </div>
            <div className="flex gap-4">
                <input type="radio" name="role" id="role" value="2" />
                <label htmlFor="role">Mentor</label>
                <input type="radio" name="role" id="role" value="1" />
                <label htmlFor="role">Mentee</label>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    {/* <label htmlFor="pass">Password</label> */}
                    <input type="password" id="pass" className="rounded-md p-1" placeholder="Password" />
                </div>
                <div>
                    {/* <label htmlFor="cPass">Confirm Password</label> */}
                    <input type="password" id="cPass" className="rounded-md p-1" placeholder="Confirm Password" />
                </div>
            </div>
            <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Sign Up
            </button>
        </form>

    );
}