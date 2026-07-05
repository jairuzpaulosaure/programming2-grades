import { supabase } from "../lib/supabase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import GoogleButton from "../components/ui/GoogleButton";

import logo from "../assets/logo.png";

export default function Login() {

    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            if (data.session) {
                navigate("/dashboard", { replace: true });
            }
        });
    }, [navigate]);

    async function login() {
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${window.location.origin}/dashboard`,
            },
        });
    }

    return (

        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-100 to-indigo-100 flex items-center justify-center px-6">

            {/* Background Decorations */}
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl"></div>

            {/* Login Card */}
            <div className="
                relative
                w-full
                max-w-md
                rounded-3xl
                border
                border-white/30
                bg-white/80
                backdrop-blur-xl
                shadow-2xl
                p-10
                ">

                <img
                    src={logo}
                    alt="Southville Logo"
                    className="w-24 h-24 mx-auto"
                />

                <h1 className="mt-6 text-center text-3xl font-bold text-slate-800">
                    Programming 2
                </h1>

                <p className="mt-2 text-center text-slate-500">
                    Grades Portal
                </p>

                <p className="mt-1 text-center text-sm text-slate-400">
                    Second Semester • AY 2025–2026
                </p>

                <div className="my-8 border-t" />

                <p className="text-center text-slate-600 mb-6">
                    Sign in using your official
                    <br />
                    Southville Google Account
                </p>

                <GoogleButton
                    className="cursor-pointer"
                    onClick={login}
                />

                <p className="mt-10 text-center text-xs text-slate-400">
                    © 2025–2026
                    <br />
                    Developed by Mr. Jairuz Paulo Saure, MIT
                </p>

            </div>

        </div>

    );
}