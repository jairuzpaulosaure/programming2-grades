export default function Button({
    children,
    onClick,
    variant = "primary",
    className = "",
    disabled = false,
}) {

    const styles = {
        primary:
            "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer",

        danger:
            "bg-red-600 hover:bg-red-700 text-white cursor-pointer",

        secondary:
            "bg-slate-200 hover:bg-slate-300 text-slate-700 cursor-pointer",
    };

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={`rounded-xl px-5 py-3 font-medium transition cursor-pointer
                ${styles[variant]}
                ${disabled ? "cursor-not-allowed opacity-50" : ""}
                ${className}`}
        >
            {children}
        </button>
    );
}