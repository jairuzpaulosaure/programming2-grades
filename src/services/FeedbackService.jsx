import { supabase } from "../lib/supabase";

export async function getFeedback(email) {
    const { data, error } = await supabase
        .from("instructor_feedback")
        .select("*")
        .eq("email", email)
        .maybeSingle();

    return { data, error };
}

export async function createFeedback(student, feedback) {
    return await supabase
        .from("instructor_feedback")
        .insert({
            student_number: student.student_number,
            fullname: student.fullname,
            email: student.email,
            enjoyed: feedback.enjoyed,
            improvements: feedback.improvements,
            advice: feedback.advice,
            subject: "Programming 2",
            semester: "Second Semester",
            academic_year: "2025-2026",
        })
        .select()
        .single();
}

export async function updateFeedback(id, feedback) {
    return await supabase
        .from("instructor_feedback")
        .update({
            enjoyed: feedback.enjoyed,
            improvements: feedback.improvements,
            advice: feedback.advice,
        })
        .eq("id", id)
        .select()
        .single();
}