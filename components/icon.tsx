import {
  Building2, Building, Home, DoorClosed, Briefcase, GraduationCap,
  Stethoscope, Hotel, UtensilsCrossed, ShoppingBag, Factory, Warehouse,
  Moon, Sofa, Grid3x3, Layers, Blinds, Grid2x2, Gem, Sparkles, Droplets,
  ShieldCheck, Bug, HardHat, PaintRoller, LayoutGrid, Calendar, Users,
  MapPin, Clock, Award, BadgeCheck, Leaf, Twitter, Instagram, Facebook,
  Linkedin, MessageCircle, Phone, Mail, Star, CheckCircle2, ArrowLeft,
  ArrowRight, Menu, X, ChevronLeft, Phone as PhoneIcon, Send, Quote,
  Shield, Zap, Target, TrendingUp, Wrench, SprayCan, Brush, WashingMachine,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Building2, Building, Home, DoorClosed, Briefcase, GraduationCap,
  Stethoscope, Hotel, UtensilsCrossed, ShoppingBag, Factory, Warehouse,
  Moon, Sofa, Grid3x3, Layers, Blinds, Grid2x2, Gem, Sparkles, Droplets,
  ShieldCheck, Bug, HardHat, PaintRoller, LayoutGrid, Calendar, Users,
  MapPin, Clock, Award, BadgeCheck, Leaf, Twitter, Instagram, Facebook,
  Linkedin, MessageCircle, Phone, Mail, Star, CheckCircle2, ArrowLeft,
  ArrowRight, Menu, X, ChevronLeft, Send, Quote, Shield, Zap, Target,
  TrendingUp, Wrench, SprayCan, Brush, WashingMachine,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const LucideIcon = iconMap[name] ?? Sparkles;
  return <LucideIcon className={className} size={size} />;
}
