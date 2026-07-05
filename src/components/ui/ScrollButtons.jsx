import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function ScrollButtons() {

    const [showTop, setShowTop] = useState(false);

    const [showBottom, setShowBottom] = useState(true);

    useEffect(() => {

        function handleScroll() {

            const scrollTop = window.scrollY;

            const max =
                document.documentElement.scrollHeight -
                window.innerHeight;

            setShowTop(scrollTop > 250);

            setShowBottom(scrollTop < max - 250);

        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

            {showTop && (

                <button
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    className="rounded-full bg-blue-600 p-4 text-white shadow-lg transition hover:scale-110 hover:bg-blue-700 cursor-pointer"
                >
                    <FaArrowUp />
                </button>

            )}

            {showBottom && (

                <button
                    onClick={() =>
                        window.scrollTo({
                            top: document.body.scrollHeight,
                            behavior: "smooth",
                        })
                    }
                    className="rounded-full bg-slate-700 p-4 text-white shadow-lg transition hover:scale-110 hover:bg-slate-800"
                >
                    <FaArrowDown />
                </button>

            )}

        </div>

    );

}