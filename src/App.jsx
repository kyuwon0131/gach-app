import React, { useState } from 'react';
import { Search, Home, Library, User, ChevronLeft, Star, Heart, Share2, BookOpen, Clock, Tag, Mic, ShoppingBag } from 'lucide-react';

// --- Theme Colors based on uploaded images ---
const THEME = {
  bg: '#FDFBF7', // Warm Cream Background
  primary: '#E65F25', // Terracotta Orange from Logo/UI
  primarySoft: '#FDF2EB', // Very light orange for backgrounds
  textMain: '#1A1A1A', // Soft Black
  textSub: '#8A8A8A', // Grey
  cardBg: '#FFFFFF',
};

// --- Mock Data ---
const CATEGORIES = [
  { id: 1, name: 'Life Advice', icon: '🌱' },
  { id: 2, name: 'Job Skills', icon: '🛠️' },
  { id: 3, name: 'History', icon: '📜' },
  { id: 4, name: 'Hobbies', icon: '🧶' },
];

const BOOKS = [
  {
    id: 1,
    title: "The Master Carpenter's Tools",
    subtitle: "Life lessons learned from talking to wood",
    author: "Kim Cheol-su (78)",
    authorJob: "Master Carpenter (30y)",
    price: "₩12,000",
    rating: 4.8,
    reviews: 124,
    category: "Job Skills",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300&h=400",
    desc: "There is a philosophy even in driving a single nail. About the 'patience' and 'firmness' learned from touching wood all one's life. Contains the essence of carpentry skills and life philosophy organized by AI."
  },
  {
    id: 2,
    title: "Winter in the German Mines",
    subtitle: "Records of youth spent 1,000 meters underground",
    author: "Lee Young-sik (82)",
    authorJob: "Former Miner in Germany",
    price: "₩15,000",
    rating: 4.9,
    reviews: 312,
    category: "History",
    image: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&q=80&w=300&h=400",
    desc: "Real history not found in textbooks. The true stories of fathers who sweated for their families while enduring the intense geothermal heat of that era."
  },
  {
    id: 3,
    title: "The Spicy Life of a Matriarch",
    subtitle: "Fermented with tears, ripened with laughter",
    author: "Park Soon-ja (75)",
    authorJob: "14th Gen Head Daughter-in-Law",
    price: "₩9,900",
    rating: 4.7,
    reviews: 89,
    category: "Life Advice",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=300&h=400",
    desc: "50 years of in-law life, wisdom and patience blooming within. Passing on Grandmother's secret recipe for turning a spicy and salty life into a sweet one."
  },
  {
    id: 4,
    title: "The Last Typeface of Euljiro",
    subtitle: "Records of fading things",
    author: "Choi Chang-su (80)",
    authorJob: "Letterpress Artisan",
    price: "₩11,000",
    rating: 4.9,
    reviews: 56,
    category: "Job Skills",
    image: "https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?auto=format&fit=crop&q=80&w=300&h=400",
    desc: "The weight of analog lost in the digital age. The master's final lesson, breathing life into each and every typeface."
  },
];

// --- Components ---

// Recreating the logo visually with SVG to match the uploaded image
const Logo = () => (
  <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Text: Gach */}
    <text x="0" y="32" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="32" fill="#1A1A1A" letterSpacing="-1">Gach</text>
    {/* Text: i (stem only) */}
    <rect x="83" y="10" width="6" height="22" fill="#1A1A1A" />
    {/* Orange Dot (acting as tittle for i) */}
    <circle cx="86" cy="8" r="5" fill="#E65F25" />
    {/* Orange Arc Swoosh */}
    <path d="M25 12 C 40 4, 70 4, 86 8" stroke="#E65F25" strokeWidth="3" strokeLinecap="round" fill="none"/>
  </svg>
);

const Header = () => (
  <header className="sticky top-0 z-50 px-6 py-4 flex justify-between items-end border-b border-stone-100" style={{ backgroundColor: THEME.bg }}>
    <div className="flex flex-col">
      {/* Brand Identity matching the uploaded Logo */}
      <div className="flex items-center gap-1.5 h-10">
        <Logo />
      </div>
      <span className="text-[10px] font-bold tracking-widest text-[#B0A898] uppercase mt-1 ml-1">Life Editor</span>
    </div>
    <div className="relative">
      <div className="p-2 rounded-full bg-white shadow-sm border border-stone-100">
        <ShoppingBag className="w-5 h-5" style={{ color: THEME.textMain }} />
      </div>
    </div>
  </header>
);

