import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaCircleCheck } from "react-icons/fa6";

export default function FeedbackSuccess({ onEdit }) {

    return (

        <Card className="mb-12 p-8">

            <div className="flex flex-col items-center text-center">

                <FaCircleCheck className="text-6xl text-green-500" />

                <h2 className="mt-6 text-3xl font-bold">
                    Thank You!
                </h2>

                <p className="mt-4 max-w-lg text-slate-600">

                    Your feedback has been successfully saved.

                </p>

                <p className="mt-2 max-w-xl text-slate-500">

                    Thank you for taking the time to share your experience.
                    Your comments will help me improve as an instructor and create
                    a better learning experience for future Programming students.

                </p>

                <p className="mt-4 text-sm font-medium text-blue-600">

                    You may edit your feedback until the submission deadline.

                </p>

                <Button
                    variant="secondary"
                    className="!cursor-pointer mt-8"
                    onClick={onEdit}
                >
                    Edit Feedback
                </Button>

            </div>

        </Card>

    );

}