import React from "react";
const DownloadButton = ({ cv }) => {
  const handleDownload = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to download the CV?"
    );
    if (isConfirmed) {
      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = cv;
      link.download = "Curriculum Vitae.pdf"; // Specify the file name for download
      document.body.appendChild(link);
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up
    }
  };
  return (
    <div className="flex flex-col justify-evenly items-center my-5 md:my-10">
      <h2 className="font-bold my-3 md:text-2xl">Curriculum Vitae(C.V.)</h2>
      <button
        className="py-2 px-2 bg-blue-600 text-amber-50 rounded-lg hover:bg-blue-800 cursor-pointer"
        onClick={handleDownload}
      >
        Download CV
      </button>
    </div>
  );
};
export default DownloadButton;
