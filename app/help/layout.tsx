import SecondaryHeader from "@/components/SecondaryHeader";

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute inset-0 flex flex-col">
      <SecondaryHeader />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
