import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import Button from "./components/Button";

const itemsPerPage = 10;

const App = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getMember() {
      try {
        const res = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json/"
        );

        const data = await res.json();
        setMembers(data);
      } catch (e) {
        alert("failed to fetch data");
      }
    }
    getMember();
  }, []);

  function handlePrevious() {
    const startIndex = page * itemsPerPage - itemsPerPage;
    if (startIndex <= 1) return;
    setPage((page) => page - 1);
  }

  function handleNext() {
    const nextEndIndex = page * itemsPerPage;
    if (nextEndIndex >= members.length) return;
    setPage((page) => page + 1);
  }

  function paginationData() {
    const startIndex = page * itemsPerPage - itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return members.slice(startIndex, endIndex);
  }

  return (
    <div className="main-container">
      <h1>Employee Data Table</h1>
      <div className="table-container">
        {members.length > 0 && <Table members={paginationData()} />}
      </div>
      <div className="button-container">
        <Button handlePage={handlePrevious}>Previous</Button>
        <Button isDisabled={true} isNum={true}>
          {page}
        </Button>
        <Button handlePage={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default App;
