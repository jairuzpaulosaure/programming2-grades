function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 18) return "Good Afternoon 🌤️";

    return "Good Evening 🌙";
}

export default function StudentHeader({ student }) {
    return (

        <section className="mb-10">

            <p className="text-blue-600 font-semibold">
                {getGreeting()}
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-800">
                {student.fullname}
            </h1>

            <p className="mt-2 text-slate-500">
                Student No. {student.student_number}
            </p>

            <p className="text-slate-400">
                {student.email}
            </p>

        </section>

    );
}