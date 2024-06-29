import React, { useState } from "react";
import Welcome from "./Welcome";
import { CCol, CInput, CLabel, CRow, CTooltip, CButton, CCard, CCardBody, } from "@coreui/react";
import { useHistory } from "react-router-dom";

const TestCode = () => {
  const [name, setName] = useState(localStorage.getItem("NAME"));
  let history= useHistory();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const deleteLocalStorage = () => {
    localStorage.clear();
    setName("");
  };

 const goClick = () => {
  history.push(`/menus/NewMenu`);
 }
  return (
    <CCard className="shadow-lg bg-white rounded">
      
      <CCardBody>
        <div className="mb-3">
          <CLabel className="text-info">Name:</CLabel>
          {name ? (
            <>
              <CLabel className="text-success">{name.substring(0, 10)}</CLabel>
              <CTooltip content={name} placement="top">
                <span>...</span>
              </CTooltip>
            </>
          ) : (
            <CLabel className="text-danger">No Name</CLabel>
          )}
        </div>
        <br></br>
          <CButton className={"btn btn-success mb-3"} onClick={goClick}>
            Go To Menu
          </CButton>
        <CRow>
          <CCol lg="2">
            <CLabel className="text-info">Phone:</CLabel>
          </CCol>
          <CCol lg="10">
            <p className="text-dark">{localStorage.getItem("PHONE")}</p>
          </CCol>
        </CRow>

        <CRow>
          <CCol lg="2">
            <CLabel className="text-info">Email:</CLabel>
          </CCol>
          <CCol lg="10">
            <p className="text-dark">{localStorage.getItem("EMAIL")}</p>
          </CCol>
        </CRow>

        <CRow>
          <CCol lg="2">
            <CLabel className="text-info">Birthday:</CLabel>
          </CCol>
          <CCol lg="10">
            <p className="text-dark">{localStorage.getItem("BTH")}</p>
          </CCol>
        </CRow>

        <CRow>
          <CCol lg="2">
            <CLabel className="text-info">JSkill:</CLabel>
          </CCol>
          <CCol lg="10">
            <p className="text-dark">{localStorage.getItem("JSKILL")}</p>
          </CCol>
        </CRow>

        <CRow>
          <CCol lg="2">
            <CLabel className="text-info">ESkill:</CLabel>
          </CCol>
          <CCol lg="10">
            <p className="text-dark ">{localStorage.getItem("ESKILL")}</p>
          </CCol>
        </CRow>

        <CRow className="mt-3">
          <CCol lg="2">
            <CLabel className="text-info">Edit Name:</CLabel>
          </CCol>
          <CCol lg="10">
            <CInput 
              className="text-dark" 
              type="text" 
              value={name} 
              onChange={handleNameChange} 
            />
          </CCol>
        </CRow>

        <center>
          <CButton color="danger" className="mt-3" onClick={deleteLocalStorage}>
            Delete localStorage
          </CButton>
        </center>

        

        
      </CCardBody>
    </CCard>
  );
};

export default TestCode;