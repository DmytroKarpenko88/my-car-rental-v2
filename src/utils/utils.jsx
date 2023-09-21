export const parseAddress = address => {
  const arr = address.split(', ');
  const city = arr[1];
  const country = arr[2];
  return { city, country };
};

export const parseKeyValueString = str => {
  const arr = str.split('\n');
  const num = arr[0].split(' ').slice(-1).join('');

  arr[0] = arr[0].replace(num, '');
  arr.splice(0, 1, num);

  return arr;
};

export const allUnicBrands = cars =>
  cars.reduce((acc, car) => {
    if (!acc.includes(car.make)) {
      acc.push(car.make);
    }
    return acc;
  }, []);

export const parsePrice = str => str.split('').slice(1).join('');

export const parseMileage = num => num.toLocaleString('en-EN');

export const priceList = cars => {
  const numbers = cars.map(({ rentalPrice }) => parsePrice(rentalPrice));
  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);

  const arr = [];
  for (
    let i = Math.ceil(minNumber / 10) * 10;
    i <= Math.ceil(maxNumber / 10) * 10;
    i += 10
  ) {
    arr.push(i);
  }
  return arr;
};

export const formatNumber = value => {
  if (!value) return '';
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  if (isNaN(numericValue)) return '';
  return numericValue.toLocaleString('en-US');
};

export const filterCars = (cars, filters) => {
  const { make, price, mileageMin, mileageMax } = filters;

  return cars.filter(car => {
    if (make && car.make !== make) {
      return false;
    }

    if (price && parseFloat(parsePrice(car.rentalPrice)) > parseFloat(price)) {
      return false;
    }

    if (mileageMin && car.mileage < parseFloat(mileageMin.replace(',', ''))) {
      return false;
    }

    if (mileageMax && car.mileage > parseFloat(mileageMax.replace(',', ''))) {
      return false;
    }

    return true;
  });
};
