import GradeCard from "../grades/GradeCard";

export default function GradeSection({ student }) {
    return (
        <div className="grid gap-8 lg:grid-cols-3">

            <GradeCard
                title="Prelims"
                machineProblems={student.prelim_machine_problems}
                quizzes={student.prelim_quizzes}
                participation={student.prelim_participation}
                exam={student.prelim_exam}
                finalGrade={student.prelim_grade}
            />

            <GradeCard
                title="Midterms"
                machineProblems={student.midterm_machine_problems}
                quizzes={student.midterm_quizzes}
                participation={student.midterm_participation}
                exam={student.midterm_exam}
                finalGrade={student.midterm_grade}
            />

            <GradeCard
                title="Finals"
                machineProblems={student.finals_machine_problems}
                quizzes={student.finals_quizzes}
                participation={student.finals_participation}
                exam={student.finals_exam}
                finalGrade={student.finals_grade}
            />

        </div>
    );
}