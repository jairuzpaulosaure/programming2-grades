import { useEffect, useState } from "react";

import Card from "../ui/Card";
import Button from "../ui/Button";
import FeedbackSuccess from "./FeedbackSuccess";

import { FaCommentDots } from "react-icons/fa";

import {
    getFeedback,
    createFeedback,
    updateFeedback,
} from "../../services/FeedbackService";

const MAX = 500;

export default function FeedbackForm({ student }) {

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [feedbackId, setFeedbackId] = useState(null);

    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [enjoyed, setEnjoyed] = useState("");
    const [improvements, setImprovements] = useState("");
    const [advice, setAdvice] = useState("");


    useEffect(() => {
    loadFeedback();
        }, []);

        async function loadFeedback() {
            const { data, error } = await getFeedback(student.email);

            if (!error && data) {
                setFeedbackId(data.id);

                setEnjoyed(data.enjoyed ?? "");
                setImprovements(data.improvements ?? "");
                setAdvice(data.advice ?? "");

                setSubmitted(true);

                setOpen(true);
            }

            setLoading(false);
        }
        
    async function submitFeedback() {

        setSaving(true);

        const feedback = {
            enjoyed,
            improvements,
            advice,
        };

        let result;

        if (feedbackId) {

            result = await updateFeedback(
                feedbackId,
                feedback
            );

        } else {

            result = await createFeedback(
                student,
                feedback
            );

            if (result.data) {
                setFeedbackId(result.data.id);
            }

        }

        setSaving(false);

        if (result.error) {

            alert(result.error.message);
            return;

        }

        setSubmitted(true);

    }

    if (loading) {

        return (

            <Card className="mb-12 p-8">

                <div className="text-center">

                    <p className="text-slate-500">

                        Loading your feedback...

                    </p>

                </div>

            </Card>

        );

    }

    if (submitted) {

        return (
            <FeedbackSuccess
                onEdit={() => {

                    setSubmitted(false);
                    setOpen(true);

                }}
            />
        );

    }

    const canSubmit = enjoyed.trim().length > 0;

    return (

        <Card className="mb-12 p-8">

            <div className="flex items-center gap-3">

                <FaCommentDots className="text-2xl text-blue-600" />

                <div>

                    <h2 className="text-2xl font-bold">

                        Help Me Improve as an Instructor

                    </h2>

                    <p className="text-slate-500">

                        Your feedback is completely voluntary and
                        will NOT affect your grades in any way.

                    </p>

                </div>

            </div>

            {!open ? (

                <div className="mt-8">

                    <Button
                        onClick={() => setOpen(true)}
                    >
                        Yes, I'd Like to Help
                    </Button>

                </div>

            ) : (

                <div className="mt-8 space-y-8 transition-all duration-300">

                    <Question
                        label="Share what you enjoyed the most, memorable experiences, or anything you found helpful during the classes."
                        value={enjoyed}
                        onChange={setEnjoyed}
                    />

                    <Question
                        label="Constructive suggestions are always welcome."
                        value={improvements}
                        onChange={setImprovements} 
                    />

                    <Question
                        label="If you could give advice to next year's Programming students, what would it be?"
                        value={advice}
                        onChange={setAdvice}
                    />

                    <div className="flex justify-end gap-4">

                        <Button
                            variant="secondary"
                            onClick={() => setOpen(false)}
                        >
                            Maybe Later
                        </Button>

                        <Button
                            disabled={!canSubmit || saving}
                            onClick={submitFeedback}
                        >
                            {saving ? "Submitting..." : "Submit Feedback"}
                        </Button>

                    </div>

                </div>

            )}

        </Card>

    );

}

function Question({

    label,

    value,

    onChange,

}) {

    return (

        <div>

            <label className="font-semibold">

                {label}

            </label>

            <textarea

                rows={4}

                maxLength={MAX}

                value={value}

                onChange={(e) => onChange(e.target.value)}

                className="mt-2 w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"

            />

            <div className="mt-2 text-right text-sm text-slate-400">

                {value.length} / {MAX}

            </div>

        </div>

    );

}