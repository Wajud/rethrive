import Image from "next/image";
import therapyOne from "../public/images/therapy-one.jpg";
import Link from "next/link";
import Footer from "./components/Footer";
import { auth } from "/auth";
import LoggedInNavbar from "./components/LoggedInNavbar";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      {session ? <LoggedInNavbar /> : ""}
      <div className="relative">
        <Image
          src={therapyOne}
          className="w-full h-[80vh] object-cover object-top"
          alt="therapy"
        />
        <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.7)] text-white flex justify-center items-center">
          <div className="py-20 text-center">
            <h1 className="font-bold text-6xl leading-[4.0rem] text-center py-4">
              NURTURNG MIND <br /> EMBRACING WELLNESS
            </h1>
            <p className="max-w-[800px] mx-auto py-6 leading-4">
              Reclaim your mental well-being and live a life filled with purpose
              and joy. Start your transformative journey today.
            </p>
            <Link
              href={"/login"}
              className="block w-fit mx-auto mt-4 font-semibold px-8 py-2 rounded-md bg-green-800 hover:bg-green-600 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}

      <section className="py-24 w-[90%] mx-auto flex items-center gap-10 relative">
        <Image
          src="https://res.cloudinary.com/dxswouxj5/image/upload/v1700696671/close-up-young-colleagues-hands-meeting_ft2xwj.jpg"
          width={400}
          height={100}
          className="rounded-full object-cover w-[280px] h-[280px]"
        />
        <div className="text-green-700">
          <h2 className="font-bold text-3xl mb-4 absolute w-fit left-1/2 transform -translate-x-1/2 top-20 ">
            ABOUT US
          </h2>
          <p className="mb-6">
            Welcome to thrive Your Path to Emotional Wellness, Empowering You
            for a Balanced Life, Life's challenges can sometimes take a toll on
            our mental well-being. At thrive we believe that everyone deserves
            the tools to nurture their emotional health and lead a fulfilling
            life. thrive is designed to guide you on a journey of
            self-discovery, resilience, and positivity.
          </p>
          <Link
            href={"/about"}
            className="text-white block w-fit absolute left-1/2 transform -translate-x-1/2 bottom-24 font-semibold px-8 py-2 rounded-md bg-green-800 hover:bg-green-600 transition-all"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* End of About Us Section */}

      {/* Therapists Section */}

      <section className="bg-gray-100 py-16 px-20">
        <h2 className="uppercase text-green-700 font-semibold text-3xl text-center mb-12">
          Our therapists
        </h2>
        <div className="w-fit mx-auto flex gap-12">
          <div className="bg-white w-fit px-20 py-12 border-green-800 rounded-md">
            <Image
              src={
                "https://res.cloudinary.com/druryt8ny/image/upload/v1700518381/wpsb6algghuo37iknspy.png"
              }
              width={100}
              height={100}
              className="w-32 h-32 rounded-full object-fit"
            />
            <h2 className="text-green-700 font-semibold text-2xl mt-2 -mb-1 text-center">
              M. Musa
            </h2>
            <p className="text-sm text-center text-gray-700">
              Senior Therapist
            </p>
          </div>

          <div className="bg-white w-fit px-20 py-12 border-green-800 rounded-md">
            <Image
              src={
                "https://res.cloudinary.com/druryt8ny/image/upload/v1700517460/wvewtwpkvveokp9pda3k.png"
              }
              width={100}
              height={100}
              className="w-32 h-32 rounded-full object-fit"
            />
            <h2 className="text-green-700 font-semibold text-2xl mt-2 -mb-1 text-center">
              S. Aisha
            </h2>
            <p className="text-sm text-center text-gray-700">
              Senior Therapist
            </p>
          </div>
        </div>

        <Link
          href={"/"}
          className="uppercase text-white block w-fit mx-auto mt-12 font-semibold px-8 py-2 rounded-md bg-green-800 hover:bg-green-600 transition-all"
        >
          Apply as a therapist
        </Link>
      </section>

      {/* End of Therapists Section */}

      {/* Community Section */}

      <section className="py-16 px-20">
        <h2 className="uppercase text-green-700 font-semibold text-3xl text-center mb-8">
          JOIN OUR COMMUNITY
        </h2>
        <p className="text-green-700 text-center mb-6">
          Join a supportive community. Connect with a community of like-minded
          individuals who are on their own paths to emotional wellness. Share
          your experiences, learn from others, and find comfort in knowing
          you're not alone.
        </p>
        <Image
          src="https://res.cloudinary.com/druryt8ny/image/upload/v1700517722/fhrhrzzgow8v8wssv5i4.svg"
          width={100}
          height={100}
          className="w-full h-88 rounded-md object-cover"
        />

        <Link
          href={"/community"}
          className="uppercase text-white block w-fit mx-auto mt-12 mb-16 font-semibold px-8 py-2 rounded-md bg-green-800 hover:bg-green-600 transition-all"
        >
          join now
        </Link>
      </section>

      {/* End of Community Section */}
      <Footer />
    </div>
  );
}
