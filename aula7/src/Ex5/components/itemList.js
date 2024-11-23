import React, { useState } from "react";
import { useFetchCatsQuery } from "./catApi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";




const ItemList = () => {
  const [page, setPage] = useState(1);
  const { data: cats, error, isLoading } = useFetchCatsQuery(page);

  return (
        <div style={{ textAlign: "center" }}>
        <h1>List of gatos</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {cats && (
            <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {cats.map((cat) => (
                <li key={cat.id} style={{ marginBottom: "20px" }}>
                    <img src={cat.url} alt="cat" width="200" />
                </li>
                ))}
            </ul>
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
                <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                style={{
                    display: "flex",
                    alignItems: "center",
                    border: "2px solid grey",
                    backgroundColor: "#e8e7ec",
                    padding: "5px 10px",
                    marginRight: "10px",
                    cursor: "pointer",
                }}
                >
                <FaArrowLeft style={{ marginRight: "5px" }} />
                Previous
                </button>
                <button
                onClick={() => setPage((prev) => prev + 1)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    border: "2px solid grey",
                    backgroundColor: "#e8e7ec",
                    padding: "5px 10px",
                    cursor: "pointer",
                }}
                >
                Next
                <FaArrowRight style={{ marginLeft: "5px" }} />
                </button>
            </div>
            </div>
        )}
        </div>
  );
};

export default ItemList;