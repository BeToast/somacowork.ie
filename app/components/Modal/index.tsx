import React, { useEffect, useRef } from "react";
import SomaCard from "components/SomaCard";
import SomaButton from "components/SomaButton";

const Frame: React.FC<{ 
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  children?: React.ReactNode,
  open?: boolean;
  onClose: () => void
}> = ({
  children,
  closeOnClickOutside = true,
  closeOnEsc = true,
  open = true,
  onClose,
}) => {
  useEffect(() => {
  const onKeyPress = (e: KeyboardEvent) => {
    if (closeOnEsc && open && e.key === "Escape") onClose();
  };

    window.addEventListener("keydown", onKeyPress);
    return () => window.removeEventListener("keydown", onKeyPress);
  }, [closeOnEsc, onClose, open]);

  const container = useRef<HTMLDivElement>(null);
  const onOverlayClick = (e: React.MouseEvent) => {
    if (!container.current?.contains(e.target as Node)) onClose();
  };

  return (
    // overlay: 90% opacity of the bg, `inset-0` to stretch over the entire screen
    <div
      className={(open ? "flex fade-in" : "hidden")+" z-50 fixed inset-0 flex-col justify-center backdrop-blur-[2px] "}
      onClick={closeOnClickOutside ? onOverlayClick : undefined}
    >
      {/* container: `max-w-sm` to make it reasonably narrow, `mx-auto` to center horizontally */}
      <div className="flex relative justify-center " ref={container}>
        
        {/* contents */}
        <div className="w-full max-w-md overflow-hidden bg-grey-100 border-2 border-grey shadow-lg">
          {children}
          {/* button */}
          <div className="p-6">
            <SomaButton.SubmitForm 
              className="mx-auto"
              onClick={() => onClose()}
            >
              close
            </SomaButton.SubmitForm>
          </div>
        </div>
      </div>
    </div>
  );
};

interface HeadProps { children: React.ReactNode }
const Head: React.FC<HeadProps> = ({ children }) => (
  <SomaCard.Head
    size={"text-4xl"}
    align={"text-left"}
    txtColor={"text-orange"}
    padding="p-6"
    fadeIn={false}
  >
    {children}
  </SomaCard.Head>
);

interface BodyProps { children: React.ReactNode }
const Body: React.FC<BodyProps> = ({ children }) => <div className="p-6 tester">{children}</div>;

export const Modal = { Frame, Head, Body };