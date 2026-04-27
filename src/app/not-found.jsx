import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div class="text-center">
        <h1 class="text-8xl font-extrabold text-gray-800">404</h1>
        <h2 class="mt-4 text-3xl font-bold text-gray-700">Page Not Found</h2>
        <p class="mt-3 text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div class="mt-6">
          <Link
            href={"/"}
            class="inline-block bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
