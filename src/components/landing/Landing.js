import React from 'react';

const Landing = (props) => {
    return (
        <div>
            <h1>Ethical Makeup</h1>
            <p> I am looking for vegan 
                <select onChange={props.handleChange}>
                    <option disabled selected value>Select your product</option>
                    <option value="blush">Blush</option>
                    <option value="bronzer">Bronzer</option>
                    <option value="eyebrow">Eyebrow</option>
                    <option value="eyeliner">Eyeliner</option>
                    <option value="eyeshadow">Eyeshadow</option>
                    <option value="foundation">Foundation</option>
                    <option value="lip_liner">Lip Liner</option>
                    <option value="lipstick">Lipstick</option>
                    <option value="mascara">Mascara</option>
                    <option value="nail_polish">Nail Polish</option>
                </select> 
            </p>
        </div>
    )
}

export default Landing;