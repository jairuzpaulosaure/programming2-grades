import Card from "../ui/Card";
import { FaBookOpen } from "react-icons/fa";

const themes = {
    Prelims: {
        icon: "text-blue-600",
        badge: "bg-blue-100 text-blue-700",
        header: "bg-blue-50",
        grade: "text-blue-600",
    },

    Midterms: {
        icon: "text-orange-600",
        badge: "bg-orange-100 text-orange-700",
        header: "bg-orange-50",
        grade: "text-orange-600",
    },

    Finals: {
        icon: "text-green-600",
        badge: "bg-green-100 text-green-700",
        header: "bg-green-50",
        grade: "text-green-600",
    },
};

const TERM_CONFIG = {
    Prelims: {
        examLabel: "Prelims Exam",
        theme: themes.Prelims,
        weights: {
            machineProblems: "30%",
            quizzes: "20%",
            participation: "10%",
            exam: "40%",
        },
    },

    Midterms: {
        examLabel: "Midterm Exam",
        theme: themes.Midterms,
        weights: {
            machineProblems: "30%",
            quizzes: "20%",
            participation: "10%",
            exam: "40%",
        },
    },

    Finals: {
        examLabel: "Finals Exam",
        theme: themes.Finals,
        weights: {
            machineProblems: "30%",
            quizzes: "20%",
            participation: "10%",
            exam: "40%",
        },
    },
};

export default function GradeCard({
    title,
    machineProblems,
    quizzes,
    participation,
    exam,
    finalGrade,
}) {

    const config = TERM_CONFIG[title];

    const theme = config.theme;

    const released =
        finalGrade !== null &&
        finalGrade !== undefined &&
        finalGrade !== "";

    return (

        <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className={`border-b ${theme.header} px-6 py-5`}>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <FaBookOpen className={theme.icon} />

                        <h2 className="text-xl font-bold">
                            {title}
                        </h2>

                    </div>

                    <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            released
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                        {released ? "Released" : "Not Yet Released"}
                    </span>

                </div>

            </div>

            <div className="space-y-5 p-6">

                <Row
                    label="Machine Problems"
                    weight={config.weights.machineProblems}
                    value={machineProblems}
                    theme={theme}
                />

                <Row
                    label="Quizzes"
                    weight={config.weights.quizzes}
                    value={quizzes}
                    theme={theme}
                />

                <Row
                    label="Participation / Presentation"
                    weight={config.weights.participation}
                    value={participation}
                    theme={theme}
                />

                <Row
                    label={config.examLabel}
                    weight={config.weights.exam}
                    value={exam}
                    theme={theme}
                />

            </div>

            <div className="border-t bg-slate-50 p-6">

                <div className="rounded-2xl bg-white p-5 shadow-sm">

                    <p className="text-center text-xs uppercase tracking-widest text-slate-400">
                        Final Grade
                    </p>

                    <h1 className={`mt-2 text-center text-5xl font-bold ${theme.grade}`}>
                        {released ? finalGrade : "--"}
                    </h1>

                </div>

            </div>

        </Card>

    );
}

function Row({ label, weight, value, theme }) {

    return (

        <div className="flex items-center justify-between">

            <div>

                <p className="font-medium text-slate-700">
                    {label}
                </p>

            </div>

            <div className="flex items-center gap-3">

                <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${theme.badge}`}
                >
                    {weight}
                </span>

                <span className="w-14 text-right font-semibold">
                    {value ?? "--"}
                </span>

            </div>

        </div>

    );

}