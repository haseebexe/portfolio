import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/muhammadhaseeb', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/muhammadhaseeb', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/muhammadhaseeb', label: 'Twitter' },
    { icon: Mail, href: 'mailto:haseeb@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#0f172a] border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[#f8fafc]/60 text-sm">
            © {currentYear} Muhammad Haseeb. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f8fafc]/60 hover:text-[#38bdf8] transition-colors p-2"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
