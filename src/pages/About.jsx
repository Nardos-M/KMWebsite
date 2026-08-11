import { Outlet, useLocation } from "react-router-dom";


function About() {  
  
  // useEffect(() => {
  //   if (!location.hash) return;
    
  //   const id = location.hash.slice(1); // removes the first character instead of #belives
  //   const el = document.getElementById(id);
    
  //   if (!el) return;
    
  //   el.scrollIntoView({ behavior: "smooth", block: "start" }); // scrolling until the section reaches the top
  // }, [location.hash]);

  return (
    <main style={{ padding: "32px 18px", maxWidth: 980, margin: "0 auto" }}>

     <Outlet />
    </main>
  );
}

export default About;

