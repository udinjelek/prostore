import ModeToogle from "./mode-toogle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X, EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
    return ( 
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">                
                <ModeToogle />
                <Button asChild variant='ghost'>
                    <Link href='/cart'>
                        <ShoppingCart /> Cart
                    </Link>
                </Button>
                <Button asChild>
                    <Link href='/sign-in'>
                        <UserIcon /> Sign In
                    </Link>
                </Button>
            </nav>

            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical />
                    </SheetTrigger>
                    
                    {/*  [&>button:first-child]:hidden -> buat nge hide bawaan close button*/}
                    <SheetContent className="flex flex-col items-start w-[250px] [&>button:first-child]:hidden" side="right">

                        {/* add custom close button */}
                        <SheetClose asChild>
                            <Button variant="ghost" className="absolute top-4 right-4">
                                <X className="h-6 w-6" />
                            </Button>
                        </SheetClose>
                        
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToogle className="w-full" variant='outline' />
                        <Button asChild variant='outline' className="w-full">
                            <Link href='/cart'>
                                <ShoppingCart />
                            </Link>
                        </Button>
                        <Button asChild className="w-full">
                            <Link href='/sign-in'>
                                <UserIcon /> Sign In
                            </Link>
                        </Button>
                    </SheetContent>
                </Sheet>
            </nav>
        </div> );
}
 
export default Menu;