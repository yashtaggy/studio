import Link from 'next/link';
import { socialLinks } from '@/app/data';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer id="contact" className="mt-24 sm:mt-32">
        <Separator />
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-100">Contact</h2>
                <div className="flex space-x-6 mb-8">
                {socialLinks.map((link) => (
                    <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <link.icon className="h-8 w-8" />
                    <span className="sr-only">{link.name}</span>
                    </Link>
                ))}
                </div>
                <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Yash Tagunde. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  );
}
