import React, { useMemo, useState } from "react";
import {
  Search,
  Home,
  Library,
  User,
  ChevronLeft,
  Star,
  Heart,
  Share2,
  BookOpen,
  Clock,
  ShoppingBag,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";

const THEME = {
  bg: "#FDFBF7",
  primary: "#E65F25",
  primarySoft: "#FDF2EB",
  textMain: "#1A1A1A",
  textSub: "#8A8A8A",
  cardBg: "#FFFFFF",
};

const CATEGORIES = [
  { id: "all", name: "All", icon: "✨" },
  { id: "Life Advice", name: "Life Advice", icon: "🌱" },
  { id: "Job Skills", name: "Job Skills", icon: "🛠️" },
  { id: "History", name: "History", icon: "📜" },
  { id: "Hobbies", name: "Hobbies", icon: "🧶" },
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
    pages: 128,
    readTime: "2h",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900&h=1200",
    desc: "There is a philosophy even in driving a single nail. About the patience and firmness learned from touching wood all one's life. Contains the essence of carpentry skills and life philosophy organized by AI.",
    highlight: "Craft • Discipline • Patience",
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
    pages: 164,
    readTime: "2h 40m",
    image:
      "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&q=80&w=900&h=1200",
    desc: "Real history not found in textbooks. The true stories of fathers who sweated for their families while enduring the intense geothermal heat of that era.",
    highlight: "Grit • Family • Survival",
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
    pages: 112,
    readTime: "1h 45m",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=900&h=1200",
    desc: "50 years of in-law life, wisdom and patience blooming within. Passing on Grandmother's secret recipe for turning a spicy and salty life into a sweet one.",
    highlight: "Resilience • Warmth • Humor",
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
    pages: 140,
    readTime: "2h 10m",
    image:
      "https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?auto=format&fit=crop&q=80&w=900&h=1200",
    desc: "The weight of analog lost in the digital age. The master's final lesson, breathing life into each and every typeface.",
    highlight: "Legacy • Detail • Depth",
  },
];

