import React, { FC } from 'react';

import { CountryType } from '../../models/Country';

const Country: FC<{ loading: boolean; country: CountryType }> = ({
  loading,
  country,
}) => {
  return (
    <>
      {!country && loading && <p>Loading...</p>}
      {country && !loading && (
        <div key={`${country.name.common}_${country.capital}`}>
          <p>{country.name.common}</p>
          <img
            loading="lazy"
            width={100}
            src={country.flags.png}
            alt={`${country.name.common} flag`}
          />
        </div>
      )}
    </>
  );
};

export default Country;
