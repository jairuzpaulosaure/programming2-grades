import { useState } from "react";
import { FaInfoCircle, FaTimes, FaEnvelope } from "react-icons/fa";

export default function AnnouncementBanner() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="mb-10 rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">

            <div className="flex items-start justify-between">

                <div className="flex gap-4">

                    <FaInfoCircle className="mt-1 text-xl text-blue-600" />

                    <div>

                        <h3 className="font-semibold text-blue-800">
                            Important Notice
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-700">
                            If you have questions regarding your Programming 2
                            grades, please contact your instructor via email.
                        </p>

                        <div className="mt-3 flex items-center gap-2 text-blue-700 font-medium">

                            <FaEnvelope />

                            <a
                                href="mailto:jairuz_saure@southville.edu.ph"
                                className="hover:underline"
                            >
                                jairuz_saure@southville.edu.ph
                            </a>

                        </div>

                        <p className="mt-2 text-sm font-medium text-red-600">
                            Grade inquiries are accepted until
                            <br />
                            <strong>July 6, 2026 • 5:00 PM</strong>
                        </p>

                    </div>

                </div>

                <button
                    onClick={() => setVisible(false)}
                    className="rounded-lg p-2 hover:bg-blue-100 cursor-pointer"
                >
                    <FaTimes />
                </button>

            </div>

        </div>
    );
}