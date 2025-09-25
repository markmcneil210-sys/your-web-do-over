import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, User } from "lucide-react";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-background border-b">
      {/* Top bar with phone */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 text-center">
          <span className="text-sm">📞 832-391-8105</span>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
              R
            </div>
            <div>
              <h1 className="text-xl font-bold">Rebuild Networking</h1>
              <p className="text-xs text-muted-foreground">Athletes Economic Alliance</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">HOME</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">ABOUT</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">TEAM</a>
            <a href="#vision" className="text-foreground hover:text-primary transition-colors">VISION</a>
            <a href="#social-impact" className="text-foreground hover:text-primary transition-colors">SOCIAL IMPACT</a>
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">PROGRAMS</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">GALLERY</a>
          </nav>
          
          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground hidden sm:block">
                Welcome, {user.email}
              </span>
              <Link to="/signup">
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Register
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleSignOut}
                className="text-muted-foreground hover:text-destructive"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/auth">
                <Button variant="outline">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  SIGN UP
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;