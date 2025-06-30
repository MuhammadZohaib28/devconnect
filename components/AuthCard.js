"use client";

export default function AuthCard({ title, subtitle, children, footerText }) {
  return (
    <div className="max-w-md w-full mx-auto bg-white p-8 rounded-xl shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
      </div>

      {children}

      {footerText && (
        <div className="mt-6 text-center text-sm text-gray-600">
          {footerText}
        </div>
      )}
    </div>
  );
}
