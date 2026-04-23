/*
 * AI Engineer Portfolio — UI Kit Shared Components
 */
const { useState } = React;

function Nav({ name="alex chen", links=["about","work","writing","contact"], active="about", onNav }) {
  return (
    <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 48px',borderBottom:'1px solid var(--border)',background:'var(--bg)'}}>
      <span style={{fontSize:15,fontWeight:500,color:'var(--fg)',letterSpacing:'-0.01em'}}>
        {name}<span style={{display:'inline-block',width:2,height:'1em',background:'var(--accent)',marginLeft:1,verticalAlign:'text-bottom'}}/>
      </span>
      <div style={{display:'flex',gap:28}}>
        {links.map(l=>(
          <a key={l} href="#" style={{fontSize:13,color:active===l?'var(--fg)':'var(--fg-2)',textDecoration:'none',cursor:'pointer'}}
             onClick={e=>{e.preventDefault();onNav&&onNav(l)}}>{l}</a>
        ))}
      </div>
    </nav>
  );
}

function Tag({ children, variant="default" }) {
  const v = {
    default:{background:'var(--bg-3)',color:'var(--fg-2)',border:'1px solid var(--border)'},
    accent: {background:'var(--accent-subtle)',color:'var(--accent)'},
    green:  {background:'var(--green-subtle)',color:'var(--green)'},
    dark:   {background:'var(--fg)',color:'var(--bg)'},
  };
  return <span style={{display:'inline-block',fontSize:11,padding:'3px 8px',borderRadius:2,...v[variant]}}>{children}</span>;
}

function Button({ children, variant="primary", size="md", onClick, href }) {
  const sz = size==='sm'?{fontSize:12,padding:'5px 12px'}:{fontSize:13,padding:'9px 18px'};
  const vr = {
    primary:  {background:'var(--fg)',color:'var(--bg)',border:'none'},
    secondary:{background:'var(--bg-2)',color:'var(--fg)',border:'1px solid var(--border)'},
    ghost:    {background:'transparent',color:'var(--accent)',border:'none',paddingLeft:0,paddingRight:0},
  };
  const s = {fontFamily:'var(--font)',borderRadius:4,cursor:'pointer',...sz,...vr[variant]};
  if(href) return <a href={href} style={{...s,textDecoration:'none',display:'inline-block'}}>{children}</a>;
  return <button style={s} onClick={onClick}>{children}</button>;
}

function ProjectCard({ title, year, description, tags=[], link="#", external=false }) {
  const [hov,setHov] = useState(false);
  return (
    <div style={{background:'var(--bg-2)',border:`1px solid ${hov?'var(--fg-3)':'var(--border)'}`,borderRadius:4,padding:20,transition:'border-color 150ms'}}
         onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:4}}>
        <span style={{fontSize:15,fontWeight:500,color:'var(--fg)'}}>{title}</span>
        <span style={{fontSize:11,color:'var(--fg-3)'}}>{year}</span>
      </div>
      <p style={{fontSize:13,color:'var(--fg-2)',lineHeight:1.6,marginBottom:14}}>{description}</p>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>{tags.map(t=><Tag key={t}>{t}</Tag>)}</div>
        <a href={link} style={{fontSize:12,color:'var(--accent)',textDecoration:'none'}}>{external?'view ↗':'view project →'}</a>
      </div>
    </div>
  );
}

function WritingRow({ title, date, readTime, tags=[], link="#" }) {
  const [hov,setHov] = useState(false);
  return (
    <div style={{padding:'16px 0',borderBottom:'1px solid var(--border)',display:'flex',justifyContent:'space-between',alignItems:'baseline'}}
         onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <div>
        <a href={link} style={{fontSize:14,color:'var(--fg)',textDecoration:hov?'underline':'none'}}>{title}</a>
        <div style={{marginTop:6,display:'flex',gap:6}}>{tags.map(t=><Tag key={t}>{t}</Tag>)}</div>
      </div>
      <span style={{fontSize:11,color:'var(--fg-3)',flexShrink:0,marginLeft:24}}>{date} · {readTime}</span>
    </div>
  );
}

function Section({ title, children, id }) {
  return (
    <section id={id} style={{padding:'64px 0',borderBottom:'1px solid var(--border)'}}>
      <h2 style={{fontSize:11,color:'var(--fg-3)',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:32}}>{title}</h2>
      {children}
    </section>
  );
}

function ContactForm() {
  const [sent,setSent] = useState(false);
  const inp = {fontFamily:'var(--font)',fontSize:13,background:'var(--bg)',border:'1px solid var(--border)',borderRadius:4,padding:'9px 12px',color:'var(--fg)',width:'100%',outline:'none',marginBottom:10,display:'block',boxSizing:'border-box'};
  if(sent) return <p style={{fontSize:14,color:'var(--green)'}}>message sent →</p>;
  return (
    <div style={{maxWidth:480}}>
      <input style={inp} placeholder="your@email.com" type="email"/>
      <textarea style={{...inp,resize:'vertical',minHeight:100}} placeholder="tell me about the project..."/>
      <Button onClick={()=>setSent(true)}>send message →</Button>
    </div>
  );
}

function Footer({ name="alex chen" }) {
  const ghIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>;
  const liIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
  return (
    <footer style={{padding:'32px 48px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <span style={{fontSize:12,color:'var(--fg-3)'}}>© {new Date().getFullYear()} {name}</span>
      <div style={{display:'flex',gap:20}}>
        {[['GitHub',ghIcon],['LinkedIn',liIcon]].map(([label,icon])=>(
          <a key={label} href="#" title={label} style={{color:'var(--fg-3)',display:'flex'}}
             onMouseEnter={e=>e.currentTarget.style.color='var(--fg)'}
             onMouseLeave={e=>e.currentTarget.style.color='var(--fg-3)'}>{icon}</a>
        ))}
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Tag, Button, ProjectCard, WritingRow, Section, ContactForm, Footer });
