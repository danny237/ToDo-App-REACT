import React from 'react'
import './TodoItems.css'
// import Checkbox from '@material-ui/core/Checkbox';


export default function TodoItems({tasks}) {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
    setChecked(event.target.checked);
    }
    return (
        <div className="tasks-items">
            {
                tasks.map((item, index) => (
                    <div key={index} className="item  m-2 mb-3">
                        <div className="row">
                            <div className="col-9 d-flex flex-column">
                                <div className="align-self-start m-2">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="align-self-start mx-2">
                                    <p>{item.description}</p>
                                </div>
                                <div className="align-self-start m-2">
                                   <small> {item.created_at} </small>
                                </div>
                            </div>
                            <div className="col-3 d-flex">
                                <div className="align-self-center ml-5">
                                    {item.isComplete ?
                                    // <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> :
                                    // <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                    <div onClick={() => console.log("hello")}>
                                        <i className="far fa-check-circle fa-2x"></i>
                                    </div>:
                                    <div onClick={() => console.log("hello")}>
                                        <i className="far fa-check-circle fa-2x"></i>
                                    </div>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}