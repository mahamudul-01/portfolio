import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className=" flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text area */}
          <div className="text-center xl:text-left order-2 xl:order-none mb-8 xl:mb-0">
            <span className=" text-xl">Software Developer</span>

            <h1 className="h1">
              {/* eslint-disable-next-line */}
              Hello I'm <br />{" "}
              <span className="text-accent">Mahamudul Hasan Mehedi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              excel at crafting elegant digital experiences and I am proficient
              in various programming languages and technologies.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl "></FiDownload>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6 " iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center text-accent items-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"></Social>
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo></Photo>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
