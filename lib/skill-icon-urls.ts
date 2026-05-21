/** Devicon CDN — reliable logos when Simple Icons slug is missing or renamed */
const DEVICON =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const skillIconUrls = {
  vscode: `${DEVICON}/vscode/vscode-original.svg`,
  java: `${DEVICON}/java/java-original.svg`,
  css3: `${DEVICON}/css3/css3-original.svg`,
  reactNative: `${DEVICON}/reactnative/reactnative-original.svg`,
} as const;
