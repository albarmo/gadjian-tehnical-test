import { useEffect, useState } from "react";
import "./style/homepage.css";
import { Navbar, Sidebar, Card } from "../components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { useDispatch, useSelector } from "react-redux";
import { getEmployeeData } from "../store/actions/userAction";
import { Spinner } from "react-bootstrap";

const HomePage = () => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [dataDisplayPerPage, setDataDisplaypage] = useState(4);

  // hooks (component did mount) to get user data from API
  useEffect(() => {
    dispatch(getEmployeeData());
    setDataDisplaypage(4);
  }, []);

  const nextHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevoriousHandler = () => {
    if (currentPage !== 0 && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    } else {
      console.log("bottom pagginate");
    }
  };

  // Logic for displaying data pagination
  const indexOfLastData = currentPage * dataDisplayPerPage;
  const indexOfFirstData = indexOfLastData - dataDisplayPerPage;
  const currentData = employee.slice(indexOfFirstData, indexOfLastData);

  // get rendered data
  const renderData = currentData.map((employee, id) => {
    return employee;
  });

  // search employee

  let dataSearchByFirstname = employee.filter((val) => {
    return (
      val.name.first.toLowerCase().includes(search.toLowerCase()) &&
      search !== ""
    );
  });

  return (
    <>
      <Navbar />
      <div className="homepage">
        <Sidebar />
        <div className="homepage-content">
          <div className="header-content">
            <div className="content-text">
              <h2>PERSONEL LIST</h2>
              <p>List of all personels</p>
            </div>
            <div className="content-controls">
              <input
                type="text"
                placeholder=" Find Personels"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="button-add">ADD PERSONEL +</button>
            </div>
          </div>

          {dataSearchByFirstname.length > 0 ? (
            <div className="content-card-container">
              {dataSearchByFirstname ? (
                dataSearchByFirstname.map((val, id) => {
                  return <Card key={id} employee={val} />;
                })
              ) : (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              )}
            </div>
          ) : (
            <div className="content-card-container">
              {renderData ? (
                renderData.map((val, id) => {
                  return <Card key={id} employee={val} />;
                })
              ) : (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              )}
            </div>
          )}

          <div className="card-controls">
            <p onClick={() => prevoriousHandler()}>
              <GrFormPrevious />
              Previous Page
            </p>
            <p onClick={() => nextHandler()}>
              Next Page
              <GrFormNext />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
