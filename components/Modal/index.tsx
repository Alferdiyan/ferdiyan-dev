import { relative } from "path";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Modal({}: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Trigger modal opening when component is mounted
        setIsModalOpen(true);
    }, []);

    const closeModal = () => {
        // Close modal
        setIsModalOpen(false);
    };

    return (
        <div>
            <div>
                {/* Modal toggle */}
                <div className={`flex justify-center m-5 `}>
                    <button
                        id="readProductButton"
                        onClick={() => setIsModalOpen(true)}
                        className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        type="button"
                    >
                        Show read modal
                    </button>
                </div>

                {/* Main modal */}
                {isModalOpen && (
                    <div
                        id="readProductModal"
                        className={`hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full `}
                    >
                        <div
                            className={`relative p-4 w-full max-w-xl h-full md:h-auto `}
                        >
                            {/* Modal content */}
                            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                {/* Modal header */}
                                {/* ... (unchanged) */}

                                {/* Modal body */}
                                <dl>{/* ... (unchanged) */}</dl>

                                {/* Modal footer */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        {/* ... (unchanged) */}
                                    </div>

                                    {/* Close button */}
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 mr-1.5 -ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
