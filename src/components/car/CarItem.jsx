import { parseAddress } from 'utils';
import { FavoriteIcon } from '../icons';
import { CarModal } from '../modals/CarModal';
import { useState } from 'react';
import { CarDetails } from './CarDetails';

export const CarItem = ({ car, toggleFavorite, isFavorite }) => {
  const [modalShow, setModalShow] = useState(false);
  const {
    year,
    make,
    model,
    type,
    img,
    carClass,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  const { city, country } = parseAddress(address);

  return (
    <>
      <div className="w-[274px] relative">
        <button
          className="absolute top-3.5 right-3.5 stroke-none"
          onClick={() => toggleFavorite(car)}
        >
          <FavoriteIcon
            className={
              isFavorite
                ? 'fill-blue-500 stroke-blue-500'
                : 'fill-none stroke-white'
            }
          />
        </button>
        <img
          className="h-[268px] object-cover rounded-[14px]"
          src={img}
          alt={model}
        />
        <div className="flex justify-between mt-[14px] font-medium text-base ">
          <div className="truncate">
            <span className="">
              {make}
              <span className="text-blue-500  "> {model}</span>, {year}
            </span>
          </div>
          <span>{rentalPrice}</span>
        </div>
        <div className="text-xs text-gray-rgba-18-20-23-50 mt-2">
          <div className="flex flex-row gap-x-[6px] truncate">
            <span>{city}</span>
            <span className="divider">{country}</span>
            <span className="divider">{rentalCompany}</span>
            <span className="divider">{carClass}</span>
          </div>
          <div className="flex flex-row gap-x-[6px] mt-1 truncate">
            <span>{type}</span>
            <span className="divider">{model}</span>
            <span className="divider">{mileage}</span>
            <span className="truncate divider">{functionalities[0]}</span>
          </div>
        </div>
        <button
          className="mt-[28px] py-[12px] font-semibold text-white rounded-xl  bg-blue-500 w-full hover:bg-indigo-500"
          onClick={() => setModalShow(true)}
        >
          Learn more
        </button>
      </div>
      <CarModal show={modalShow} onHide={() => setModalShow(false)}>
        <CarDetails car={car} />
      </CarModal>
    </>
  );
};