const Logo = () => (
  <svg
    width="110"
    height="40"
    viewBox="0 0 110 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Gachi logo"
  >
    <text
      x="0"
      y="32"
      fontFamily="Arial, sans-serif"
      fontWeight="900"
      fontSize="32"
      fill={THEME.textMain}
      letterSpacing="-1"
    >
      Gach
    </text>
    <rect x="86" y="10" width="6" height="22" fill={THEME.textMain} />
    <circle cx="89" cy="8" r="5" fill={THEME.primary} />
    <path
      d="M25 12 C 42 4, 72 4, 89 8"
      stroke={THEME.primary}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const GlassHeader = ({ query, setQuery }) => (
  <header
    className="sticky top-0 z-50 px-6 pt-5 pb-4 border-b border-stone-100/60 backdrop-blur-xl"
    style={{ backgroundColor: "rgba(253, 251, 247, 0.82)" }}
  >
    <div className="flex items-end justify-between gap-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 h-10">
          <Logo />
        </div>
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#B0A898] uppercase ml-1">
          Life Editor
        </span>
      </div>

      <button
        className="p-2.5 rounded-full bg-white shadow-sm border border-stone-100 hover:shadow-md transition"
        aria-label="Cart"
      >
        <ShoppingBag className="w-5 h-5" style={{ color: THEME.textMain }} />
      </button>
    </div>

    {/* Search */}
    <div className="mt-4">
      <div className="bg-white/90 border border-stone-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] rounded-2xl px-4 py-3 flex items-center gap-3">
        <Search className="w-5 h-5 text-stone-300" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for wisdom, a mentor, or a craft..."
          className="bg-transparent text-sm w-full outline-none text-slate-700 placeholder:text-stone-300"
        />
        <div className="h-6 w-px bg-stone-100" />
        <button
          className="p-1.5 rounded-xl hover:bg-stone-50 transition"
          aria-label="Filters"
          title="Filters (mock)"
        >
          <SlidersHorizontal className="w-4.5 h-4.5 text-stone-400" />
        </button>
      </div>
    </div>
  </header>
);

const BottomNav = ({ active = "home" }) => (
  <nav className="fixed bottom-0 w-full bg-white border-t border-stone-100 py-3 px-10 flex justify-between items-center text-[10px] text-stone-400 z-50 max-w-md mx-auto left-0 right-0 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
    {[
      { id: "home", label: "Home", Icon: Home },
      { id: "explore", label: "Explore", Icon: Search },
      { id: "library", label: "Library", Icon: Library },
      { id: "my", label: "My", Icon: User },
    ].map(({ id, label, Icon }) => {
      const isActive = id === active;
      return (
        <div
          key={id}
          className="flex flex-col items-center gap-1 transition"
          style={{ color: isActive ? THEME.primary : undefined }}
        >
          <Icon size={24} strokeWidth={isActive ? 2.6 : 2} />
          <span className={isActive ? "font-bold" : ""}>{label}</span>
        </div>
      );
    })}
  </nav>
);

const CategoryChips = ({ activeCat, setActiveCat }) => (
  <div className="mt-6 px-6">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-bold text-slate-900">Categories</h3>
      <div className="flex items-center gap-1 text-xs text-stone-400">
        <Sparkles className="w-4 h-4" />
        Curated
      </div>
    </div>

    <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
      {CATEGORIES.map((c) => {
        const isActive = c.id === activeCat;
        return (
          <button
            key={c.id}
            onClick={() => setActiveCat(c.id)}
            className="shrink-0 px-3.5 py-2 rounded-full border text-xs font-semibold flex items-center gap-2 transition active:scale-[0.98]"
            style={{
              backgroundColor: isActive ? THEME.primarySoft : "white",
              borderColor: isActive ? "#F3D2C3" : "#F3F4F6",
              color: isActive ? THEME.primary : "#6B7280",
            }}
          >
            <span className="text-base leading-none">{c.icon}</span>
            <span className="whitespace-nowrap">{c.name}</span>
          </button>
        );
      })}
    </div>
  </div>
);

const Hero = () => (
  <div className="mt-6 mx-6 rounded-[32px] p-7 text-white shadow-xl shadow-orange-900/10 relative overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(1200px 400px at 15% 20%, rgba(230,95,37,0.30), transparent 50%), linear-gradient(135deg, #131316 0%, #222226 45%, #1A1A1E 100%)",
      }}
    />
    <div className="relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-4">
        <Sparkles className="w-4 h-4 text-[#FFDBB8]" />
        <p className="text-[#FFDBB8] text-[10px] font-bold tracking-wide uppercase">
          Weekly Highlight
        </p>
      </div>

      <h2 className="text-2xl font-serif font-bold leading-snug mb-3">
        Your mentor is{" "}
        <span style={{ color: THEME.primary }}>80 years old</span>.
      </h2>

      <p className="text-stone-300 text-sm leading-relaxed max-w-[92%]">
        Real answers you can’t google—crafted from lived experience, not trends.
      </p>

      <div className="mt-5 flex items-center gap-2 text-xs text-stone-300">
        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
          Human-made
        </span>
        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
          AI-edited
        </span>
        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
          Worth keeping
        </span>
      </div>
    </div>

    <div className="absolute -right-12 -bottom-12 w-52 h-52 rounded-full opacity-25 blur-3xl bg-orange-500" />
  </div>
);

const RatingPill = ({ rating }) => (
  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] text-white font-bold flex items-center gap-1">
    <Star size={10} className="fill-yellow-400 text-yellow-400" /> {rating}
  </div>
);

const BookCard = ({ book, onSelect }) => (
  <div
    onClick={() => onSelect(book)}
    className="min-w-[176px] snap-start cursor-pointer group"
  >
    <div className="w-[176px] h-[248px] rounded-[26px] overflow-hidden shadow-md relative">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-full object-cover group-hover:scale-[1.06] transition duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <RatingPill rating={book.rating} />

      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[10px] font-bold px-2 py-1 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
            title={book.category}
          >
            {book.category}
          </span>
          <span className="text-[10px] text-white/80">{book.readTime}</span>
        </div>
        <p className="text-white font-serif font-bold leading-snug line-clamp-2">
          {book.title}
        </p>
      </div>
    </div>

    <div className="mt-3 px-1">
      <p className="text-xs text-stone-500 mb-1">{book.author}</p>
      <p className="text-sm font-extrabold" style={{ color: THEME.primary }}>
        {book.price}
      </p>
    </div>
  </div>
);

