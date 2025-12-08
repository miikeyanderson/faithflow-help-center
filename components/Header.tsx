import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#4867D2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <Link href="/">
            {/* Light mode logo (blue) */}
            <Image
              src="/logo-blue.svg"
              alt="Faithflow"
              width={130}
              height={43}
              className="dark:hidden"
              priority
            />
            {/* Dark mode logo (white) */}
            <Image
              src="/logo-white.svg"
              alt="Faithflow"
              width={130}
              height={43}
              className="hidden dark:block"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
