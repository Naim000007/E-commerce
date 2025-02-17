import { useState } from "react";

export default function Auth() {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="flex items-center justify-center h-[300px] mt-5">
            <div className="w-[300px] p-6">
                <h2 className="text-xl font-semibold text-center mb-4">
                    {isSignUp ? "Sign Up —" : "Login —"}
                </h2>
                <form className="space-y-3">
                    {isSignUp && (
                        <input
                            type="text" required
                            placeholder="Name"
                            className="w-full p-2 border rounded-md text-sm focus:outline-none"
                        />
                    )}
                    <input
                        type="email" required
                        placeholder="Email"
                        className="w-full p-2 border rounded-md text-sm focus:outline-none"
                    />
                    <input
                        type="password" required
                        placeholder="Password"
                        className="w-full p-2 border rounded-md text-sm focus:outline-none"
                    />
                    <div className="flex justify-between text-xs text-gray-600">
                        <a href="#" className="hover:underline">
                            Forgot password?
                        </a>
                        <button
                            type="button"
                            className="hover:underline"
                            onClick={() => setIsSignUp(!isSignUp)}
                        >
                            {isSignUp ? "Login Here" : "Create Account"}
                        </button>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded-md text-sm hover:bg-gray-900">
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
}
