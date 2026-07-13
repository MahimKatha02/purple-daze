import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  Phone,
  Facebook,
  MessageCircle,
  ShoppingBag,
  Users,
} from "lucide-react";

// import heroCollageAsset from "@/assets/purple-daze-collage.png.asset.json";
// import brandLogoAsset from "@/assets/purple-daze-logo.png.asset.json";


// import pBags from "@/assets/product-bags.jpg";
// import pPerfume from "@/assets/product-perfume.jpg";
// import pBeauty from "@/assets/product-beauty.jpg";
// import pWallets from "@/assets/product-wallets.jpg";
// import pTravel from "@/assets/product-travel.jpg";
// import pAcc from "@/assets/product-accessories.jpg";


// import sheinLogo from "@/assets/shein.jpg";
// import shopeeLogo from "@/assets/Shopee.jpg";
// import lazadaLogo from "@/assets/Lazada.jpg";
// import nikeLogo from "@/assets/Nike.jpg";
// import adidasLogo from "@/assets/Adidas - Logo.jpg";
// import uniqloLogo from "@/assets/UNIQLO logo.jpg";
// import hmLogo from "@/assets/H&M.jpg";
// import ikeaLogo from "@/assets/ikea.jpg";
// import sephoraLogo from "@/assets/Sephora Wishlist.jpg";
// import watsonsLogo from "@/assets/watsons.jpg";
// import guardianLogo from "@/assets/guardian.png";
// import zaloraLogo from "@/assets/Zalora.jpg";
// import charlesLogo from "@/assets/charles&keith.jpg";
// import victoriaLogo from "@/assets/VS.jpg";
// import bnbLogo from "@/assets/bnb.jpg";

// const heroCollage = heroCollageAsset.url;
// const brandLogo = brandLogoAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Order", href: "#order" },
  { label: "Shopping Websites", href: "#websites" },
  { label: "Contact", href: "#contact" },
  { label: "Facebook", href: "https://www.facebook.com/purpledaze11", external: true },
];

// const PRODUCTS = [
//   {
//     title: "Luxury Bags",
//     tag: "Handbags",
//     img: "\luxuary-bag.jpg",
//   },
//   {
//     title: "Perfumes",
//     tag: "Fragrance",
//     img: "/perfumes.jpg",
//   },
//   {
//     title: "Beauty Products",
//     tag: "Skincare",
//     img: "/beauty.jpg",
//   },
//   {
//     title: "Wallets",
//     tag: "Leather Goods",
//     img: "/wallets.jpg",
//   },
//   {
//     title: "Travel Bags",
//     tag: "Journey",
//     img: "/travel-bag.jpg",
//   },
//   {
//     title: "Fashion Accessories",
//     tag: "Details",
//     img: "/accessories.jpg",
//   },
// ];


import heroCollageAsset from "@/assets/purple-daze-collage.png.asset.json";
import brandLogoAsset from "@/assets/purple-daze-logo.png.asset.json";

// import pPerfume from "@/assets/product-perfume.jpg";
// import pBeauty from "@/assets/product-beauty.jpg";
// import pWallets from "@/assets/product-wallets.jpg";
// import pTravel from "@/assets/product-travel.jpg";
// import pAcc from "@/assets/product-accessories.jpg";

// import pBags from "@/assets/handbags.jpg";
// import pHeels from "@/assets/heels.jpg";
// import pMakeupBrushes from "@/assets/makeup_brushes.jpg";
// import pCorsets from "@/assets/corsets.jpg";
// import pSkirts from "@/assets/skirts.jpg";
// import pBlouses from "@/assets/blouses.jpg";
// import pSweatshirts from "@/assets/sweatshirts.jpg";
// import pStockings from "@/assets/stockings.jpg";
// import pFormals from "@/assets/formals.jpg";
// import pPants from "@/assets/pants.jpg";
// import pTotes from "@/assets/totes.jpg";


import pBags from "@/assets/luxuary-bag.jpg";
import pHandbag from "@/assets/handbags.jpg";
import pPerfume from "@/assets/perfumes.jpg";
import pBeauty from "@/assets/beauty.jpg";
import pWallets from "@/assets/wallets.jpg";
import pTravel from "@/assets/travel-bag.jpg";
import pAcc from "@/assets/accessories.jpg";

