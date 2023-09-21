import { Hero2 } from 'images';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pb-10">
      <section className="relative w-full">
        <h1 className="font-semibold text-5xl absolute top-5 left-7 text-blue-600">
          Explore more with a rental car.
        </h1>
        {/* <button className=" absolute left-7 top-20 border-blue-600 border-2 inline-block mt-4 rounded-xl py-[12px] px-[50px] text-2xl text-blue-600 hover:bg-blue-600 hover:text-gray-100">
          Book now
        </button> */}
        <Link
          to={'/catalog'}
          className=" absolute right-7  border-blue-600 border-2 inline-block mt-4 rounded-xl py-[12px] px-[50px] text-2xl text-blue-600 hover:bg-blue-600 hover:text-gray-100"
        >
          Book now
        </Link>
        <img src={Hero2} alt="hero" />
      </section>

      <div className="mt-7">
        <h2 className="text-xl text-center font-bold tracking-wide underline text-blue-500">
          Our Customers’ Experience
        </h2>

        <ul className="flex justify-between mt-7 ">
          <li>
            <div className=" w-96 p-4 text-justify rounded-2xl  bg-gray-100">
              “I’m a professional photographer, and I recently rented a
              Mercedes-Benz Sprinter van from Car Rental to use as a mobile
              studio. The van was perfect for my needs. It was spacious and
              well-equipped, and it had plenty of power outlets for my gear. I
              was also impressed with the customer service at Car Rental. The
              staff was friendly and helpful, and they made sure that I had
              everything I needed for a successful shoot.”{' '}
              <span className="text-blue-500">
                - Sarah Jones, Mercedes-Benz Sprinter van
              </span>
            </div>
          </li>
          <li>
            <div className=" w-96 p-4 text-justify rounded-2xl  bg-gray-100">
              “I’m a wheelchair user, and I recently rented a
              wheelchair-accessible van from Car Rental. The van was in great
              condition and had all the features I needed, such as a ramp and a
              lift. I was also able to reserve the van online and pick it up at
              the airport, which was very convenient. I would definitely
              recommend Car Rental to anyone with mobility needs.”{' '}
              <span className="text-blue-500">
                - Michael Brown, wheelchair-accessible van
              </span>
            </div>
          </li>
          <li>
            <div className=" w-96 p-4 text-justify rounded-2xl  bg-gray-100">
              “I’m a student, and I recently rented a budget car from Car Rental
              to use during my internship. The car was clean and reliable, and
              it was very affordable. I was also impressed with the flexibility
              of the rental process. I was able to extend my rental online
              without any hassle. I would definitely recommend Car Rental to
              other students on a budget.”{' '}
              <span className="text-blue-500">
                - Jessica Williams, budget car
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
