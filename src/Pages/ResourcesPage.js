import Banner from "../images/banner.svg";
import TKS from "../images/partnerships/tks.png";
import Torpedo from "../images/torpedo-circle.svg";
import MobileBanner from "../images/mobile-banner-2.svg";
import FadeIn from "../components/main_utils/Fadein";
import "../components/main_utils/utility_css/fadein.css";
const ResourcesPage = () => {
  return (
    <div className="w-screen h-full">
      <div
        className="hidden w-screen h-screen bg-cover bg-no-repeat md:flex flex-col items-center justify-center pb-64 px-20 gap-10"
        style={{ backgroundImage: `url('${Banner}')` }}
      >
        <div className=" md:px-0 md:h-1/2 flex text-white flex-col justify-center items-center text-center gap-10 md:mb-40 lg:mb-0 lineUp">
          <div className="uppercase tracking-wider border border-white text-xs px-2  text-center md:text-lg py-1 md:px-4 font-light h-10 rounded-full">
            PARTNERING WITH THE KNOWLEDGE SOCIETY
          </div>

          <h2 className="text-white font-black text-4xl md:text-7xl lg:text-9xl uppercase lineUp ">
            resources
          </h2>
          <div className="flex flex-row justify-center items-center gap-10">
            <div className="flex flex-wrap justify-center">
              <a
                className=" w-16 h-16 md:w-28 md:h-28"
                target="_blank"
                rel="noreferrer"
                href="https://www.tks.world/"
              >
                <img
                  src={TKS}
                  alt="..."
                  className="transition rounded-full duration-500 ease-in-out transform hover:scale-105 shadow-lg"
                />
              </a>
            </div>

            <h2 className="text-xl">x</h2>
            <div className="flex flex-wrap justify-center">
              <div className=" w-16 h-16 md:w-28 md:h-28">
                <img
                  src={Torpedo}
                  alt="..."
                  className="transition rounded-full duration-500 ease-in-out transform hover:scale-105 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:hidden bg-cover h-screen w-full justify-center"
        style={{ backgroundImage: `url('${MobileBanner}')` }}
      >
        <div className=" md:px-0 md:h-1/2 flex text-white flex-col justify-center items-center text-center gap-10 mb-96">
          <FadeIn>
            <div className="uppercase tracking-wider border border-white text-xs px-2  text-center md:text-lg py-1 md:px-4 font-light py-3 rounded-full lineUp">
              <h2>PARTNERING WITH THE KNOWLEDGE SOCIETY</h2>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-white font-black text-4xl md:text-7xl lg:text-9xl uppercase lineUp ">
              resources
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-row justify-center items-center gap-10 lineUp">
              <div className="flex flex-wrap justify-center">
                <a
                  className=" w-16 h-16 md:w-28 md:h-28"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tks.world/"
                >
                  <img
                    src={TKS}
                    alt="..."
                    className="transition rounded-full duration-500 ease-in-out transform hover:scale-105 shadow-lg"
                  />
                </a>
              </div>

              <h2 className="text-xl">x</h2>
              <div className="flex flex-wrap justify-center">
                <div className=" w-16 h-16 md:w-28 md:h-28">
                  <img
                    src={Torpedo}
                    alt="..."
                    className="transition rounded-full duration-500 ease-in-out transform hover:scale-105 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <FadeIn>
        <iframe
          className="w-screen h-screen my-20"
          src="https://www.tks.world/futureclass"
          title="TKS"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </FadeIn>
    </div>
  );
};
export default ResourcesPage;
