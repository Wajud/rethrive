import React from "react";
import Image from "next/image";
import aboutBg from "../../public/images/about-bg.jpg";
import Link from "next/link";
import Footer from "../components/Footer";
import connectToDb from "../../lib/db";
import { auth } from "/auth";
import LoggedInNavbar from "../components/LoggedInNavbar";

const About = async () => {
  const session = await auth();
  connectToDb();

  return (
    <div>
      {session ? <LoggedInNavbar /> : ""}
      <div className="relative">
        <Image
          src={aboutBg}
          className="w-full h-[80vh] object-cover object-top"
          alt="about-bg"
        />
        <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.7)] text-white flex flex-col justify-center items-center py-12 pt-28">
          <h1 className="text-6xl font-bold text-center">ABOUT US</h1>
          <p className="my-8 w-[70%] mx-auto text-center leading-relaxed">
            At Thrive, we believe in the power of compassion, empathy and
            connection to transform lives. We take a collaborative approach to
            therapy, tailoring our services to meet the unique needs and goals
            of each client. With warmth, understanding and a commitment to
            excellence, we strive to help our clients navigate life's obstacles,
            unlock their potential and live more fulfilling lives.
          </p>
        </div>
      </div>

      <section className="bg-gray-100 py-20">
        <h1 className="text-3xl font-semibold text-center text-green-700 pb-2">
          EXCITING TO HAVE YOU HERE
        </h1>
        <div className="w-40 mx-auto h-1 bg-green-700"></div>
        <div className="mt-12 w-[90%] mx-auto p-8 bg-green-700 text-white rounded-sm flex flex-col gap-6">
          <p className="">
            At THRIVE, we're fuelled by our unwavering passion for you and your
            well-being. Our journey began with a dream of solving mental health
            issues at TIIDELAB Cohort 5 and in December 2023, that dream became
            reality. We are dedicated to providing specialized mental health
            services in Nigeria, led by experienced, qualified, and verified
            therapists. Our focus is on nurturing your mind, spirit, and body,
            guiding you to become the best version of yourself. THRIVE is built
            on four guiding principles: educate, connect, discuss, and resolve.
          </p>
          <p>
            We extend our services to children, teenagers, young adults, adults,
            couples, groups, and entire communities. Our services are available
            online 24/7, bringing support right to your fingertips.
          </p>
          <p>
            THRIVE boasts a growing network of verified mental health
            professionals who offer their expertise across various platforms.
            They share their insights through specialized writings, contributing
            not only to your mental health but also to your personal growth. Our
            content is designed to be easily comprehensible without losing
            depth, striking the perfect balance. We value your input – have a
            suggestion? Feel free to share it with us!
          </p>
          <p>
            To enhance your experience, we go the extra mile by connecting you
            with a verified mental health professional based on your challenge.
            Our goal is to provide you with tailored support that truly
            resonates.
          </p>

          <p>
            At THRIVE, we're not just an app – we're your companions on the path
            to well-being. Join us in embracing a life filled with positivity,
            growth, and profound wellness. THRIVE: Continue to take shape and
            make a positive impact.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-12 w-[90%] mx-auto text-center flex gap-12 justify-center">
        <div className="px-6 py-8 flex flex-col gap-6 items-center text-green-700 border border-green-700 rounded-md">
          <Image
            src="https://res.cloudinary.com/dxswouxj5/image/upload/v1700504627/Mission_xtjvaf.png"
            width={100}
            height={100}
            className="w-20 h-20 object-cover"
            alt="mission"
          />
          <h2 className="text-3xl font-semibold">OUR MISSION</h2>
          <p>
            At THRIVE, our goal is to develop a revolutionary software that acts
            as a compass for assistance and direction along the path to
            emotional well-being. We are committed to fostering individuals'
            minds, embracing wellness, and providing easily accessible materials
            that help people deal with the challenges of life and develop
            resilience.
          </p>
        </div>

        <div className="px-6 py-8 flex flex-col gap-6 items-center text-green-700 border border-green-700 rounded-md">
          <Image
            src="https://res.cloudinary.com/dxswouxj5/image/upload/v1700547535/Vision_zl6vxb.png"
            width={100}
            height={100}
            className="w-20 h-20 object-cover"
            alt="mission"
          />
          <h2 className="text-3xl font-semibold">OUR VISION</h2>
          <p>
            Empowering Hearts, Lighting Paths: With a vision of assisting hearts
            and minds to overcome obstacles and establishing a society that
            values mental health as a necessary basis for a satisfying
            existence, THRIVE envisions a world where emotional wellbeing is
            accessible to everyone.
          </p>
        </div>
      </section>
      {/* End of Mission and Vision Section */}

      {/* Service Approach Section */}

      <section className="bg-gray-100 py-20">
        <div className="w-40 mx-auto h-1 bg-green-700"></div>
        <h1 className="text-center text-3xl text-green-700 font-semibold my-2">
          OUR SERVICE APPROACH
        </h1>
        <div className="w-40 mx-auto h-1 bg-green-700"></div>
        <div className="w-[90%] mx-auto mt-6 py-10 px-8 rounded-sm bg-green-700 text-white grid grid-cols-2 gap-y-6 gap-x-10">
          <div>
            <h2 className="font-semibold my-2 text-xl">
              Accessible Resouces and Support
            </h2>
            <p className="text-gray-100">
              We believe that everyone should have access to the tools and
              resources they need to foster emotional well-being. Our app offers
              a wide range of content, including self-help materials, articles,
              guided meditation sessions, and interactive exercises. These
              resources are designed to be easily accessible anytime, anywhere,
              empowering users to take proactive steps towards their emotional
              wellness.
            </p>
          </div>
          <div>
            <h2 className="font-semibold my-2 text-xl">
              Expert Support and Therapeutic Services
            </h2>
            <p className="text-gray-100">
              In addition to self-help resources, we offer connections to
              licensed therapists and mental health professionals. Users can
              engage in therapeutic sessions and receive personalized guidance
              from qualified experts. This combination of self-directed learning
              and professional support ensures a well-rounded approach to
              emotional well-being.
            </p>
          </div>
          <div>
            <h2 className="font-semibold my-2 text-xl">
              Inclusion and Diversity
            </h2>
            <p className="text-gray-100">
              We acknowledge the value of diversity and celebrate each person's
              individuality. Our app welcomes cultural sensitivity by providing
              resources and information that speak to users from a range of
              experiences and backgrounds.
            </p>
          </div>
          <div>
            <h2 className="font-semibold my-2 text-xl">
              Community and Connection
            </h2>
            <p className="text-gray-100">
              We are aware of how important connection is for promoting
              emotional development. Our app fosters a thriving and encouraging
              community where users can exchange experiences, gain knowledge
              from one another, and take comfort in the knowledge that they are
              not travelling alone.
            </p>
          </div>
          <div>
            <h2 className="font-semibold my-2 text-xl">
              Mindful Technology Integration
            </h2>
            <p className="text-gray-100">
              Thrive supports technology use that is conscious. Our software
              includes elements that promote responsible technology usage, like
              digital detox techniques and notifications that prompt users to
              take breaks. While maximizing its advantages, we're dedicated to
              encouraging a healthy relationship with technology.
            </p>
          </div>
          <div>
            <h2 className="font-semibold my-2 text-xl">
              Continous Growth and Learning
            </h2>
            <p className="text-gray-100">
              Being emotionally healthy requires continual effort. Our software
              encourages continuing learning opportunities that lead to
              continued progress. Users have access to workshops, webinars, and
              courses that go in-depth on many facets of emotional wellbeing,
              offering a setting for introspection and growth.
            </p>
          </div>
        </div>
      </section>
      {/* End of Service Approach Section */}

      {/* Team Section */}
      <section className="py-20 w-[90%] mx-auto">
        <div className="w-40 mx-auto h-1 bg-green-700"></div>
        <h1 className="text-center text-3xl text-green-700 font-semibold my-2">
          OUR TEAM
        </h1>
        <div className="w-40 mx-auto h-1 bg-green-700"></div>
        <p className="mt-8 pt-12 pb-8 px-6 text-center text-green-700">
          THRIVE is a team of professionals, dedicated to emotional well-being
          and wellness. They collaborate with licensed therapists, tech
          innovators, and creative minds to create a compassionate app that goes
          beyond technology. Their expertise, empathy, and innovation empower
          individuals to overcome challenges, find resilience, and lead
          fulfilling lives.
        </p>
        <div className="text-green-700 px-12 pt-8 pb-16 flex flex-col gap-8">
          <div className="flex justify-center gap-6">
            <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
              <Image
                src={
                  "https://res.cloudinary.com/dxswouxj5/image/upload/v1700548059/doctor_1_q2ulb6.png"
                }
                alt="team member"
                width={100}
                height={100}
                className="w-24 h-24 rounded-full"
              />
              <p className="text-xl">H. Temitope</p>
              <p className="-mt-2 text-xs">HR Manager</p>
            </div>
            <Link
              href={"https://www.linkedin.com/in/popoola-rahmat/"}
              target="_blank"
            >
              <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
                <Image
                  src={
                    "https://res.cloudinary.com/dxswouxj5/image/upload/v1700548562/BeautyPlus_20230714021418377_save_e4ehwo.jpg"
                  }
                  alt="team member 2"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
                <p className="text-xl">P. Rahmat</p>
                <p className="-mt-2 text-xs">Frontend Developer</p>
              </div>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/shomope-aisha-ayobola/"}
              target="_blank"
            >
              <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
                <Image
                  src="https://res.cloudinary.com/dxswouxj5/image/upload/v1700548565/BeautyPlus_20230714021739340_save_dsq5gk.jpg"
                  alt="member"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
                <p className="text-xl">S. Aisha</p>
                <p className="-mt-2 text-xs">Backend Developer</p>
              </div>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/wajud-kareem-92537115a/"}
              target="_blank"
            >
              <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
                <Image
                  src={
                    "https://res.cloudinary.com/dxswouxj5/image/upload/v1700548571/BeautyPlus_20230714022007724_save_jutbjl.jpg"
                  }
                  alt="team member 4"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
                <p className="text-xl">K. Wajud</p>
                <p className="-mt-2 text-xs">Frontend Developer</p>
              </div>
            </Link>
            <Link
              href={
                "https://thrive-react.vercel.app/about/www.linkedin.com/in/nkenna-agu-30b795143"
              }
              target="_blank"
            >
              <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
                <Image
                  src={
                    "https://res.cloudinary.com/dxswouxj5/image/upload/v1700548557/BeautyPlus_20230714020653724_save_ltp7yl.jpg"
                  }
                  alt="team member 2"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
                <p className="text-xl">A. Nkenna</p>
                <p className="-mt-2 text-xs">Frontend Developer</p>
              </div>
            </Link>
          </div>
          <div className="flex justify-center gap-6">
            <Link
              href={"https://www.linkedin.com/in/alawodemuneefopeyemi/"}
              target="_blank"
            >
              <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
                <Image
                  src={
                    "https://res.cloudinary.com/dxswouxj5/image/upload/v1700548552/BeautyPlus_20230714020337001_save_fosjgz.jpg"
                  }
                  alt="team member 2"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
                <p className="text-xl">A. Muneef</p>
                <p className="-mt-2 text-xs">Frontend Developer</p>
              </div>
            </Link>
            <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
              <Image
                src="https://res.cloudinary.com/dxswouxj5/image/upload/v1700548557/BeautyPlus_20230714020819824_save_pu4hpw.jpg"
                alt="member"
                width={100}
                height={100}
                className="w-24 h-24 rounded-full"
              />
              <p className="text-xl">L. Salem</p>
              <p className="-mt-2 text-xs">Backend Developer</p>
            </div>
            <Link
              href={"https://www.linkedin.com/in/peace-sandy-bb7a691b0"}
              target="_blank"
            >
              <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
                <Image
                  src={
                    "https://res.cloudinary.com/dxswouxj5/image/upload/v1700548561/BeautyPlus_20230714021019444_save_urukq4.jpg"
                  }
                  alt="team member 4"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
                <p className="text-xl">S. Peace</p>
                <p className="-mt-2 text-xs">Frontend Developer</p>
              </div>
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/abdulrasheed-oladoja-48843b22b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
              target="_blank"
            >
              <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
                <Image
                  src={
                    "https://res.cloudinary.com/dxswouxj5/image/upload/v1700548574/BeautyPlus_20230714022054772_save_qwrgvw.jpg"
                  }
                  alt="team member 2"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
                <p className="text-xl">O. Abdulrasheed</p>
                <p className="-mt-2 text-xs">Frontend Developer</p>
              </div>
            </Link>
          </div>
          <div className="flex justify-center gap-6">
            <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
              <Image
                src={
                  "https://res.cloudinary.com/dxswouxj5/image/upload/v1700548573/BeautyPlus_20230715020105786_save_riem8o.jpg"
                }
                alt="team member"
                width={100}
                height={100}
                className="w-24 h-24 rounded-full"
              />
              <p className="text-xl">A. Tijesu</p>
              <p className="-mt-2 text-xs">Frontend Developer</p>
            </div>
            <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
              <Image
                src={
                  "https://res.cloudinary.com/dxswouxj5/image/upload/v1700548564/BeautyPlus_20230714021549512_save_y9g4tl.jpg"
                }
                alt="team member 2"
                width={100}
                height={100}
                className="w-24 h-24 rounded-full"
              />
              <p className="text-xl">J. Favour</p>
              <p className="-mt-2 text-xs">Frontend Developer</p>
            </div>
            <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
              <Image
                src="https://res.cloudinary.com/dxswouxj5/image/upload/v1700548553/BeautyPlus_20230714020459939_save_ufvkhq.jpg"
                alt="member"
                width={100}
                height={100}
                className="w-24 h-24 rounded-full"
              />
              <p className="text-xl">M. Musa</p>
              <p className="-mt-2 text-xs">Backend Developer</p>
            </div>
            <Link
              href={
                "https://www.linkedin.com/in/chidimma-okoye-uzu-418b67184/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              target="_blank"
            >
              <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
                <Image
                  src={
                    "https://res.cloudinary.com/dxswouxj5/image/upload/v1700548552/BeautyPlus_20230713215852530_save_m09s7g.jpg"
                  }
                  alt="team member 4"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
                <p className="text-xl">U. Chidinma</p>
                <p className="-mt-2 text-xs">Frontend Developer</p>
              </div>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ahmed-qozeem-5545a5104/"}
              target="_blank"
            >
              <div className="bg-gray-100 border border-green-700 rounded-md flex flex-col gap-2 items-center w-48 py-10 ">
                <Image
                  src={
                    "https://res.cloudinary.com/dxswouxj5/image/upload/v1700548526/BeautyPlus_20230717082653581_save_mwd82i.jpg"
                  }
                  alt="team member 2"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
                <p className="text-xl">A. Qozeem</p>
                <p className="-mt-2 text-xs">Frontend Developer</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* End of Team Section */}
      <Footer />
    </div>
  );
};

export default About;
