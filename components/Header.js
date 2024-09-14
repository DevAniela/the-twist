import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="flex justify-center mb-4">
        <img
          src="/images/logo.png"
          alt={`${name} logo`}
          className="h-16 w-auto rounded-full"
        />
      </div>
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">{name}</Link>
      </p>
    </header>
  );
}