const BottomNav = () => (
  <nav className="fixed bottom-0 w-full bg-white border-t border-stone-100 py-3 px-8 flex justify-between items-center text-[10px] text-stone-400 z-50 max-w-md mx-auto left-0 right-0 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
    <div className="flex flex-col items-center gap-1" style={{ color: THEME.primary }}>
      <Home size={24} strokeWidth={2.5} />
      <span className="font-bold">Home</span>
    </div>
    <div className="flex flex-col items-center gap-1 hover:text-stone-600 transition">
      <Search size={24} strokeWidth={2} />
      <span>Explore</span>
    </div>
    <div className="flex flex-col items-center gap-1 hover:text-stone-600 transition">
      <Library size={24} strokeWidth={2} />
      <span>Library</span>
    </div>
    <div className="flex flex-col items-center gap-1 hover:text-stone-600 transition">
      <User size={24} strokeWidth={2} />
      <span>My</span>
    </div>
  </nav>
);

const DetailView = ({ book, onBack }) => (
  <div className="min-h-screen pb-24 relative animate-in slide-in-from-right duration-300" style={{ backgroundColor: THEME.cardBg }}>
    {/* Detail Header */}
    <div className="sticky top-0 z-50 px-4 py-4 flex justify-between items-center bg-white/90 backdrop-blur-sm">
      <button onClick={onBack} className="p-2 hover:bg-stone-50 rounded-full transition">
        <ChevronLeft size={26} style={{ color: THEME.textMain }} />
      </button>
      <div className="flex gap-4">
        <Heart size={24} className="text-stone-400" />
        <Share2 size={24} className="text-stone-400" />
      </div>
    </div>

    <div className="px-6 mt-2">
      {/* Book Cover Area */}
      <div className="w-full h-[340px] bg-stone-100 rounded-[32px] overflow-hidden shadow-xl shadow-orange-100/50 relative mb-8 group mx-auto">
         <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
         <span className="absolute bottom-6 left-6 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md bg-white/20 border border-white/30">
            {book.category}
         </span>
      </div>

      {/* Title Section */}
      <h1 className="text-2xl font-bold text-slate-900 leading-snug mb-2 font-serif">
        {book.title}
      </h1>
      <p className="text-stone-500 mb-8 leading-relaxed">{book.subtitle}</p>

      {/* Author Profile Card - Matching the Elderly App UI style */}
      <div className="p-5 rounded-3xl flex items-center gap-4 mb-8 border border-stone-100 shadow-sm" style={{ backgroundColor: THEME.bg }}>
        <div className="w-16 h-16 bg-stone-200 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-sm">
           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${book.author}&backgroundColor=e6e6e6`} alt="author" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
             <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-stone-500 border border-stone-100">Life Editor</span>
          </div>
          <p className="font-bold text-lg text-slate-800">{book.author}</p>
          <p className="text-xs text-stone-500">{book.authorJob}</p>
        </div>
      </div>

      {/* Info Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8 py-2">
        <div className="text-center bg-stone-50 rounded-2xl py-4">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Star size={16} className="fill-orange-400 text-orange-400" />
            <span className="font-bold text-slate-900">{book.rating}</span>
          </div>
          <p className="text-xs text-stone-400">Rating</p>
        </div>
        <div className="text-center bg-stone-50 rounded-2xl py-4">
           <div className="flex items-center justify-center gap-1 mb-1">
            <BookOpen size={16} className="text-slate-900" />
            <span className="font-bold text-slate-900">128P</span>
          </div>
          <p className="text-xs text-stone-400">Pages</p>
        </div>
        <div className="text-center bg-stone-50 rounded-2xl py-4">
           <div className="flex items-center justify-center gap-1 mb-1">
            <Clock size={16} className="text-slate-900" />
            <span className="font-bold text-slate-900">2h</span>
          </div>
          <p className="text-xs text-stone-400">Read Time</p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-32">
        <h3 className="font-bold text-lg mb-4 text-slate-900">About this Book</h3>
        <p className="text-stone-600 leading-loose whitespace-pre-line text-sm">
          {book.desc}
          <br/><br/>
          <span className="block p-4 bg-[#FFF8F5] rounded-2xl text-[#E65F25] text-sm font-medium italic">
            "This book is not merely text. It contains the weight of time from a person who has dedicated their entire life as a {book.authorJob}."
          </span>
        </p>
      </div>
    </div>

    {/* Floating Bottom CTA */}
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-5 bg-gradient-to-t from-white via-white to-white/0 z-50">
      <button 
        className="w-full text-white font-bold py-4 rounded-2xl text-lg shadow-lg shadow-orange-200/50 transition active:scale-[0.98] flex justify-center items-center gap-3"
        style={{ backgroundColor: THEME.primary }}
      >
        <span>Collect</span>
        <span className="w-1 h-1 rounded-full bg-orange-200/50"></span>
        <span>{book.price}</span>
      </button>
    </div>
  </div>
);

const HomeView = ({ onSelectBook }) => (
  <div className="pb-24 animate-in fade-in duration-500">
    <Header />
    
    {/* Hero Banner - Updated to match warm vibe */}
    <div className="mt-6 mx-6 rounded-[32px] p-7 text-white shadow-xl shadow-orange-900/10 relative overflow-hidden"
         style={{ background: 'linear-gradient(135deg, #1C1C1E 0%, #2C2C2E 100%)' }}>
      <div className="relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-4">
          <p className="text-[#FFDBB8] text-[10px] font-bold tracking-wide uppercase">Weekly Highlight</p>
        </div>
        <h2 className="text-2xl font-serif font-bold leading-snug mb-4">
          Your Mentor is<br/> 
          <span style={{ color: THEME.primary }}>80 Years Old.</span>
        </h2>
        <p className="text-stone-400 text-sm mb-6 max-w-[90%] leading-relaxed">
          Find real life answers that<br/>
          Search Engines can't give you.
        </p>
      </div>
      {/* Decorative Circle */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-20 bg-orange-500 blur-3xl"></div>
    </div>

    {/* Search Bar Area */}
    <div className="mx-6 mt-8">
      <div className="bg-white p-4 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-stone-50 flex items-center gap-3">
        <Search className="text-stone-300 w-5 h-5" />
        <input 
          type="text" 
          placeholder="What wisdom are you looking for?" 
          className="bg-transparent text-sm w-full outline-none text-slate-700 placeholder:text-stone-300"
        />
      </div>
    </div>

    {/* Categories */}
    <div className="mt-10 px-6">
      <h3 className="text-lg font-bold text-slate-900 mb-4 px-1">Categories</h3>
      <div className="flex justify-between gap-3">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center gap-3 cursor-pointer group flex-1">
            <div className="w-full aspect-square bg-white rounded-3xl border border-stone-100 flex items-center justify-center text-2xl group-active:scale-95 transition shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:border-orange-100 group-hover:shadow-orange-100/50">
              {cat.icon}
            </div>
            <span className="text-xs text-stone-500 font-medium whitespace-nowrap">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Featured Section */}
    <div className="mt-12">
      <div className="flex justify-between items-end px-7 mb-5">
        <h3 className="text-lg font-bold text-slate-900">
          Trending <span style={{ color: THEME.primary }}>Wisdom</span>
        </h3>
        <span className="text-xs text-stone-400 underline">View All</span>
      </div>
      
      <div className="flex overflow-x-auto px-6 gap-5 pb-8 snap-x hide-scrollbar">
        {BOOKS.map((book) => (
          <div 
            key={book.id} 
            onClick={() => onSelectBook(book)}
            className="min-w-[170px] snap-start cursor-pointer group"
          >
            <div className="w-[170px] h-[240px] rounded-[24px] overflow-hidden shadow-md mb-4 relative">
               <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
               <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] text-white font-bold flex items-center gap-1">
                  <Star size={10} className="fill-yellow-400 text-yellow-400"/> {book.rating}
               </div>
            </div>
            <h4 className="font-bold text-slate-900 leading-snug mb-1 line-clamp-2 font-serif text-sm px-1">
              {book.title}
            </h4>
            <p className="text-xs text-stone-500 mb-1 px-1">{book.author}</p>
            <p className="text-sm font-bold px-1" style={{ color: THEME.primary }}>{book.price}</p>
          </div>
        ))}
      </div>
    </div>

    {/* List Section */}
    <div className="px-6 mt-2">
      <h3 className="text-lg font-bold text-slate-900 mb-4 px-1">Editor's Picks</h3>
      <div className="flex flex-col gap-4">
        {BOOKS.slice(0, 2).map((book) => (
           <div key={`list-${book.id}`} onClick={() => onSelectBook(book)} className="bg-white p-4 rounded-3xl border border-stone-100 flex gap-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] active:bg-stone-50 transition cursor-pointer">
              <div className="w-20 h-28 bg-stone-200 rounded-2xl overflow-hidden shrink-0 shadow-inner">
                <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center py-1 flex-1">
                 <div className="flex gap-2 mb-2">
                    <span className="text-[10px] bg-[#FDF2EB] text-[#E65F25] px-2 py-0.5 rounded-full font-bold">{book.category}</span>
                 </div>
                 <h4 className="font-bold text-slate-900 font-serif mb-1 leading-snug text-sm">{book.title}</h4>
                 <p className="text-xs text-stone-500 line-clamp-1 mb-3">{book.subtitle}</p>
                 <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-sm" style={{ color: THEME.primary }}>{book.price}</span>
                    <div className="flex items-center gap-1 text-[10px] text-stone-400">
                       <Heart size={12} />
                       <span>{book.reviews} reviews</span>
                    </div>
                 </div>
              </div>
           </div>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedBook(null);
  };

  return (
    // Mobile Wrapper
    <div className="w-full min-h-screen flex justify-center font-sans text-slate-800" style={{ backgroundColor: THEME.bg }}>
      <div className="w-full max-w-md shadow-2xl relative overflow-hidden min-h-screen" style={{ backgroundColor: THEME.bg }}>
        {currentView === 'home' ? (
          <>
            <HomeView onSelectBook={handleBookSelect} />
            <BottomNav />
          </>
        ) : (
          <DetailView book={selectedBook} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}