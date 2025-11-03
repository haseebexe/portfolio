import { Award, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  logo?: string;
  skills: string[];
}

export function CertificationCard({
  title,
  issuer,
  date,
  credentialId,
  verificationUrl,
  logo,
  skills,
}: CertificationCardProps) {
  const CardContent = () => (
    <div className="relative group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-all hover:shadow-lg hover:shadow-[#38bdf8]/20 overflow-hidden h-full">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#38bdf8]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            {/* Logo or Icon */}
            {logo ? (
              <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/10 overflow-hidden flex-shrink-0">
                <img src={logo} alt={issuer} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="p-3 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-lg shadow-lg shadow-[#38bdf8]/30 flex-shrink-0">
                <Award size={24} className="text-white" />
              </div>
            )}
            
            <div className="flex-1">
              <h3 className="text-[#f8fafc] mb-1 group-hover:text-[#38bdf8] transition-colors">
                {title}
              </h3>
              <p className="text-[#f8fafc]/60 text-sm">{issuer}</p>
            </div>
          </div>

          {/* External Link Icon */}
          {verificationUrl && (
            <div className="text-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink size={20} />
            </div>
          )}
        </div>

        {/* Date and Credential */}
        <div className="mb-4">
          <div className="inline-block px-3 py-1 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-full mb-2">
            <span className="text-[#38bdf8] text-xs">{date}</span>
          </div>
          {credentialId && (
            <p className="text-[#f8fafc]/50 text-xs mt-2">
              Credential ID: {credentialId}
            </p>
          )}
        </div>

        {/* Skills */}
        <div className="flex-1 flex flex-col justify-end">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#38bdf8] text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Verification Badge */}
        {verificationUrl && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-[#f8fafc]/70 text-xs">Click to verify</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-[#38bdf8] rounded-full animate-pulse"></span>
                <span className="text-[#38bdf8] text-xs">Verified</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // If verification URL exists, make it clickable
  if (verificationUrl) {
    return (
      <a
        href={verificationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        <CardContent />
      </a>
    );
  }

  // Otherwise, render as a non-clickable card
  return <CardContent />;
}
