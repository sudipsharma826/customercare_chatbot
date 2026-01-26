import { ISectionTitle } from '@/types/sites';
import CustomIcon from './custom-icon';
import AnimatedContent from './animated-content';

export default function SectionTitle({ icon, title, subtitle, dir = 'center' }: ISectionTitle) {
  return (
    <div
      className={`flex flex-col gap-6 ${dir === 'center' ? 'items-center text-center' : 'md:items-start items-center'}`}
    >
      <AnimatedContent className="flex flex-col md:flex-row items-center gap-4">
        <CustomIcon icon={icon} />
        <h2 className="text-4xl font-bold font-urbanist text-foreground tracking-tight">{title}</h2>
      </AnimatedContent>
      <AnimatedContent>
        <p
          className={`text-muted-foreground text-lg/relaxed ${dir === 'center' ? 'text-center max-w-2xl' : 'md:text-left text-center max-w-xl'}`}
        >
          {subtitle}
        </p>
      </AnimatedContent>
    </div>
  );
}
