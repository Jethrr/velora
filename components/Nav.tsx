"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavbarButton } from "@/components/ui/resizable-navbar"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Custom Website Design",
        href: "/services/custom-domain",
        description:
          "Clean, mobile-first websites that are fast, easy to navigate, and made to convert.",
      },
      {
        title: "Google Ads Management",
        href: "/services/seo-optimization",
        description:
          "Targeted, trackable ad campaigns to bring in high-intent traffic — fast.",
      },
      {
        title: "Real-Time Analytics",
        href: "/services/ecommerce",
        description:
          "Know who’s clicking, where they’re coming from, and how your site performs — in real time.",
      },
     
      {
        title: "Review & Feedback Integration",
        href: "/services/hosting",
        description:
          "We can add rating systems, testimonials, or comment sections to help your happy customers speak for you.",
      },
      {
          title: "Ongoing Support (Optional Add-On)",
        href: "/services/analytics",
        description:
          "Need help updating your site later? We’ve got your back — just reach out anytime.",
      },
]



export function Nav() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
      


      
        <NavigationMenuItem>
          <NavigationMenuTrigger>Service</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Starter</div>
                    <div className="text-muted-foreground">
                    Perfect for new or small businesses that need a clean, modern web presence.

                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Growth</div>
                    <div className="text-muted-foreground">
                    Everything in Starter, plus tools to bring in more traffic and turn clicks into customers.

                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Premium</div>
                    <div className="text-muted-foreground">
                    Done-for-you, optimized for scale. Fully managed and tailored to your brand.

                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Our Work</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <NavbarButton 
              variant="primary"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contact Us
            </NavbarButton>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
