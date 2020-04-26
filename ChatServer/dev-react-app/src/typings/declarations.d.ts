declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.ttf' {
  const content: string;
  export default content;
}