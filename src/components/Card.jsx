import React from "react";

function Cartas({ data }) {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <h2 style={{ fontSize: "25px", fontWeight: "bold", marginLeft: "110px" }}>Stays in Finland</h2>
          <span className="text-gray-800 font-medium" style={{ marginRight: "110px" }}>12+ stays</span>
        </div>
        <div className="container" style={{ margin: "20px auto 0", marginLeft: "0px", marginRight: "-60px" }}>
          <div className="row" style={{ margin: "5px" }}>
            {data.map((el, i) => (
              <div className="col-md-4 mb-4" key={i} style={{ padding: "20px" }}>
                <div className="card" style={{ width: "23rem", border: "none" }}>
                  <img
                    src={el.photo}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "280px", height: "180px", objectFit: "cover", border: "0px solid #ffffff", borderRadius: "10px" }} 
                  />
                  <div className="card-body">
                    <p style={{ marginBottom: "0", fontWeight: "bold", fontSize: "16px" }}>{el.type}</p>
                    {el.superHost && <p style={{ marginBottom: "0", marginTop: "8px" }}><span style={{ backgroundColor: "#007bff", color: "#fff", padding: "3px 6px", borderRadius: "4px", fontSize: "12px" }}>Superhost</span></p>}
                    <h5 style={{ fontSize: "17px", fontWeight: "bold", marginTop: "10px", marginBottom: "10px" }}>{el.title}</h5>
                    <p style={{ marginBottom: "0", fontSize: "14px" }}>{el.rating}{" "}
                      <i className="material-icons" style={{ fontSize: "25px", verticalAlign: "middle", color: "red" }}>star_rate</i>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartas;
