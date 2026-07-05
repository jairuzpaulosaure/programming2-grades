import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ onClick }) {
    return (
        <button
        type="button"
        onClick={onClick}
        className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            border
            border-gray-300
            bg-white
            px-6
            py-3
            shadow-sm
            transition-all
            duration-200
            hover:bg-gray-50
            hover:shadow-md
            active:scale-[0.98]
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            cursor-pointer
        "
        >
        <FcGoogle
            size={22}
            className="transition-transform duration-200 group-hover:scale-110"
        />

        <span className="font-medium text-gray-700">
            Continue with Google
        </span>
        </button>
    );
}