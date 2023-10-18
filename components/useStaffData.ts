import { useState, useEffect } from 'react';
import axios from 'axios';
import { parseCookies } from 'nookies';

import { setStaff } from 'pages/reducers/calendarReducer';
import { basepath } from '/global';
//import { useDispatch, useSelector } from 'react-redux';import { useShallow } from 'zustand/shallow';
import useStore from 'pages/reducers/zstore';
interface StaffData {
  activeStaff: any;
  activeContract: any;
}

export function useStaffData(): StaffData {
  // const { staff } = useSelector((state) => ({
  //   staff: state.calendar.staff,
  // }));
  //const [formValues, setFormValues] = useState({});
  //const [editing, setEditing] = useState(false);
  //const dispatch = useDispatch();
  const cookies = parseCookies();
  const [activeStaff, setActiveStaff] = useState(null);
  const [activeContract, setActiveContract] = useState(null);
  const tokenCookie = cookies.token;

  //  const [activeContract, setActiveContract] = useStore(
  //   useShallow((state) => [
  //     state.activeContract,
  //     state.setActiveContract,
  //   ]),
  // );

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${tokenCookie}`,
      };

      const response = await axios.get(`${basepath}/api/user/myuser`, {
        headers,
      });

      if ([200, 201].includes(response.status)) {
        const _staff = response.data.staff[0];
        // activeStaff = _staff;
        console.log(_staff);
        setActiveStaff(_staff);
        // setFormValues(_staff);
        // setEditing(true);
        // dispatch(setStaff(_staff));
        const _activeContract = _staff.contracts.filter(
          (contract) => contract.IsActive === true,
        );

        setActiveContract(_activeContract ? _activeContract[0] : null);
      }
    } catch (error) {
      console.error('Failed to fetch staff data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refreshFormValues = async () => {
    await fetchData();
  };

  return {
    activeStaff,
    activeContract,
  };
}