import pHeels from "@/assets/heels.jpg";
import pMakeupBrushes from "@/assets/makeup_brushes.jpg";
import pCorsets from "@/assets/corsets.jpg";
import pSkirts from "@/assets/skirts.jpg";
import pBlouses from "@/assets/blouses.jpg";
import pSweatshirts from "@/assets/sweatshirts.jpg";
import pStockings from "@/assets/stockings.jpg";
import pFormals from "@/assets/formals.jpg";
import pPants from "@/assets/pants.jpg";
import pTotes from "@/assets/totes.jpg";


import pModestWear from "@/assets/modest.jpg";
import pPartyWear from "@/assets/party.jpg";
import pDresses from "@/assets/dresses.jpg";
import pVacationWear from "@/assets/vacation.jpg";
import pSeamlessLingerie from "@/assets/seameless.jpg";
import pFancyLingerie from "@/assets/lingerie.jpg";
import pSkincare from "@/assets/skincare.jpg";
import pBodycare from "@/assets/bodycare.jpg";
import pHaircare from "@/assets/haircare.jpg";


import sheinLogo from "@/assets/shein.jpg";
import shopeeLogo from "@/assets/Shopee.jpg";
import lazadaLogo from "@/assets/Lazada.jpg";
import nikeLogo from "@/assets/Nike.jpg";
import adidasLogo from "@/assets/Adidas - Logo.jpg";
import uniqloLogo from "@/assets/UNIQLO logo.jpg";
import hmLogo from "@/assets/H&M.jpg";
import ikeaLogo from "@/assets/ikea.jpg";
import sephoraLogo from "@/assets/Sephora Wishlist.jpg";
import watsonsLogo from "@/assets/watsons.jpg";
import guardianLogo from "@/assets/guardian.png";
import zaloraLogo from "@/assets/Zalora.jpg";
import charlesLogo from "@/assets/charles&keith.jpg";
import victoriaLogo from "@/assets/VS.jpg";
import bnbLogo from "@/assets/bnb.jpg";

const heroCollage = heroCollageAsset.url;
const brandLogo = brandLogoAsset.url;

const PRODUCTS = [
  {
    title: "Luxury Bags",
    tag: "Handbags",
    img: pBags,
  },
  {
    title: "Perfumes",
    tag: "Fragrance",
    img: pPerfume,
  },
  {
    title: "Beauty Products",
    tag: "Skincare",
    img: pBeauty,
  },
  {
    title: "Wallets",
    tag: "Leather Goods",
    img: pWallets,
  },
  {
    title: "Travel Bags",
    tag: "Journey",
    img: pTravel,
  },
  {
    title: "Fashion Accessories",
    tag: "Details",
    img: pAcc,
  },
  {
    title: "Heels",
    tag: "Footwear",
    img: pHeels,
  },
  {
    title: "Makeup Brushes",
    tag: "Beauty Tools",
    img: pMakeupBrushes,
  },
  {
    title: "Corsets",
    tag: "Women's Fashion",
    img: pCorsets,
  },
  {
    title: "Skirts",
    tag: "Women's Wear",
    img: pSkirts,
  },
  {
    title: "Blouses",
    tag: "Women's Tops",
    img: pBlouses,
  },
  {
    title: "Sweatshirts",
    tag: "Casual Wear",
    img: pSweatshirts,
  },
  {
    title: "Stockings",
    tag: "Fashion Essentials",
    img: pStockings,
  },
  {
    title: "Formal Wear",
    tag: "Elegant Style",
    img: pFormals,
  },
  {
    title: "Pants",
    tag: "Bottom Wear",
    img: pPants,
  },
  {
    title: "Tote Bags",
    tag: "Everyday Carry",
    img: pTotes,
  },
  {
    title: "Handbags",
    tag: "Women's Bags",
    img: pHandbag,
  },
  {
    title: "Modest Wear",
    tag: "Modest Fashion",
    img: pModestWear,
  },
  {
    title: "Party Wear",
    tag: "Evening Collection",
    img: pPartyWear,
  },
  {
    title: "Dresses",
    tag: "Women's Fashion",
    img: pDresses,
  },
  {
    title: "Vacation Wear",
    tag: "Resort Collection",
    img: pVacationWear,
  },
  {
    title: "Seamless Lingerie",
    tag: "Everyday Comfort",
    img: pSeamlessLingerie,
  },
  {
    title: "Fancy Lingerie",
    tag: "Luxury Intimates",
    img: pFancyLingerie,
  },
  {
    title: "Skincare",
    tag: "Beauty Essentials",
    img: pSkincare,
  },
  {
    title: "Bodycare",
    tag: "Body Essentials",
    img: pBodycare,
  },
  {
    title: "Haircare",
    tag: "Hair Essentials",
    img: pHaircare,
  },
];


