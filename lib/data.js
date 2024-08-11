import connectToDb from "../lib/db";
import { Therapist } from "../models/therapistModel";

export const fetchTherapists = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 4;
  try {
    connectToDb();
    const count = await Therapist.find({
      $or: [
        { firstName: { $regex: regex } },
        { location: { $regex: regex } },
        { field: { $regex: regex } },
      ],
    }).count();
    // const therapists = await Therapist.find({
    //   firstName: { $regex: regex },
    // })
    //   .limit(ITEM_PER_PAGE)
    //   .skip(ITEM_PER_PAGE * (page - 1));
    const therapists = await Therapist.find({
      $or: [
        { firstName: { $regex: regex } },
        { location: { $regex: regex } },
        { field: { $regex: regex } },
      ],
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    console.log("Therapists successfully fetched");
    return { count, therapists };
  } catch (err) {
    console.log("Failed to fetch therapists");
    //  console.log(err);
  }
};
