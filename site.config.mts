import type { AstroInstance } from 'astro';
import { Instagram, Linkedin } from 'lucide-astro';

export interface SocialLink {
  name: string;
  url: string;
  icon: AstroInstance;
}

export default {
  title: 'LG',
  favicon: 'LG.ico',
  owner: 'Leah Gainor',
  profileImage: 'profile.jpg',
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/leah-gainor-159631303/',
      icon: Linkedin,
    } as SocialLink,
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_lmg.photography_?igsh=MWw3cnZyeHdmNDlnZQ==',
      icon: Instagram,
    } as SocialLink,
  ],
};
