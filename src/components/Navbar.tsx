// "use client";

// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { cn } from "@/utils/cn";
// import Link from "next/link";

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <>
//       <div
//         className={cn(
//           "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
//           className
//         )}
//       >
//         <Menu setActive={setActive}>
//           <Link href={"/"}>
//             <MenuItem
//               setActive={setActive}
//               active={active}
//               item="Home"
//             ></MenuItem>
//           </Link>
//           <MenuItem setActive={setActive} active={active} item="Our Courses">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/courses">All Courses</HoveredLink>
//               <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
//               <HoveredLink href="/courses">Advanced Composition</HoveredLink>
//               <HoveredLink href="/courses">Songwriting</HoveredLink>
//               <HoveredLink href="/courses">Music Production</HoveredLink>
//             </div>
//           </MenuItem>
//           <Link href={"/contact"}>
//             <MenuItem
//               setActive={setActive}
//               active={active}
//               item="Contact Us"
//             ></MenuItem>
//           </Link>
//         </Menu>
//       </div>
//     </>
//   );
// }

// export default Navbar;
"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Features">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/features">All Features</HoveredLink>
              <HoveredLink href="/features">Seamless Sync</HoveredLink>
              <HoveredLink href="/features">Top-Notch Security</HoveredLink>
              <HoveredLink href="/features">Anywhere Access</HoveredLink>
              <HoveredLink href="/features">
                Workflow Simplification
              </HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/pricing"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Pricing"
            ></MenuItem>
          </Link>
          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
