function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 18) return "Good Afternoon 🌤️";

    return "Good Evening 🌙";
}

export default function DashboardHeader({ student }) {

    const formattedDate = student.last_updated
        ? new Date(student.last_updated).toLocaleString("en-PH", {
              dateStyle: "long",
              timeStyle: "short",
          })
        : "Not Available";

    return (

        <section className="mb-14">

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                <p className="font-semibold text-blue-600">
                    {getGreeting()}
                </p>

                <h1 className="mt-2 text-4xl font-bold text-slate-800">
                    {student.fullname}
                </h1>

                <p className="mt-3 text-slate-500">
                    Student Number:{" "}
                    <span className="font-semibold">
                        {student.student_number}
                    </span>
                </p>

                <p className="text-slate-500">
                    Southville Account:{" "}
                    <span className="font-medium">
                        {student.email}
                    </span>
                </p>

                <div className="mt-6 border-t pt-6">

                    <p className="text-xs uppercase tracking-widest text-slate-400">
                        Grades Last Updated
                    </p>

                    <p className="mt-2 font-semibold text-slate-700">
                        {formattedDate}
                    </p>

                </div>

            </div>

        </section>

    );
}