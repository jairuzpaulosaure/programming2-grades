import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../lib/supabase";

import Navbar from "../components/layout/Navbar";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import GradeSection from "../components/dashboard/GradeSection";

import LoadingSpinner from "../components/ui/LoadingSpinner";
import EmptyState from "../components/ui/EmptyState";

import FeedbackForm from "../components/feedback/FeedbackForm";
import AnnouncementBanner from "../components/dashboard/AnnouncementBanner";

import ScrollButtons from "../components/ui/ScrollButtons";

export default function Dashboard() {

    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        loadStudent();

    }, []);

    async function loadStudent() {
        const {
            data: { user },
        } = await supabase.auth.getUser();

        setUser(user);

        const { data, error } = await supabase
            .from("programming2_grades")
            .select("*")
            .eq("email", user.email)
            .maybeSingle();

        if (error) {
            console.error(error);
        }

        setStudent(data);
        setLoading(false);
    }

    async function logout() {

        await supabase.auth.signOut();

        navigate("/");

    }

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!student) {
        return <EmptyState onLogout={logout} />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">

            <Navbar
                user={user}
                student={student}
                onLogout={logout}
            />

            <main className="mx-auto max-w-7xl px-6 py-14">

                <DashboardHeader
                    student={student}
                />

                <AnnouncementBanner />

                <FeedbackForm
                    student={student}
                />

                <GradeSection
                    student={student}
                />

            </main>

            <ScrollButtons />

        </div>
    );

}