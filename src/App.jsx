import React, { useState } from 'react';
import { Search, Home, Library, User, ChevronLeft, Star, Heart, Share2, BookOpen, Clock, ShoppingBag } from 'lucide-react';

// --- Theme Colors ---
const THEME = {
  bg: '#FDFBF7',
  primary: '#E65F25',
  primarySoft: '#FDF2EB',
  textMain: '#1A1A1A',
  textSub: '#8A8A8A',
  cardBg: '#FFFFFF',
  white: '#FFFFFF',
};

// --- Styles (CSS Reset & Utilities equivalent) ---
const STYLES = {
  wrapper: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: THEME.bg,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: THEME.textMain,
  },
  mobileContainer: {
    width: '100%',
    maxWidth: '420px', // Force mobile width
    backgroundColor: THEME.bg,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
    margin: '0 auto', // Center on desktop
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: THEME.bg,
    borderBottom: '1px solid #F5F5F4',
  }
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

const Logo = () => (
  <svg width="90" height="32" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <text x="0" y="32" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="32" fill="#1A1A1A" letterSpacing="-1">Gach</text>
    <rect x="83" y="10" width="6" height="22" fill="#1A1A1A" />
    <circle cx="86" cy="8" r="5" fill="#E65F25" />
    <path d="M25 12 C 40 4, 70 4, 86 8" stroke="#E65F25" strokeWidth="3" strokeLinecap="round" fill="none"/>
  </svg>
);

const Header = () => (
  <header style={STYLES.header}>
    <div style={STYLES.flexCol}>
      <div style={{ ...STYLES.flexRow, height: '40px' }}>
        <Logo />
      </div>
      <span style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.1em', color: '#B0A898', textTransform: 'uppercase', marginTop: '4px', marginLeft: '4px' }}>Life Editor</span>
    </div>
    <div style={{ position: 'relative' }}>
      <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid #F5F5F4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ShoppingBag size={20} color={THEME.textMain} />
      </div>
    </div>
  </header>
);

const BottomNav = () => (
  <nav style={{ 
    position: 'fixed', bottom: 0, left: 0, right: 0, 
    width: '100%', maxWidth: '420px', margin: '0 auto', 
    backgroundColor: 'white', borderTop: '1px solid #F5F5F4', 
    padding: '12px 32px', display: 'flex', justifyContent: 'space-between', 
    alignItems: 'center', fontSize: '10px', color: '#A8A29E', 
    zIndex: 50, borderTopLeftRadius: '24px', borderTopRightRadius: '24px',
    boxShadow: '0 -5px 20px rgba(0,0,0,0.03)' 
  }}>
    <div style={{ ...STYLES.flexCol, alignItems: 'center', gap: '4px', color: THEME.primary }}>
      <Home size={24} strokeWidth={2.5} />
      <span style={{ fontWeight: 'bold' }}>Home</span>
    </div>
    <div style={{ ...STYLES.flexCol, alignItems: 'center', gap: '4px' }}>
      <Search size={24} strokeWidth={2} />
      <span>Explore</span>
    </div>
    <div style={{ ...STYLES.flexCol, alignItems: 'center', gap: '4px' }}>
      <Library size={24} strokeWidth={2} />
      <span>Library</span>
    </div>
    <div style={{ ...STYLES.flexCol, alignItems: 'center', gap: '4px' }}>
      <User size={24} strokeWidth={2} />
      <span>My</span>
    </div>
  </nav>
);