const FEATURES = [
  "Authentic Products",
  "Trusted Personal Shopper",
  "Fast Response",
  "Secure Ordering",
  "International Brands",
  "Malaysia Shopping Support",
];

const STEPS = [
  { n: "01", title: "Choose your product", body: "Browse your favorite products from our trusted partner stores below." },
  { n: "02", title: "Send us the product link", body: "Share the link via Facebook Messenger or WhatsApp." },
  { n: "03", title: "Confirm order", body: "We verify availability, price and delivery details." },
  {
    n: "04",
    title: "Booking Payment",
    body: "Confirm your order by completing the booking payment via bKash, Nagad, or DBBL Fund Transfer."
  },
  // { n: "05", title: "Delivery", body: "Sit back — your parcel is on its way." },
  {
    n: "05",
    title: "Receive Your Order",
    body: "Sit back and relax while we deliver your authentic products safely to your doorstep within 4–6 weeks of order confirmation."
  },
];

const SITES = [
  {
    name: "SHEIN",
    desc: "Trend-driven fashion & lifestyle.",
    url: "https://my.shein.com",
    logo: sheinLogo,
  },
  {
    name: "Shopee",
    desc: "Marketplace for everything.",
    url: "https://shopee.com.my",
    logo: shopeeLogo,
  },
  {
    name: "Lazada",
    desc: "Everyday essentials & electronics.",
    url: "https://www.lazada.com.my",
    logo: lazadaLogo,
  },
  {
    name: "Nike",
    desc: "Athletic apparel & sneakers.",
    url: "https://www.nike.com/my",
    logo: nikeLogo,
  },
  {
    name: "Adidas",
    desc: "Sport & performance wear.",
    url: "https://www.adidas.com.my",
    logo: adidasLogo,
  },
  {
    name: "UNIQLO",
    desc: "Japanese Lifewear.",
    url: "https://www.uniqlo.com/my",
    logo: uniqloLogo,
  },
  {
    name: "H&M",
    desc: "Contemporary wardrobe staples.",
    url: "https://www2.hm.com/en_my",
    logo: hmLogo,
  },
  {
    name: "IKEA",
    desc: "Home & lifestyle furnishings.",
    url: "https://www.ikea.com/my",
    logo: ikeaLogo,
  },
  {
    name: "Sephora",
    desc: "Prestige beauty destination.",
    url: "https://www.sephora.my",
    logo: sephoraLogo,
  },
  {
    name: "Watsons",
    desc: "Beauty, health & wellness.",
    url: "https://www.watsons.com.my",
    logo: watsonsLogo,
  },
  {
    name: "Guardian",
    desc: "Health & personal care.",
    url: "https://www.guardian.com.my",
    logo: guardianLogo,
  },
  {
    name: "Zalora",
    desc: "Curated fashion & footwear.",
    url: "https://www.zalora.com.my",
    logo: zaloraLogo,
  },
  {
    name: "Charles & Keith",
    desc: "Modern accessories & shoes.",
    url: "https://www.charleskeith.com/my",
    logo: charlesLogo,
  },
  {
    name: "Victoria's Secret",
    desc: "Beauty, fragrance & lingerie.",
    url: "https://www.victoriassecretbeauty.com.my",
    logo: victoriaLogo,
  },
  {
    name: "Bath & Body Works",
    desc: "Body care & fragrances.",
    url: "https://www.bathandbodyworks.com.my",
    logo: bnbLogo,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <Hero />
      <Collections />
      <WhyUs />
      <OrderTimeline />
      <Websites />
      <FacebookCta />
      <WhatsAppCta />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

/* -------------------- NAVBAR -------------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/85 backdrop-blur-md border-b border-border/60"
        : "bg-transparent"
        }`}
    >
      <div className="container-luxe flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/FB_IMG_1783421037036.jpg"
            alt="Purple Daze"
            width={40}
            height={40}
            className="h-9 w-9 md:h-10 md:w-10 rounded-full object-cover"
          />
          <span className="hidden sm:inline font-display text-lg md:text-xl tracking-tight text-black">
            Purple <span className="italic">Daze</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              target={n.external ? "_blank" : undefined}
              rel={n.external ? "noopener noreferrer" : undefined}
              className="font-ui text-[11px] uppercase tracking-[0.22em] text-coffee/80 hover:text-black transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 -mr-2 text-coffee"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden overflow-hidden bg-white border-b border-border"
      >
        <div className="container-luxe py-6 flex flex-col gap-5">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              target={n.external ? "_blank" : undefined}
              rel={n.external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="font-ui text-xs uppercase tracking-[0.24em] text-coffee hover:text-black"
            >
              {n.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section
      id="home"
      className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 order-2 lg:order-1"
        >
          <span className="eyebrow">Curated Fashion · Beauty · Lifestyle</span>
          <h1 className="mt-6 font-display text-[2.6rem] sm:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-black">
            Luxury Fashion,
            <br />
            <span className="italic font-normal">Beauty</span> &amp; Lifestyle.
          </h1>
          <p className="mt-8 max-w-lg text-[0.95rem] leading-relaxed text-coffee/85">
            Purple Daze brings carefully selected fashion accessories, beauty
            products and lifestyle essentials from trusted international brands.
            Shop confidently through our trusted ordering service.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#collections"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-ui text-[11px] uppercase tracking-[0.24em] rounded-sm transition-all duration-500 hover:bg-coffee hover:pl-10 hover:pr-6"
            >
              Shop Now
              <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.facebook.com/purpledaze11"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-coffee/30 text-coffee font-ui text-[11px] uppercase tracking-[0.24em] rounded-sm transition-all duration-500 hover:bg-ivory hover:border-coffee/60"
            >
              Order on Facebook
              <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "500+", v: "Repeat Customers" },
              { k: "24h", v: "Fast response" },
              { k: "100%", v: "Authentic" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl text-black">{s.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-coffee/60">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          // className="lg:col-span-6 order-1 lg:order-2"
          className="lg:col-span-6 order-1 lg:order-2 flex justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 md:-inset-5 bg-ivory rounded-md -z-12" />

            <div className="overflow-hidden rounded-md aspect-[4/3] md:aspect-[18/10]">
              <img
                src="/FB_IMG_1783421043412.jpg"
                alt="Purple Daze curated fashion, beauty and lifestyle moodboard"
                width={2000}
                height={1080}
                className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.03]"
              />
            </div>


            <div className="hidden md:flex absolute -bottom-6 -left-6 bg-white border border-border px-5 py-4 rounded-sm items-center gap-3">
              <ShoppingBag size={16} className="text-coffee" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-coffee/60">Personal Shopper</div>
                <div className="font-display text-sm text-black">Malaysia · Worldwide</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- COLLECTIONS -------------------- */
function Collections() {
  return (
    <section id="collections" className="py-24 md:py-40 bg-white">
      <div className="container-luxe">
        <motion.div {...fadeUp} className="max-w-2xl">
          <span className="eyebrow">The Edit</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-black leading-tight">
            Quietly curated collections.
          </h2>
          <p className="mt-5 text-coffee/80 max-w-lg">
            Each piece is hand-picked from boutiques we trust — for their craft,
            their materials and the way they make you feel.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((p, i) => (
            <motion.a
              key={p.title}
              href="https://www.facebook.com/purpledaze11"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true, margin: "-60px" }}
              // viewport={{ once: true, margin: "0px 0px -120px 0px" }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              
              className="group block"
            >
              <div className="overflow-hidden rounded-sm bg-ivory aspect-[4/5]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-coffee/60">
                    {p.tag}
                  </div>
                  <h3 className="mt-1 font-display text-xl text-black">{p.title}</h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-coffee/70 mt-1 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- WHY US -------------------- */
function WhyUs() {
  return (
    <section className="py-24 md:py-40" style={{ backgroundColor: "#E6DCD3" }}>
      <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div {...fadeUp} className="lg:col-span-5">
          <span className="eyebrow">Why Purple Daze</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-black leading-tight">
            A shopping experience worth trusting.
          </h2>
          <p className="mt-5 text-coffee/85 max-w-md">
            We built Purple Daze around the promise of authenticity, care and
            calm — the way luxury shopping was always meant to feel.
          </p>
        </motion.div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-coffee/10 border border-coffee/10">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-[#E6DCD3] p-8 flex items-start gap-4 transition-colors duration-500 hover:bg-white"
            >
              <div className="mt-0.5 h-8 w-8 rounded-full border border-coffee/30 grid place-items-center shrink-0">
                <Check size={14} className="text-coffee" />
              </div>
              <div>
                <div className="font-display text-lg text-black">{f}</div>
                <div className="mt-1 text-xs text-coffee/70 leading-relaxed">
                  A promise we honour with every order.
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TIMELINE -------------------- */
function OrderTimeline() {
  return (
    <section id="order" className="py-24 md:py-40 bg-white">
      <div className="container-luxe">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-black">
            Five steps, effortlessly.
          </h2>
        </motion.div>

        <div className="mt-20 relative max-w-3xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-2 bottom-2 w-px bg-coffee/15 md:-translate-x-px" aria-hidden />
          <div className="space-y-14">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-start`}
              >
                <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                  <div className="font-display text-3xl text-black">{s.title}</div>
                  <p className="mt-2 text-sm text-coffee/75 leading-relaxed max-w-sm md:ml-auto md:mr-0">
                    {s.body}
                  </p>
                </div>
                <div
                  className={`absolute left-8 md:left-1/2 top-1 -translate-x-1/2 h-16 w-16 rounded-full bg-white border border-coffee/20 grid place-items-center`}
                >
                  <span className="font-display text-lg text-black">{s.n}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- WEBSITES -------------------- */
function Websites() {
  return (
    <section id="websites" className="py-24 md:py-40" style={{ backgroundColor: "#E6DCD3" }}>
      <div className="container-luxe">
        <motion.div {...fadeUp} className="max-w-2xl">
          <span className="eyebrow">Popular Destinations</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-black leading-tight">
            Shop from the world's most-loved stores.
          </h2>
          <p className="mt-5 text-coffee/85 max-w-lg">
            Send us a link from any of these boutiques and we'll take care of
            the rest — payment, tracking, delivery.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {SITES.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
              className="group relative bg-white border border-transparent rounded-sm p-6 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-1 hover:border-coffee/20"
            >
              <div className="flex items-start justify-between">
                <div className="h-14 w-20 flex items-center justify-center rounded-md bg-white border border-border p-2">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-coffee/50 transition-all duration-500 group-hover:text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <div className="mt-2">
                <div className="font-display text-lg text-black leading-tight">{s.name}</div>
                <div className="mt-1 text-xs text-coffee/70 leading-relaxed">{s.desc}</div>
              </div>
              <div className="mt-auto pt-4 border-t border-border">
                <span className="font-ui text-[10px] uppercase tracking-[0.22em] text-coffee group-hover:text-black transition-colors">
                  Visit store
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FACEBOOK CTA -------------------- */
function FacebookCta() {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="container-luxe">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-md px-8 md:px-20 py-20 md:py-32 text-center"
          style={{ backgroundColor: "#3F352C" }}
        >
          <span className="eyebrow" style={{ color: "#E6DCD3", opacity: 0.7 }}>
            Facebook Messenger
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl lg:text-6xl leading-tight" style={{ color: "#fff" }}>
            Order Directly Through
            <br />
            <span className="italic">Facebook.</span>
          </h2>
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.facebook.com/purpledaze11"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-sm font-ui text-[11px] uppercase tracking-[0.24em] transition-all duration-500 hover:gap-5"
              style={{ backgroundColor: "#BDA18C", color: "#fff" }}
            >
              <Facebook size={16} />
              Visit Facebook Page
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- WHATSAPP CTA -------------------- */
function WhatsAppCta() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#E6DCD3" }}>
      <div className="container-luxe grid md:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <span className="eyebrow">Concierge</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-black leading-tight">
            Need Help?
          </h2>
          <p className="mt-5 text-coffee/85 max-w-md">
            Message us anytime. Our team responds quickly with product advice,
            pricing and honest guidance.
          </p>
        </motion.div>
        <motion.div {...fadeUp} className="md:justify-self-end">
          <a
            href="https://wa.me/8801930647457"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-5 bg-white border border-coffee/20 rounded-sm transition-all duration-500 hover:-translate-y-1 hover:border-coffee/40"
          >
            <MessageCircle size={22} className="text-coffee" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-[0.22em] text-coffee/60">
                WhatsApp us
              </div>
              <div className="font-display text-xl text-black">+880 1930 647 457</div>
            </div>
            <ArrowUpRight size={16} className="text-coffee transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  const info = [
    { k: "Owner", v: "Mahim Chowdhury Katha" },
    { k: "CEO", v: "Akibul Hasan Arman" },
    { k: "Email", v: "thepurpledaze@gmail.com" },
    { k: "Phone", v: "01930647457" },
    { k: "Order Method", v: "Facebook Messenger · WhatsApp" },
  ];
  return (
    <section id="about" className="py-24 md:py-40 bg-white">
      <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div {...fadeUp} className="lg:col-span-5">
          <span className="eyebrow">About</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-black leading-tight">
            About <span className="italic">Purple Daze.</span>
          </h2>
          <p className="mt-6 text-coffee/85 leading-relaxed">
            Purple Daze is a trusted online shopping platform that helps
            customers purchase authentic fashion, beauty and lifestyle products
            from leading Malaysian and international brands. We simplify the
            shopping experience by offering reliable ordering assistance,
            responsive customer support and carefully curated products.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="lg:col-span-7">
          <dl className="divide-y divide-border border-t border-b border-border">
            {info.map((i) => (
              <div key={i.k} className="grid grid-cols-3 gap-6 py-6">
                <dt className="col-span-1 text-[10px] uppercase tracking-[0.24em] text-coffee/60 pt-1">
                  {i.k}
                </dt>
                <dd className="col-span-2 font-display text-lg text-black">{i.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  const cards = [
    { icon: Mail, label: "Email", value: "thepurpledaze@gmail.com", href: "mailto:thepurpledaze@gmail.com" },
    { icon: Phone, label: "Phone", value: "01930647457", href: "tel:01930647457" },
    { icon: Facebook, label: "Facebook", value: "@purpledaze11", href: "https://www.facebook.com/purpledaze11" },
    { icon: MessageCircle, label: "WhatsApp", value: "+880 1930 647 457", href: "https://wa.me/8801930647457" },
    {
      icon: Users,
      label: "Join Our Group",
      value: "Purple Daze Community",
      href: "https://www.facebook.com/share/g/17yuhqtKn2/",
    },

  ];


  return (
    <section id="contact" className="py-24 md:py-40" style={{ backgroundColor: "#E6DCD3" }}>
      <div className="container-luxe">
        <motion.div {...fadeUp} className="max-w-2xl">
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-black leading-tight">
            Let's talk.
          </h2>
          <p className="mt-5 text-coffee/85 max-w-lg">
            However you prefer to reach us, we're here — every day.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group bg-white p-8 rounded-sm border border-transparent transition-all duration-500 hover:-translate-y-1 hover:border-coffee/20 flex flex-col gap-6"
            >
              <div className="h-10 w-10 rounded-full border border-coffee/25 grid place-items-center">
                <c.icon size={16} className="text-coffee" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-coffee/60">
                  {c.label}
                </div>
                <div className="mt-2 font-display text-lg text-black break-words">
                  {c.value}
                </div>
              </div>
              <ArrowUpRight size={16} className="text-coffee/60 mt-auto transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  const links = [
    { l: "Home", h: "#home" },
    { l: "About", h: "#about" },
    { l: "Shopping Websites", h: "#websites" },
    { l: "Facebook", h: "https://www.facebook.com/purpledaze11" },
    { l: "Contact", h: "#contact" },
  ];
  return (
    <footer className="bg-white border-t border-border">
      <div className="container-luxe py-14 md:py-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="flex items-start gap-4">
          <img
            src="/FB_IMG_1783421037036.jpg"
            alt="Purple Daze"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <div className="font-display text-2xl text-black">
              Purple <span className="italic">Daze</span>
            </div>
            <p className="mt-3 text-xs text-coffee/70 max-w-xs leading-relaxed">
              Curated fashion, beauty and lifestyle — delivered with care.
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.l}
              href={l.h}
              target={l.h.startsWith("http") ? "_blank" : undefined}
              rel={l.h.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-ui text-[11px] uppercase tracking-[0.22em] text-coffee/80 hover:text-black transition-colors"
            >
              {l.l}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="container-luxe py-6 text-[11px] text-coffee/60 text-center md:text-left">
          © 2026 Purple Daze. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
