import Image from 'next/image';

export default function LogoBanner() {
  return (
    <div className="bg-white py-6 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-16">
          {/* Ministry Logo */}
          <Image
            src="/Ministry.png"
            alt="Ministry of Electronics and Information Technology"
            width={200}
            height={200}
            className="object-contain"
          />

          {/* NIELIT Logo */}
          <Image
            src="/NIELIT-Preview.png"
            alt="NIELIT"
            width={200}
            height={200}
            className="object-contain"
          />

          {/* Socteamup Logo */}
          <Image
            src="/Socteamup.png"
            alt="Socteamup"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
} 