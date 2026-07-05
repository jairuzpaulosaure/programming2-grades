import Card from "./Card";
import Button from "./Button";
import { FaTriangleExclamation } from "react-icons/fa6";

export default function EmptyState({ onLogout }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

        <Card className="max-w-md p-8 text-center">

            <FaTriangleExclamation
            className="mx-auto text-5xl text-yellow-500"
            />

            <h1 className="mt-5 text-2xl font-bold">
            No Grade Record Found
            </h1>

            <p className="mt-3 text-slate-600">
            Your Programming 2 grade record is not yet available.
            </p>

            <p className="mt-2 text-sm text-slate-500">
            Please contact your instructor if you believe this is an error.
            </p>

            <div className="mt-8">
            <Button variant="danger" onClick={onLogout}>
                Logout
            </Button>
            </div>

        </Card>

        </div>
    );
}