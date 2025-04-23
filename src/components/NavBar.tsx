
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Bell, Mail, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="font-bold text-xl text-primary"
          >
            <span className="text-[#9b87f5]">Знаком</span>
            <span className="text-[#7E69AB]">ства</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Главная
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Поиск</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#9b87f5]/20 to-[#7E69AB]/50 p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Найти друзей
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Расширьте свой круг общения
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">По интересам</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Найдите людей с общими увлечениями
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">По городу</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Познакомьтесь с людьми из вашего города
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Сообщества
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative rounded-full w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 cursor-pointer">
            <Search size={18} className="text-slate-600" />
          </div>
          <div className="relative rounded-full w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 cursor-pointer">
            <Mail size={18} className="text-slate-600" />
          </div>
          <div className="relative rounded-full w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 cursor-pointer">
            <Bell size={18} className="text-slate-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#9b87f5] text-white text-xs flex items-center justify-center rounded-full">3</span>
          </div>
          
          <Button className="rounded-full bg-[#9b87f5] hover:bg-[#7E69AB]">
            <User size={18} className="mr-2" /> Профиль
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
