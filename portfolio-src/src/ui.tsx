import { createContext, useContext, type ReactNode } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import dimensions from './image-dimensions.json';

export const ImageContext = createContext<(image:{src:string;alt:string})=>void>(()=>{});
export function Figure({file,alt,caption,className=''}:{file:string;alt:string;caption:string;className?:string}) {
  const open=useContext(ImageContext);
  const size=(dimensions as Record<string,number[]>)[file];
  return <figure className={'evidence '+className}>
    <button className="image-open" onClick={()=>open({src:'./assets/'+file,alt})} aria-label={alt+' — 이미지 확대'}>
      <img src={'./assets/'+file} alt={alt} width={size?.[0]} height={size?.[1]} loading="lazy" decoding="async"/>
      <span className="zoom-hint"><Maximize2 size={16}/> 확대</span>
    </button><figcaption>{caption}</figcaption>
  </figure>;
}
export function External({href,children,primary=false}:{href:string;children:ReactNode;primary?:boolean}) {
  return <a className={'external '+(primary?'primary':'')} href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17} aria-hidden="true"/><span className="sr-only"> (새 창)</span></a>;
}
export function SectionHead({number,title,description}:{number:string;title:string;description:string}) {
  return <header className="section-heading"><span className="section-number">{number}</span><div><h2>{title}</h2><p>{description}</p></div></header>;
}
export function ProjectHead({id,number,title,subtitle,tags}:{id?:string;number:string;title:string;subtitle:string;tags:string[]}) {
  return <header className="project-heading" id={id}><div className="project-title"><span>{number}</span><div><h3>{title}</h3><p>{subtitle}</p></div></div><div className="tags">{tags.map(t=><span key={t}>{t}</span>)}</div></header>;
}
export function Role({children,label='직접 한 일'}:{children:ReactNode;label?:string}) {
  return <div className="role"><strong>{label}</strong><div>{children}</div></div>;
}
export function Facts({items}:{items:[string,ReactNode][]}) {
  return <dl className="facts">{items.map(([label,text])=><div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>;
}
