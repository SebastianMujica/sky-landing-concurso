import React from "react";

/**
 * @param {{title?:string;tagline?:string;children?:React.ReactNode}&React.HTMLAttributes<HTMLDivElement>} props
 */

const Title = ({ title = "", tagline = "", children, className, ...props }) => {
  return (
    <div className={`section-title ${className}`} {...props}>
      
      <h2 className="section-title__title">{title || children}</h2>
      {tagline && <span className="section-title__tagline" style={{fontSize:"16px"}}>{tagline}</span>}
    </div>
  );
};

export default Title;
