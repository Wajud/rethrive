import React from "react";
import connectToDb from "../../lib/db";
// import { Therapist } from "../../models/therapistModel";
import Image from "next/image";
import Footer from "./Footer";
import Pagination from "../components/pagination";
import SearchTherapist from "./searchTherapist";
import { fetchTherapists } from "../../lib/data";

const TherapyPage = async ({ searchParams }) => {
  await connectToDb();

  const q = searchParams?.q || "";
  const page = searchParams?.page;
  const { therapists, count: numberOfTherapists } = await fetchTherapists(
    q,
    page
  );

  console.log(therapists);
  console.log(searchParams);

  return (
    <div className="bg-gray-50 ">
      <div className="pb-16 px-10 pt-10">
        <h1 className="text-green-700 text-center text-2xl  pb-6 font-semibold tracking-wider">
          SEARCH DOCTOR. BOOK APPOINTMENT
        </h1>
        <div className="pt-6">
          <div className="w-3/5 mx-auto bg-white px-2 py-1 rounded-full mb-10">
            <SearchTherapist flag="Name" criteria="firstName" />
          </div>

          <div>
            {therapists.length > 0 ? (
              <div className="w-[85%] mx-auto grid grid-cols-4 items-start gap-8">
                {therapists?.map((therapist) => (
                  <div
                    key={therapist.id}
                    className="py-8 px-6 bg-green-100 rounded-md flex flex-col items-center gap-1"
                  >
                    <Image
                      src={
                        therapist.image
                          ? therapist.image
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&usqp=CAU"
                      }
                      width={100}
                      height={100}
                      className="w-28 h-28 rounded-full object-cover border-4 border-green-700"
                    />
                    <p>{`${therapist.firstName} ${therapist.lastName.slice(
                      0,
                      1
                    )}.`}</p>

                    <p className="-mt-1 mb-1 text-sm text-center">
                      {therapist.field}
                    </p>
                    <p className="-mt-2 text-sm">{therapist.location}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">
                Sorry. There are no therapists matching your search.
              </p>
            )}
            <div className="flex justify-center mt-8">
              {therapists.length > 0 && (
                <Pagination numberOfTherapists={numberOfTherapists} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TherapyPage;
