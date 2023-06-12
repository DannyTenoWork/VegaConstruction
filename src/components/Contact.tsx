import { Form } from "react-router-dom"
import Nav from "./Nav"

const Contact = () => {
    return (<>
    <Nav />
        <h3>Contact us!</h3>
        <Form>
            <label htmlFor="name" >Name:</label>
            <input type="text" />
            <label htmlFor="req_type"></label>
            <select></select>
            <label htmlFor="req">Request</label>
            <textarea />
            <input type="submit" />   
        </Form>
    </>)
}

export default Contact