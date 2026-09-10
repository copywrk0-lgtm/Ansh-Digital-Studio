import { ReactNode } from 'react'; export function Eyebrow({children,light=false}:{children:ReactNode;light?:boolean}){return <p className={`eyebrow ${light?'light':''}`}>{children}</p>}
