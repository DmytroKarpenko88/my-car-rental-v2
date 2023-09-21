import React, { useState } from 'react';
import { allUnicBrands, filterCars, formatNumber, priceList } from 'utils';

const initialState = {
  make: '',
  price: '',
  mileageMin: '',
  mileageMax: '',
};

export const Filter = ({ allCars, setFilterCars, setTotalCars }) => {
  const [filterData, setFilterData] = useState(initialState);

  const brands = allUnicBrands(allCars);

  const priceArr = priceList(allCars);

  const handleChange = e => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const carsForSearch = filterCars(allCars, filterData);
    setFilterCars(carsForSearch);
    setTotalCars(carsForSearch.length);
  };

  const resetForm = e => {
    setFilterData(initialState);
    setFilterCars(allCars);
    setTotalCars(allCars.length);
  };

  return (
    <div className="mx-auto h-[74px]">
      <form
        className="flex justify-center gap-[18px] text-ls font-medium "
        onSubmit={handleSubmit}
      >
        <div className="">
          <p className="text-gray-500 text-sl">Car brand</p>
          <select
            className="mt-2 py-[11px] px-[18px] w-56 rounded-[14px] bg-gray-100 text-ls outline-none truncate"
            name="make"
            id="make"
            value={filterData.make}
            onChange={handleChange}
          >
            <option value="" disabled>
              Enter the text
            </option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="text-gray-500 text-sl">Price/ 1 hour</p>
          <div className="relative">
            <select
              className="mt-2 py-[11px] px-[18px] w-[125px] bg-gray-100 text-ls rounded-[14px] outline-none truncate"
              name="price"
              id="price"
              value={filterData.price}
              onChange={handleChange}
            >
              <option value="" disabled>
                To $
              </option>
              {priceArr.map((price, index) => (
                <option key={index} value={price} className="">
                  {price}
                </option>
              ))}
            </select>
            <span className="absolute top-6 left-3 hidden">
              {filterData.price ? `To ${filterData.price} $` : ''}
            </span>
          </div>
        </div>

        <div>
          <p className="text-gray-500 text-sl">Car mileage / km</p>
          <div className="flex">
            <div className="relative mt-2">
              <label className="absolute top-[14px] left-6">From </label>
              <input
                className="w-[168px]  py-[14px] pl-[74px] bg-gray-100 pr-6 rounded-l-[14px] border-r-[1px] border-gray-rgba-138-138-137-20 outline-none truncate"
                type="text"
                name="mileageMin"
                maxLength={6}
                value={formatNumber(filterData.mileageMin)}
                onChange={handleChange}
              />
            </div>
            <div className="relative mt-2">
              <label className="absolute top-[14px] left-6">To</label>
              <input
                className="w-[168px]  py-[14px] pl-[54px] bg-gray-100 pr-6  rounded-r-[14px] outline-none  truncate"
                type="text"
                name="mileageMax"
                maxLength={7}
                value={formatNumber(filterData.mileageMax)}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 mt-auto h-12  rounded-xl px-11 py-[14px] hover:bg-indigo-500 text-white font-semibold text-sm"
        >
          Search
        </button>

        <button
          type="button"
          onClick={resetForm}
          className="bg-blue-500 mt-auto h-12 rounded-xl px-11 py-[14px]  hover:bg-indigo-500 text-white font-semibold text-sm"
        >
          Reset
        </button>
      </form>
    </div>
  );
};
