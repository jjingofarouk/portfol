import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const Zano = {
  id: "zano",
  category: "E-commerce",
  title: "Zano!",
  src: "/assets/projects-screenshots/zano/home_zano.jpg",
  screenshots: ["home_zano.jpg"],
  live: "https://zanoug.vercel.app/",
  github: "https://github.com/jjingofarouk/Ecommerce-React",
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.aceternity,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [
      PROJECT_SKILLS.sanity,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Zano! = Step Into Style
      </TypographyP>
      <TypographyP className="font-mono">
        Zano! is your go-to online shoe shop, bringing you the latest kicks with a sleek, modern vibe. Built with smooth animations and a user-friendly design, browsing for your next pair feels as good as wearing them.
      </TypographyP>
      <ProjectsLinks live="https://zanoug.vercel.app/" repo="https://github.com/jjingofarouk/Ecommerce-React" />
      <p className="font-mono mb-2 mt-8">
        Hit the landing page and find trending styles, exclusive deals, and a curated selection of shoes for every occasion.
      </p>
      <SlideShow images={[`${BASE_PATH}/zano/home_zano.jpg`]} />
      <TypographyH3 className="my-4 mt-8">Shop</TypographyH3>
      <p className="font-mono mb-2">
        Explore a wide range of shoes—sneakers, boots, sandals, and more. Filter by size, style, or brand to find your perfect fit.
      </p>
      <SlideShow images={[`${BASE_PATH}/zano/shop.jpg`, `${BASE_PATH}/zano/product.jpg`]} />
      <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>
      <p className="font-mono mb-2">
        Powered by Sanity CMS, Zano! keeps the inventory fresh and dynamic, with real-time updates on stock, styles, and deals.
      </p>
      <SlideShow images={[`${BASE_PATH}/zano/shoe1.png`, `${BASE_PATH}/zano/shoe2.png`]} />
      <TypographyH3 className="my-4 mt-8">Cart & Checkout</TypographyH3>
      <p className="font-mono mb-2">
        Add your favorites to the cart and breeze through checkout—Zano! makes shopping fast, secure, and stylish.
      </p>
      <SlideShow images={[`${BASE_PATH}/zano/cart.png`]} />
      <p className="font-mono mb-2 my-8">
        Scoring high on performance and design, Zano! delivers a top-tier shopping experience. Whether you’re after the latest drop or a timeless classic, step into Zano! and find your stride.
      </p>
    </div>
  ),
};