const BookRow = ({ book, onSelect }) => (
  <div
    onClick={() => onSelect(book)}
    className="bg-white p-4 rounded-3xl border border-stone-100 flex gap-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition cursor-pointer active:scale-[0.99]"
  >
    <div className="w-20 h-28 bg-stone-200 rounded-2xl overflow-hidden shrink-0">
      <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
    </div>

    <div className="flex flex-col justify-center py-1 flex-1">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-[10px] px-2 py-0.5 rounded-full font-bold"
          style={{ backgroundColor: THEME.primarySoft, color: THEME.primary }}
        >
          {book.category}
        </span>
        <span className="text-[10px] text-stone-400">{book.highlight}</span>
      </div>

      <h4 className="font-bold text-slate-900 font-serif leading-snug text-sm">
        {book.title}
      </h4>
      <p className="text-xs text-stone-500 line-clamp-1 mt-1">{book.subtitle}</p>

      <div className="mt-3 flex items-center justify-between">
        <span className="font-extrabold text-sm" style={{ color: THEME.primary }}>
          {book.price}
        </span>
        <div className="flex items-center gap-2 text-[10px] text-stone-400">
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-stone-500">{book.rating}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Heart size={12} />
            <span>{book.reviews}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DetailView = ({ book, onBack }) => (
  <div
    className="min-h-screen pb-28 relative animate-in slide-in-from-right duration-300"
    style={{ backgroundColor: THEME.cardBg }}
  >
    <div className="sticky top-0 z-50 px-4 py-4 flex justify-between items-center bg-white/85 backdrop-blur-xl border-b border-stone-100/60">
      <button onClick={onBack} className="p-2 hover:bg-stone-50 rounded-full transition">
        <ChevronLeft size={26} style={{ color: THEME.textMain }} />
      </button>
      <div className="flex gap-4">
        <button className="p-1 rounded-full hover:bg-stone-50 transition" aria-label="Like">
          <Heart size={22} className="text-stone-400" />
        </button>
        <button className="p-1 rounded-full hover:bg-stone-50 transition" aria-label="Share">
          <Share2 size={22} className="text-stone-400" />
        </button>
      </div>
    </div>

    <div className="px-6 mt-3">
      <div className="w-full h-[360px] rounded-[34px] overflow-hidden shadow-xl shadow-orange-100/50 relative mb-8">
        <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md bg-white/15 border border-white/25">
              {book.category}
            </span>
            <span className="text-white/80 text-xs">{book.readTime}</span>
            <span className="text-white/60 text-xs">•</span>
            <span className="text-white/80 text-xs">{book.pages} pages</span>
          </div>

          <h1 className="text-2xl font-bold text-white leading-snug font-serif">
            {book.title}
          </h1>
          <p className="text-white/80 mt-1 text-sm">{book.subtitle}</p>
        </div>

        <div className="absolute top-5 left-5">
          <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/35 border border-white/15 backdrop-blur-md">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-white font-bold text-sm">{book.rating}</span>
            <span className="text-white/70 text-xs">({book.reviews})</span>
          </div>
        </div>
      </div>

      {/* Author */}
      <div
        className="p-5 rounded-3xl flex items-center gap-4 mb-8 border border-stone-100 shadow-sm"
        style={{ backgroundColor: THEME.bg }}
      >
        <div className="w-16 h-16 bg-stone-200 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-sm">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
              book.author
            )}&backgroundColor=e6e6e6`}
            alt="author"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-stone-500 border border-stone-100">
                Life Editor
              </span>
              <span className="text-[10px] text-stone-400">Verified</span>
            </div>
            <span className="text-[10px] text-stone-400">Mentor Note</span>
          </div>
          <p className="font-bold text-lg text-slate-800 mt-1">{book.author}</p>
          <p className="text-xs text-stone-500">{book.authorJob}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center bg-stone-50 rounded-2xl py-4 border border-stone-100">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="font-extrabold text-slate-900">{book.rating}</span>
          </div>
          <p className="text-xs text-stone-400">Rating</p>
        </div>
        <div className="text-center bg-stone-50 rounded-2xl py-4 border border-stone-100">
          <div className="flex items-center justify-center gap-1 mb-1">
            <BookOpen size={16} className="text-slate-900" />
            <span className="font-extrabold text-slate-900">{book.pages}P</span>
          </div>
          <p className="text-xs text-stone-400">Pages</p>
        </div>
        <div className="text-center bg-stone-50 rounded-2xl py-4 border border-stone-100">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Clock size={16} className="text-slate-900" />
            <span className="font-extrabold text-slate-900">{book.readTime}</span>
          </div>
          <p className="text-xs text-stone-400">Read Time</p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-36">
        <h3 className="font-bold text-lg mb-3 text-slate-900">About this book</h3>
        <p className="text-stone-600 leading-loose whitespace-pre-line text-sm">
          {book.desc}
          <br />
          <br />
          <span className="block p-4 rounded-2xl text-sm font-semibold italic border"
            style={{ backgroundColor: "#FFF8F5", color: THEME.primary, borderColor: "#F6D8CB" }}
          >
            “This isn’t just text. It’s a lifetime edited into something you can keep.”
          </span>
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-5 bg-gradient-to-t from-white via-white to-white/0 z-50">
      <button
        className="w-full text-white font-extrabold py-4 rounded-2xl text-lg shadow-lg shadow-orange-200/50 transition active:scale-[0.985] flex justify-center items-center gap-3"
        style={{ backgroundColor: THEME.primary }}
      >
        <span>Collect</span>
        <span className="w-1 h-1 rounded-full bg-orange-200/60" />
        <span>{book.price}</span>
      </button>
      <p className="text-center text-[11px] text-stone-400 mt-3">
        Instant access • Save forever • Support your mentor
      </p>
    </div>
  </div>
);

const SectionHeader = ({ title, right }) => (
  <div className="flex justify-between items-end px-7 mb-4 mt-10">
    <h3 className="text-lg font-bold text-slate-900">{title}</h3>
    {right ? <span className="text-xs text-stone-400 underline">{right}</span> : null}
  </div>
);

const HomeView = ({ onSelectBook }) => {
  const [activeCat, setActiveCat] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BOOKS.filter((b) => {
      const matchCat = activeCat === "all" ? true : b.category === activeCat;
      const matchQ =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.subtitle.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.authorJob.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [activeCat, query]);

  const trending = filtered; // keep it simple
  const picks = filtered.slice(0, 2);

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      <GlassHeader query={query} setQuery={setQuery} />
      <Hero />
      <CategoryChips activeCat={activeCat} setActiveCat={setActiveCat} />

      <SectionHeader
        title={
          <span>
            Trending <span style={{ color: THEME.primary }}>Wisdom</span>
          </span>
        }
        right="View all"
      />

      <div className="flex overflow-x-auto px-6 gap-5 pb-3 snap-x hide-scrollbar">
        {trending.map((book) => (
          <BookCard key={book.id} book={book} onSelect={onSelectBook} />
        ))}
      </div>

      <SectionHeader title="Editor’s Picks" />

      <div className="px-6 mt-2">
        <div className="flex flex-col gap-4">
          {picks.map((book) => (
            <BookRow key={`row-${book.id}`} book={book} onSelect={onSelectBook} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 p-6 rounded-3xl border border-stone-100 bg-white text-center">
            <p className="font-bold text-slate-900">No results</p>
            <p className="text-sm text-stone-500 mt-1">
              Try a different keyword or category.
            </p>
          </div>
        )}
      </div>

      <div className="h-8" />
    </div>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setCurrentView("detail");
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentView("home");
    setSelectedBook(null);
  };

  return (
    <div
      className="w-full min-h-screen flex justify-center font-sans text-slate-800"
      style={{ backgroundColor: THEME.bg }}
    >
      <div
        className="w-full max-w-md shadow-2xl relative overflow-hidden min-h-screen"
        style={{ backgroundColor: THEME.bg }}
      >
        {currentView === "home" ? (
          <>
            <HomeView onSelectBook={handleBookSelect} />
            <BottomNav active="home" />
          </>
        ) : (
          <DetailView book={selectedBook} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}