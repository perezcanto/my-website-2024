import React, { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {

  as?: any;
  sectionClassName?: string;
  divClassName?: string;
  background?: ReactNode;
  sectionChildren?: ReactNode;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  as: Tag = "section",
  sectionClassName = "",
  divClassName = "",
  background = null,
  sectionChildren = null,
  children,
  ...props
}) => {
  return (
    <Tag className={`px-4 sm:px-6 lg:px-8 relative ${sectionClassName}`} {...props}>
      {background && (
        <div className="absolute inset-0 z-0">
          {background}
        </div>
      )}

      {sectionChildren && (
        <>{sectionChildren}</>
      )}

      <div className={`relative mx-auto w-full max-w-7xl ${divClassName}`}>
        {children}
      </div>
    </Tag>
  );
};

export default Container;
