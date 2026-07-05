import { FaSpinner } from "react-icons/fa";

export default function LoadingSpinner() {
    return (
        <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">

            <FaSpinner
            className="mx-auto animate-spin text-4xl text-blue-600"
            />

            <p className="mt-4 text-slate-500">
            Loading your grades...
            </p>

        </div>
        </div>
    );
}