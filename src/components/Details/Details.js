import React, { Component } from 'react';

const Details = (props) => {
	return (
        <section>
            {props.userResults.map((result) => {
                return (
                    <div key={result.id}>
			            <div>
				            <img></img>
			            </div>
			            <div>
                            <h2 />
                            <p />
                            <p />
                            <p />
                            <a href="" />
                        </div>
                    </div>
                     )
                })
             }
        </section>
        
		
	);
};

export default Details;
