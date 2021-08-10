import { useState } from 'react';

const useValidation = () => {
  const [validDate, setValidDate] = useState({
    validFormat: null,
    dateOfBirth: undefined,
  });

  // Calcultate age based on today date
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  const isValidHandler = (e) => {
    // Split date of birth by the delimitator

    // Pattern for dd/mm/YYYY
    const datePattern = new RegExp(
      /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/
    );

    if (datePattern.test(e.target.value)) {
      const getDateOfBirth = e.target.value.split('/');
      const dateOfBirth = `${getDateOfBirth[2]}-${getDateOfBirth[1]}-${getDateOfBirth[0]}`;

      setValidDate({ validFormat: true, dateOfBirth });
    }
    if (!datePattern.test(e.target.value)) {
      setValidDate({ validFormat: false });
    }
  };

  return { isValidHandler, getAge, validDate };
};

export default useValidation;
