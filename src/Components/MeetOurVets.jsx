import React from "react";
const vets = [
  {
    vetId: 1,
    name: "Dr. Amelia Hart",
    experience: "8 years",
    specialization: "Canine Orthopedics",
    image: "https://i.ibb.co.com/xqwrXcvb/83e9bc8e857f4ad601d7ea963308abaa.jpg",
  },
  {
    vetId: 2,
    name: "Dr. Lucas Bennett",
    experience: "5 years",
    specialization: "Feline Internal Medicine",
    image: "https://i.ibb.co.com/vCVPW85t/exp1.jpg",
  },
  {
    vetId: 3,
    name: "Dr. Sofia Ramirez",
    experience: "10 years",
    specialization: "Exotic Animal Care",
    image: "https://i.ibb.co.com/ymC0Vkm7/28905133f922c06fd8a2c8a72ea3266a.jpg",
  },
];

const MeetOurVets = () => {
  return (
    <div>
      <div className="mt-8">
        <div>
          <h3 className="font-bold text-3xl text-center m-10">Meet Our Vets</h3>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {vets.map((vet) => (
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  className="w-full h-[300px] object-cover"
                  src={vet?.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{vet?.name}</h2>
                <div className="flex justify-end">
                  <p className="font-bold">Experience: {vet.experience}</p>
                  <p>Specialization: {vet.specialization}</p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurVets;
