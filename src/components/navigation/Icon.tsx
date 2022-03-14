import { Email, Github, Linkedin } from 'assets';
import { HTMLAttributes } from 'react';

type IconProps = {
  name: 'linkedin' | 'github' | 'email';
} & HTMLAttributes<'li'>;

export default function Icon({ name, className }: IconProps) {
  const url = {
    linkedin: 'https://www.linkedin.com/in/aliendro',
    github: 'https://www.github.com/aliendro',
    email: 'mailto:aliendrosw@gmail.com',
  };

  const iconClass = 'h-7 w-7 transition-colors duration-200 hover:cursor-pointer hover:text-purple';
  return (
    <li className={className}>
      <a {...{ href: url[name], target: '_blank', rel: 'noreferrer', 'aria-label': name }}>
        {name === 'linkedin' && <Linkedin className={iconClass} />}
        {name === 'github' && <Github className={iconClass} />}
        {name === 'email' && <Email className={iconClass} />}
      </a>
    </li>
  );
}
