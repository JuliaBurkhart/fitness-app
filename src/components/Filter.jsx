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
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 12px 16px;
`
const StyledButton = styled(Button)`
width: 160px;
padding: 5px 10px;
`

function Filter() {
    return (
        <FilterDiv>
<h4>Wonach möchtest du filtern?</h4>
<form>
<label htmlFor="keyword">Suchbegriff:</label><br />
  <input type="text" id="keyword" name="keyword" />
  <br/>
  <br />

{/* Hier vielleicht ne GraphQL Abfrage nach allen Kategorien die es gibt und dann 
für jede Kategorie ein Radiobutton mit Label erstellen */}
  <p>Kategorie:</p>
  <input type="radio" id="strength" name="category" value="male" />
  <label htmlFor="strength">strength</label><br />
 
</form>
<StyledButton><SmallText>Programme filtern</SmallText></StyledButton>
</FilterDiv>
        
    )
}

export default Filter;