import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto flex items-center justify-center px-4 py-2 md:justify-end">
          <a href="tel:8323918105" className="flex items-center gap-2 text-xs font-semibold uppercase">
            <Phone className="h-3.5 w-3.5" /> 832-391-8105
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex min-h-20 items-center justify-between gap-5">
          <Link to="/" className="flex items-center gap-3" aria-label="Rebuild Networking home">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-lg font-bold text-primary-foreground">
              R
            </div>
            <div>
              <p className="font-display text-2xl leading-none">Rebuild Networking</p>
              <p className="mt-1 text-[10px] font-semibold uppercase text-muted-foreground">Athletes Economic Alliance</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
            <a href="#about" className="text-xs font-semibold uppercase hover:text-primary">About</a>
            <a href="#programs" className="text-xs font-semibold uppercase hover:text-primary">Programs</a>
            <a href="#events" className="text-xs font-semibold uppercase hover:text-primary">Events</a>
            <a href="#team" className="text-xs font-semibold uppercase hover:text-primary">Team</a>
            <Link to="/sunnyside-initiative" className="text-xs font-semibold uppercase hover:text-primary">Initiative</Link>
            <Link to="/gallery" className="text-xs font-semibold uppercase hover:text-primary">Gallery</Link>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {user ? (
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut /> Sign out
              </Button>
            ) : (
              <Button asChild variant="outline" size="sm"><Link to="/auth">Log in</Link></Button>
            )}
            <Button asChild size="sm"><Link to="/signup">Job fair signup</Link></Button>
          </div>

          <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {menuOpen && (
          <nav className="grid gap-1 border-t py-4 xl:hidden" aria-label="Mobile navigation">
            {[["About", "#about"], ["Programs", "#programs"], ["Events", "#events"], ["Team", "#team"], ["Gallery", "/gallery"]].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="px-2 py-3 text-sm font-semibold uppercase hover:text-primary">{label}</a>
            ))}
            <Link to="/sunnyside-initiative" onClick={() => setMenuOpen(false)} className="px-2 py-3 text-sm font-semibold uppercase hover:text-primary">Initiative</Link>
            <div className="mt-3 flex gap-2 border-t pt-4">
              <Button asChild className="flex-1"><Link to="/signup">Job fair signup</Link></Button>
              {user ? <Button variant="outline" onClick={handleSignOut}>Sign out</Button> : <Button asChild variant="outline"><Link to="/auth">Log in</Link></Button>}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;