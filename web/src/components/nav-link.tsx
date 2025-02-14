import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<'a'> {
  selected?: boolean
}

export function NavLink( {selected, ...props}: NavLinkProps ) {
  return (
    <a {...props} className={ selected ? 'font-medium text-sm' : 'font-medium text-sm text-zinc-300' } />
  )
}