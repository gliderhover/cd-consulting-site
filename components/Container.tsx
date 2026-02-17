type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  maxWidthClass?: string;
};

export default function Container({
  children,
  className,
  maxWidthClass = "max-w-screen-xl",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full ${maxWidthClass} px-4 sm:px-6 lg:px-8 ${className ?? ""}`.trim()}
    >
      {children}
    </div>
  );
}
