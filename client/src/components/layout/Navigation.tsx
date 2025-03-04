import { Link } from "react-router-dom";
import { backimage } from "../../constants";
import { Menu, X, Home, User, Phone, Briefcase, Book, Search } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-primary/80 text-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            <img src={backimage} alt="Logo" className="h-10" />
          </div>
          {/* Desktop View */}
          <div className="hidden md:flex space-x-6 items-center">
            <Home className="w-6 h-6" />
            <User className="w-6 h-6" />
            <Phone className="w-6 h-6" />
            <Briefcase className="w-6 h-6" />
            <Book className="w-6 h-6" />
            <Search className="w-6 h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
