import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-end w-full text-3xl">
      {[...new Array(10).fill(1)].map((val, idx) => {
        const hasFigure = Math.random() > 0.3;

        return (
          <section
            key={idx}
            className="peer peer-[]:mt-8 shadow shadow-black before:triangle rounded-md before:backdrop backdrop-blur bg-blue-paraiso p-4 w-full before:absolute relative before:top-12 before:-left-16 before:translate-x-1 before:w-[calc(8.333333%-.15rem)] before:aspect-[2/1] before:-rotate-90 before:bg-blue-paraiso before:backdrop-blur"
          >
            <article>
              {hasFigure && (
                <figure className="w-full aspect-video relative rounded-lg overflow-hidden shadow shadow-black">
                  <Image
                    src={`https://picsum.photos/id/${Math.ceil(Math.random() * 100) + idx}/850/478`}
                    alt={`Test ${idx + 1}`}
                    fill
                  />
                </figure>
              )}
              <header className={!hasFigure ? "mt-6" : "mt-9"}>
                <h2>Test {idx + 1}</h2>
              </header>
              <p className="mt-10 font-cedarville">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat voluptatum ut
                quidem corporis reprehenderit voluptate, expedita ab nemo necessitatibus,
                consectetur ad? Assumenda explicabo ipsa beatae alias magnam laboriosam inventore
                esse.
              </p>
            </article>
          </section>
        );
      })}
    </div>
  );
}
