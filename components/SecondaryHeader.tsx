import Link from 'next/link';
import Image from 'next/image';

export default function SecondaryHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#121F25] pt-[env(safe-area-inset-top)] border-b-2 border-[#D8D8D8] dark:border-[#37454F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
        <div className="flex justify-start items-center h-20">
          <Link href="/">
            <Image
              src="/logo-blue.svg"
              alt="Faithflow"
              width={115}
              height={38}
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
