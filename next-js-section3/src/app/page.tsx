import Image from "next/image";
import Link from "next/link";
import classes from './page.module.css'
import ImageSlideshow from "@/Components/images/ImageSlideShow";

export default function Home() {

  console.log('executing...')

  const links = [
    { href: 'meals', label: 'Meals' },
    { href: 'meals/share', label: 'Share Meals' },
    { href: 'community', label: 'Community' },
  ]

  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>

    //     {
    // links.map((link, index) => {
    //   return (
    //     <Link
    //       key={index}
    //       href={link.href}
    //       className="group rounded-lg border border-transparent bg-gray-50 px-5 py-4 mx-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold text-black">
    //         {`${link.label} `}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //     </Link>
    //   );
    // })
    // }
  );
}
