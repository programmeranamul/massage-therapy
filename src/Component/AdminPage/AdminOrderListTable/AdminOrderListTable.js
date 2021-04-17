import React from 'react';
import { Dropdown, Table } from 'react-bootstrap';
import './AdminBookingTable.css'

const AdminOrderListTable = ({ bookings }) => {

    const handelStatusUpdate = (e, booking) => {

        const updateStatus = {
            id: booking._id,
            updateStatus: e.target.innerText
        }
        fetch("http://localhost:8000/updateBookingStatus", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateStatus),
        })
            .then(res => res.json())
            .then(data => {
                alert("Status Updated Successfully")
            })

    }


    return (
        <Table bordered hover className="maneg-product-table mb-4">
            <thead className="border-bottom">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>PayWith</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((booking) => (
                    <tr key={booking._id}>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.service}</td>
                        <td>{booking.serviceDescription}</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {booking.bookingStatus}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={(e) => handelStatusUpdate(e, booking)}>Painding</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => handelStatusUpdate(e, booking)}>Done</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => handelStatusUpdate(e, booking)}>On going</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AdminOrderListTable;