const DetailView = ({ book, onBack }) => (
  <div style={{ ...STYLES.mobileContainer, backgroundColor: THEME.cardBg, paddingBottom: '96px' }}>
    {/* Detail Header */}
    <div style={{ position: 'sticky', top: 0, zIndex: 50, padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)' }}>
      <button onClick={onBack} style={{ padding: '8px', borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer' }}>
        <ChevronLeft size={26} color={THEME.textMain} />
      </button>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Heart size={24} color="#A8A29E" />
        <Share2 size={24} color="#A8A29E" />
      </div>
    </div>

    <div style={{ padding: '0 24px', marginTop: '8px' }}>
      {/* Book Cover */}
      <div style={{ width: '100%', height: '340px', backgroundColor: '#F5F5F4', borderRadius: '32px', overflow: 'hidden', position: 'relative', marginBottom: '32px', boxShadow: '0 10px 30px rgba(230, 95, 37, 0.15)' }}>
         <img src={book.image} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
         <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}></div>
         <span style={{ position: 'absolute', bottom: '24px', left: '24px', color: 'white', fontSize: '12px', fontWeight: 'bold', padding: '6px 12px', borderRadius: '99px', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.3)' }}>
            {book.category}
         </span>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0F172A', lineHeight: '1.3', marginBottom: '8px', fontFamily: 'serif' }}>
        {book.title}
      </h1>
      <p style={{ color: '#78716C', marginBottom: '32px', lineHeight: '1.6', fontSize: '14px' }}>{book.subtitle}</p>

      {/* Author Card */}
      <div style={{ padding: '20px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', border: '1px solid #F5F5F4', backgroundColor: THEME.bg }}>
        <div style={{ width: '64px', height: '64px', backgroundColor: '#E7E5E4', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '4px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${book.author}&backgroundColor=e6e6e6`} alt="author" style={{ width: '100%', height: '100%' }} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
             <span style={{ fontSize: '10px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '99px', backgroundColor: 'white', color: '#78716C', border: '1px solid #F5F5F4' }}>Life Editor</span>
          </div>
          <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#1E293B' }}>{book.author}</p>
          <p style={{ fontSize: '12px', color: '#78716C' }}>{book.authorJob}</p>
        </div>
      </div>

      {/* Info Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
        <div style={{ textAlign: 'center', backgroundColor: '#FAFAF9', borderRadius: '16px', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '4px' }}>
            <Star size={16} fill="#FB923C" color="#FB923C" />
            <span style={{ fontWeight: 'bold', color: '#0F172A' }}>{book.rating}</span>
          </div>
          <p style={{ fontSize: '12px', color: '#A8A29E' }}>Rating</p>
        </div>
        <div style={{ textAlign: 'center', backgroundColor: '#FAFAF9', borderRadius: '16px', padding: '16px' }}>
           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '4px' }}>
            <BookOpen size={16} color="#0F172A" />
            <span style={{ fontWeight: 'bold', color: '#0F172A' }}>128P</span>
          </div>
          <p style={{ fontSize: '12px', color: '#A8A29E' }}>Pages</p>
        </div>
        <div style={{ textAlign: 'center', backgroundColor: '#FAFAF9', borderRadius: '16px', padding: '16px' }}>
           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '4px' }}>
            <Clock size={16} color="#0F172A" />
            <span style={{ fontWeight: 'bold', color: '#0F172A' }}>2h</span>
          </div>
          <p style={{ fontSize: '12px', color: '#A8A29E' }}>Read Time</p>
        </div>
      </div>

      {/* Description */}
      <div style={{ marginBottom: '128px' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '16px', color: '#0F172A' }}>About this Book</h3>
        <p style={{ color: '#57534E', lineHeight: '1.8', whiteSpace: 'pre-line', fontSize: '14px' }}>
          {book.desc}
          <br/><br/>
          <span style={{ display: 'block', padding: '16px', backgroundColor: '#FFF7ED', borderRadius: '16px', color: '#EA580C', fontSize: '14px', fontWeight: '500', fontStyle: 'italic' }}>
            "This book is not merely text. It contains the weight of time from a person who has dedicated their entire life as a {book.authorJob}."
          </span>
        </p>
      </div>
    </div>

    {/* Floating CTA */}
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, maxWidth: '420px', margin: '0 auto', padding: '20px', background: 'linear-gradient(to top, white 60%, transparent)', zIndex: 50 }}>
      <button style={{ 
        width: '100%', backgroundColor: THEME.primary, color: 'white', fontWeight: 'bold', 
        padding: '16px', borderRadius: '16px', fontSize: '18px', border: 'none',
        boxShadow: '0 10px 25px -5px rgba(230, 95, 37, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px'
      }}>
        <span>Collect</span>
        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.5)' }}></span>
        <span>{book.price}</span>
      </button>
    </div>
  </div>
);

const HomeView = ({ onSelectBook }) => (
  <div style={{ paddingBottom: '96px', opacity: 1, transition: 'opacity 0.5s' }}>
    <Header />
    
    {/* Hero Banner */}
    <div style={{ 
      marginTop: '24px', marginLeft: '24px', marginRight: '24px', 
      borderRadius: '32px', padding: '28px', 
      background: 'linear-gradient(135deg, #1C1C1E 0%, #2C2C2E 100%)', 
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', 
      position: 'relative', overflow: 'hidden' 
    }}>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '99px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '16px' }}>
          <p style={{ color: '#FFDBB8', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Weekly Highlight</p>
        </div>
        {/* Force Text White */}
        <h2 style={{ fontSize: '24px', fontFamily: 'serif', fontWeight: 'bold', lineHeight: '1.3', marginBottom: '16px', color: '#FFFFFF' }}>
          Your Mentor is<br/> 
          <span style={{ color: THEME.primary }}>80 Years Old.</span>
        </h2>
        <p style={{ color: '#A8A29E', fontSize: '14px', marginBottom: '24px', maxWidth: '90%', lineHeight: '1.5' }}>
          Find real life answers that<br/>
          Search Engines can't give you.
        </p>
      </div>
      <div style={{ position: 'absolute', right: '-40px', bottom: '-40px', width: '160px', height: '160px', borderRadius: '50%', opacity: 0.2, backgroundColor: '#F97316', filter: 'blur(40px)' }}></div>
    </div>

    {/* Search Bar */}
    <div style={{ padding: '0 24px', marginTop: '32px' }}>
      <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '16px', boxShadow: '0 2px 20px rgba(0,0,0,0.03)', border: '1px solid #F5F5F4', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Search size={20} color="#D6D3D1" />
        <input 
          type="text" 
          placeholder="What wisdom are you looking for?" 
          style={{ background: 'transparent', fontSize: '14px', width: '100%', outline: 'none', border: 'none', color: '#334155' }}
        />
      </div>
    </div>

    {/* Categories */}
    <div style={{ marginTop: '40px', padding: '0 24px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0F172A', marginBottom: '16px', paddingLeft: '4px' }}>Categories</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
        {CATEGORIES.map((cat) => (
          <div key={cat.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', flex: 1, cursor: 'pointer' }}>
            <div style={{ width: '100%', aspectRatio: '1/1', backgroundColor: 'white', borderRadius: '24px', border: '1px solid #F5F5F4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
              {cat.icon}
            </div>
            <span style={{ fontSize: '12px', color: '#78716C', fontWeight: '500', whiteSpace: 'nowrap' }}>{cat.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Featured (Horizontal Scroll) */}
    <div style={{ marginTop: '48px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 28px', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0F172A' }}>
          Trending <span style={{ color: THEME.primary }}>Wisdom</span>
        </h3>
        <span style={{ fontSize: '12px', color: '#A8A29E', textDecoration: 'underline', cursor: 'pointer' }}>View All</span>
      </div>
      
      <div style={{ display: 'flex', overflowX: 'auto', padding: '0 24px', gap: '20px', paddingBottom: '32px', scrollbarWidth: 'none' }}>
        {BOOKS.map((book) => (
          <div 
            key={book.id} 
            onClick={() => onSelectBook(book)}
            style={{ minWidth: '170px', cursor: 'pointer' }}
          >
            <div style={{ width: '170px', height: '240px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', marginBottom: '16px', position: 'relative' }}>
               <img src={book.image} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', padding: '4px 8px', borderRadius: '8px', fontSize: '10px', color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={10} fill="#FACC15" color="#FACC15"/> {book.rating}
               </div>
            </div>
            <h4 style={{ fontWeight: 'bold', color: '#0F172A', lineHeight: '1.3', marginBottom: '4px', fontFamily: 'serif', fontSize: '14px', padding: '0 4px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {book.title}
            </h4>
            <p style={{ fontSize: '12px', color: '#78716C', marginBottom: '4px', padding: '0 4px' }}>{book.author}</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold', padding: '0 4px', color: THEME.primary }}>{book.price}</p>
          </div>
        ))}
      </div>
    </div>

    {/* List Section */}
    <div style={{ padding: '0 24px', marginTop: '8px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0F172A', marginBottom: '16px', paddingLeft: '4px' }}>Editor's Picks</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {BOOKS.slice(0, 2).map((book) => (
           <div key={`list-${book.id}`} onClick={() => onSelectBook(book)} style={{ backgroundColor: 'white', padding: '16px', borderRadius: '24px', border: '1px solid #F5F5F4', display: 'flex', gap: '20px', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', cursor: 'pointer' }}>
              <div style={{ width: '80px', height: '112px', backgroundColor: '#E7E5E4', borderRadius: '16px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={book.image} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, padding: '4px 0' }}>
                 <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '10px', backgroundColor: '#FDF2EB', color: '#E65F25', padding: '2px 8px', borderRadius: '99px', fontWeight: 'bold' }}>{book.category}</span>
                 </div>
                 <h4 style={{ fontWeight: 'bold', color: '#0F172A', fontFamily: 'serif', marginBottom: '4px', lineHeight: '1.3', fontSize: '14px' }}>{book.title}</h4>
                 <p style={{ fontSize: '12px', color: '#78716C', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '12px' }}>{book.subtitle}</p>
                 <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px', color: THEME.primary }}>{book.price}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#A8A29E' }}>
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
    <div style={STYLES.wrapper}>
      <div style={STYLES.mobileContainer}>
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