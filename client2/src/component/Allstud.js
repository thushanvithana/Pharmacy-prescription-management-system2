import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Allstud() {
  const [getstud, SetGetstud] = useState([]);
  console.log(getstud);
  //get student Data
  const getstuddata = async () => {
    const res = await fetch("http://localhost:5000/getstud", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      SetGetstud(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getstuddata();
  }, []);

  //Delete student data
  const deletestud = async (id) => {
    const res2 = await fetch(`http://localhost:5000/deletestud/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      getstuddata();
    }
  };
  //search Student
  const [searchInput, setSearchInput] = useState("");
  const searchStud = (searchval) => {
    setSearchInput(searchval);
  };
  return (
    <div className="container mt-5">
      <div className="d-flex">
        <h4>All Customer Information</h4>

        <div class="ms-auto w-50">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Search Customer details..."
            onChange={(e) => searchStud(e.target.value)}
          />
        </div>
      </div>
      <div className="underline"></div>
      <br></br>
      <br></br>
      <br></br>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Customer Address</th>
            <th scope="col">Description</th>
            <th scope="col">Contact Number </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {getstud
            .filter((val) => {
              if (searchInput == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return val;
              }
            })
            .map((result, id) => {
              return (
                <>
                  <tr key={id}>
                    <th scope="row">{id + 1}</th>
                    <td>{result.name}</td>
                    <td>{result.address}</td>
                    <td>{result.subject}</td>
                    <td>{result.contact}</td>
                    <td>
                      <Link
                        className="btn btn-success ms-2"
                        to={`/view/${result._id}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                        &nbsp;View
                      </Link>
                      <Link
                        className="btn btn-warning ms-2"
                        to={`/edit/${result._id}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                        &nbsp;Edit
                      </Link>
                      <button
                        className="btn btn-danger ms-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => deletestud(result._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                        &nbsp;Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <button className="btn btn-warning">
        <a
          href="file:///D:/New%20folder/New%20folder%20(3)/MERNPROJ/files/"
          style={{
            textAlign: "center",
            textDecoration: "none",
            color: "black",
            alignItems: "center",
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
          &nbsp; View All Prescription Images
        </a>
      </button>
      &nbsp;&nbsp;
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
