import { Form } from "react-router-dom"
import Nav from "./Nav"
import { useState } from "react"

const Contact = () => {
    const [reqType, setReqType] = useState("siding");
    


    return (<>
    <Nav />
        <h3>Contact us!</h3>
        <Form>
            <label htmlFor="name" >Name:</label>
            <input type="text" />
            <label htmlFor="req_type">Question Type:</label>
            <select name="selectedReq" value={reqType} onChange={e => setReqType(e.target.value)} >
                <option value="siding" >Siding</option>
                <option value="deck" >Deck</option>
                <option value="other" >Other</option>
            </select>
            <label htmlFor="req">Request: </label>
            <textarea />
            <input type="submit" />
            {reqType === "siding"? <label>Siding</label> : null}
        </Form>
    </>)
}

export default Contact