import type { ComponentType } from 'react';
import { SiGit, SiGithub, SiHtml5, SiCss, SiJavascript, SiLinux, SiNodedotjs, SiOpenjdk, SiPython, SiReact, SiSelenium, SiSupabase } from 'react-icons/si';
import { TbApi, TbBolt, TbBrain, TbBrowserCheck, TbDatabase, TbRobot } from 'react-icons/tb';

const icons: Record<string, ComponentType> = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  node: SiNodedotjs,
  python: SiPython,
  java: SiOpenjdk,
  api: TbApi,
  sql: TbDatabase,
  supabase: SiSupabase,
  selenium: SiSelenium,
  playwright: TbBrowserCheck,
  automacao: TbBolt,
  ia: TbBrain,
  robot: TbRobot,
  git: SiGit,
  github: SiGithub,
  linux: SiLinux
};

export function TechIcon({ name }: { name: string }) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon />;
}
