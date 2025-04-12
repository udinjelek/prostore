'use client'
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button"; // ✅ Import the type
import { useState, useEffect } from "react";
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,

 } from "@/components/ui/dropdown-menu";

import { useTheme } from "next-themes";
import {SunIcon, MoonIcon, SunMoon} from 'lucide-react';

interface ModeToggleProps {
    className?: string;
    variant?: ButtonProps["variant"];
  }

const ModeToogle = ({ className, variant }: ModeToggleProps) => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(()=> {
        setMounted(true);
    },[]);

    if (!mounted){
        return null
    }
    return ( <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={variant ??'ghost'} className={`focus-visible:ring-0 focus-visible:ring-offset-0 ${className ?? ''}`}>
                {theme === 'system' ? 
                    (<SunMoon/> )
                    :   theme === 'dark' ?  <MoonIcon /> : <SunIcon /> 
                }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={ ()=> setTheme('system')}>System</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={ ()=> setTheme('light')}>Light</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={ ()=> setTheme('dark')}>Dark</DropdownMenuCheckboxItem>

        </DropdownMenuContent>
    </DropdownMenu> );
}
 
export default ModeToogle;