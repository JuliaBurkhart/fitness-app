import React from "react";
import styled from 'styled-components';
import Button from "../elements/Button";
import SmallText from "../elements/SmallText";


const FilterDiv = styled.div`
background-color: var(--color-green-mint);
border-radius: 5px;
border: solid var(--color-blue-dark) 1px;
height: 191px;
margin: 20px 0;
padding: 12px 16px;
display: flex;
flex-direction: column;
`
const StyledButton = styled(Button)`
width: 160px;
padding: 5px 10px;
`

const Form = styled.form`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: 10px;
`
/* eslint-disable react/prop-types */
function Filter(props) {


    return (

  <FilterDiv>
    <h4>Wonach möchtest du filtern?</h4>

    <Form onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="keyword">Suchbegriff:</label><br />
        <input type="text" id="keyword" name="keyword" onChange={props.onKeywordChange} />
      </div>

{/* Hier vielleicht ne GraphQL Abfrage nach allen Kategorien die es gibt und dann 
für jede Kategorie ein Radiobutton mit Label erstellen */}

      <div>
        <p>Kategorie:</p>
        <input type="radio" id="strength" name="category" value="strength" />
        <label htmlFor="strength">strength</label>
        
        <input type="radio" id="coordination" name="category" value="coordination" />
        <label htmlFor="coordination">coordination</label>
      </div>

      <StyledButton type="submit" id="filter-button"><SmallText>Programme filtern</SmallText></StyledButton>

    </Form>

  </FilterDiv>
        
    )
}

export default Filter;