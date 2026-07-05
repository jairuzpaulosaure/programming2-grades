import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaSignOutAlt } from "react-icons/fa";

import logo from "../../assets/logo.png";

export default function Navbar({ user, student, onLogout }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">

            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

                <div className="flex items-center gap-4">

                    <img
                        src={logo}
                        alt="Southville Logo"
                        className="h-14 w-14 object-contain"
                    />

                    <h1 className="text-lg font-bold md:hidden">
                        Programming 2
                    </h1>

                    <div className="hidden md:block">

                        <h1 className="font-bold text-slate-800 leading-tight">

                            Asian SEED Academy of Technology (ASAT)

                        </h1>

                        <p className="text-sm text-blue-600 font-medium">

                            Programming 2 Student Grade Portal

                        </p>

                        <p className="text-xs text-slate-400">

                            Second Semester • AY 2025–2026

                        </p>

                    </div>

                </div>

                <div
                    className="relative"
                    ref={dropdownRef}
                >

                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-3 cursor-pointer rounded-xl px-3 py-2 transition hover:bg-slate-100"
                    >

                        <img
                            src={user.user_metadata.avatar_url}
                            alt="Profile"
                            className="h-11 w-11 rounded-full border"
                        />

                        <div className="hidden text-left md:block">

                            <p className="font-semibold">
                                {student.fullname}
                            </p>

                            <p className="text-xs text-slate-500">
                                {student.student_number}
                            </p>

                        </div>

                        <FaChevronDown
                            className={`transition duration-300 ${
                                open ? "rotate-180" : ""
                            }`}
                        />

                    </button>

                    {open && (

                        <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

                            <div className="border-b p-5">

                                <div className="flex items-center gap-4">

                                    <img
                                        src={user.user_metadata.avatar_url}
                                        alt="Profile"
                                        className="h-14 w-14 rounded-full"
                                    />

                                    <div>

                                        <h3 className="font-semibold">
                                            {student.fullname}
                                        </h3>

                                        <p
                                            className="max-w-[170px] truncate text-sm text-slate-500"
                                            title={student.email}
                                        >
                                            {student.email}
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <button
                                onClick={onLogout}
                                className="flex w-full items-center gap-3 px-5 py-4 text-red-600 transition hover:bg-red-50 cursor-pointer"
                            >

                                <FaSignOutAlt />

                                Logout

                            </button>

                        </div>

                    )}

                </div>

            </div>

        </header>
    );
}