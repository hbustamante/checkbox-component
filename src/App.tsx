import React, { useState } from 'react';

interface Country {
  name: string;
  checked: boolean;
}

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([
    { name: 'India', checked: false },
    { name: 'Usa', checked: false },
    { name: 'France', checked: false },
    // Agrega más países aquí
  ]);

  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleCheck = (index: number): void => {
    const newCountries = [...countries];
    newCountries[index].checked = !newCountries[index].checked;
    setCountries(newCountries);

    const allSelected = newCountries.every(country => country.checked);
    setSelectAll(allSelected);
  };

  const handleSelectAllCheck = (): void => {
    setSelectAll(!selectAll);
    const newCountries = countries.map(country => ({ ...country, checked: !selectAll }));
    setCountries(newCountries);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAllCheck}
          />
          Seleccionar todos
        </label>
      </div>
      {countries.map((country, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={country.checked}
              onChange={() => handleCheck(index)}
            />
            {country.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default App;