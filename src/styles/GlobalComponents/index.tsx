import React from "react";

const cn = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(" ");

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  grid?: boolean;
  row?: boolean;
  nopadding?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Section({
  children,
  id,
  grid,
  row,
  nopadding,
  className,
  style,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto max-w-[1040px] w-full min-w-0 max-w-full relative overflow-x-hidden",
        grid ? "grid grid-cols-1 md:grid-cols-2" : "flex flex-col",
        row && "flex-row",
        nopadding ? "p-0" : "pt-8 px-6 md:pt-6 md:px-12 lg:px-12 sm:pt-4 sm:px-4",
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  main?: boolean;
  center?: boolean;
  icon?: React.ReactNode;
}

export function SectionTitle({ children, main, center, icon }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "font-extrabold w-max max-w-full min-w-0 mb-4 flex items-center gap-3",
        main ? "text-[65px] leading-[72px] py-[58px] pb-4 md:text-[56px] md:leading-[56px] md:py-10 md:pb-3 sm:text-[28px] sm:leading-8 sm:py-4 sm:pb-2" : "text-[28px] leading-8 sm:text-[32px] sm:leading-9 md:text-5xl md:leading-[48px]",
        center && "text-center mx-auto"
      )}
    >
      {icon && <span className="flex-shrink-0 text-white/90 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10">{icon}</span>}
      <span className="min-w-0 break-words bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{children}</span>
    </h2>
  );
}

export function SectionText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "max-w-[800px] min-w-0 text-2xl leading-10 font-light pb-9 text-white/50 md:max-w-[670px] md:text-xl md:leading-8 md:pb-6 sm:text-base sm:leading-6 sm:pb-4 break-words",
        className
      )}
    >
      {children}
    </p>
  );
}

interface SectionDividerProps {
  colorAlt?: boolean;
  divider?: boolean;
}

export function SectionDivider({ colorAlt, divider }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "w-16 h-1.5 rounded-lg md:w-12 md:h-1 sm:w-8 sm:h-0.5",
        colorAlt
          ? "bg-gradient-to-l from-[#F46737] to-[#945DD6]"
          : "bg-gradient-to-l from-[#13ADC7] to-[#945DD6]",
        divider && "my-16"
      )}
    />
  );
}

export function SectionSubText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "max-w-[800px] min-w-0 font-light text-lg leading-8 text-white/75 md:max-w-[672px] md:text-base md:leading-[25px] sm:text-sm sm:leading-[22px] break-words",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SecondaryBtn({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "text-white bg-transparent border border-white/30 rounded-full py-4 px-6 font-semibold text-lg leading-4 w-fit mt-8 mb-20 cursor-pointer transition-[0.4s] ease focus:outline-none hover:text-[#0f1624] hover:bg-white hover:border-white active:bg-[#e0e4eb] active:border-[#304169] md:mt-6 md:mb-16 md:py-4 md:px-6 md:text-xl md:leading-5 sm:mt-4 sm:mb-10 sm:py-2 sm:px-4 sm:text-sm sm:leading-4 sm:w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonBackProps {
  children: React.ReactNode;
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
  className?: string;
}

export function ButtonBack({
  children,
  alt,
  form,
  disabled,
  className,
}: ButtonBackProps) {
  return (
    <div
      className={cn(
        "rounded-[50px] font-semibold flex items-center justify-center text-white cursor-pointer transition-[0.5s] ease relative overflow-hidden",
        alt ? "w-[150px] h-[52px] text-xl" : "w-[262px] h-16 text-2xl md:w-[184px] md:h-12 md:text-base sm:w-full sm:h-8 sm:text-sm",
        (alt || form) ? "m-0" : "mb-20 md:mb-16 sm:mb-8",
        alt
          ? "bg-gradient-to-r from-[#F46737] via-[#945DD6] to-[#13ADC7]"
          : "bg-gradient-to-r from-[#13ADC7] via-[#945DD6] to-[#F46737]",
        disabled && "opacity-50",
        className
      )}
    >
      {children}
    </div>
  );
}

interface ButtonFrontProps {
  children: React.ReactNode;
  alt?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ButtonFront({
  children,
  alt,
  disabled,
  onClick,
  className,
}: ButtonFrontProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border-none rounded-[50px] text-white flex absolute inset-0 w-full h-full bg-gradient-to-r from-[#13ADC7] via-[#945DD6] to-[#F46737] transition-[0.3s] ease font-semibold items-center justify-center cursor-pointer",
        alt && "bg-gradient-to-r from-[#F46737] via-[#945DD6] to-[#13ADC7]",
        alt ? "text-xl md:text-xl sm:text-sm" : "text-2xl md:text-base sm:text-sm",
        disabled && "opacity-50",
        "hover:brightness-110 focus:outline-none active:scale-[0.98]",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

interface LinkContainerProps {
  children: React.ReactNode;
  large?: boolean;
  className?: string;
}

export function LinkContainer({
  children,
  large,
  className,
}: LinkContainerProps) {
  return (
    <div
      className={cn(
        "transition-[0.3s] ease flex justify-center rounded-full p-2 hover:bg-[#212d45] hover:scale-110 cursor-pointer",
        large ? "ml-6 md:ml-4 sm:ml-0" : "ml-4 sm:ml-2",
        className
      )}
    >
      {children}
    </div>
  );
}

interface LinkIconImgProps {
  children: React.ReactNode;
  large?: boolean;
  nav?: boolean;
  className?: string;
}

export function LinkIconImg({
  children,
  large,
  nav,
  className,
}: LinkIconImgProps) {
  return (
    <div
      className={cn(
        "flex",
        large ? "h-8 md:h-6 sm:h-8" : "h-6 md:h-6 sm:h-4",
        nav && "md:h-4",
        className
      )}
    >
      {children}
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  alt,
  form,
  disabled,
  onClick,
  className,
}: ButtonProps) {
  return (
    <ButtonBack alt={alt} form={form} disabled={disabled} className={className}>
      <ButtonFront alt={alt} disabled={disabled} onClick={onClick}>
        {children}
      </ButtonFront>
    </ButtonBack>
  );
}
