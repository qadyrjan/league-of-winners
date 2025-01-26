"use client";

type PageContainerProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export default function PageContainer({
  children,
  title,
  description,
}: PageContainerProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {title && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && <p className="mt-2 text-gray-600">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
