import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#4867D2] pt-[env(safe-area-inset-top)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
        <div className="flex justify-center items-center h-16">
          <Link href="/">
            <Image
              src="/logo-white.svg"
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
